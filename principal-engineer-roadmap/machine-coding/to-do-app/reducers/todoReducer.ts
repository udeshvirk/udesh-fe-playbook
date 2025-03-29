export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: string }
  | { type: "TOGGLE"; payload: string }
  | { type: "EDIT"; payload: { id: string; text: string } };

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now().toString(), text: action.payload, completed: false },
      ];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
}
