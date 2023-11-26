import React, { ReactElement, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import tabs from "./tabs";
import { darkTheme, lightTheme } from "./styles/theme";
import Switch from "@mui/material/Switch";

const HomeContainer = styled.div`
  ${(props) => props.theme.defaultProps}

  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  padding: 0 5rem;
`;

const TabTitle = styled.button<{ $active: boolean }>`
  ${(props) => props.theme.defaultProps}

  align-self: center;
  background-color: inherit;
  border: inherit;
  color: ${(props) =>
    props.$active ? props.theme.accent : props.theme.accent2};
  cursor: pointer;
  display: flex;
  font-family: ${(props) => props.theme.titleFont};
  font-weight: ${(props) => (props.$active ? 600 : 200)};
  font-size: 1.5rem;
  margin: 1rem 2rem;
  text-align: center;
  transition-property: color;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const TopRow = styled.div`
  ${(props) => props.theme.defaultProps}

  align-items: center;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 -0.5rem 1rem 0.25rem black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const ThemeSwitch = styled(Switch)`
  & {
    ${(props) => props.theme.defaultProps}
    width: 6rem;
    height: 4rem;
    padding: 0;
    display: flex !important;
  }

  & .MuiSwitch-switchBase {
    display: flex !important;
    padding: 0;
    margin: 25%;
    &.Mui-checked {
      transform: translateX(75%);
    }
  }
  & .MuiSwitch-input {
    display: flex !important;
  }
  & .MuiSwitch-thumb {
    display: flex !important;
    color: ${(props) => props.theme.accent};
    box-shadow: none;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    transition-property: color;
    ${(props) => props.theme.defaultProps}
  }
  & .MuiSwitch-track {
    display: flex !important;
    border-radius: 13px;
    border: 2px solid ${(props) => props.theme.accent} !important;
    background-color: ${(props) => props.theme.background} !important;
    background: url("/sun.svg") right center, url("/moon.svg") left center;
    background-size: contain;
    background-origin: content-box;
    background-repeat: no-repeat;
    opacity: 1 !important;
    padding: 0 2px;
    transition-property: border, background-color;
    ${(props) => props.theme.defaultProps}
  }
`;

const ThemeLabel = styled.label<{ $checked: boolean }>`
  ${(props) => props.theme.defaultProps}

  display: flex;
  cursor: pointer;
  padding-left: ${(props) => (props.$checked ? "2rem" : "0")};
  height: 2rem;
  width: 4rem;
  background-color: ${(props) => props.theme.background};
  background: url("/sun.svg") 2.25rem center, url("/moon.svg") 0.25rem center;
  background-repeat: no-repeat;
  background-origin: padding-box;
  border-color: ${(props) => props.theme.accent};
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 1rem;
  transition-property: border-color, background-color, padding-left;
  box-sizing: border-box;
`;

const ThemeButton = styled.button`
  ${(props) => props.theme.defaultProps}

  display: flex;
  align-self: center;
  background-color: ${(props) => props.theme.accent};
  border-radius: 1rem;
  border-width: 0;
  height: 105%;
  aspect-ratio: 1/1;
  transition-property: background-color;
`;

const tabTitles = ["About Me", "Experience", "Projects"];

const App = (): ReactElement => {
  const [tabIndex, setTabIndex]: [number, Function] = useState<number>(0);
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <TopRow>
        {tabTitles.map((tab: string, index: number) => {
          return (
            <TabTitle
              onClick={() => setTabIndex(index)}
              key={tab}
              $active={index === tabIndex}
            >
              {tab}
            </TabTitle>
          );
        })}
        <ThemeLabel
          $checked={darkThemeEnabled}
          aria-label={`Turn ${darkThemeEnabled ? "off" : "on"} dark mode`}
        >
          <ThemeButton
            onClick={() => setDarkThemeEnabled((prevEnabled) => !prevEnabled)}
          />
        </ThemeLabel>
      </TopRow>
      <HomeContainer>{tabs[tabIndex]}</HomeContainer>
    </ThemeProvider>
  );
};

export default App;
