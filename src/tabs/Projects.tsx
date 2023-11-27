import React, { ReactElement, useContext } from "react";
import Project from "../components/Entry";
import { ProjectType } from "../types";
import { SupabaseContext } from "../data/supabase";

const Projects = (): ReactElement => {
  const { projects } = useContext(SupabaseContext);
  return (
    <>
      {projects?.map((project: ProjectType, index: number) => {
        return (
          <Project
            info={project}
            divider={index !== 0}
            side={index % 2 === 1 ? "left" : "right"}
            key={`${project.name} ${project.id}`}
          />
        );
      })}
    </>
  );
};

export default Projects;
