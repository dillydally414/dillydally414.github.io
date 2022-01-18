import React, { ReactElement } from 'react';
import projects from '../assets/projects';
import Project from '../components/Project';
import { ProjectType } from '../types';

const Projects = (): ReactElement => {
  return (
    <>
      {projects.map((project: ProjectType, index: number) => {
        return <Project info={project} index={index} key={project.name} />;
      })}
    </>
  );
};

export default Projects;