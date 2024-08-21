import { SxProps, Theme } from "@mui/material";

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: (theme: Theme) =>
      `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: "primary.contrastText",
    textAlign: "center",
    padding: 2,
    overflow: "hidden",
  },
  image: {
    objectFit: "cover",
  },
  wave: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  title: {
    fontWeight: "bold",
    mb: 4,
    fontSize: {
      xs: "2.5rem",
      sm: "3.5rem",
      md: "4.5rem",
    },
  },
  subtitle: {
    mb: 6,
    px: 3,
    whiteSpace: {
      xs: "pre-wrap",
      md: "nowrap",
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.5rem",
      md: "2rem",
    },
  },
  button: {
    backgroundColor: "background.paper",
    color: "primary.main",
    "&:hover": {
      backgroundColor: "background.default",
    },
    fontSize: {
      xs: "0.9rem",
      sm: "1rem",
      md: "1.1rem",
    },
  },
} satisfies Record<string, SxProps<Theme>>;

export default styles;
