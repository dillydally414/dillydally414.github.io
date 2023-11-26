import React, { ReactElement, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import tabs from "./tabs";
import { darkTheme, lightTheme } from "./styles/theme";

const HomeContainer = styled.div`
  ${(props) => props.theme.defaultProps}

  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  padding: 1rem min(5rem, 5%);
`;

const TabTitleSpan = styled.span<{ $active: boolean }>`
  ${(props) => props.theme.defaultProps}

  align-self: center;
  background-color: inherit;
  border: inherit;
  display: flex;
  flex: auto;
  flex-basis: content;

  &:before {
    align-self: center;
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.theme.accent};
    content: "";
    -webkit-mask: url(/star.svg) no-repeat 50% 50%;
    mask: url(/star.svg) no-repeat 50% 50%;
    -webkit-mask-size: ${(props) => (props.$active ? "100%" : "0%")};
    mask-size: ${(props) => (props.$active ? "100%" : "0%")};
    transition-property: background-color, -webkit-mask-size, mask-size;
    ${(props) => props.theme.defaultProps}
  }
`;

const TabTitle = styled.button<{ $active: boolean; $title: string }>`
  ${(props) => props.theme.defaultProps}

  align-self: center;
  background-color: inherit;
  border: inherit;
  color: ${(props) =>
    props.$active ? props.theme.accent : props.theme.accent2};
  cursor: pointer;
  display: inline-block;
  font-family: ${(props) => props.theme.titleFont};
  font-weight: ${(props) => (props.$active ? 600 : 200)};
  font-size: 1.5rem;
  transition-property: color, font-weight;

  &:hover {
    color: ${(props) => props.theme.accent};
  }

  &:before {
    display: block;
    content: "${(props) => props.$title}";
    font-weight: 600;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

const TabWidth = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: auto;
  max-width: 40rem;
  min-width: fit-content;
`;

const TopRow = styled.div`
  ${(props) => props.theme.defaultProps}

  align-items: center;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 1rem 1rem 0.5rem ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem min(5rem, 5%);
  position: sticky;
  top: 0;
  z-index: 1;
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

const App = (): ReactElement => {
  const [selectedTab, setSelectedTab] =
    useState<(typeof tabs)[number]["title"]>("home");
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <TopRow>
        <TabWidth>
          {tabs.map(({ title, element }, index) => {
            return (
              <TabTitleSpan $active={title === selectedTab} key={title}>
                <TabTitle
                  onClick={() => setSelectedTab(title)}
                  $title={title}
                  $active={title === selectedTab}
                >
                  {title}
                </TabTitle>
              </TabTitleSpan>
            );
          })}
        </TabWidth>
        <ThemeLabel
          $checked={darkThemeEnabled}
          aria-label={`Turn ${darkThemeEnabled ? "off" : "on"} dark mode`}
        >
          <ThemeButton
            onClick={() => setDarkThemeEnabled((prevEnabled) => !prevEnabled)}
          />
        </ThemeLabel>
      </TopRow>
      <HomeContainer>
        {tabs.find(({ title }) => title === selectedTab)?.element}
      </HomeContainer>
    </ThemeProvider>
  );
};

export default App;
