import React from "react";

interface Props {
  currentFilter: string;
  setFilter: (filter: "ALL" | "COMPLETED" | "PENDING") => void;
}

const TodoFilter: React.FC<Props> = ({ currentFilter, setFilter }) => (
  <div className="mt-3 flex gap-2">
    {(["ALL", "COMPLETED", "PENDING"] as const).map((filter) => (
      <button
        key={filter}
        className={`px-3 py-1 rounded border ${
          currentFilter === filter ? "bg-gray-200" : ""
        }`}
        onClick={() => setFilter(filter)}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default TodoFilter;
