import React, { ReactElement, useContext } from "react";
import MailIcon from "../assets/mail.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import GithubIcon from "../assets/github.svg?react";
import ScottJpg from "../assets/scott.jpg";
import { Fade } from "react-awesome-reveal";
import { SandboxLink, Link, LinkText, FadeColumn, SubHeader } from "../styles";
import styled from "styled-components";
import { SupabaseContext, SupabaseContextType } from "../data/supabase";

const LeftColumn = styled(FadeColumn)`
  width: 30%;
`;

const RightColumn = styled(FadeColumn)`
  width: 65%;
`;

const SelfImage = styled.img`
  ${(props) => props.theme.defaultProps};
  align-self: center;
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color: ${(props) => props.theme.accent};
  height: auto;
  max-width: 75%;
  transition-property: border-color;
`;

const NameHeader = styled.h1`
  font-family: ${(props) => props.theme.titleFont};
  font-size: 5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const WhoIAmText = styled.p`
  align-self: center;
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.text2};
  width: 85%;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: auto;
  flex-basis: content;
  padding: 10vh 0 2rem;
  align-items: flex-start;
  justify-content: space-between;
`;

const LinkColumns = styled.div`
  align-self: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

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

const generateBlurb = (
  home: SupabaseContextType["home"]
): ReactElement | null => {
  if (home === null) {
    return null;
  }
  const paragraphs = home.filter(({ type }) => type === "paragraph");
  const substitutions = home.filter(({ type }) => type === "substitution");
  const substitutedParagraphs = paragraphs.map(({ paragraph }) => {
    return (
      <>
        {substitutions.reduce(
          (paragraphSoFar, { substitute_text, substitute_link }) => {
            return paragraphSoFar.flatMap((text) => {
              if (
                typeof text !== "string" ||
                !text.includes(substitute_text!)
              ) {
                return text;
              }
              const [firstPart, secondPart] = text.split(substitute_text!);
              return [
                firstPart,
                <SandboxLink href={substitute_link!} target="_blank">
                  {substitute_text}
                </SandboxLink>,
                secondPart,
              ];
            });
          },
          [paragraph!] as Array<string | ReactElement>
        )}
      </>
    );
  });
  return (
    <>
      {substitutedParagraphs.map((paragraph, index) => {
        if (index === substitutedParagraphs.length - 1) {
          return paragraph;
        } else {
          return (
            <>
              {paragraph}
              <br />
              <br />
            </>
          );
        }
      })}
    </>
  );
};

const Home = (): ReactElement => {
  const { home } = useContext(SupabaseContext);
  const blurb = generateBlurb(home);
  return (
    <HomeContainer>
      <LeftColumn>
        <SelfImage src={ScottJpg} alt="A picture of me!" width="100%" />
        <SubHeader $align="center">drop a line</SubHeader>
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
      </LeftColumn>
      <RightColumn>
        <Fade direction="up" cascade>
          <NameHeader>dillon c scott</NameHeader>
          {blurb && <WhoIAmText>{blurb}</WhoIAmText>}
        </Fade>
      </RightColumn>
    </HomeContainer>
  );
};

export default Home;
