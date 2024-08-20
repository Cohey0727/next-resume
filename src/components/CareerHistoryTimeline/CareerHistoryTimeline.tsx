import React from "react";
import { Timeline } from "@mui/lab";
import styles from "./CareerHistoryTimeline.styles";
import { Resume } from "@/models/resume";
import CareerHistoryTimelineItem from "../CareerHistoryTimelineItem";

interface CareerHistoryTimelineProps {
  resume: Resume;
}

const CareerHistoryTimeline: React.FC<CareerHistoryTimelineProps> = (props) => {
  const { resume } = props;
  return (
    <Timeline position="right" sx={styles.root}>
      {resume.careerHistory.map((career, index) => (
        <CareerHistoryTimelineItem key={index} career={career} />
      ))}
    </Timeline>
  );
};

export default CareerHistoryTimeline;
