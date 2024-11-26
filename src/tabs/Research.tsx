import React, {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ResearchEntry from "../components/Entry";
import { ResearchType } from "../types";
import { SupabaseContext } from "../data/supabase";
import { Fade } from "react-awesome-reveal";
import Scrollbar from "../components/Scrollbar";
import { FadeColumn } from "../styles";

const Research = (): ReactElement => {
  const { research, updateResearch, editing } = useContext(SupabaseContext);
  const researchRefs = useRef<Array<HTMLElement | null>>([]).current;
  const [researchContainerRef, setResearchContainerRef] =
    useState<HTMLDivElement | null>(null);

  const [newResearchExps, setNewResearchExps] = useState(research);

  useEffect(() => {
    setNewResearchExps(research);
  }, [research]);

  return (
    <>
      <Scrollbar
        elements={research}
        scrollRefs={researchRefs}
        containerRef={researchContainerRef}
      />
      <FadeColumn ref={setResearchContainerRef}>
        <Fade direction="up" cascade triggerOnce damping={0.05}>
          {editing && (
            <>
              <button
                style={{ margin: "1rem 3rem 1rem 0" }}
                onClick={() => updateResearch(newResearchExps)}
              >
                save
              </button>
              <button
                style={{ margin: "1rem 0" }}
                onClick={() =>
                  updateResearch([
                    ...newResearchExps,
                    {
                      area: "",
                      description: "",
                      image_url: "",
                      alt_text: "",
                    },
                  ])
                }
              >
                add research area
              </button>
            </>
          )}
          {newResearchExps.map((research: ResearchType, index: number) => {
            return (
              <ResearchEntry
                info={research}
                passRef={(ref) => (researchRefs[index] = ref.current)}
                key={research.id}
                updateFn={(newResearchInfo) =>
                  setNewResearchExps([
                    ...newResearchExps.slice(0, index),
                    newResearchInfo,
                    ...newResearchExps.slice(index + 1),
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

export default Research;
