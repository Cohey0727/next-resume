import { SxProps, Theme } from "@mui/material/styles";

const styles = {
  paper: {
    padding: 5,
    marginBottom: 3,
    width: "900px",
    height: "1600px",
    overflow: "auto",
    transformOrigin: "center",
  },
  label: {
    color: "secondary",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 0.5,
    fontFamily: "Roboto",
  },
  companyName: {
    fontWeight: "bold",
    marginBottom: 2,
    fontSize: 32,
  },
  position: {
    color: "primary",
    marginBottom: 1,
  },
  duration: {
    color: "secondary",
    fontSize: 24,
  },
  sectionContainer: {
    marginTop: 2,
    py: 1,
  },
  sectionBodyContainer: {
    pt: 1,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
    paddingBottom: 0.5,
    marginBottom: 1.5,
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
    gap: 1,
  },
  skill: {
    backgroundColor: (theme) => theme.palette.background.default,
    border: (theme) => `1px solid ${theme.palette.divider}`,
  },
} satisfies Record<string, SxProps<Theme>>;

export default styles;
