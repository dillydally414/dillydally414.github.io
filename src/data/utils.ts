import { EntryType } from "../types";

export const getTitleProperty = (entry: EntryType): string => {
  switch (entry.type) {
    case "EXPERIENCE":
      return "place_of_work";
    case "PROJECT":
      return "name";
    case "RESEARCH":
      return "title";
  }
};

export const getTitle = (entry: EntryType): string => {
  switch (entry.type) {
    case "EXPERIENCE":
      return entry.place_of_work;
    case "PROJECT":
      return entry.name;
    case "RESEARCH":
      return entry.area;
  }
};
