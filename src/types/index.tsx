import { Database, Tables } from "./database";

export type ExperienceType = {
  type: "EXPERIENCE";
  positions: Tables<"position">[];
} & Tables<"experience">;

export type ProjectType = {
  type: "PROJECT";
} & Tables<"project">;

export type EntryType = ExperienceType | ProjectType;
