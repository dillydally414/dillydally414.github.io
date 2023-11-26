import React, { ReactElement } from "react";
import projects from "../data/projects";
import Project from "../components/Entry";
import { ProjectType } from "../types";

const Projects = (): ReactElement => {
  return (
    <>
      {projects.map((project: ProjectType, index: number) => {
        return (
          <Project
            info={project}
            divider={index !== 0}
            side={index % 2 === 1 ? "left" : "right"}
            key={`${project.name} ${project.start}`}
          />
        );
      })}
    </>
  );
};

export default Projects;
