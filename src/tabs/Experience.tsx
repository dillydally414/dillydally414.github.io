import React, { ReactElement, useContext } from "react";
import Project from "../components/Entry";
import { ExperienceType } from "../types";
import { SupabaseContext } from "../data/supabase";
import { Fade } from "react-awesome-reveal";

const Experience = (): ReactElement => {
  const { experiences } = useContext(SupabaseContext);
  return (
    <Fade direction="up" cascade triggerOnce damping={0.05}>
      {experiences?.map((experience: ExperienceType, index: number) => {
        return (
          <Project
            info={experience}
            key={`${experience.id} ${experience.place_of_work}`}
          />
        );
      })}
    </Fade>
  );
};

export default Experience;
