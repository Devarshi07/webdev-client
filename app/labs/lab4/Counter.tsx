"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter">
      <h2>Counter: {count}</h2>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>
      <button
        type="button"
        id="wd-counter-reset-click"
        onClick={() => setCount(7)}
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Reset
      </button>
      <button
        type="button"
        id="wd-counter-reset-devarshi-click"
        onClick={() => setCount(7)}
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Reset to 7
      </button>
      <hr />
    </div>
  );
}
