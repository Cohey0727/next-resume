import React, { useMemo } from "react";
import styles from "./CareerHistoryList.styles";
import { Resume } from "@/models/resume";
import CareerHistoryListItem from "../CareerHistoryListItem";
import Parallax from "../Parallax";
import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

interface CareerHistoryListProps {
  resume: Resume;
}

const locale: string = "en";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return locale === "ja" ? format(date, "yyyy年MM月", { locale: ja }) : format(date, "MMM yyyy");
};

const CareerHistoryList: React.FC<CareerHistoryListProps> = (props) => {
  const { resume } = props;

  const tilts = useMemo(
    () => resume.careerHistory.map(() => Math.random() * 2 - 1),
    [resume.careerHistory],
  );

  const offsets = useMemo<[number, number][]>(
    () => resume.careerHistory.map(() => [Math.random() * 16 - 8, Math.random() * 16 - 8]),
    [resume.careerHistory],
  );

  return (
    <Parallax
      anchor="bottom"
      background={
        <div>
          {resume.careerHistory.map((career, index) => {
            const positionIndex = index + 1;
            const durationText = career.duration.end
              ? `${formatDate(career.duration.start)} - ${formatDate(career.duration.end)}`
              : `${formatDate(career.duration.start)} - ${locale === "ja" ? "現在" : "Present"}`;
            return (
              <Typography
                key={positionIndex}
                variant="body2"
                color="textSecondary"
                sx={{ display: "block", width: "200px", height: "100lvh" }}
              >
                {durationText}
              </Typography>
            );
          })}
        </div>
      }
    >
      {(progress) => {
        return (
          <Box sx={styles.root}>
            {resume.careerHistory.map((career, index) => {
              const positionIndex = index + 1;
              const itemProgress =
                1 -
                Math.max(
                  0,
                  Math.min(
                    1,
                    (progress - positionIndex / resume.careerHistory.length) *
                      resume.careerHistory.length,
                  ),
                );
              return (
                <Box
                  key={positionIndex}
                  sx={{
                    transform: [
                      `translateX(${(1 - itemProgress) * 100}%)`,
                      `rotate(${tilts[index]}deg)`,
                      `translate(${offsets[index][0]}px, ${offsets[index][1]}px)`,
                    ].join(" "),
                    transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: resume.careerHistory.length - positionIndex,
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
  );
};

export default CareerHistoryList;
