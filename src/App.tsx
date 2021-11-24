import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe';
import Games from './Games';
import Projects from './Projects';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem;
`;

const TabTitle = styled.h2`
  align-self: center;
  cursor: pointer;
  display: flex;
  font-family: Outfit;
  margin: 1rem 2rem;
  opacity: 50%;
  text-align: center;
  transition: opacity 0.5s;

  :hover {
    opacity: 100%;
  }
`;

const TopRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
`;

const tabTitles = [
  "About Me",
  "Projects",
  "Games",
];

const tabs = [
  <AboutMe />, // About Me
  <Projects />, // Projects
  <Games />, // Games
];

const App = (): ReactElement => {
  const [tabIndex, setTabIndex]: [number, Function] = useState<number>(0);
  console.log(tabIndex);
  return (
    <>
      <TopRow>
        {tabTitles.map((tab: string, index: number) => {
          return (
            <TabTitle
              onClick={() => setTabIndex(index)}
              key={tab}
              style={index === tabIndex ? {
                fontWeight: "bold",
                opacity: "100%",
                textDecoration: "underline",
              } : {}}
            >
              {tab}
            </TabTitle>
          );
        })}
      </TopRow>
      <HomeContainer>
        {tabs[tabIndex]}
      </HomeContainer>
    </>
  );
};

export default App;