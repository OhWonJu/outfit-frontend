// export type Mode = "light" | "dark";

export const lightTheme: object = {
  // background_color: "#F8F9FA",
  background_color: "#F9FAF8",
  container_bg_color: "#FCFCFC",
  text_symbol_color: "#0066A0",
  text_color_primary: "#0F0F0F",
  text_color_secondary: "#F0F0F0",
  black_primary: "#262626",
  gray_dark: "#999999",
  gray_primary: "#AFAFAF",
  gray_light: "#F3F3F3",
};

export const darkTheme: object = {
  background_color: "#121212",
  container_bg_color: "#1E1E1E",
  text_color_primary: "#FEFEFE",
};

const Theme = {
  lightTheme,
  darkTheme,
};

export default Theme;
