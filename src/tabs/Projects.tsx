import React, { ReactElement, useContext, useRef, useState } from "react";
import Project from "../components/Entry";
import { ProjectType } from "../types";
import { SupabaseContext } from "../data/supabase";
import { Fade } from "react-awesome-reveal";
import Scrollbar from "../components/Scrollbar";
import { FadeColumn } from "../styles";

const Projects = (): ReactElement => {
  const { projects } = useContext(SupabaseContext);
  const projectRefs = useRef<Array<HTMLElement | null>>([]).current;
  const [projectContainerRef, setProjectContainerRef] =
    useState<HTMLDivElement | null>(null);

  return (
    <>
      <Scrollbar
        elements={projects}
        scrollRefs={projectRefs}
        containerRef={projectContainerRef}
      />
      <FadeColumn ref={setProjectContainerRef}>
        <Fade direction="up" cascade triggerOnce damping={0.05}>
          {projects.map((project: ProjectType, index: number) => {
            return (
              <Project
                info={project}
                passRef={(ref) => (projectRefs[index] = ref.current)}
                key={`${project.name} ${project.id}`}
              />
            );
          })}
        </Fade>
      </FadeColumn>
    </>
  );
};

export default Projects;
