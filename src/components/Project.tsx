import React, { ReactElement } from "react";
import { ProjectType } from "../types";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as ClickIcon } from "../assets/mouse-click.svg";
import Fade from "react-reveal/Fade";
import { HorizontalLine, ProjectDiv, FadeDiv, ProjectDetails, ProjectName, ProjectTimeframe, ProjectDesc, ProjectLinks, ProjectLink, LinkText, ProjectImage } from "../styles";

const Project = ({
  info,
  index,
}: {
  info: ProjectType;
  index: number;
}): ReactElement => {
  return (
    <>
      {index !== 0 && <HorizontalLine />}
      <ProjectDiv>
        <Fade left mirror={index % 2 === 0}>
          <FadeDiv
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <ProjectDetails>
              <ProjectName text={info.name} />
              <ProjectTimeframe>
                {info.start}
                {info.end
                  ? info.end !== info.start && " - " + info.end
                  : " - Current"}
              </ProjectTimeframe>
              <ProjectDesc>{info.description}</ProjectDesc>
              <ProjectDesc>Tech Used: {info.techUsed}</ProjectDesc>
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
            </ProjectDetails>
            {info.image && <ProjectImage src={info.image} alt={info.image} />}
          </FadeDiv>
        </Fade>
      </ProjectDiv>
    </>
  );
};

export default Project;
