import React, { ReactElement, useContext, useEffect, useState } from "react";
import MailIcon from "../assets/mail.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import GithubIcon from "../assets/github.svg?react";
import ScottJpg from "../assets/scott.jpg";
import { Fade } from "react-awesome-reveal";
import {
  Link,
  LinkText,
  FadeColumn,
  SubHeader,
  EditableInput,
} from "../styles";
import styled from "styled-components";
import { SupabaseContext } from "../data/supabase";
import ShellType from "../components/ShellType";

const LeftColumn = styled(FadeColumn)`
  width: 30%;

  @media screen and (max-width: 480px) {
    width: 100%;
    h2 {
      display: none;
    }
  }
`;

const RightColumn = styled(FadeColumn)`
  width: 65%;

  @media screen and (max-width: 480px) {
    margin-top: 2rem;
    h1 {
      margin-top: 0;
    }
    width: 100%;
    align-items: center;
  }
`;

const SelfImage = styled.img`
  ${(props) => props.theme.defaultProps};
  align-self: center;
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color: ${(props) => props.theme.accent};
  margin-bottom: 1rem;
  height: auto;
  max-width: 75%;
  transition-property: border-color;

  @media screen and (max-width: 480px) {
    margin-top: 12.5rem;
  }
`;

const WhoIAmText = styled.p`
  align-self: center;
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.text2};
  width: 85%;

  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`;

const HomeContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  flex: auto;
  flex-basis: content;
  padding: calc(10vh-2rem) 0 2rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LinkColumns = styled.div`
  align-self: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: row;
    margin-top: 0;
    p {
      display: none;
    }
  }
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

const Home = (): ReactElement => {
  const { editing, homeBlurb, rawHomeData, updateHomeBlurb } =
    useContext(SupabaseContext);
  const [newHomeData, setNewHomeData] = useState(rawHomeData);

  useEffect(() => {
    setNewHomeData(rawHomeData);
  }, [rawHomeData]);
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
        <Fade direction="up" cascade triggerOnce>
          <ShellType text="dillon c scott" />
          {homeBlurb &&
            (editing ? (
              <EditableInput
                $align="center"
                value={newHomeData}
                onChange={(evt) => setNewHomeData(evt.target.value)}
              />
            ) : (
              <WhoIAmText>{homeBlurb}</WhoIAmText>
            ))}
          {editing && (
            <button
              style={{ margin: "1rem 0" }}
              onClick={() => updateHomeBlurb(newHomeData)}
            >
              save
            </button>
          )}
        </Fade>
      </RightColumn>
    </HomeContainer>
  );
};

export default Home;
