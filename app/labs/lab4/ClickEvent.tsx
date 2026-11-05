"use client";
const hello = () => {
  alert("Hello World!");
};
const goodbye = () => alert("Goodbye World!");
export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        id="wd-onclick-goodbye"
        onClick={goodbye}
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Click Goodbye
      </button>
      <button
        type="button"
        id="wd-onclick-devarshi"
        onClick={() => alert("Hello, Devarshi!")}
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Greet Devarshi
      </button>
      <hr />
    </div>
  );
}
