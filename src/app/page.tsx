"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "./page.styles";
import { resumeEn } from "@/data";
import CareerHistoryList from "@/components/CareerHistoryList";
import HeroImage from "@/components/HeroImage";

const Page: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <HeroImage />
      <Box sx={styles.featuresSection}>
        <CareerHistoryList resume={resumeEn} />
      </Box>
    </Box>
  );
};

export default Page;
