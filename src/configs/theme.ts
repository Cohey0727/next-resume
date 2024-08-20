"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
    fontFamily: ["Caveat", "Inter", "Arial", "sans-serif"].join(","),
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

export default theme;
