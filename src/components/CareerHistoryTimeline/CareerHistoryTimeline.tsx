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
import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { styles } from "./CareerHistoryTimeline.styles";
import { Resume } from "@/models/resume";

type CareerHistoryTimelineProps = {
  resume: Resume;
};

const CareerHistoryTimeline: React.FC<CareerHistoryTimelineProps> = ({ resume }) => {
  return (
    <Timeline position="alternate">
      {resume.careerHistory.map((career, index: number) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {career.duration}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            {index !== resume.careerHistory.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={styles.paper}>
              <Typography variant="h6" component="h3">
                {career.position}
              </Typography>
              <Typography>{career.company}</Typography>
              <Typography variant="subtitle1" sx={styles.subtitle}>
                Responsibilities:
              </Typography>
              <List dense>
                {career.responsibilities.map((resp: string, respIndex: number) => (
                  <ListItem key={respIndex}>
                    <ListItemText primary={resp} />
                  </ListItem>
                ))}
              </List>
              {career.achievements.length > 0 && (
                <>
                  <Typography variant="subtitle1" sx={styles.subtitle}>
                    Achievements:
                  </Typography>
                  <List dense>
                    {career.achievements.map((achievement: string, achieveIndex: number) => (
                      <ListItem key={achieveIndex}>
                        <ListItemText primary={achievement} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
              {career.skillsAcquired.length > 0 && (
                <>
                  <Typography variant="subtitle1" sx={styles.subtitle}>
                    Skills Acquired:
                  </Typography>
                  <Typography variant="body2" sx={styles.skillsText}>
                    {career.skillsAcquired.join(", ")}
                  </Typography>
                </>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export type { CareerHistoryTimelineProps };
export default CareerHistoryTimeline;
