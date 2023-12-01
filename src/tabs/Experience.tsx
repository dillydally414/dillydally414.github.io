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
  const { experiences } = useContext(SupabaseContext);
  const experienceRefs = useRef<Array<HTMLElement | null>>([]).current;
  const [experienceContainerRef, setExperienceContainerRef] =
    useState<HTMLDivElement | null>(null);

  return (
    <>
      <Scrollbar
        elements={experiences}
        scrollRefs={experienceRefs}
        containerRef={experienceContainerRef}
      />
      <FadeColumn ref={setExperienceContainerRef}>
        <Fade direction="up" cascade triggerOnce damping={0.05}>
          {experiences.map((experience: ExperienceType, index: number) => {
            return (
              <Project
                info={experience}
                passRef={(ref) => (experienceRefs[index] = ref.current)}
                key={`${experience.id} ${experience.place_of_work}`}
              />
            );
          })}
        </Fade>
      </FadeColumn>
    </>
  );
};

export default Experience;
