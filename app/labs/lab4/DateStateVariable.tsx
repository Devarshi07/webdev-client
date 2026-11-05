"use client";
import { useState } from "react";
function dateObjectToHtmlDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function htmlDateStringToDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0);
}
export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date(2026, 0, 15, 10, 30));
  const [endDate, setEndDate] = useState(new Date(2026, 0, 20, 10, 30));
  const [dueDate, setDueDate] = useState(new Date(2026, 0, 22, 10, 30));
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{startDate.toDateString()}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        type="date"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(htmlDateStringToDate(e.target.value))}
        id="wd-start-date"
      />
      <p>End date: {dateObjectToHtmlDateString(endDate)}</p>
      <input
        type="date"
        id="wd-end-date"
        aria-label="End date"
        value={dateObjectToHtmlDateString(endDate)}
        onChange={(e) => setEndDate(htmlDateStringToDate(e.target.value))}
      />
      <p>Due date: {dateObjectToHtmlDateString(dueDate)}</p>
      <input
        type="date"
        id="wd-due-date"
        aria-label="Due date"
        value={dateObjectToHtmlDateString(dueDate)}
        onChange={(e) => setDueDate(htmlDateStringToDate(e.target.value))}
      />
      <hr />
    </div>
  );
}
