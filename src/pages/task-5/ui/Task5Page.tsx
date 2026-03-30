import { Box } from "@mui/material";
import { ClickTimer } from "features/refExamples/ClickTimer";
import { DebouncedLogger } from "features/refExamples/DebouncedLogger";
import { FocusTracker } from "features/refExamples/FocusTracker";
import { PreviousInput } from "features/refExamples/PreviousInput";
import type { FC } from "react";

export const Task5Page: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          gap: 2,
          mb: 4,
          maxWidth: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <ClickTimer />
        <PreviousInput />
        <FocusTracker />
        <DebouncedLogger />
      </Box>
    </Box>
  );
};
