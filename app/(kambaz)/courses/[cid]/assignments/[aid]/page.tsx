"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAccountContext } from "../../../../account/AccountContext";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((item) => item._id === aid && item.course === cid),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? {
      _id: "",
      course: cid,
      title: "",
      description: "",
      points: 100,
      due: "",
      available: "",
      until: "",
    },
  );
  const canManage = currentUser?.role === "FACULTY";
  const listUrl = `/courses/${cid}/assignments`;
  if (aid === "new" ? !canManage : !existing) {
    return <Link href={listUrl}>Back to Assignments</Link>;
  }
  const save = () => {
    if (aid === "new") addAssignment(assignment);
    else updateAssignment(assignment);
    router.push(listUrl);
  };

  return (
    <fieldset
      disabled={!canManage}
      id="wd-assignments-editor"
      className="max-w-3xl space-y-5"
    >
      <div>
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        />
        <p>Assignment id: {aid}</p>
      </div>

      <div>
        <label htmlFor="wd-description" className="mb-1 block font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={10}
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
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
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
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
              value={assignment.due}
              onChange={(e) =>
                setAssignment({ ...assignment, due: e.target.value })
              }
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
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
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
                value={assignment.until}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
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
        {canManage && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded bg-red-600 px-4 py-2 text-white no-underline"
          >
            Save
          </button>
        )}
      </div>
    </fieldset>
  );
}
