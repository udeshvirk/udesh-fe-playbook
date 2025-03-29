### Implement a To-Do List with State Management

#### Context: Create a to-do list application that allows users to add, edit, delete, and filter tasks.

## ✅ **Approach & Tech Choices**

**Why `useReducer`?**

- Built-in, clean state management suitable for medium-complexity state scenarios.
- Structured, predictable state updates, easily extendable later.
- Avoids the overhead of external libraries like Redux for smaller or medium-scale applications.

**State Persistence:**

- Utilize `localStorage` to maintain tasks across browser sessions.

**Core Functionalities:**

- Add tasks
- Edit tasks
- Delete tasks
- Filter tasks (All, Completed, Pending)

---

## ⚙️ **Project Structure:**

```
TodoApp/
│
├── components/
│   ├── TodoInput.tsx
│   ├── TodoItem.tsx
│   └── TodoFilter.tsx
│
├── reducers/
│   └── todoReducer.ts
│
└── TodoApp.tsx
```

## 🚀 **Implementation (React + TypeScript)**

### ① **`reducers/todoReducer.ts`**

```
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoAction =
  | { type: 'ADD'; payload: string }
  | { type: 'DELETE'; payload: string }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'EDIT'; payload: { id: string; text: string } };

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now().toString(), text: action.payload, completed: false }];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      );
    case 'EDIT':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo,
      );
    default:
      return state;
  }
}
```

② **Main Component `TodoApp.tsx`**

```
import React, { useReducer, useEffect, useState } from 'react';
import { todoReducer, Todo } from './reducers/todoReducer';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoFilter from './components/TodoFilter';

type Filter = 'ALL' | 'COMPLETED' | 'PENDING';

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], (initial) => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : initial;
  });

  const [filter, setFilter] = useState<Filter>('ALL');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'COMPLETED') return todo.completed;
    if (filter === 'PENDING') return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Todo List</h1>
      <TodoInput onAdd={(text) => dispatch({ type: 'ADD', payload: text })} />

      <TodoFilter currentFilter={filter} setFilter={setFilter} />

      <ul className="mt-4 space-y-2">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
```

③ **`components/TodoInput.tsx`**

```
import React, { useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
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
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
```

④ **`components/TodoItem.tsx`**

```
import React, { useState } from 'react';
import { Todo, TodoAction } from '../reducers/todoReducer';

interface Props {
  todo: Todo;
  dispatch: React.Dispatch<TodoAction>;
}

const TodoItem: React.FC<Props> = ({ todo, dispatch }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    dispatch({ type: 'EDIT', payload: { id: todo.id, text } });
    setEditing(false);
  };

  return (
    <li className="flex items-center justify-between border px-3 py-2 rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
      />
      {editing ? (
        <input
          type="text"
          className="flex-1 mx-2 border px-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className={`flex-1 mx-2 ${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        {editing ? (
          <button className="text-green-500" onClick={saveEdit}>Save</button>
        ) : (
          <button className="text-blue-500" onClick={() => setEditing(true)}>Edit</button>
        )}
        <button className="text-red-500" onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
```

⑤ **`components/TodoFilter.tsx`**

```
import React from 'react';

interface Props {
  currentFilter: string;
  setFilter: (filter: 'ALL' | 'COMPLETED' | 'PENDING') => void;
}

const TodoFilter: React.FC<Props> = ({ currentFilter, setFilter }) => (
  <div className="mt-3 flex gap-2">
    {(['ALL', 'COMPLETED', 'PENDING'] as const).map((filter) => (
      <button
        key={filter}
        className={`px-3 py-1 rounded border ${currentFilter === filter ? 'bg-gray-200' : ''}`}
        onClick={() => setFilter(filter)}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default TodoFilter;
```

## 📌 **Testing & Validation:**

- Add tasks, edit task text, toggle completion, and delete tasks.
- Filter tasks (All, Completed, Pending).
- Verify data persistence by refreshing the browser.

---

## 🎯 **Why this Solution is Effective:**

- **Clean State Management:** `useReducer` keeps your state predictable and maintainable.
- **Scalable Architecture:** Easily extendable for new features (tags, deadlines, API integration).
- **Robust Persistence:** Simple yet reliable state persistence with `localStorage`.
