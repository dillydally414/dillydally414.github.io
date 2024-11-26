import React, { ReactElement } from "react";
import {
  ProjectLinks,
  EditableInput,
  ProjectLink,
  LinkText,
  ProjectDesc,
} from "../styles";
import GithubIcon from "../assets/github.svg?react";
import ClickIcon from "../assets/mouse-click.svg?react";
import ArticleIcon from "../assets/article.svg?react";

const LinkRow = ({
  github,
  visual,
  project,
  editing,
  updateGithub,
  updateVisual,
}: {
  github: string | null;
  visual: string | null;
  project?: boolean;
  editing: boolean;
  updateGithub: (link: string | null) => void;
  updateVisual: (link: string | null) => void;
}): ReactElement => {
  return (
    <ProjectLinks>
      {editing ? (
        <>
          <EditableInput
            $align="center"
            $height="1rem"
            $width="5rem"
            value={github ?? ""}
            onChange={(evt) => updateGithub(evt.target.value)}
          />
          <ProjectLink
            href={github ?? ""}
            target="_blank"
            style={{ margin: 0 }}
          >
            <GithubIcon />
          </ProjectLink>
          <EditableInput
            $align="center"
            $height="1rem"
            $width="5rem"
            value={visual ?? ""}
            onChange={(evt) => updateVisual(evt.target.value)}
          />
          <ProjectLink
            href={visual ?? ""}
            target="_blank"
            style={{ margin: 0 }}
          >
            {project ? <ClickIcon height="24" /> : <ArticleIcon height="24" />}
          </ProjectLink>
        </>
      ) : (
        <>
          {github ? (
            <ProjectLink href={github} target="_blank">
              <GithubIcon height="24" width="24" />
              <LinkText>See the code</LinkText>
            </ProjectLink>
          ) : (
            <ProjectDesc>Available upon request</ProjectDesc>
          )}
          {visual && (
            <ProjectLink href={visual} target="_blank">
              {project ? (
                <>
                  <ClickIcon height="24" width="24" />
                  <LinkText>See it in action</LinkText>
                </>
              ) : (
                <>
                  <ArticleIcon height="24" width="24" />
                  <LinkText>Read the paper</LinkText>
                </>
              )}
            </ProjectLink>
          )}
        </>
      )}
    </ProjectLinks>
  );
};

export default LinkRow;
