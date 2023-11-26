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
  background: darkTheme.text2,
  text: darkTheme.background,
  text2: "#88665D",
  accent: "#3772FF",
  accent2: "#70877F",
  ...themeDefaults,
};
