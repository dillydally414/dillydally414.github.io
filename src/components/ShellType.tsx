import React, { ReactElement } from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import COLORS from "../assets/colors";


const StyledH2 = styled.h2`
  color: ${COLORS.accent};

  ::after {
    animation: ${props => props.color ? (
    animation(props.color)
  ) : (
    'none'
  )} 3s ease-in-out ${props => props.id ? props.id : "0s"};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    content: ${props => props.color ? (
    "'" + ' '.repeat(props.color.length + 1) + "'"
  ) : (
    "'error'"
  )};
    white-space: pre;
  }
`;

const animation = (text: string): Keyframes => {
  var animationStr = "";
  const frameRate = (100 / (text.length + (text.length % 2 === 0 ? 1 : 0.5)));
  for (let i = 0; i <= text.length; i++) {
    if (i % 2 === 0) {
      animationStr += `
      ${(frameRate * i).toFixed(2)}% {content: '${text.substring(0, i) + ' '.repeat(text.length - i + 1)}'}`;
      animationStr += `
      ${(frameRate * i + frameRate / 2).toFixed(2)}% {content: '${text.substring(0, i)}_${i < text.length ? ' '.repeat(text.length - i) : ''}'}`;
    } else {
      animationStr += `
      ${(frameRate * i).toFixed(2)}% {content: '${text.substring(0, i)}_${i < text.length ? ' '.repeat(text.length - i) : ''}'}`;
      animationStr += `
      ${(frameRate * i + frameRate / 2).toFixed(2)}% {content: '${text.substring(0, i) + ' '.repeat(text.length - i + 1)}'}`;
    }
  }
  if (text.length % 2 === 0) animationStr += `
  100% {content: '${text + ' '}'}`;
  return keyframes`${animationStr}`;
}

const ShellType = ({
  delay,
  text,
  className = "",
}: {
  delay: string,
  text: string,
  className?: string,
}): ReactElement => {
  return (
    <StyledH2 className={className} color={text} id={delay}>
      &gt;&nbsp;
    </StyledH2>
  );
}

export default ShellType;