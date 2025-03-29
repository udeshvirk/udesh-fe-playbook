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
