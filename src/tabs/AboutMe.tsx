import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from '../assets/mail.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import ScottJpgHiRes from '../assets/scottHiRes.jpg';
import ScottJpgLowRes from '../assets/scottLowRes.jpg';
import ShellType from '../components/ShellType';

const Link = styled.a`
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

const LinkText = styled.p`
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

// https://benhoneywill.com/progressive-image-loading-with-react-hooks/
const useProgressiveImg = (lowQualitySrc: string, highQualitySrc: string): [string, { blur: boolean }] => {
  const [src, setSrc] = useState(lowQualitySrc);
  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};

const AboutMe = (): ReactElement => {
  const [src, { blur }] = useProgressiveImg(ScottJpgLowRes, ScottJpgHiRes);
  return (
    <>
      <NameHeader>Dillon Scott</NameHeader>
      <StyledShellType text="Who I Am" delay="1s" />
      <WhoIAm>
        <WhoIAmText>
          // TODO: Fill in this section
        </WhoIAmText>
        <SelfImage src={src} alt="A picture of me!"
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 1s ease-out"
          }} />
      </WhoIAm>
      <StyledShellType text="Contact" delay="4s" />
      <LinkColumns>
        <Link href="mailto:scott.di@northeastern.edu" target="_blank">
          <MailIcon />
          <LinkText>scott.di@northeastern.edu</LinkText>
        </Link>
        <Link href="https://linkedin.com/in/dillon-scott" target="_blank">
          <LinkedinIcon />
          <LinkText>linkedin.com/in/dillon-scott</LinkText>
        </Link>
        <Link href="https://github.com/dillydally414" target="_blank">
          <GithubIcon />
          <LinkText>github.com/dillydally414</LinkText>
        </Link>
      </LinkColumns>
      <StyledShellType text="Resume" delay="7s" />
      // TODO: Add resume + make it downloadable on click
    </>
  );
};

export default AboutMe;