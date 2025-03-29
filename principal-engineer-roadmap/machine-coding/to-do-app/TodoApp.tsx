import React, { useReducer, useEffect, useState } from "react";
import { todoReducer, Todo } from "./reducers/todoReducer";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

type Filter = "ALL" | "COMPLETED" | "PENDING";

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], (initial) => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : initial;
  });

  const [filter, setFilter] = useState<Filter>("ALL");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "PENDING") return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Todo List</h1>
      <TodoInput onAdd={(text) => dispatch({ type: "ADD", payload: text })} />

      <TodoFilter currentFilter={filter} setFilter={setFilter} />

      <ul className="mt-4 space-y-2">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
