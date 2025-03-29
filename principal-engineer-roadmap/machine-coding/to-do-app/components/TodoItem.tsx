import React, { useState } from "react";
import { Todo, TodoAction } from "../reducers/todoReducer";

interface Props {
  todo: Todo;
  dispatch: React.Dispatch<TodoAction>;
}

const TodoItem: React.FC<Props> = ({ todo, dispatch }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    dispatch({ type: "EDIT", payload: { id: todo.id, text } });
    setEditing(false);
  };

  return (
    <li className="flex items-center justify-between border px-3 py-2 rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: "TOGGLE", payload: todo.id })}
      />
      {editing ? (
        <input
          type="text"
          className="flex-1 mx-2 border px-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className={`flex-1 mx-2 ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        {editing ? (
          <button className="text-green-500" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <button className="text-blue-500" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}
        <button
          className="text-red-500"
          onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
