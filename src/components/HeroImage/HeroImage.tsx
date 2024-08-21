"use client";

import React from "react";
import styles from "./HeroImage.styles";
import mockImage from "@/assets/images/apple-vision-pro-try.jpg";
import { MotionBox, MotionImage, MotionTypography } from "../animations";

const HeroImage = () => (
  <MotionBox
    sx={styles.container}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <MotionImage
      src={mockImage}
      alt=""
      sx={styles.image}
      initial={{ scale: 1.0 }}
      animate={{ scale: 1.2 }}
      transition={{ duration: 10 }}
    />
    <MotionBox
      sx={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <MotionTypography
        variant="h1"
        sx={styles.title}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
      >
        Kohei Okamoto
      </MotionTypography>
      <MotionTypography
        variant="h4"
        sx={styles.subtitle}
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
      >
        Welcome to my portfolio
      </MotionTypography>
    </MotionBox>
  </MotionBox>
);

export default HeroImage;
