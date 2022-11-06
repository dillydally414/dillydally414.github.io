import React, { ReactElement } from "react";
import experience from "../data/experience";
import Project from "../components/Project";
import { ProjectType } from "../types";

const Experience = (): ReactElement => {
  return (
    <>
      {experience.map((experience: ProjectType, index: number) => {
        return <Project info={experience} index={index} key={experience.name} />;
      })}
    </>
  );
};

export default Experience;
