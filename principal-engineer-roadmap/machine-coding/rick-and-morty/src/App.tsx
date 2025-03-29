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
