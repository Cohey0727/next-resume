import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  SxProps,
  Theme,
  Paper,
  Box,
  Chip,
} from "@mui/material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { CareerHistory } from "@/models/resume";
import { format, parseISO } from "date-fns";

interface CareerTimelineItemProps {
  career: CareerHistory;
}

const styles = {
  listItem: {
    py: 0,
  },
  timelineContent: {
    px: 2,
  },
} satisfies Record<string, SxProps<Theme>>;

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "Present";
  return format(parseISO(dateString), "MMM yyyy");
};

const CareerTimelineItem: React.FC<CareerTimelineItemProps> = ({ career }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={styles.timelineContent}>
        <Typography variant="h6">
          {formatDate(career.period[0])} - {formatDate(career.period[1])}
        </Typography>
        <Box sx={{ p: 2, bgcolor: "#eee4" }}>
          <Typography variant="h6">{career.companyName}</Typography>
          <Typography>Role: {career.role}</Typography>
          <Typography variant="subtitle1">Technical Stack:</Typography>
          <List>
            {Object.entries(career.technicalStack).map(([key, value]) => (
              <ListItem key={key} sx={styles.listItem}>
                <ListItemText
                  primary={
                    <Box>
                      {key}:
                      {value.map((item) => (
                        <Chip key={item} label={item} sx={{ mx: 1 }} />
                      ))}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography>{career.description}</Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CareerTimelineItem;
