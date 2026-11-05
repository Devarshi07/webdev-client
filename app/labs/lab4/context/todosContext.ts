import { createContext, useContext, useState } from "react";
export type Todo = { id: string; title: string };
type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};
export const TodosContext = createContext<TodosContextValue | null>(null);
export function useTodosState() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Research the Skyline GT-R R34" },
  ]);
  const addTodo = (title: string) =>
    setTodos([...todos, { id: crypto.randomUUID(), title }]);
  const updateTodo = (todo: Todo) =>
    setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
  const deleteTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));
  return { todos, addTodo, updateTodo, deleteTodo };
}
export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosContext.Provider");
  }
  return value;
}
