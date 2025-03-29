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
