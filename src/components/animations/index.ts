"use client";
import Image from "../Image";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export { MotionImage, MotionBox, MotionTypography, MotionButton };
