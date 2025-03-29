## Fan of Rick and Morty? Let’s Build a Web App to Know More About Your Favorite Character

---

### **Features in the Web App**

1. Display a list of cards that fill the screen.
2. Load new data as soon as the user scrolls to the bottom of the screen.
3. Allow the user to search for their favorite character.
4. Enable filtering of characters based on their gender:
   - Male
   - Female
   - Genderless
   - Unknown
5. Indicate the character's status (alive, dead, or unknown) using a dot in the bottom-right corner of the avatar:
   - **Alive**: `#18C25C`
   - **Dead**: `#FF2525`
   - **Unknown**: `#C0C0C0`
6. Display the first episode in which the character appeared.
7. Show a tooltip with episode details when hovering over the episode.

---

### **APIs**

All API details can be found at:  
[https://rickandmortyapi.com/documentation/#rest](https://rickandmortyapi.com/documentation/#rest)

---

### **Things to Note**

1. The website should be **responsive**.
2. The website should be **performant**.
3. Any framework, library (e.g., Angular, React, Vue.js), or even vanilla JavaScript can be used.
4. Code sharing via platforms like CodeSandbox is appreciated, but building locally and sharing the code is also acceptable.

---

## Solution

### ✅ **Technology Choices**

- **React & TypeScript**: For strong type safety and maintainability.
- **Axios**: For simple API handling.
- **React Query (`@tanstack/react-query`)**: For efficient API fetching, caching, and pagination.
- **Tailwind CSS**: For responsive and clean UI styling.
- **Intersection Observer API**: For infinite scrolling.

---

## 🚀 **Project Structure**

```
rick-and-morty-explorer/
├── src/
│   ├── api/
│   │   └── rickMortyApi.ts
│   ├── components/
│   │   ├── CharacterCard.tsx
│   │   └── EpisodeTooltip.tsx
│   ├── hooks/
│   │   └── useCharacters.ts
│   ├── App.tsx
│   └── main.tsx
```

---

## ⚙️ **Implementation Details**

### 1. **Install Dependencies**

```bash
npm install axios @tanstack/react-query tailwindcss
```

---

### 2. **API Handler (`rickMortyApi.ts`)**

```ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  image: string;
  episode: string[];
}

export interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export const fetchCharacters = (page: number, name = "", gender = "") =>
  api
    .get(`/character`, { params: { page, name, gender } })
    .then((res) => res.data);

export const fetchEpisode = (url: string) =>
  axios.get<Episode>(url).then((res) => res.data);
```

---

### 3. **Character Hook (`useCharacters.ts`)**

```ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/rickMortyApi";

export const useCharacters = (name: string, gender: string) =>
  useInfiniteQuery(
    ["characters", name, gender],
    ({ pageParam = 1 }) => fetchCharacters(pageParam, name, gender),
    {
      getNextPageParam: (lastPage) =>
        lastPage.info.next
          ? +new URL(lastPage.info.next).searchParams.get("page")!
          : undefined,
    }
  );
```

---

### 4. **Character Card (`CharacterCard.tsx`)**

```tsx
import React, { useState } from "react";
import { Character } from "../api/rickMortyApi";
import EpisodeTooltip from "./EpisodeTooltip";

interface Props {
  character: Character;
}

const statusColor = {
  Alive: "#18C25C",
  Dead: "#FF2525",
  unknown: "#C0C0C0",
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-white rounded shadow overflow-hidden relative">
      <img src={character.image} alt={character.name} className="w-full" />
      <span
        className="absolute bottom-2 right-2 rounded-full h-4 w-4 border-2 border-white"
        style={{ backgroundColor: statusColor[character.status] }}
      />
      <div className="p-2">
        <h3 className="font-semibold text-center">{character.name}</h3>
        <div
          className="text-xs text-center text-gray-500 cursor-pointer relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          First Episode
          {hover && <EpisodeTooltip episodeUrl={character.episode[0]} />}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
```

---

### 5. **Episode Tooltip (`EpisodeTooltip.tsx`)**

```tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEpisode } from "../api/rickMortyApi";

interface Props {
  episodeUrl: string;
}

const EpisodeTooltip: React.FC<Props> = ({ episodeUrl }) => {
  const { data, isLoading } = useQuery(["episode", episodeUrl], () =>
    fetchEpisode(episodeUrl)
  );

  if (isLoading)
    return (
      <div className="absolute bg-gray-200 p-2 rounded shadow">Loading...</div>
    );

  return (
    <div className="absolute bg-gray-800 text-white p-2 rounded shadow z-10 w-48">
      <strong>{data?.name}</strong>
      <p>{data?.episode}</p>
      <small>{data?.air_date}</small>
    </div>
  );
};

export default EpisodeTooltip;
```

---

### 6. **Main Application (`App.tsx`)**

```tsx
import React, { useState, useRef, useCallback } from "react";
import { useCharacters } from "./hooks/useCharacters";
import CharacterCard from "./components/CharacterCard";

const genders = ["Male", "Female", "Genderless", "unknown"];

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCharacters(search, gender);

  const observer = useRef<IntersectionObserver>();
  const lastCardRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <input
        type="text"
        className="border rounded p-2 w-full mb-4"
        placeholder="Search Characters"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border rounded p-2 mb-4"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">All Genders</option>
        {genders.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.pages.map((page, i) =>
          page.results.map((character, idx) => (
            <div
              key={character.id}
              ref={
                data.pages.length - 1 === i && page.results.length - 1 === idx
                  ? lastCardRef
                  : null
              }
            >
              <CharacterCard character={character} />
            </div>
          ))
        )}
      </div>

      {isFetchingNextPage && (
        <div className="text-center mt-4">Loading more...</div>
      )}
    </div>
  );
};

export default App;
```

---

## 🌐 **Live Demo & Source Code**

- You can view/edit this implementation live on CodeSandbox:

  - **👉 View on CodeSandbox**

---

## ✅ **Why This Implementation Works Great**

- **Performant**: Infinite scrolling with optimized API calls.
- **Responsive**: Tailwind ensures responsiveness on all devices.
- **Interactive**: Episode details appear intuitively on hover.
- **Maintainable**: Clean separation of concerns and robust state management.
