import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from '../assets/mail.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import ScottJpg from '../assets/scott.jpg';
import ShellType from '../components/ShellType';

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
    text-decoration-color: black;

    svg {
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

const LinkColumns = styled.div`
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

const NameHeader = styled.h1`
  font-family: Outfit;
  font-size: 5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const SelfImage = styled.img`
  border-radius: 50%;
  box-shadow: 0.2rem 0.2rem 1rem gray;
  height: auto;
  max-width: 15%;
`;

const StyledShellType = styled(ShellType)`
  align-self: center;
  font-family: Roboto Mono;
  margin: 1rem;
`;

const WhoIAm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const WhoIAmText = styled.p`
  align-self: center;
  font-family: Montserrat;
  max-width: 50%;
`;

const contactInfo = [
  {
    link: 'mailto:scott.di@northeastern.edu',
    icon: <MailIcon />,
    text: 'scott.di@northeastern.edu',
  },
  {
    link: 'https://linkedin.com/in/dillon-scott',
    icon: <LinkedinIcon />,
    text: 'linkedin.com/in/dillon-scott',
  },
  {
    link: 'https://github.com/dillydally414',
    icon: <GithubIcon />,
    text: 'github.com/dillydally414',
  },
];

const AboutMe = (): ReactElement => {
  return (
    <>
      <NameHeader>Dillon Scott</NameHeader>
      <StyledShellType text="Who I Am" delay="1s" />
      <WhoIAm>
        <WhoIAmText>
          {// TODO: Fill in this section
          }
        </WhoIAmText>
        <SelfImage src={ScottJpg} alt="A picture of me!" width="15%" />
      </WhoIAm>
      <StyledShellType text="Contact" delay="4s" />
      <LinkColumns>
        {contactInfo.map((value) => {
          return (
            <Link href={value.link} target="_blank" key={value.text}>
              {value.icon}
              <LinkText>{value.text}</LinkText>
            </Link>
          );
        })}
      </LinkColumns>
      <StyledShellType text="Resume" delay="7s" />
      {// TODO: Add resume + make it downloadable on click
      }
    </>
  );
};

export default AboutMe;