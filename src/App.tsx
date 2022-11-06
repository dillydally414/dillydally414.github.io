import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import tabs from "./tabs";
import COLORS from "./assets/colors";

const HomeContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.background1};
  color: ${COLORS.text1};
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  padding: 0 5rem;
`;

const TabTitle = styled.h2`
  align-self: center;
  color: ${COLORS.text2};
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
  background-color: ${COLORS.background2};
  box-shadow: 0 -0.5rem 1rem 0.25rem black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const tabTitles = ["About Me", "Projects"];

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
              style={
                index === tabIndex
                  ? {
                      opacity: "100%",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              {tab}
            </TabTitle>
          );
        })}
      </TopRow>
      <HomeContainer>{tabs[tabIndex]}</HomeContainer>
    </>
  );
};

export default App;
