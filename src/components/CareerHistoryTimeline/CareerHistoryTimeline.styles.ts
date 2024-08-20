import { SxProps, Theme } from "@mui/material/styles";

export const styles: Record<string, SxProps<Theme>> = {
  paper: {
    p: 2,
    mb: 2,
    backgroundColor: "background.paper",
    borderRadius: 1,
    boxShadow: 1,
  },
  jobTitle: {
    fontWeight: "bold",
    mb: 1,
  },
  company: {
    fontStyle: "italic",
    mb: 2,
  },
  subtitle: {
    mt: 2,
    mb: 1,
    fontWeight: "medium",
  },
  list: {
    pl: 2,
  },
  listItem: {
    pl: 0,
  },
  skillsText: {
    mt: 1,
    fontStyle: "italic",
  },
};
