import { SxProps, Theme } from "@mui/material";

const styles = {
  root: {
    minHeight: "100vh",
    width: "100vw",
    overflowX: "hidden",
    backgroundColor: "background.default",
  },
  featuresParallax: {},
  featuresSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: {
      xs: 6,
      sm: 8,
      md: 10,
    },
  },
  featuresItemContainer: {
    position: "absolute",
    display: "flex",
    height: "100svh",
    width: "100vw",
    backgroundColor: "background.default",
    paddingTop: {
      xs: 12,
      sm: 12,
      md: 8,
    },
    px: {
      xs: 6,
      sm: 8,
      md: 10,
    },
  },
  featureTitle: {
    mb: {
      xs: 6,
      sm: 8,
      md: 10,
    },
    fontSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3rem",
    },
    fontWeight: "bold",
    color: "text.primary",
  },
  ctaSection: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "primary.main",
    color: "primary.contrastText",
    py: {
      xs: 6,
      sm: 8,
      md: 10,
    },
  },
  ctaTitle: {
    mb: 4,
    fontSize: {
      xs: "1.8rem",
      sm: "2.2rem",
      md: "2.5rem",
    },
    fontWeight: "bold",
  },
  ctaButtonWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  ctaButton: {
    backgroundColor: "background.paper",
    color: "primary.main",
    "&:hover": {
      backgroundColor: "background.default",
    },
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      md: "1.2rem",
    },
    py: 1.5,
    px: 4,
  },
} satisfies Record<string, SxProps<Theme>>;

export default styles;
