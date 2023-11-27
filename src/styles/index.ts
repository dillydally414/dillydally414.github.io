import styled from "styled-components";
import ShellType from "../components/ShellType";

export const SubHeader = styled.h2<{
  $align: "center" | "flex-start";
  $underline?: boolean;
}>`
  align-self: ${(props) => props.$align};
  font-family: ${(props) => props.theme.titleFont};
  font-size: 2.5rem;
  margin: 1rem 0 -0.5rem;
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
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

  transition-properties: text-decoration-color, color;

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

export const Resume = styled.iframe`
  border-color: transparent;
  margin: 1rem 0;
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

export const ResumeDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const FadeColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
