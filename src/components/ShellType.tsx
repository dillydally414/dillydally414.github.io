import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

type ShellTypeProps = {
  text: string;
  className?: string;
};

const StyledH2 = styled.h1<{ $text: string; $animate: boolean }>`
  ${(props) => props.theme.defaultProps}
  font-family: ${(props) => props.theme.titleFont};
  color: ${(props) => props.theme.text};
  font-size: 5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  transition-property: color;

  &:after {
    animation: ${(props) => (props.$animate ? animation(props.$text) : "none")}
      ${(props) =>
        (props.$text.length + (props.$text.length % 2 === 0 ? 1 : 0.5)) / 5}s
      ease-in-out ${(props) => (props.id ? props.id : "0s")};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    content: ${(props) => "'" + " ".repeat(props.$text.length + 1) + "'"};
    white-space: pre;
  }
`;

const animation = (text: string): ReturnType<typeof keyframes> => {
  var animationStr = "";
  const frameRate = 100 / (text.length + (text.length % 2 === 0 ? 1 : 0.5));
  for (let i = 0; i <= text.length; i++) {
    if (i % 6 <= 2) {
      animationStr += `
      ${(frameRate * i).toFixed(2)}% {content: '${text.substring(0, i)}_${
        i < text.length ? " ".repeat(text.length - i) : ""
      }'}`;
    } else {
      animationStr += `
      ${(frameRate * i).toFixed(2)}% {content: '${
        text.substring(0, i) + " ".repeat(text.length - i + 1)
      }'}`;
    }
  }
  animationStr += `
  100% {content: '${text + " "}'}`;
  return keyframes`${animationStr}`;
};

const ShellType = ({ text, className = "" }: ShellTypeProps): ReactElement => {
  const ref: any = useRef<HTMLHeadingElement>();
  const onScreen = useOnScreen(ref, "-100px");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (onScreen) setAnimate(true);
  }, [onScreen]);

  return (
    <StyledH2 className={className} $text={text} $animate={animate} ref={ref} />
  );
};

// https://usehooks.com/useOnScreen/
function useOnScreen<T extends Element>(
  ref: React.MutableRefObject<T>,
  rootMargin: string = "0px"
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (current) {
      observer.observe(current);
    }
    return () => {
      observer.unobserve(current);
    };
    // eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export default ShellType;
