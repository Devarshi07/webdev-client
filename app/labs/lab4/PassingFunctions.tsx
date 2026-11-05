export default function PassingFunctions({
  message,
  theFunction,
  sayName,
  theOtherFunction,
}: {
  message: string;
  sayName: () => void;
  theOtherFunction: () => void;
  theFunction: (message: string) => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        id="wd-pass-functions-name-click"
        onClick={sayName}
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Show Name
      </button>
      <button
        type="button"
        id="wd-pass-functions-other-click"
        onClick={theOtherFunction}
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Sample from Parent
      </button>
      <hr />
    </div>
  );
}
