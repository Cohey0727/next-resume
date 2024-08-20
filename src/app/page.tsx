"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

import styles from "./page.styles";
import { Parallax } from "@/components";
import { StaticImageData } from "next/image";
import { resumeEn } from "@/data";

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
        <Parallax frame={resumeEn.careerHistory.length + 2}>
          {(progress) => {
            return resumeEn.careerHistory.map((career, index) => {
              const itemProgress = clampRange(progress, [
                (index + 1) / (resumeEn.careerHistory.length + 1),
                (index + 2) / (resumeEn.careerHistory.length + 1),
              ]);

              const sign = index % 2 === 0 ? -1 : 1;
              return (
                <Box
                  key={career.company}
                  sx={{
                    ...styles.featuresItemContainer,
                    transform: `translateX(${itemProgress * 100 * sign}vw)`,
                    zIndex: resumeEn.careerHistory.length - index,
                  }}
                >
                  {/* <FeatureItem index={index} {...career} /> */}
                </Box>
              );
            });
          }}
        </Parallax>
      </Box>
      <Parallax frame={3}>
        {(progress) => {
          const titleProgress = mapProgress(progress, [1 / 3, 2 / 3]);
          const buttonProgress = mapProgress(progress, [2 / 3, 1]);
          return (
            <Box sx={styles.ctaSection}>
              <Container maxWidth="md">
                <Typography
                  variant="h3"
                  align="center"
                  sx={styles.ctaTitle}
                  style={{
                    opacity: titleProgress,
                    transform: `translateY(${(1 - titleProgress) * 50}px)`,
                  }}
                >
                  あなたの英語学習を革新する準備はできていますか？
                </Typography>
                <Box sx={styles.ctaButtonWrapper}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={styles.ctaButton}
                    style={{
                      opacity: buttonProgress,
                      transform: `translateY(${(1 - buttonProgress) * 30}px)`,
                    }}
                  >
                    無料で試す
                  </Button>
                </Box>
              </Container>
            </Box>
          );
        }}
      </Parallax>
    </Box>
  );
};

export default Page;
