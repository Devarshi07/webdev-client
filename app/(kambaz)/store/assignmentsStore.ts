import { create } from "zustand";
import seed from "../database/assignments.json";

export type Assignment = (typeof seed)[number];
type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (cid: string, aid: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: seed,
  addAssignment: (assignment) => set((state) => ({
    assignments: [...state.assignments, { ...assignment, _id: crypto.randomUUID() }],
  })),
  updateAssignment: (assignment) => set((state) => ({
    assignments: state.assignments.map((item) =>
      item.course === assignment.course && item._id === assignment._id ? assignment : item),
  })),
  deleteAssignment: (cid, aid) => set((state) => ({
    assignments: state.assignments.filter((item) => item.course !== cid || item._id !== aid),
  })),
}));
