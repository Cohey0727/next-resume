import React from "react";
import styles from "./CareerHistoryTimeline.styles";
import { Resume } from "@/models/resume";
import CareerHistoryTimelineItem from "../CareerHistoryTimelineItem";
import Parallax from "../Parallax";
import { Box } from "@mui/material";

interface CareerHistoryTimelineProps {
  resume: Resume;
}

const CareerHistoryTimeline: React.FC<CareerHistoryTimelineProps> = (props) => {
  const { resume } = props;
  return (
    <Parallax background={<div style={{ height: "1000vh" }} />}>
      {(progress) => {
        return (
          <Box sx={styles.root}>
            {resume.careerHistory.map((career, index) => {
              const itemProgress = Math.max(
                0,
                Math.min(
                  1,
                  (progress - index / resume.careerHistory.length) * resume.careerHistory.length,
                ),
              );
              return (
                <Box
                  key={index}
                  style={{
                    transform: `translateX(${(1 - itemProgress) * 100}%)`,
                    opacity: itemProgress,
                    transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: index,
                  }}
                >
                  <CareerHistoryTimelineItem career={career} />
                </Box>
              );
            })}
          </Box>
        );
      }}
    </Parallax>
  );
};

export default CareerHistoryTimeline;
