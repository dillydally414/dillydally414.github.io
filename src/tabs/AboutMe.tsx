import React, { ReactElement } from "react";
import { ReactComponent as MailIcon } from "../assets/mail.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import ScottJpg from "../assets/scott.jpg";
import Fade from "react-reveal/Fade";
import {
  NameHeader,
  StyledShellType,
  WhoIAm,
  WhoIAmText,
  SandboxLink,
  SelfImage,
  LinkColumns,
  Link,
  LinkText,
  Resume,
  FadeDiv,
} from "../styles";

const contactInfo = [
  {
    link: "mailto:dilloncscott1@gmail.com",
    icon: <MailIcon />,
    text: "dilloncscott1@gmail.com",
  },
  {
    link: "https://linkedin.com/in/dillon-scott",
    icon: <LinkedinIcon />,
    text: "linkedin.com/in/dillon-scott",
  },
  {
    link: "https://github.com/dillydally414",
    icon: <GithubIcon />,
    text: "github.com/dillydally414",
  },
];

const AboutMe = (): ReactElement => {
  return (
    <>
      <NameHeader>Dillon Scott</NameHeader>
      <StyledShellType text="Who I Am" />
      <Fade left>
        <FadeDiv>
          <WhoIAm>
            <WhoIAmText>
              I am a third year Computer Science and Biology student at
              Northeastern University. From July - December 2022, I worked on
              the Computational Biology team at&nbsp;
              <SandboxLink href="https://www.immunitastx.com/" target="_blank">
                Immunitas Therapeutics
              </SandboxLink>
              , learning both technical skills in Python/Jupyter Notebooks as
              well as furthering my communication skills through presentations.
              As a project lead on EdLaw at&nbsp;
              <SandboxLink href="https://sandboxnu.com" target="_blank">
                Sandbox at Northeastern
              </SandboxLink>
              , I have leadership experience as well as technical experience
              working with React, Typescript, and other related libraries. I
              also worked as a Teaching Assistant for Accelerated Fundamentals
              of Computer Science 2, which focuses primarily on Java and
              object-oriented programming, and Algorithms and Data, which
              attacks programming from a more theoretical perspective.
              <br />
              <br />
              <b>
                I am currently looking for co-op/internship opportunities for
                May - December 2023.
              </b>
            </WhoIAmText>
            <SelfImage src={ScottJpg} alt="A picture of me!" width="15%" />
          </WhoIAm>
        </FadeDiv>
      </Fade>
      <StyledShellType text="Contact" />
      <Fade right>
        <FadeDiv>
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
        </FadeDiv>
      </Fade>
      <StyledShellType text="Resume" />
      <Fade left>
        <FadeDiv>
          <Resume
            src={
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/resume.pdf"
                : "https://dillydally414.github.io/resume.pdf"
            }
            width="650rem"
            height="900rem"
            title="Dillon Scott Resume"
            allowFullScreen={true}
          />
        </FadeDiv>
      </Fade>
    </>
  );
};

export default AboutMe;
