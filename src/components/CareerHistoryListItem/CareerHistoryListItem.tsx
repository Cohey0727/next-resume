import React from "react";
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

const CareerHistoryListItem: React.FC<CareerHistoryListItemProps> = ({ career }) => {
  return (
    <Paper sx={styles.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={styles.label}>
            Company
          </Typography>
          <Typography variant="h5" component="h3" sx={styles.companyName}>
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
        <Typography variant="h6" sx={styles.sectionTitle} mb={1}>
          Description
        </Typography>
        <Typography variant="body1" sx={styles.duration}>
          {career.description}
        </Typography>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          Languages
        </Typography>
        <Box sx={{ ...styles.skillsContainer, ...styles.sectionBodyContainer }}>
          {career.technicalStack.languages.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          Databases
        </Typography>
        <Box sx={{ ...styles.skillsContainer, ...styles.sectionBodyContainer }}>
          {career.technicalStack.databases?.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          Server Os
        </Typography>
        <Box sx={{ ...styles.skillsContainer, ...styles.sectionBodyContainer }}>
          {career.technicalStack.serverOs?.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h6" sx={styles.sectionTitle}>
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
