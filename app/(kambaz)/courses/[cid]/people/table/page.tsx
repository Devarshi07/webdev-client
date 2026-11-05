"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  emptyUser,
  useAccountContext,
} from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [user, setUser] = useState(emptyUser);
  const canManage = !currentUser || currentUser.role === "FACULTY";
  const enrolled = db.users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid,
    ),
  );
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {canManage && (
        <div className="mb-3 flex gap-2">
          <select
            aria-label="Person to enroll"
            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
            value={user._id}
            onChange={(e) =>
              setUser(
                db.users.find((item) => item._id === e.target.value) ??
                  emptyUser,
              )
            }
          >
            <option value="">Select a person</option>
            {db.users
              .filter(
                (item) => !enrolled.some((person) => person._id === item._id),
              )
              .map((item) => (
                <option key={item._id} value={item._id}>
                  {item.firstName} {item.lastName}
                </option>
              ))}
          </select>
          <button
            type="button"
            className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
            disabled={!user._id}
            onClick={() => {
              enroll(user._id, cid);
              setUser(emptyUser);
            }}
          >
            Add Person
          </button>
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {canManage && (
              <th className="p-2">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              {canManage && (
                <td className="p-2">
                  <button
                    type="button"
                    className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
                    onClick={() => unenroll(user._id, cid)}
                  >
                    Remove
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
