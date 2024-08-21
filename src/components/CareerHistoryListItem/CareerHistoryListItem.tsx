import React from "react";
import { Typography, Paper, List, ListItem, ListItemText, Box, Chip, Grid } from "@mui/material";
import { CareerHistory } from "@/models/resume";
import { format } from "date-fns";
import styles from "./CareerHistoryListItem.styles";

type CareerHistoryListItemProps = {
  career: CareerHistory;
};

const formatDate = (dateString: string | null) => {
  if (!dateString) return "Present";
  return format(new Date(dateString), "MMM yyyy");
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
            {career.company}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" sx={styles.label}>
            Position
          </Typography>
          <Typography variant="h6" sx={styles.position}>
            {career.position}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" sx={styles.label}>
            Duration
          </Typography>
          <Typography variant="body1" sx={styles.duration}>
            {formatDate(career.duration.start)} - {formatDate(career.duration.end)}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          Responsibilities
        </Typography>
        <List disablePadding>
          {career.responsibilities.map((resp, index) => (
            <ListItem key={index} disablePadding sx={styles.listItem}>
              <ListItemText primary={resp} sx={styles.listItemText} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          Achievements
        </Typography>
        <List disablePadding>
          {career.achievements.map((achievement, index) => (
            <ListItem key={index} disablePadding sx={styles.listItem}>
              <ListItemText primary={achievement} sx={styles.listItemText} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={styles.sectionContainer}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          Skills Acquired
        </Typography>
        <Box sx={styles.skillsContainer}>
          {career.skillsAcquired.map((skill, index) => (
            <Chip key={index} label={skill} sx={styles.skill} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default CareerHistoryListItem;
