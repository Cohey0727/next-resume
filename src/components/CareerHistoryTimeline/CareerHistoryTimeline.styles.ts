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
    "& .MuiTimelineItem-root:before": {
      flex: 0,
      padding: 0,
    },
  },
} as const satisfies Record<string, SxProps<Theme>>;

export default styles;
