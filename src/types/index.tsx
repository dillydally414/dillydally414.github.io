export type ExperienceType = {
  type: "EXPERIENCE";
  positions: {
    title: string;
    start: string;
    end?: string;
    description: string;
  }[];
  placeOfWork: string;
  relevantTech: string;
  image: string;
  alt: string;
};

export type ProjectType = {
  type: "PROJECT";
  name: string;
  description: string;
  techUsed: string;
  githubLink?: string;
  visualLink?: string;
  start: string;
  end?: string;
  image: string;
  alt: string;
};

export type EntryType = ExperienceType | ProjectType;
