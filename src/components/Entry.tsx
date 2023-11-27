import React, { ReactElement, useState } from "react";
import { EntryType } from "../types";
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
  ProjectImage,
  SubHeader,
  ProjectHighlight,
} from "../styles";

const formatTime = ({ start, end }: { start: string; end: string | null }) => {
  return `${start.toLowerCase()}${
    end ? (end !== start ? " - " + end.toLowerCase() : "") : " - current"
  }`;
};

const Entry = ({ info }: { info: EntryType }): ReactElement => {
  return (
    <>
      <ProjectDiv>
        <SubHeader $align="flex-start" $underline>
          {(info.type === "PROJECT"
            ? info.name
            : info.place_of_work
          ).toLowerCase()}
        </SubHeader>
        {info.type === "PROJECT" ? (
          <>
            <ProjectHighlight>
              <ProjectTimeframe>{formatTime(info)}</ProjectTimeframe>
            </ProjectHighlight>
            <ProjectDesc>{info.description}</ProjectDesc>
          </>
        ) : (
          info.positions.map((position) => (
            <React.Fragment
              key={`${info.place_of_work} ${position.title} ${position.start}`}
            >
              <ProjectHighlight>
                <ProjectTimeframe>
                  {position.title.toLowerCase()}
                </ProjectTimeframe>
                <ProjectTimeframe>{formatTime(position)}</ProjectTimeframe>
              </ProjectHighlight>
              <ProjectDesc>{position.description}</ProjectDesc>
            </React.Fragment>
          ))
        )}
        <ProjectDesc>
          {info.type === "PROJECT" ? info.tech_used : info.relevant_tech}
        </ProjectDesc>
        {info.type === "PROJECT" && (
          <ProjectLinks>
            {info.github_link ? (
              <ProjectLink href={info.github_link} target="_blank">
                <GithubIcon />
                <LinkText>See the code</LinkText>
              </ProjectLink>
            ) : (
              <ProjectDesc>Available upon request</ProjectDesc>
            )}
            {info.visual_link && (
              <ProjectLink href={info.visual_link} target="_blank">
                <ClickIcon height="24" />
                <LinkText>See it in action</LinkText>
              </ProjectLink>
            )}
          </ProjectLinks>
        )}
      </ProjectDiv>
    </>
  );
};

export default Entry;
