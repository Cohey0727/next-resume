import { keyframes } from "@mui/system";
import { SxProps, Theme } from "@mui/material/styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const styles: Record<string, SxProps<Theme>> = {
  timeline: {
    "& .MuiTimelineItem-root:before": {
      flex: 0,
      padding: 0,
    },
  },
  paper: {
    p: 3,
    mb: 2,
    borderRadius: 2,
    boxShadow: 10,
    background: (theme) =>
      `linear-gradient(-45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
    backgroundSize: "400% 400%",
    animation: `${colorChange} 15s ease infinite`,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: 20,
    },
  },
  content: {
    animation: `${fadeIn} 1s ease-out`,
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 1,
    p: 2,
  },
  jobTitle: {
    fontWeight: "bold",
    mb: 1,
    color: "text.primary",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  },
  company: {
    fontStyle: "italic",
    mb: 2,
    color: "text.secondary",
  },
  subtitle: {
    mt: 2,
    mb: 1,
    fontWeight: "medium",
    color: "primary.main",
    textTransform: "uppercase",
  },
  list: {
    pl: 2,
  },
  listItem: {
    pl: 0,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  skillsText: {
    mt: 1,
    fontStyle: "italic",
    color: "text.secondary",
  },
  timelineDot: {
    boxShadow: 4,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  timelineConnector: {
    background: (theme) =>
      `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
};

export default styles;
