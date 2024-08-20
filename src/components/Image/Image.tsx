"use client";
import { Box, BoxProps } from "@mui/material";
import NextImage from "next/image";
import { forwardRef } from "react";

type BaseProps = React.ComponentProps<typeof NextImage>;
type ImageProps = BaseProps & Omit<BoxProps, "component">;

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <Box ref={ref} component={NextImage} {...props} />;
});

export type { ImageProps };
export default Image;
