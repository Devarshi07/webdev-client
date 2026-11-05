"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useAccountContext } from "../../../account/AccountContext";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import AssignmentDeleteDialog from "./AssignmentDeleteDialog";
export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useAccountContext();
  const canManage = !currentUser || currentUser.role === "FACULTY";
  const assignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  const [deleteId, setDeleteId] = useState<string | null>(null);
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            aria-label="Search for Assignments"
            className="rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        {canManage && (
          <div className="flex gap-2">
            <button
              id="wd-add-assignment-group"
              type="button"
              className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
            >
              <FaPlus /> Group
            </button>
            <Link
              id="wd-add-assignment"
              href={`/courses/${cid}/assignments/new`}
              className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              <FaPlus /> Assignment
            </Link>
          </div>
        )}
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          type="button"
          aria-label="Add assignment to group"
          className="rounded border border-neutral-300 bg-white px-2 py-0.5 text-sm"
        >
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <AssignmentItem
              key={assignment._id}
              cid={cid}
              aid={assignment._id}
              title={assignment.title}
              onDelete={
                canManage ? () => setDeleteId(assignment._id) : undefined
              }
              details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            />
          ))}
      </ul>
      <AssignmentDeleteDialog
        show={deleteId !== null}
        handleClose={() => setDeleteId(null)}
        deleteAssignment={() => {
          if (deleteId) deleteAssignment(cid, deleteId);
        }}
      />
    </div>
  );
}
