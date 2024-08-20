import { SxProps, Theme } from "@mui/material/styles";

const styles = {
  paper: {
    p: 4,
    mb: 3,
    height: "100%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fffef7",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    borderRadius: "2px",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0.03)), linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0.03))",
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 10px 10px",
      pointerEvents: "none",
    },
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
  contentBox: {
    opacity: 1,
    transition: "opacity 0.5s",
  },
  position: {
    mb: 1,
    fontWeight: "bold",
  },
  company: {
    mb: 2,
    color: "text.secondary",
  },
  label: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
  },
  duration: {
    textAlign: { xs: "left", md: "right" },
    fontStyle: "italic",
  },
  divider: {
    my: 2,
  },
  sectionTitle: {
    mb: 1,
    fontWeight: "bold",
  },
  list: {
    pl: 2,
    mb: 2,
  },
  listItem: {
    py: 0.5,
  },
  skillsBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    mb: 2,
  },
  skillChip: {
    m: 0.5,
  },
} satisfies Record<string, SxProps<Theme>>;

export default styles;
