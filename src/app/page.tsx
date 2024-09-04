"use client";
import React, { useState } from "react";
import { Box, Button, ThemeProvider } from "@mui/material";

import styles from "./page.styles";
import { resumeEn } from "@/data";
import CareerHistoryList from "@/components/CareerHistoryList";
import HeroImage from "@/components/HeroImage";
import { PrintResume } from "@/components";
import { themes } from "@/configs";

const Page: React.FC = () => {
  const [mode, setMode] = useState<"normal" | "print">("normal");

  return (
    <Box sx={styles.root}>
      {mode === "normal" && (
        <Box>
          <HeroImage />
          <Box sx={styles.featuresSection}>
            <CareerHistoryList resume={resumeEn} />
            <Button variant="contained" onClick={() => setMode("print")}>
              Print
            </Button>
          </Box>
        </Box>
      )}
      {mode === "print" && (
        <ThemeProvider theme={themes.formalTheme}>
          <Button sx={{ "@media print": { display: "none" } }} onClick={() => setMode("normal")}>
            Back
          </Button>
          <PrintResume resume={resumeEn} />
        </ThemeProvider>
      )}
    </Box>
  );
};

export default Page;
