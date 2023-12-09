import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import Project from "../components/Entry";
import { ExperienceType } from "../types";
import { SupabaseContext } from "../data/supabase";
import { Fade } from "react-awesome-reveal";
import Scrollbar from "../components/Scrollbar";
import { FadeColumn } from "../styles";

const Experience = (): ReactElement => {
  const { experiences, updateExperiences, editing } =
    useContext(SupabaseContext);
  const experienceRefs = useRef<Array<HTMLElement | null>>([]).current;
  const [experienceContainerRef, setExperienceContainerRef] =
    useState<HTMLDivElement | null>(null);

  const [newExperiences, setNewExperiences] = useState(experiences);

  useEffect(() => {
    setNewExperiences(experiences);
  }, [experiences]);

  return (
    <>
      <Scrollbar
        elements={experiences}
        scrollRefs={experienceRefs}
        containerRef={experienceContainerRef}
      />
      <FadeColumn ref={setExperienceContainerRef}>
        <Fade direction="up" cascade triggerOnce damping={0.05}>
          {editing && (
            <>
              <button
                style={{ margin: "1rem 3rem 1rem 0" }}
                onClick={() => updateExperiences(newExperiences)}
              >
                save
              </button>
              <button
                style={{ margin: "1rem 0" }}
                onClick={() =>
                  updateExperiences([
                    ...newExperiences,
                    {
                      place_of_work: "",
                      relevant_tech: "",
                      image_url: "",
                      alt_text: "",
                    },
                  ])
                }
              >
                add experience
              </button>
            </>
          )}
          {newExperiences.map((experience: ExperienceType, index: number) => {
            return (
              <Project
                info={experience}
                passRef={(ref) => (experienceRefs[index] = ref.current)}
                key={experience.id}
                updateFn={(newExperienceInfo) =>
                  setNewExperiences([
                    ...newExperiences.slice(0, index),
                    newExperienceInfo,
                    ...newExperiences.slice(index + 1),
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

export default Experience;
