import React, { ReactElement } from "react";
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
} from "../styles";

const formatTime = ({ start, end }: { start: string; end: string | null }) => {
  return `${start}${end ? (end !== start ? " - " + end : "") : " - Current"}`;
};

const Entry = ({
  info,
  divider,
  side,
}: {
  info: EntryType;
  divider: boolean;
  side: "left" | "right";
}): ReactElement => {
  return (
    <>
      {divider && <HorizontalLine />}
      <ProjectDiv>
        <Fade direction={side}>
          <FadeDiv
            style={{ flexDirection: side === "left" ? "row" : "row-reverse" }}
          >
            <ProjectDetails>
              <ProjectName
                text={info.type === "PROJECT" ? info.name : info.place_of_work}
              />
              {info.type === "PROJECT" ? (
                <>
                  <ProjectTimeframe>{formatTime(info)}</ProjectTimeframe>
                  <ProjectDesc>&emsp;{info.description}</ProjectDesc>
                </>
              ) : (
                info.positions.map((position) => (
                  <React.Fragment
                    key={`${info.place_of_work} ${position.title} ${position.start}`}
                  >
                    <ProjectTimeframe>
                      {position.title}&nbsp;&bull;&nbsp;
                      {formatTime(position)}
                    </ProjectTimeframe>
                    <ProjectDesc>&emsp;{position.description}</ProjectDesc>
                  </React.Fragment>
                ))
              )}
              <ProjectDesc style={{ textAlign: "center" }}>
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
            </ProjectDetails>
            {info.image_url && (
              <ProjectImage src={info.image_url} alt={info.alt_text} />
            )}
          </FadeDiv>
        </Fade>
      </ProjectDiv>
    </>
  );
};

export default Entry;
