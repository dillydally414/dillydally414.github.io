
import styled from 'styled-components';
import COLORS from './colors';
import ShellType from '../components/ShellType'

export const Link = styled.a`
  align-items: center;
  align-self: center;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-self: center;
  margin: 0.5rem 0;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition-duration: 0.5s;
  width: 100%;

  :hover {
    color: ${COLORS.accent};
    text-decoration-color: ${COLORS.accent};

    svg {
      fill: ${COLORS.accent};
      opacity: 100%;
    }
  }

  svg {
    align-self: flex-start;
    margin-right: 0.75rem;
    opacity: 50%;
    transition-duration: 0.5s;
  }
`;

export const LinkColumns = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const LinkText = styled.p`
  align-self: center;
  font-family: Montserrat;
  justify-self: flex-start;
  margin: 0;
`;

export const NameHeader = styled.h1`
  font-family: Outfit;
  font-size: 5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const Resume = styled.iframe`
  border-color: transparent;
  margin: 1rem 0;
`;

export const SandboxLink = styled(Link)`
  color: ${COLORS.accent};
  display: inline;
  margin: 0;
`;

export const SelfImage = styled.img`
  border-radius: 50%;
  box-shadow: 0.2rem 0.2rem 1rem gray;
  height: auto;
  margin-left: 3rem;
  max-width: 15%;
`;

export const StyledShellType = styled(ShellType)`
  align-self: center;
  font-family: Roboto Mono;
  margin: 1rem;
`;

export const WhoIAm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
`;

export const WhoIAmText = styled.p`
  align-self: center;
  font-family: Montserrat;
  max-width: 50%;
  text-align: justify;
`;

export const FadeDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

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
  justify-content: space-around;
  display: flex;

  > div {
    align-items: center;
    display: flex;
    height: fit-content;
    justify-content: space-around;
    margin-bottom: 1rem;
    width: 80%;
  }
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