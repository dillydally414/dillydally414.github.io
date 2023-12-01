import { Database } from "./database";

export type ExperienceType = {
  type: "EXPERIENCE";
  positions: Database["public"]["Tables"]["position"]["Row"][];
} & Database["public"]["Tables"]["experience"]["Row"];

export type ProjectType = {
  type: "PROJECT";
} & Database["public"]["Tables"]["project"]["Row"];

export type EntryType = ExperienceType | ProjectType;
