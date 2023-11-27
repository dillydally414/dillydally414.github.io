import React, { ReactElement, useContext } from "react";
import Project from "../components/Entry";
import { ProjectType } from "../types";
import { SupabaseContext } from "../data/supabase";
import { Fade } from "react-awesome-reveal";

const Projects = (): ReactElement => {
  const { projects } = useContext(SupabaseContext);
  return (
    <Fade direction="up" cascade triggerOnce damping={0.05}>
      {projects?.map((project: ProjectType, index: number) => {
        return <Project info={project} key={`${project.name} ${project.id}`} />;
      })}
    </Fade>
  );
};

export default Projects;
