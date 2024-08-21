"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "./page.styles";
import { resumeEn } from "@/data";
import CareerHistoryList from "@/components/CareerHistoryList/CareerHistoryList";

const Page: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.featuresSection}>
        <Typography variant="h2" align="center" sx={styles.featureTitle}>
          Kohei Okamoto
        </Typography>
        <CareerHistoryList resume={resumeEn} />
      </Box>
    </Box>
  );
};

export default Page;
