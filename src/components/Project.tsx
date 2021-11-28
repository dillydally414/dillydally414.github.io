import React, { ReactElement } from "react";
import styled from "styled-components";
import { ProjectType } from "../types";

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Project = ({
  info,
}: {
  info: ProjectType,
}): ReactElement => {
  return (
    <ProjectDiv>
      <p>
        {info.name}
      </p>
    </ProjectDiv>
  );
}

export default Project;