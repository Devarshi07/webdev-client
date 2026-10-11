import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor" className="max-w-3xl space-y-5">
      <div>
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="wd-description" className="mb-1 block font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={10}
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
          defaultValue={
            "The assignment is available online. Submit a link to the landing page of your Web application running on Vercel.\nThe landing page should include the following:\n- your full name and section\n- Links to each of the lab Assignments\n- Links to the Kambaz application\n- Links to all relevant source code repositories\nThe Kambaz application should include a link to navigate back to the landing page."
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-4 sm:items-center">
        <label
          htmlFor="wd-points"
          className="font-medium sm:pt-2 sm:text-right"
        >
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-4 sm:items-center">
        <label htmlFor="wd-group" className="font-medium sm:pt-2 sm:text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-4 sm:items-center">
        <label
          htmlFor="wd-display-grade-as"
          className="font-medium sm:pt-2 sm:text-right"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        >
          <option value="Percentage">Percentage</option>
          <option value="Letter">Letter</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-4 sm:items-start">
        <label
          htmlFor="wd-submission-type"
          className="font-medium sm:pt-2 sm:text-right"
        >
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-3">
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
          >
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
          </select>
          <div className="mt-3 mb-2 font-semibold">Online Entry Options</div>
          <label
            htmlFor="wd-text-entry"
            className="mb-2 flex items-center gap-2 text-sm"
          >
            <input type="checkbox" id="wd-text-entry" />
            Text Entry
          </label>
          <label
            htmlFor="wd-website-url"
            className="mb-2 flex items-center gap-2 text-sm"
          >
            <input type="checkbox" id="wd-website-url" defaultChecked />
            Website URL
          </label>
          <label
            htmlFor="wd-media-recordings"
            className="mb-2 flex items-center gap-2 text-sm"
          >
            <input type="checkbox" id="wd-media-recordings" />
            Media Recordings
          </label>
          <label
            htmlFor="wd-student-annotation"
            className="mb-2 flex items-center gap-2 text-sm"
          >
            <input type="checkbox" id="wd-student-annotation" />
            Student Annotation
          </label>
          <label
            htmlFor="wd-file-upload"
            className="mb-2 flex items-center gap-2 text-sm"
          >
            <input type="checkbox" id="wd-file-upload" />
            File Upload
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-4 sm:items-start">
        <span className="font-medium sm:pt-2 sm:text-right">Assign</span>
        <div className="space-y-4 rounded border border-neutral-300 p-4">
          <div>
            <label htmlFor="wd-assign-to" className="mb-1 block font-medium">
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="wd-due-date" className="mb-1 block font-medium">
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              defaultValue="2026-05-13"
              className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-medium"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2026-05-06"
                className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-medium"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2026-05-20"
                className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-4 sm:items-start">
        <label
          htmlFor="wd-ai-editor-notes"
          className="font-medium sm:pt-2 sm:text-right"
        >
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={3}
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
