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
  return `${start}${end ? end !== start && " - " + end : " - Current"}`;
};

const Entry = ({
  info,
  index,
}: {
  info: EntryType;
  index: number;
}): ReactElement => {
  return (
    <>
      {index !== 0 && <HorizontalLine />}
      <ProjectDiv>
        <Fade
          left={info.type === "EXPERIENCE"}
          right={info.type === "PROJECT"}
          mirror={index % 2 === 0}
        >
          <FadeDiv
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <ProjectDetails>
              <ProjectName
                text={info.type === "PROJECT" ? info.name : info.placeOfWork}
              />
              {info.type === "PROJECT" ? (
                <>
                  <ProjectTimeframe>{formatTime(info)}</ProjectTimeframe>
                  <ProjectDesc>{info.description}</ProjectDesc>
                </>
              ) : (
                info.positions.map((position) => (
                  <>
                    <ProjectTimeframe>
                      {position.title},&nbsp;
                      {formatTime(position)}
                    </ProjectTimeframe>
                    <ProjectDesc>{position.description}</ProjectDesc>
                  </>
                ))
              )}
              <ProjectDesc>
                {info.type === "PROJECT"
                  ? `Tech Used: ${info.techUsed}`
                  : `Relevant Tech: ${info.relevantTech}`}
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
