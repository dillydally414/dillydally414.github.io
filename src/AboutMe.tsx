import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactComponent as AnimatedIcon } from './animation-icon.svg';

const NameHeader = styled.h1`
  font-family: Outfit;
  font-size: 7rem;
`;

const iconProportion: number = 5;

const Icon = styled(AnimatedIcon)`
  cursor: pointer;
  height: ${iconProportion}rem;
  padding: 1rem;
  width: ${iconProportion}rem;

  text {
    font-size: ${iconProportion / 2}rem;
  }
`;

const AboutMe = (): ReactElement => {
  return (
    <>
      <NameHeader>Dillon Scott</NameHeader>
      <Icon />
    </>
  );
};

export default AboutMe;