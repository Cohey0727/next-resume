import { SxProps, Theme } from "@mui/material/styles";

const styles = {
  paper: {
    padding: (theme) => theme.spacing(3),
    marginBottom: (theme) => theme.spacing(3),
    height: {
      xs: "143vw",
      sm: "100vh",
    },
    width: {
      xs: "100vw",
      sm: "70vh",
    },
    overflow: "auto",
  },
  label: {
    color: (theme) => theme.palette.text.secondary,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: (theme) => theme.spacing(0.5),
    fontFamily: "Roboto",
  },
  companyName: {
    fontWeight: "bold",
    marginBottom: (theme) => theme.spacing(2),
  },
  position: {
    color: (theme) => theme.palette.text.primary,
    marginBottom: (theme) => theme.spacing(1),
  },
  duration: {
    color: (theme) => theme.palette.text.secondary,
  },
  sectionContainer: {
    marginTop: (theme) => theme.spacing(3),
    py: 1,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
    paddingBottom: (theme) => theme.spacing(0.5),
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItemText: {
    margin: 0,
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: (theme) => theme.spacing(1),
    py: 1,
  },
  skill: {
    backgroundColor: (theme) => theme.palette.background.default,
    border: (theme) => `1px solid ${theme.palette.divider}`,
  },
} satisfies Record<string, SxProps<Theme>>;

export default styles;
