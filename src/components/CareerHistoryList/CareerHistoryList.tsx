import React, { useMemo } from "react";
import styles from "./CareerHistoryList.styles";
import { Resume } from "@/models/resume";
import CareerHistoryListItem from "../CareerHistoryListItem";
import Parallax from "../Parallax";
import { Box, Typography } from "@mui/material";

interface CareerHistoryListProps {
  resume: Resume;
}

const CareerHistoryList: React.FC<CareerHistoryListProps> = (props) => {
  const { resume } = props;

  const tilts = useMemo(
    () => resume.careerHistories.map(() => Math.random() * 2 - 1),
    [resume.careerHistories],
  );

  const offsets = useMemo<[number, number][]>(
    () => resume.careerHistories.map(() => [Math.random() * 16 - 8, Math.random() * 16 - 8]),
    [resume.careerHistories],
  );

  return (
    <Box sx={styles.root}>
      <Typography variant="h2" sx={styles.title}>
        Career History
      </Typography>
      <Parallax
        anchor="bottom"
        background={<div style={{ height: `${100 * resume.careerHistories.length}lvh` }} />}
      >
        {(progress) => {
          return (
            <Box sx={styles.items}>
              {resume.careerHistories.map((career, index) => {
                const positionIndex = index + 1;
                const itemProgress =
                  1 -
                  Math.max(
                    0,
                    Math.min(
                      1,
                      (progress - positionIndex / resume.careerHistories.length) *
                        resume.careerHistories.length,
                    ),
                  );
                const commonTransforms = [
                  `translateX(${(1 - itemProgress) * 100}%)`,
                  `rotate(${tilts[index]}deg)`,
                  `translate(${offsets[index][0]}px, ${offsets[index][1]}px)`,
                ];
                return (
                  <Box
                    key={positionIndex}
                    sx={{
                      transform: commonTransforms.join(" "),
                      transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                      transformOrigin: "center center",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      zIndex: resume.careerHistories.length - positionIndex,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                  >
                    <CareerHistoryListItem career={career} />
                  </Box>
                );
              })}
            </Box>
          );
        }}
      </Parallax>
    </Box>
  );
};

export default CareerHistoryList;
