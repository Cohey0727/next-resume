"use client";
import { createTheme } from "@mui/material/styles";

const handWritingTheme = createTheme({
  palette: {
    primary: {
      main: "#5625E0",
    },
    secondary: {
      main: "#B625A0",
    },
    background: {
      default: "#f0f4f8",
    },
  },
  typography: {
    fontFamily: ["Handlee", "Inter", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
        },
      },
    },
  },
});

const formalTheme = createTheme({
  palette: {
    primary: {
      main: "#5625E0",
    },
    secondary: {
      main: "#B625A0",
    },
    background: {
      default: "#f0f4f8",
    },
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
        },
      },
    },
  },
});

export { handWritingTheme, formalTheme };
