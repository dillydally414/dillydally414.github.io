import React, { ReactElement } from "react";
import experience from "../data/experience";
import Project from "../components/Entry";
import { ExperienceType } from "../types";

const Experience = (): ReactElement => {
  return (
    <>
      {experience.map((experience: ExperienceType, index: number) => {
        return (
          <Project
            info={experience}
            divider={index !== 0}
            side={index % 2 === 0 ? "left" : "right"}
            key={experience.placeOfWork}
          />
        );
      })}
    </>
  );
};

export default Experience;
