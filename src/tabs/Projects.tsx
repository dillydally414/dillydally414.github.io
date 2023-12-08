import React, {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Project from "../components/Entry";
import { ProjectType } from "../types";
import { SupabaseContext } from "../data/supabase";
import { Fade } from "react-awesome-reveal";
import Scrollbar from "../components/Scrollbar";
import { FadeColumn } from "../styles";

const Projects = (): ReactElement => {
  const { projects, updateProjects, editing } = useContext(SupabaseContext);
  const projectRefs = useRef<Array<HTMLElement | null>>([]).current;
  const [projectContainerRef, setProjectContainerRef] =
    useState<HTMLDivElement | null>(null);

  const [newProjects, setNewProjects] = useState(projects);

  useEffect(() => {
    setNewProjects(projects);
  }, [projects]);

  return (
    <>
      <Scrollbar
        elements={projects}
        scrollRefs={projectRefs}
        containerRef={projectContainerRef}
      />
      <FadeColumn ref={setProjectContainerRef}>
        <Fade direction="up" cascade triggerOnce damping={0.05}>
          {editing && (
            <button
              style={{ margin: "1rem 0" }}
              onClick={() => updateProjects(newProjects)}
            >
              save
            </button>
          )}
          {newProjects.map((project: ProjectType, index: number) => {
            return (
              <Project
                info={project}
                passRef={(ref) => (projectRefs[index] = ref.current)}
                key={project.id}
                editing={editing}
                updateFn={(newProjectInfo) =>
                  setNewProjects([
                    ...newProjects.slice(0, index),
                    newProjectInfo,
                    ...newProjects.slice(index + 1),
                  ])
                }
              />
            );
          })}
        </Fade>
      </FadeColumn>
    </>
  );
};

export default Projects;
