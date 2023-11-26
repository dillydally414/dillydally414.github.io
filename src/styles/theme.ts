import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  background: "#232244",
  text: "#FFFFFF",
  text2: "#F4D6CC",
  accent: "#FFC933",
  accent2: "#A6E1FA",
};

export const lightTheme: DefaultTheme = {
  background: darkTheme.text2,
  text: darkTheme.background,
  text2: "#88665D",
  accent: "#3772FF",
  accent2: "#70877F",
};
