import React from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
  Chip,
  Grid,
  Divider,
} from "@mui/material";
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
      <Grid container spacing={2} sx={{ mb: 3, height: "12%", flex: "0 0 auto" }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" component="h3" gutterBottom>
            {career.position}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {career.company}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" align="right">
            {formatDate(career.duration.start)} - {formatDate(career.duration.end)}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Grid container spacing={4} sx={{ flex: "1 1 auto" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={styles.label}>
            Responsibilities
          </Typography>
          <List disablePadding>
            {career.responsibilities.map((resp, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemText primary={resp} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={styles.label}>
            Achievements
          </Typography>
          <List disablePadding>
            {career.achievements.map((achievement, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemText primary={achievement} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ height: "20%", flex: "0 0 auto" }}>
        <Typography variant="h6" gutterBottom sx={styles.label}>
          Skills Acquired
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {career.skillsAcquired.map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default CareerHistoryListItem;
