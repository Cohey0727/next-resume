import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Paper, List, ListItem, ListItemText, Box, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import styles from "./CareerHistoryTimeline.styles";
import { Resume } from "@/models/resume";

interface CareerHistoryTimelineProps {
  resume: Resume;
}

const CareerHistoryTimeline: React.FC<CareerHistoryTimelineProps> = (props) => {
  const { resume } = props;
  return (
    <Timeline position="right" sx={styles.timeline}>
      {resume.careerHistory.map((career, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {career.duration}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={styles.timelineDot}>
              <WorkIcon />
            </TimelineDot>
            {index !== resume.careerHistory.length - 1 && (
              <TimelineConnector sx={styles.timelineConnector} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={styles.paper}>
              <Box sx={styles.content}>
                <Typography variant="h6" component="h3" sx={styles.jobTitle}>
                  {career.position}
                </Typography>
                <Typography sx={styles.company}>{career.company}</Typography>
                <Typography variant="subtitle1" sx={styles.subtitle}>
                  Responsibilities
                </Typography>
                <List dense sx={styles.list}>
                  {career.responsibilities.map((resp: string, respIndex: number) => (
                    <ListItem key={respIndex} sx={styles.listItem}>
                      <ListItemText primary={resp} />
                    </ListItem>
                  ))}
                </List>
                {career.achievements.length > 0 && (
                  <>
                    <Typography variant="subtitle1" sx={styles.subtitle}>
                      Achievements
                    </Typography>
                    <List dense sx={styles.list}>
                      {career.achievements.map((achievement: string, achieveIndex: number) => (
                        <ListItem key={achieveIndex} sx={styles.listItem}>
                          <ListItemText primary={achievement} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
                {career.skillsAcquired.length > 0 && (
                  <>
                    <Typography variant="subtitle1" sx={styles.subtitle}>
                      Skills Acquired
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                      {career.skillsAcquired.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </>
                )}
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CareerHistoryTimeline;
