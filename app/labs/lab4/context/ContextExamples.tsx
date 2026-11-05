"use client";
import ReactContextTodoList from "./ReactContextTodoList";
import { TodosContext, useTodosState } from "./todosContext";
import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";
export default function ContextExamples() {
  const todos = useTodosState();
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props through
        the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      <TodosContext.Provider value={todos}>
        <ReactContextTodoList />
      </TodosContext.Provider>
      <hr />
    </div>
  );
}
