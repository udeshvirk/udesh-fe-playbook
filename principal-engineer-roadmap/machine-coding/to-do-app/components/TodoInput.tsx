import React, { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border rounded px-3 py-2"
        type="text"
        placeholder="Enter new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
