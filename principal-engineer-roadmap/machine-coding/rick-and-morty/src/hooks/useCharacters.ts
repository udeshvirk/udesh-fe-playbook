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
