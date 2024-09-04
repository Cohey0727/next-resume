import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Typography, Paper, Box, Chip, Grid } from "@mui/material";
import { WorkExperience } from "@/models/resume";
import { format, parseISO } from "date-fns";
import styles from "./CareerHistoryListItem.styles";

type CareerHistoryListItemProps = {
  career: WorkExperience;
};

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "Present";
  return format(parseISO(dateString), "MMM yyyy");
};

const defaultContainerHeight = 1600;

const CareerHistoryListItem: React.FC<CareerHistoryListItemProps> = ({ career }) => {
  const [paperHeight, setPaperHeight] = useState(0);
  useLayoutEffect(() => {
    const calcHeight = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const heightByWidth = (windowWidth * 16) / 9;
      setPaperHeight(Math.min(windowHeight, heightByWidth) * 0.92);
    };
    calcHeight();
    // 画面サイズが変わった時に高さを再計算
    window.addEventListener("resize", calcHeight);
    return () => window.removeEventListener("resize", calcHeight);
  }, []);

  return (
    <Paper
      sx={styles.paper}
      style={{
        transform: paperHeight ? `scale(${paperHeight / defaultContainerHeight})` : "",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={styles.label}>
            Company
          </Typography>
          <Typography variant="h3" component="h3" sx={styles.companyName}>
            {career.companyName}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" sx={styles.label}>
            Position
          </Typography>
          <Typography variant="h6" sx={styles.position}>
            {career.role}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" sx={styles.label}>
            Duration
          </Typography>
          <Typography variant="body1" sx={styles.duration}>
            {formatDate(career.period[0])} - {formatDate(career.period[1])}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h4" sx={styles.sectionTitle} mb={2}>
          Description
        </Typography>
        <Typography variant="body1" sx={styles.duration}>
          {career.description}
        </Typography>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Languages
        </Typography>
        <Box sx={{ ...styles.skillsContainer, ...styles.sectionBodyContainer }}>
          {career.technicalStack.languages.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Databases
        </Typography>
        <Box sx={{ ...styles.skillsContainer, ...styles.sectionBodyContainer }}>
          {career.technicalStack.databases?.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Server Os
        </Typography>
        <Box sx={{ ...styles.skillsContainer, ...styles.sectionBodyContainer }}>
          {career.technicalStack.serverOs?.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Frameworks
        </Typography>
        <Box sx={{ ...styles.skillsContainer, ...styles.sectionBodyContainer }}>
          {career.technicalStack.frameworks?.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default CareerHistoryListItem;
