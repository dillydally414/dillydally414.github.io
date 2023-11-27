import React, { ReactElement, useContext } from "react";
import Project from "../components/Entry";
import { ExperienceType } from "../types";
import { SupabaseContext } from "../data/supabase";

const Experience = (): ReactElement => {
  const { experiences } = useContext(SupabaseContext);
  return (
    <>
      {experiences?.map((experience: ExperienceType, index: number) => {
        return (
          <Project
            info={experience}
            divider={index !== 0}
            side={index % 2 === 0 ? "left" : "right"}
            key={`${experience.id} ${experience.place_of_work}`}
          />
        );
      })}
    </>
  );
};

export default Experience;
