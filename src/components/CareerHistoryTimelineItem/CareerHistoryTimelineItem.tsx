import React from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Paper, List, ListItem, ListItemText, Box, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import styles from "./CareerHistoryTimelineItem.styles";
import { CareerHistory } from "@/models/resume";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type CareerHistoryTimelineItemProps = {
  career: CareerHistory;
};

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const CareerHistoryTimelineItem: React.FC<CareerHistoryTimelineItemProps> = (props) => {
  const { career } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <TimelineItem>
      <TimelineOppositeContent flex={"0 !important"}>
        <Typography variant="body2" color="textSecondary" sx={{ display: "block", width: "200px" }}>
          {career.duration}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" sx={styles.timelineDot}>
          <WorkIcon />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
        >
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
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CareerHistoryTimelineItem;
