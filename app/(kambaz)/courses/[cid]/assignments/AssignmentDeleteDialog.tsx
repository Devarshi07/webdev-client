export default function AssignmentDeleteDialog({
  show,
  handleClose,
  deleteAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  deleteAssignment: () => void;
}) {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      id="wd-delete-assignment-dialog"
    >
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <h3 className="m-0 text-lg font-semibold">Delete Assignment</h3>
          <button
            type="button"
            onClick={handleClose}
            className="text-2xl leading-none text-neutral-500"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="px-4 py-3">
          <p className="m-0">Are you sure you want to remove this assignment?</p>
        </div>
        <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
          <button
            type="button"
            onClick={handleClose}
            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
            id="wd-delete-assignment-cancel"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              deleteAssignment();
              handleClose();
            }}
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-delete-assignment-yes"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
