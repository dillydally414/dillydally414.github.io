import React, { ReactElement } from 'react';
import { ProjectType } from '../types';
import {
  HorizontalLine,
  ProjectDesc,
  ProjectDetails,
  ProjectDiv,
  ProjectImage,
  ProjectLink,
  ProjectLinks,
  ProjectName,
  ProjectTimeframe
} from './Project';
import { LinkText } from "../tabs/AboutMe";
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as PlayIcon } from '../assets/play.svg';

const Game = ({
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
            {info.githubLink && (
              <ProjectLink href={info.githubLink} target="_blank">
                <GithubIcon />
                <LinkText>
                  See the code
                </LinkText>
              </ProjectLink>
            )}
            {info.visualLink && (
              <ProjectLink href={info.visualLink} target="_blank">
                <PlayIcon height="24" width="24" />
                <LinkText>
                  Play it!
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

export default Game;