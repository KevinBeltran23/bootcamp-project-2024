// typings/resume.ts
import { ReactNode } from "react";

export type Entry = {
  name: string;
  info: string;
  description: string[];
  type: "education" | "experience" | "project" | "skill" | "coursework";
};

export type Section = {
  name: string;
  children: ReactNode; 
};
