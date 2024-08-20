"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

import styles from "./page.styles";
import { resumeEn } from "@/data";
import CareerHistoryList from "@/components/CareerHistoryList/CareerHistoryList";

const mapProgress = (progress: number, range: [number, number]) => {
  const [start, end] = range;
  return Math.min(Math.max((progress - start) / (end - start), 0), 1);
};

function clampRange(value: number, range: [number, number]): number {
  const [min, max] = range;
  if (value <= min) return 0;
  if (value >= max) return 1;
  return (value - min) / (max - min);
}

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
