import React, { ReactElement } from "react";
import styled from "styled-components";
import { ProjectType } from "../types";
import ShellType from "./ShellType";
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as ClickIcon } from '../assets/mouse-click.svg';
import { Link, LinkText } from "../tabs/AboutMe";

export const HorizontalLine = styled.div`
  border-bottom: 0.1rem solid black;
  margin: 1rem 0;
  width: 20%;
`;

export const ProjectDesc = styled.p`
  cursor: default;
  font-family: Montserrat;
  margin: 0;
  margin-top: 1rem;
  padding: 0 2rem;
  text-align: justify;
`;

export const ProjectDetails = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

export const ProjectDiv = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: space-around;
  margin-bottom: 1rem;
  width: 80%;
`;

export const ProjectImage = styled.img`
  filter: drop-shadow(0 0 1rem gray);
  justify-content: center;
  margin: 1rem;
  max-width: 25%;
  padding: 1rem 0;
`;

export const ProjectLink = styled(Link)`
  justify-content: center;
  margin: 1rem;
  width: fit-content;
`;

export const ProjectLinks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: fit-content;
`;

export const ProjectName = styled(ShellType)`
  align-self: center;
  font-family: Roboto Mono;
  margin: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProjectTimeframe = styled.p`
  cursor: default;
  font-family: Montserrat;
  margin: 0;
`;

const Project = ({
  info,
}: {
  info: ProjectType,
}): ReactElement => {
  return (
    <>
      {info.order !== 0 && <HorizontalLine />}
      <ProjectDiv style={{
        flexDirection: info.order % 2 === 0 ? 'row' : 'row-reverse',
      }}>
        <ProjectDetails>
          <ProjectName text={info.name} delay={`${info.order * 3 + 1}s`} />
          <ProjectTimeframe>
            {info.start}
            {info.end ? (
              info.end !== info.start && ' - ' + info.end
            ) : ' - Current'}
          </ProjectTimeframe>
          <ProjectDesc>
            {info.description}
          </ProjectDesc>
          <ProjectDesc>
            Tech Used: {info.techUsed}
          </ProjectDesc>
          <ProjectLinks>
            {info.githubLink ? (
              <ProjectLink href={info.githubLink} target="_blank">
                <GithubIcon />
                <LinkText>
                  See the code
                </LinkText>
              </ProjectLink>
            ) : (
              <ProjectDesc>
                Available upon request
              </ProjectDesc>
            )}
            {info.visualLink && (
              <ProjectLink href={info.visualLink} target="_blank">
                <ClickIcon height="24" />
                <LinkText>
                  See it in action
                </LinkText>
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectDetails>
        {info.image && <ProjectImage src={info.image} alt={info.image} />}
      </ProjectDiv>
    </>
  );
};

export default Project;