export type Mode = "light" | "dark";

export const lightTheme: object = {
  background__color: "#FEFEFE",
  text__color__primary: "#0F0F0F",
};

export const darkTheme: object = {
  background__color: "#0F0F0F",
  text__color__primary: "#FEFEFE",
};

const Theme = {
  lightTheme,
  darkTheme,
};

export default Theme;
