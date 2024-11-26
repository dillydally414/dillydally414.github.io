import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { EntryType, ExperienceType, ProjectType, ResearchType } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  HorizontalLine,
  ProjectDiv,
  FadeDiv,
  ProjectDetails,
  ProjectName,
  ProjectTimeframe,
  ProjectDesc,
  ProjectLinks,
  ProjectLink,
  LinkText,
  SubHeader,
  ProjectHighlight,
  EditableInput,
} from "../styles";
import { SupabaseContext } from "../data/supabase";
import { getTitle, getTitleProperty } from "../data/utils";
import LinkRow from "./LinkRow";

const formatTime = ({ start, end }: { start: string; end: string | null }) => {
  return `${start.toLowerCase()}${
    end ? (end !== start ? " - " + end.toLowerCase() : "") : " - current"
  }`;
};

const Entry = <T extends EntryType>({
  info,
  passRef,
  updateFn,
}: {
  info: T;
  passRef: (arg: React.RefObject<HTMLElement>) => void;
  updateFn: (arg: T) => void;
}): ReactElement => {
  const { editing, uploadFile } = useContext(SupabaseContext);
  const ref = useRef<HTMLHeadingElement | HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref !== null) {
      passRef(ref);
    }
  }, [ref]);

  const [newInfo, setNewInfo] = useState(info);

  useEffect(() => {
    setNewInfo(info);
  }, [info]);

  useEffect(() => {
    updateFn(newInfo);
  }, [newInfo]);

  return (
    <>
      <ProjectDiv>
        {editing ? (
          <>
            <EditableInput
              $align="flex-start"
              $height="1rem"
              $width="15rem"
              value={getTitle(newInfo)}
              onChange={(evt) =>
                setNewInfo({
                  ...newInfo,
                  [getTitleProperty(newInfo)]: evt.target.value,
                })
              }
              ref={ref as RefObject<HTMLTextAreaElement>}
            />
            <div>
              <input type="file" accept="image/*" ref={fileRef} />
              <button
                onClick={async () => {
                  const file = fileRef.current?.files?.item(0);
                  if (!file) return;
                  const fileInfo = await uploadFile(file.name, file);
                  if (fileInfo?.data) {
                    setNewInfo({
                      ...newInfo,
                      image_url: fileInfo.data.publicUrl,
                    });
                  }
                }}
              >
                upload
              </button>
            </div>
          </>
        ) : (
          <SubHeader
            $align="flex-start"
            $underline={info.id === 1}
            ref={ref as RefObject<HTMLHeadingElement>}
          >
            {getTitle(info)}
          </SubHeader>
        )}
        {newInfo.type === "EXPERIENCE" ? (
          <>
            {editing && (
              <button
                style={{ margin: "1rem 0" }}
                onClick={() =>
                  setNewInfo({
                    ...newInfo,
                    positions: [
                      ...newInfo.positions,
                      { experience_id: newInfo.id },
                    ],
                  })
                }
              >
                add position
              </button>
            )}
            {newInfo.positions.map((position, index) => (
              <React.Fragment key={position.id}>
                <ProjectHighlight>
                  {editing ? (
                    <>
                      <EditableInput
                        $align="flex-start"
                        $height="1rem"
                        $width="21rem"
                        value={position.title}
                        onChange={(evt) =>
                          setNewInfo({
                            ...newInfo,
                            positions: newInfo.positions.map((p, i) =>
                              i === index
                                ? { ...p, title: evt.target.value }
                                : p
                            ),
                          })
                        }
                      />
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <EditableInput
                          $align="flex-start"
                          $height="1rem"
                          $width="10rem"
                          value={position.start}
                          onChange={(evt) =>
                            setNewInfo({
                              ...newInfo,
                              positions: newInfo.positions.map((p, i) =>
                                i === index
                                  ? { ...p, start: evt.target.value }
                                  : p
                              ),
                            })
                          }
                        />
                        {" - "}
                        <EditableInput
                          $align="flex-start"
                          $height="1rem"
                          $width="10rem"
                          value={position.end || ""}
                          onChange={(evt) =>
                            setNewInfo({
                              ...newInfo,
                              positions: newInfo.positions.map((p, i) =>
                                i === index
                                  ? { ...p, end: evt.target.value }
                                  : p
                              ),
                            })
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <ProjectTimeframe>{position.title}</ProjectTimeframe>
                      <ProjectTimeframe>
                        {formatTime(position)}
                      </ProjectTimeframe>
                    </>
                  )}
                </ProjectHighlight>
                {editing ? (
                  <EditableInput
                    $align="flex-start"
                    $height="5rem"
                    value={position.description}
                    onChange={(evt) =>
                      setNewInfo({
                        ...newInfo,
                        positions: newInfo.positions.map((p, i) =>
                          i === index
                            ? { ...p, description: evt.target.value }
                            : p
                        ),
                      })
                    }
                  />
                ) : (
                  <ProjectDesc>{position.description}</ProjectDesc>
                )}
              </React.Fragment>
            ))}
          </>
        ) : newInfo.type === "PROJECT" ? (
          <>
            <ProjectHighlight>
              {editing ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <EditableInput
                    $align="flex-start"
                    $height="1rem"
                    $width="10rem"
                    value={newInfo.start}
                    onChange={(evt) =>
                      setNewInfo({
                        ...newInfo,
                        start: evt.target.value,
                      })
                    }
                  />
                  {" - "}
                  <EditableInput
                    $align="flex-start"
                    $height="1rem"
                    $width="10rem"
                    value={newInfo.end || ""}
                    onChange={(evt) =>
                      setNewInfo({
                        ...newInfo,
                        end: evt.target.value,
                      })
                    }
                  />
                </div>
              ) : (
                <ProjectTimeframe>{formatTime(newInfo)}</ProjectTimeframe>
              )}
            </ProjectHighlight>
            {editing ? (
              <EditableInput
                $align="flex-start"
                $height="5rem"
                value={newInfo.description}
                onChange={(evt) =>
                  setNewInfo({
                    ...newInfo,
                    description: evt.target.value,
                  })
                }
              />
            ) : (
              <ProjectDesc>{newInfo.description}</ProjectDesc>
            )}
          </>
        ) : (
          <>
            {editing ? (
              <EditableInput
                $align="flex-start"
                $height="5rem"
                value={newInfo.description}
                onChange={(evt) =>
                  setNewInfo({
                    ...newInfo,
                    description: evt.target.value,
                  })
                }
              />
            ) : (
              <ProjectDesc>{newInfo.description}</ProjectDesc>
            )}
            {editing && (
              <button
                style={{ margin: "1rem 0" }}
                onClick={() =>
                  setNewInfo({
                    ...newInfo,
                    papers: [...newInfo.papers, { research_id: newInfo.id }],
                  })
                }
              >
                add paper
              </button>
            )}
            {newInfo.papers.map((paper, index) => (
              <React.Fragment key={paper.id}>
                {editing ? (
                  <>
                    <EditableInput
                      $align="flex-start"
                      $height="2rem"
                      value={paper.title}
                      onChange={(evt) =>
                        setNewInfo({
                          ...newInfo,
                          papers: newInfo.papers.map((p, i) =>
                            i === index ? { ...p, title: evt.target.value } : p
                          ),
                        })
                      }
                    />
                    <EditableInput
                      $align="flex-start"
                      $height="3rem"
                      value={paper.authors}
                      onChange={(evt) =>
                        setNewInfo({
                          ...newInfo,
                          papers: newInfo.papers.map((p, i) =>
                            i === index
                              ? { ...p, authors: evt.target.value }
                              : p
                          ),
                        })
                      }
                    />
                    <ProjectLinks>
                      <EditableInput
                        $align="center"
                        $height="1rem"
                        $width="5rem"
                        value={paper.journal}
                        onChange={(evt) =>
                          setNewInfo({
                            ...newInfo,
                            papers: newInfo.papers.map((p, i) =>
                              i === index
                                ? { ...p, journal: evt.target.value }
                                : p
                            ),
                          })
                        }
                      />
                      {", "}
                      <EditableInput
                        $align="center"
                        $height="1rem"
                        $width="5rem"
                        value={paper.year}
                        onChange={(evt) =>
                          setNewInfo({
                            ...newInfo,
                            papers: newInfo.papers.map((p, i) =>
                              i === index ? { ...p, year: evt.target.value } : p
                            ),
                          })
                        }
                      />
                    </ProjectLinks>
                  </>
                ) : (
                  <>
                    <ProjectDesc>{paper.title}</ProjectDesc>
                    <ProjectDesc>{paper.authors}</ProjectDesc>
                    <ProjectDesc>
                      {paper.journal}, {paper.year}
                    </ProjectDesc>
                  </>
                )}
                <LinkRow
                  github={paper.github_link}
                  visual={paper.doi}
                  editing={editing}
                  updateGithub={(github_link) =>
                    setNewInfo({
                      ...newInfo,
                      papers: newInfo.papers.map((p, i) =>
                        i === index ? { ...p, github_link } : p
                      ),
                    })
                  }
                  updateVisual={(visual_link) =>
                    setNewInfo({
                      ...newInfo,
                      papers: newInfo.papers.map((p, i) =>
                        i === index ? { ...p, doi: visual_link } : p
                      ),
                    })
                  }
                />
              </React.Fragment>
            ))}
          </>
        )}
        {editing && newInfo.type !== "RESEARCH" ? (
          <EditableInput
            $align="flex-start"
            $height="1rem"
            value={
              newInfo.type === "PROJECT"
                ? newInfo.tech_used
                : newInfo.relevant_tech
            }
            onChange={(evt) =>
              setNewInfo({
                ...newInfo,
                [newInfo.type === "PROJECT" ? "tech_used" : "relevant_tech"]:
                  evt.target.value,
              })
            }
          />
        ) : (
          !editing &&
          info.type !== "RESEARCH" && (
            <ProjectDesc>
              {info.type === "PROJECT" ? info.tech_used : info.relevant_tech}
            </ProjectDesc>
          )
        )}
        {newInfo.type === "PROJECT" && (
          <LinkRow
            github={newInfo.github_link}
            visual={newInfo.visual_link}
            project
            editing={editing}
            updateGithub={(github_link) =>
              setNewInfo({
                ...newInfo,
                github_link,
              })
            }
            updateVisual={(visual_link) =>
              setNewInfo({
                ...newInfo,
                visual_link,
              })
            }
          />
        )}
      </ProjectDiv>
    </>
  );
};

export default Entry;
