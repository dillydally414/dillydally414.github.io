import { createClient } from "@supabase/supabase-js";
import { ReactElement, createContext, useEffect, useState } from "react";
import { Database } from "../types/database";
import { Link } from "../styles";
import { ExperienceType, ProjectType } from "../types";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export type SupabaseContextType = {
  homeBlurb: ReactElement | null;
  projects: ProjectType[];
  experiences: ExperienceType[];
};

const defaultContext = {
  homeBlurb: null,
  projects: [],
  experiences: [],
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
        .order("created_at", { ascending: true });
      const experiencesPromise = supabase
        .from("experience")
        .select()
        .order("created_at", { ascending: true });
      const positionsPromise = supabase
        .from("position")
        .select()
        .order("created_at", { ascending: true });
      const [homeData, projectsData, experiencesData, positionsData] =
        await Promise.all([
          homePromise,
          projectsPromise,
          experiencesPromise,
          positionsPromise,
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
      });
    };
    load();
  }, []);

  return supabaseData;
};

const generateBlurb = (
  home: Database["public"]["Tables"]["home"]["Row"][] | null
): ReactElement | null => {
  if (home === null) {
    return null;
  }
  const paragraphs = home.filter(({ type }) => type === "paragraph");
  const substitutions = home.filter(({ type }) => type === "substitution");
  const substitutedParagraphs = paragraphs.map(({ paragraph }) => {
    return (
      <>
        {substitutions.reduce(
          (paragraphSoFar, { substitute_text, substitute_link }) => {
            return paragraphSoFar.flatMap((text) => {
              if (
                typeof text !== "string" ||
                !text.includes(substitute_text!)
              ) {
                return text;
              }
              const [firstPart, secondPart] = text.split(substitute_text!);
              return [
                firstPart,
                <Link href={substitute_link!} target="_blank" $inline>
                  {substitute_text}
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
