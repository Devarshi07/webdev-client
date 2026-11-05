"use client";
import { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Mahajan");
  const [nickName, setNickName] = useState("JD");
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="wd-first-name"
      />
      <input
        aria-label="last name"
        id="wd-last-name"
        type="text"
        className="mb-2 block rounded border px-3 py-1.5"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        aria-label="nick name"
        id="wd-nick-name"
        type="text"
        className="mb-2 block rounded border px-3 py-1.5"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />
      <p>
        {firstName} {lastName} ({nickName})
      </p>
      <hr />
    </div>
  );
}
