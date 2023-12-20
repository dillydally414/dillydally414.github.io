import styled from "styled-components";
import ShellType from "../components/ShellType";

export const SubHeader = styled.h2<{
  $align: "center" | "flex-start";
  $underline?: boolean;
}>`
  ${(props) => props.theme.defaultProps}
  align-self: ${(props) => props.$align};
  font-family: ${(props) => props.theme.titleFont};
  color: ${(props) => props.theme.text};
  font-size: 2.5rem;
  margin: 0 0 -0.5rem;
  scroll-margin: 1.5rem;
  text-decoration: underline;
  text-decoration-color: ${(props) =>
    props.$underline ? "underline" : "transparent"};
  transition-property: text-decoration-color, color;

  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Link = styled.a<{ $inline?: boolean }>`
  ${(props) => props.theme.defaultProps}

  align-items: center;
  align-self: center;
  color: ${(props) => (props.$inline ? props.theme.accent : props.theme.text2)};
  cursor: pointer;
  display: ${(props) => (props.$inline ? "inline" : "flex")};
  flex-direction: row;
  justify-self: center;
  margin: 0.5rem 0;
  text-decoration: underline;
  text-decoration-color: transparent;
  width: 100%;

  transition-property: text-decoration-color, color;

  &:hover {
    color: ${(props) => props.theme.accent};
    text-decoration-color: ${(props) => props.theme.accent};

    svg {
      fill: ${(props) => props.theme.accent};
      opacity: 100%;
    }
  }

  svg {
    fill: ${(props) =>
      props.$inline ? props.theme.accent : props.theme.text2};
    align-self: flex-start;
    margin-right: 0.75rem;
    opacity: 100%;
    transition-duration: 0.5s;
  }
`;

export const LinkText = styled.p`
  align-self: center;
  font-family: ${(props) => props.theme.bodyFont};
  justify-self: flex-start;
  margin: 0;
`;

export const StyledShellType = styled(ShellType)`
  align-self: center;
  font-family: ${(props) => props.theme.titleFont};
  margin: 1rem;
`;

export const WhoIAm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FadeDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

export const FadeColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  margin: -1rem 0;
  padding: 0;
`;

export const HorizontalLine = styled.div`
  ${(props) => props.theme.defaultProps}

  border-bottom: 0.1rem solid ${(props) => props.theme.accent2};
  margin: 1rem 0;
  width: 20%;
`;

export const ProjectDesc = styled.p`
  ${(props) => props.theme.defaultProps}
  cursor: default;
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.text2};
  margin: 0;
  margin-top: 0.5rem;
`;

export const ProjectDetails = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

export const ProjectDiv = styled.div`
  align-items: flex-start;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const ProjectLink = styled(Link)`
  align-self: unset;
  justify-content: center;
  margin: 1rem 2rem 0 0;
  width: fit-content;
`;

export const ProjectLinks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: fit-content;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: self-start;
  }
`;

export const ProjectName = styled(ShellType)`
  align-self: center;
  font-family: ${(props) => props.theme.titleFont};
  margin: 1rem;
  margin-bottom: 0rem;
`;

export const ProjectHighlight = styled.div`
  margin: 1rem 0 0;
`;

export const ProjectTimeframe = styled.p`
  ${(props) => props.theme.defaultProps}
  cursor: default;
  font-family: ${(props) => props.theme.titleFont};
  font-size: 1.25rem;
  color: ${(props) => props.theme.accent};
  margin: 0;
`;

export const EditableInput = styled.textarea<{
  $align: "center" | "flex-start";
  $height?: string;
  $width?: string;
}>`
  align-self: ${(props) => props.$align};
  background-color: inherit;
  border-color: ${(props) => props.theme.accent2};
  border-style: solid;
  border-radius: 5px;
  display: flex;
  padding: 0.25rem;
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.text2};
  width: ${(props) => props.$width ?? "50vw"};
  height: ${(props) => props.$height ?? "20vh"};
`;
