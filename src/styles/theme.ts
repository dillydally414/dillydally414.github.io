import { css, DefaultTheme } from "styled-components";

const themeDefaults = {
  defaultProps: css`
    transition-duration: 0.5s;
  `,
  titleFont: "DM Sans",
  bodyFont: "Gothic A1",
} as const;

export const darkTheme: DefaultTheme = {
  background: "#232244",
  text: "#FFFFFF",
  text2: "#F4D6CC",
  accent: "#FFC933",
  accent2: "#A6E1FA",
  ...themeDefaults,
};

export const lightTheme: DefaultTheme = {
  background: "#FCF0EE",
  text: darkTheme.background,
  text2: "#542111",
  accent: "#DA1643",
  accent2: "#5465FF",
  ...themeDefaults,
};
