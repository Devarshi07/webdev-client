import { useState } from "react";
import { useTodosContext } from "./todosContext";
export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState("");
  const save = () => {
    if (editingId) updateTodo({ id: editingId, title });
    else addTodo(title);
    setTitle("");
    setEditingId("");
  };
  return (
    <div id="wd-context-todos">
      <h3>Context Todo List</h3>
      <input
        aria-label="Todo title"
        className="rounded border px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        className="ms-2 rounded bg-green-600 px-3 py-1 text-white"
        onClick={save}
      >
        {editingId ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 py-1">
            {todo.title}
            <button
              type="button"
              className="rounded bg-yellow-400 px-2"
              onClick={() => {
                setTitle(todo.title);
                setEditingId(todo.id);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="rounded bg-red-600 px-2 text-white"
              onClick={() => {
                deleteTodo(todo.id);
                if (editingId === todo.id) {
                  setEditingId("");
                  setTitle("");
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
