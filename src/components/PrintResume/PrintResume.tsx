import React from "react";
import {
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  SxProps,
  Theme,
  Avatar,
  Divider,
} from "@mui/material";
import { Timeline, timelineItemClasses } from "@mui/lab";
import { Resume } from "@/models/resume";
import CareerTimelineItem from "./CareerTimelineItem";
import { Column, Row } from "../containers";
import profileImage from "@/assets/images/profile.jpg";

const styles = {
  root: {
    width: "210mm",
    minHeight: "297mm",
    px: "20mm",
    pb: "20mm",
    mx: "auto",
    my: 4,
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    "@media print": {
      width: "210mm",
      minHeight: "297mm",
      margin: "0mm",
      boxShadow: "none",
      breakAfter: "always",
    },
  },
  section: {
    mt: 2,
    mb: 1,
  },
  listItem: {
    py: 0,
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 2,
  },
  divider: {
    my: 2,
  },
} satisfies Record<string, SxProps<Theme>>;

interface ResumePaperProps {
  resume: Resume;
}

const ResumePaper: React.FC<ResumePaperProps> = (props) => {
  const { resume } = props;
  const { personalInfo, careerHistories } = resume;

  return (
    <Paper sx={styles.root}>
      <Column mx="-20mm" px="20mm" pt="10mm" pb="10mm" bgcolor="#777">
        <Typography variant="h5" mb={2} color="white">
          {personalInfo.name}
        </Typography>
        <Row alignItems="center" justifyContent="flex-start">
          <Column alignItems="center" justifyContent="center" mr={4}>
            <Avatar alt="Profile" src={profileImage.src} sx={styles.avatar} />
          </Column>
          <Column flex="1" alignItems="center">
            <Column>
              <Row>
                <Box width={144}>
                  <Typography color="white">Affiliation: </Typography>
                </Box>
                <Box>
                  <Typography color="white">{personalInfo.affiliation}</Typography>
                </Box>
              </Row>
              <Row>
                <Box width={144}>
                  <Typography color="white">Age: </Typography>
                </Box>
                <Box>
                  <Typography color="white">{personalInfo.age}</Typography>
                </Box>
              </Row>
              <Row>
                <Box width={144}>
                  <Typography color="white">Gender: </Typography>
                </Box>
                <Box>
                  <Typography color="white">{personalInfo.gender}</Typography>
                </Box>
              </Row>
              <Row>
                <Box width={144}>
                  <Typography color="white">Education: </Typography>
                </Box>
                <Box flex={"0 0 0"}>
                  <Typography color="white" noWrap>
                    {personalInfo.education}
                  </Typography>
                </Box>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
      <Row gap={2}>
        <Box sx={styles.section} flex="1 1 0">
          <Typography variant="h6">Technical Skills</Typography>
          <List>
            {personalInfo.technicalSkills.map((skill, index) => (
              <ListItem key={index} sx={styles.listItem}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={styles.section} flex="1 1 0">
          <Typography variant="h6">Qualifications</Typography>
          <List>
            {personalInfo.qualifications.map((qual, index) => (
              <ListItem key={index} sx={styles.listItem}>
                <ListItemText primary={qual} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Row>

      <Box sx={styles.section}>
        <Typography variant="h6">Specialties</Typography>
      </Box>
      <Typography>{personalInfo.specialties}</Typography>

      <Divider sx={styles.divider} />

      <Box sx={styles.section}>
        <Typography variant="h5">Career History</Typography>
      </Box>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {careerHistories.map((career) => (
          <CareerTimelineItem key={career.description} career={career} />
        ))}
      </Timeline>
    </Paper>
  );
};

export default ResumePaper;
