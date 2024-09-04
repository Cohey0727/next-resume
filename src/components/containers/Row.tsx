import { Box, BoxProps } from "@mui/material";

type RowProps = BoxProps;

const Row: React.FC<RowProps> = (props) => {
  const { sx, ...rest } = props;
  return <Box {...rest} sx={{ ...sx, display: "flex", flexDirection: "row" }} />;
};

export type { RowProps };
export default Row;
