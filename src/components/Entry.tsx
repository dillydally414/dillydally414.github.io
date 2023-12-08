import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { EntryType, ProjectType } from "../types";
import GithubIcon from "../assets/github.svg?react";
import ClickIcon from "../assets/mouse-click.svg?react";
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

const formatTime = ({ start, end }: { start: string; end: string | null }) => {
  return `${start.toLowerCase()}${
    end ? (end !== start ? " - " + end.toLowerCase() : "") : " - current"
  }`;
};

const Entry = <T extends EntryType>({
  info,
  passRef,
  editing,
  updateFn,
}: {
  info: T;
  passRef: (arg: React.RefObject<HTMLElement>) => void;
  editing: boolean;
  updateFn: (arg: T) => void;
}): ReactElement => {
  const ref = useRef<HTMLHeadingElement | HTMLTextAreaElement>(null);
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
          <EditableInput
            $align="flex-start"
            $height="1rem"
            value={
              newInfo.type === "PROJECT" ? newInfo.name : newInfo.place_of_work
            }
            onChange={(evt) =>
              setNewInfo({
                ...newInfo,
                [newInfo.type === "PROJECT" ? "name" : "place_of_work"]:
                  evt.target.value,
              })
            }
            ref={ref as RefObject<HTMLTextAreaElement>}
          />
        ) : (
          <SubHeader
            $align="flex-start"
            $underline={info.id === 1}
            ref={ref as RefObject<HTMLHeadingElement>}
          >
            {info.type === "PROJECT" ? info.name : info.place_of_work}
          </SubHeader>
        )}
        {newInfo.type === "PROJECT" ? (
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
          newInfo.positions.map((position, index) => (
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
                            i === index ? { ...p, title: evt.target.value } : p
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
                              i === index ? { ...p, end: evt.target.value } : p
                            ),
                          })
                        }
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <ProjectTimeframe>{position.title}</ProjectTimeframe>
                    <ProjectTimeframe>{formatTime(position)}</ProjectTimeframe>
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
          ))
        )}
        {editing ? (
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
          <ProjectDesc>
            {info.type === "PROJECT" ? info.tech_used : info.relevant_tech}
          </ProjectDesc>
        )}
        {newInfo.type === "PROJECT" && (
          <ProjectLinks>
            {editing ? (
              <>
                <EditableInput
                  $align="center"
                  $height="1rem"
                  $width="5rem"
                  value={newInfo.github_link ?? ""}
                  onChange={(evt) =>
                    setNewInfo({
                      ...newInfo,
                      github_link: evt.target.value,
                    })
                  }
                />
                <ProjectLink
                  href={newInfo.visual_link ?? ""}
                  target="_blank"
                  style={{ margin: 0 }}
                >
                  <GithubIcon />
                </ProjectLink>
                <EditableInput
                  $align="center"
                  $height="1rem"
                  $width="5rem"
                  value={newInfo.visual_link ?? ""}
                  onChange={(evt) =>
                    setNewInfo({
                      ...newInfo,
                      visual_link: evt.target.value,
                    })
                  }
                />
                <ProjectLink
                  href={newInfo.visual_link ?? ""}
                  target="_blank"
                  style={{ margin: 0 }}
                >
                  <ClickIcon height="24" />
                </ProjectLink>
              </>
            ) : (
              <>
                {newInfo.github_link ? (
                  <ProjectLink href={newInfo.github_link} target="_blank">
                    <GithubIcon />
                    <LinkText>See the code</LinkText>
                  </ProjectLink>
                ) : (
                  <ProjectDesc>Available upon request</ProjectDesc>
                )}
                {newInfo.visual_link && (
                  <ProjectLink href={newInfo.visual_link} target="_blank">
                    <ClickIcon height="24" />
                    <LinkText>See it in action</LinkText>
                  </ProjectLink>
                )}
              </>
            )}
          </ProjectLinks>
        )}
      </ProjectDiv>
    </>
  );
};

export default Entry;
