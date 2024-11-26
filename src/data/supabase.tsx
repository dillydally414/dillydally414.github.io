import { createClient } from "@supabase/supabase-js";
import { ReactElement, createContext, useEffect, useState } from "react";
import { Database, Tables, TablesInsert } from "../types/database";
import { Link } from "../styles";
import { ExperienceType, ProjectType, ResearchType } from "../types";

// using anon key which only has read access
const VITE_SUPABASE_URL = "https://yfaqmlswjffrcahnqlms.supabase.co";
const VITE_SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYXFtbHN3amZmcmNhaG5xbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMzI3OTcsImV4cCI6MjAxNjYwODc5N30.vgsBnGcwNHuMGzYW7qsUDc5b4OuWLbs2Osm_t7KlxJY";
const canEdit = import.meta.env.VITE_SUPABASE_KEY !== undefined;
const editModeEnabled = import.meta.env.VITE_EDIT_MODE === "EDIT";

export const supabase = createClient<Database>(
  VITE_SUPABASE_URL,
  VITE_SUPABASE_KEY
);

export type SupabaseContextType = {
  homeBlurb: ReactElement | null;
  projects: ProjectType[];
  experiences: ExperienceType[];
  research: ResearchType[];
  rawHomeData: string;
  updateHomeBlurb: (newBlurb: string) => Promise<void>;
  updateProjects: (
    newProjects: ({ type?: "PROJECT" } & TablesInsert<"project">)[]
  ) => Promise<void>;
  updateExperiences: (
    newExperiences: ({ type?: "EXPERIENCE" } & TablesInsert<"experience"> & {
        positions?: TablesInsert<"position">[];
      })[]
  ) => Promise<void>;
  updateResearch: (
    newResearch: ({ type?: "RESEARCH" } & TablesInsert<"research"> & {
        papers?: TablesInsert<"paper">[];
      })[]
  ) => Promise<void>;
  uploadFile: (
    fileName: string,
    file: File
  ) => Promise<
    | ReturnType<ReturnType<typeof supabase.storage.from>["getPublicUrl"]>
    | undefined
  >;
  editing: boolean;
};

const defaultContext = {
  homeBlurb: null,
  projects: [],
  experiences: [],
  research: [],
  rawHomeData: "",
  updateHomeBlurb: async () => {},
  updateProjects: async () => {},
  updateExperiences: async () => {},
  updateResearch: async () => {},
  uploadFile: async () => undefined,
  editing: false,
} satisfies SupabaseContextType;

export const SupabaseContext =
  createContext<SupabaseContextType>(defaultContext);

export const useSupabase = (): SupabaseContextType => {
  const [supabaseData, setSupabaseData] =
    useState<SupabaseContextType>(defaultContext);

  useEffect(() => {
    const load = async () => {
      const homePromise = supabase
        .from("home")
        .select()
        .order("created_at", { ascending: true });
      const projectsPromise = supabase
        .from("project")
        .select()
        .order("created_at", { ascending: false });
      const experiencesPromise = supabase
        .from("experience")
        .select()
        .order("created_at", { ascending: false });
      const positionsPromise = supabase
        .from("position")
        .select()
        .order("created_at", { ascending: false });
      const researchPromise = supabase
        .from("research")
        .select()
        .order("created_at", { ascending: false });
      const papersPromise = supabase
        .from("paper")
        .select()
        .order("created_at", { ascending: false });
      const [
        homeData,
        projectsData,
        experiencesData,
        positionsData,
        researchData,
        papersData,
      ] = await Promise.all([
        homePromise,
        projectsPromise,
        experiencesPromise,
        positionsPromise,
        researchPromise,
        papersPromise,
      ]);
      setSupabaseData({
        homeBlurb: generateBlurb(homeData.data),
        projects:
          projectsData.data?.map((project) => ({
            type: "PROJECT",
            ...project,
            name: project.name.toLowerCase(),
          })) || [],
        experiences:
          experiencesData.data?.map((experience) => ({
            type: "EXPERIENCE",
            positions:
              positionsData.data
                ?.filter(({ experience_id }) => experience.id === experience_id)
                .map((position) => ({
                  ...position,
                  title: position.title.toLowerCase(),
                })) || [],
            ...experience,
            place_of_work: experience.place_of_work.toLowerCase(),
          })) || [],
        research:
          researchData.data?.map((research) => ({
            type: "RESEARCH",
            papers:
              papersData.data?.filter(
                ({ research_id }) => research.id === research_id
              ) || [],
            ...research,
            area: research.area.toLowerCase(),
          })) || [],
        editing: canEdit && editModeEnabled,
        rawHomeData: generateStringFromHomeEntries(homeData.data),
        updateHomeBlurb: async (newBlurb) => {
          await supabase.from("home").delete().neq("id", -1);
          await supabase
            .from("home")
            .upsert(generateHomeEntriesFromString(newBlurb));
          await load();
        },
        updateProjects: async (newProjects) => {
          const newProjectsWithType = newProjects.map((p) => {
            const newProjectType = {
              ...p,
            };
            delete newProjectType.type;
            return newProjectType;
          });
          await supabase
            .from("project")
            .upsert(newProjectsWithType.filter((p) => p.id !== undefined));
          await supabase.from("project").delete().eq("name", "delete");
          await supabase
            .from("project")
            .insert(newProjectsWithType.filter((p) => p.id === undefined));
          await load();
        },
        updateExperiences: async (newExperiences) => {
          const newPositions = newExperiences.flatMap((e) => e.positions || []);
          const newExperiencesTyped = newExperiences.map((e) => {
            const newExperienceTyped = {
              ...e,
            };
            delete newExperienceTyped.type;
            delete newExperienceTyped.positions;
            return newExperienceTyped;
          });
          await supabase
            .from("experience")
            .upsert(newExperiencesTyped.filter((e) => e.id !== undefined));
          await supabase
            .from("position")
            .upsert(newPositions.filter((p) => p.id !== undefined));
          await supabase.from("position").delete().eq("title", "delete");
          await supabase
            .from("experience")
            .delete()
            .eq("place_of_work", "delete");
          await supabase
            .from("experience")
            .insert(newExperiencesTyped.filter((e) => e.id === undefined));
          await supabase
            .from("position")
            .insert(newPositions.filter((p) => p.id === undefined));
          await load();
        },
        updateResearch: async (newResearch) => {
          const newPapers = newResearch.flatMap((r) => r.papers || []);
          const newResearchTyped = newResearch.map((r) => {
            const newResearchTyped = {
              ...r,
            };
            delete newResearchTyped.type;
            delete newResearchTyped.papers;
            return newResearchTyped;
          });
          await supabase
            .from("research")
            .upsert(newResearchTyped.filter((r) => r.id !== undefined));
          await supabase
            .from("paper")
            .upsert(newPapers.filter((p) => p.id !== undefined));
          await supabase.from("paper").delete().eq("title", "delete");
          await supabase.from("research").delete().eq("area", "delete");
          await supabase
            .from("research")
            .insert(newResearchTyped.filter((r) => r.id === undefined));
          await supabase
            .from("paper")
            .insert(newPapers.filter((p) => p.id === undefined));
          await load();
        },
        uploadFile: async (fileName, file) => {
          await supabase.storage
            .from("assets")
            .upload(fileName, file, { upsert: true });
          return supabase.storage.from("assets").getPublicUrl(fileName);
        },
      });
    };
    load();
  }, []);

  return supabaseData;
};

const generateHomeEntriesFromString = (
  newBlurb: string
): TablesInsert<"home">[] => {
  const paragraphs = newBlurb.split("\n\n");
  const substitutionEntries: TablesInsert<"home">[] = [];

  const paragraphEntries: TablesInsert<"home">[] = paragraphs.map(
    (paragraph) => {
      let newParagraph = paragraph;
      const substitutions = [...paragraph.matchAll(/\[.*\]\(.*\)/g)].map(
        ([substitution]) => {
          const [substitutionText, substitutionLink] = substitution
            .split(/\[|\]|\(|\)/g)
            .filter((value) => value !== "");
          newParagraph = newParagraph.replace(substitution, substitutionText);
          return [substitutionText, substitutionLink] as const;
        }
      );
      substitutions.forEach(([substitutionText, substitutionLink]) => {
        substitutionEntries.push({
          type: "substitution",
          substitute_text: substitutionText,
          substitute_link: substitutionLink,
        });
      });
      return {
        type: "paragraph",
        paragraph: newParagraph,
      };
    }
  );

  return [...paragraphEntries, ...substitutionEntries];
};

const generateStringFromHomeEntries = (
  homeEntries: Tables<"home">[] | null
): string => {
  if (homeEntries === null) {
    return "";
  }
  const paragraphs = homeEntries.filter(({ type }) => type === "paragraph");
  const substitutions = homeEntries.filter(
    ({ type }) => type === "substitution"
  );
  return paragraphs
    .map(({ paragraph }) => {
      return substitutions.reduce(
        (paragraphSoFar, { substitute_text, substitute_link }) => {
          if (!paragraphSoFar.includes(substitute_text!)) {
            return paragraphSoFar;
          }
          const [firstPart, secondPart] = paragraphSoFar.split(
            substitute_text!
          );
          return `${firstPart}[${substitute_text}](${substitute_link})${secondPart}`;
        },
        paragraph!
      );
    })
    .join("\n\n");
};

const generateBlurb = (home: Tables<"home">[] | null): ReactElement => {
  const stringifiedBlurb = generateStringFromHomeEntries(home);
  if (stringifiedBlurb === "") {
    return <></>;
  }
  const paragraphs = stringifiedBlurb.split("\n\n");
  const substitutedParagraphs = paragraphs.map((paragraph) => {
    const substitutions = [...paragraph.matchAll(/\[.*\]\(.*\)/g)].map(
      ([substitution]) => [
        substitution,
        ...substitution.split(/\[|\]|\(|\)/g).filter((value) => value !== ""),
      ]
    );
    return (
      <>
        {substitutions.reduce(
          (paragraphSoFar, [fullText, substituteText, substituteLink]) => {
            return paragraphSoFar.flatMap((text) => {
              if (typeof text !== "string" || !text.includes(substituteText!)) {
                return text;
              }
              const [firstPart, secondPart] = text.split(fullText!);
              return [
                firstPart,
                <Link href={substituteLink!} target="_blank" $inline>
                  {substituteText}
                </Link>,
                secondPart,
              ];
            });
          },
          [paragraph!] as Array<string | ReactElement>
        )}
      </>
    );
  });
  return (
    <>
      {substitutedParagraphs.map((paragraph, index) => {
        if (index === substitutedParagraphs.length - 1) {
          return paragraph;
        } else {
          return (
            <>
              {paragraph}
              <br />
              <br />
            </>
          );
        }
      })}
    </>
  );
};
