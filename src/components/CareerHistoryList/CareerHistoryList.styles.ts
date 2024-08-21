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

const styles = {
  root: {
    width: "100%",
    height: "100%",
    py: 2,
  },
  items: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    fontFamily: ["Quicksand", "Inter", "Arial", "sans-serif"].join(","),
    marginBottom: "1rem",
    textAlign: "center",
    animation: `${fadeIn} 0.5s ease-out`,
  },
} as const satisfies Record<string, SxProps<Theme>>;

export default styles;
