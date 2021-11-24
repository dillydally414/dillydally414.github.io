import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as MailIcon } from '../assets/mail.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const contactAnimation = keyframes`
  0% { content: '_'}
  6.25% {content: 'C_' }
  12.5% { content: 'Co' }
  18.75% { content: 'Con' }
  31.25% { content: 'Con_' }
  37.5% { content: 'Cont_' }
  43.75% { content: 'Conta' }
  50% { content: 'Contac' }
  56.25% { content: 'Contac_' }
  62.5% { content: 'Contact_' }
  68.75% { content: 'Contact' }
  75% { content: 'Contact' }
  81.25% { content: 'Contact_' }
  87.5% { content: 'Contact_' }
  93.75% { content: 'Contact' }
  100% { content: 'Contact' }
`

const Contact = styled.h2`
  align-self: center;
  font-family: Roboto Mono;
  justify-self: self-start;
  margin-top: 0;
  width: 8rem;

  ::after {
    animation: ${contactAnimation} 6s ease-in-out 0.75s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    content: '';
  }
`;

const Link = styled.a`
  align-items: center;
  align-self: center;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-self: center;
  margin: 0.5rem 0; 
  width: 100%;

  :link, :visited {
    text-decoration: none;
  }

  :hover {
    text-decoration: underline;
  }

  svg {
    align-self: flex-start;
    margin-right: 0.5rem;
  }
`;

const LinkColumns = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const LinkText = styled.p`
  align-self: center;
  justify-self: center;
  margin: auto;
`;

const NameHeader = styled.h1`
  font-family: Outfit;
  font-size: 5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const AboutMe = (): ReactElement => {
  return (
    <>
      <NameHeader>Dillon Scott</NameHeader>
      <Contact>
        &gt;&nbsp;
      </Contact>
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
    </>
  );
};

export default AboutMe;