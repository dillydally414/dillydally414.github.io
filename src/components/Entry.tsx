import React, { ReactElement } from "react";
import { EntryType } from "../types";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as ClickIcon } from "../assets/mouse-click.svg";
import Fade from "react-reveal/Fade";
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

const formatTime = ({ start, end }: { start: string; end?: string }) => {
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
        <Fade left mirror={side === "left"}>
          <FadeDiv
            style={{ flexDirection: side === "left" ? "row" : "row-reverse" }}
          >
            <ProjectDetails>
              <ProjectName
                text={info.type === "PROJECT" ? info.name : info.placeOfWork}
              />
              {info.type === "PROJECT" ? (
                <>
                  <ProjectTimeframe>{formatTime(info)}</ProjectTimeframe>
                  <ProjectDesc>&emsp;{info.description}</ProjectDesc>
                </>
              ) : (
                info.positions.map((position) => (
                  <>
                    <ProjectTimeframe>
                      {position.title}&nbsp;&bull;&nbsp;
                      {formatTime(position)}
                    </ProjectTimeframe>
                    <ProjectDesc>&emsp;{position.description}</ProjectDesc>
                  </>
                ))
              )}
              <ProjectDesc style={{ textAlign: "center" }}>
                {info.type === "PROJECT" ? info.techUsed : info.relevantTech}
              </ProjectDesc>
              {info.type === "PROJECT" && (
                <ProjectLinks>
                  {info.githubLink ? (
                    <ProjectLink href={info.githubLink} target="_blank">
                      <GithubIcon />
                      <LinkText>See the code</LinkText>
                    </ProjectLink>
                  ) : (
                    <ProjectDesc>Available upon request</ProjectDesc>
                  )}
                  {info.visualLink && (
                    <ProjectLink href={info.visualLink} target="_blank">
                      <ClickIcon height="24" />
                      <LinkText>See it in action</LinkText>
                    </ProjectLink>
                  )}
                </ProjectLinks>
              )}
            </ProjectDetails>
            {info.image && <ProjectImage src={info.image} alt={info.image} />}
          </FadeDiv>
        </Fade>
      </ProjectDiv>
    </>
  );
};

export default Entry;
