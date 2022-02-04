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

const Resume = styled.iframe`
  border-color: transparent;
  margin: 1rem 0;
`;

const SandboxLink = styled(Link)`
  display: inline;
  margin: 0;
`

const SelfImage = styled.img`
  border-radius: 50%;
  box-shadow: 0.2rem 0.2rem 1rem gray;
  height: auto;
  margin-left: 3rem;
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
  justify-content: center;
  width: 80%;
`;

const WhoIAmText = styled.p`
  align-self: center;
  font-family: Montserrat;
  max-width: 50%;
  text-align: justify;
`;

const contactInfo = [
  {
    link: 'mailto:dilloncscott1@gmail.com',
    icon: <MailIcon />,
    text: 'dilloncscott1@gmail.com',
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
          I am a second year Computer Science and Biology student at Northeastern University. As a project lead on EduLaw at&nbsp;
          <SandboxLink href="https://sandboxnu.com" target="_blank">
            Sandbox at Northeastern
          </SandboxLink>
          , I have leadership experience as well as technical experience working with React, Typescript, and other related libraries.
          I also work as a Teaching Assistant for Accelerated Fundamentals of Computer Science 2, which focuses primarily on Java
          and object-oriented programming.
          <br />
          <br />
          <b>I am currently looking for co-op/internship opportunities for July - December 2022.</b>
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
      <Resume
        src='https://s3.amazonaws.com/symp.csm.usprod/northeastern/files/98d/98dee0d1f29e4ee2326e947769c5119d.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAID3RBESXBCESHUGA%2F20220204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220204T011717Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=5db5b1b3a84f9b5bdf787b333da89c7ea5b2cd0cf49a0761c61952be18530e18'
        width='650rem'
        height='900rem'
        title='Dillon Scott Resume'
        allowFullScreen={true}
      />
    </>
  );
};

export default AboutMe;