import { Box, BoxProps } from "@mui/material";

type ColumnProps = BoxProps;

const Column: React.FC<ColumnProps> = (props) => {
  const { sx, ...rest } = props;
  return <Box {...rest} sx={{ ...sx, display: "flex", flexDirection: "column" }} />;
};

export type { ColumnProps };
export default Column;
