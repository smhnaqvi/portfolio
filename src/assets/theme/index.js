import { createTheme } from "@mui/material/styles";

const LightThemeConfig = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(",")
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FFB400"
    },
    background: {
      default: "#E5E5E5"
    }
  }
});

export const DarkThemeConfig = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(",")
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FFB400"
    },
    background: {
      default: "#121212"
    }
  }
});

export default LightThemeConfig;
