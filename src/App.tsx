import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import tabs from './tabs';

const HomeContainer = styled.div`
  align-items: center;
  background-color: #6bbff175;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
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
  background-color: #FFFDD0;
  box-shadow: 0 -0.5rem 1rem 0.25rem black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
`;

const tabTitles = [
  "About Me",
  "Projects",
  "Games",
];


const App = (): ReactElement => {
  const [tabIndex, setTabIndex]: [number, Function] = useState<number>(0);
  return (
    <>
      <TopRow>
        {tabTitles.map((tab: string, index: number) => {
          return (
            <TabTitle
              onClick={() => setTabIndex(index)}
              key={tab}
              style={index === tabIndex ? {
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