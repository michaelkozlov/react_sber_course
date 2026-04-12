import { Box } from "@mui/material";
import { TodoListOptimistic } from "features/react19Examples/ TodoListOptimistic";
import { ActionStateWithReducer } from "features/react19Examples/ActionStateWithReducer";
import { FormWithAsyncSave } from "features/react19Examples/FormWithAsyncSave";
import type { FC } from "react";

export const Task9Page: FC = () => {
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
        <FormWithAsyncSave />
        <TodoListOptimistic />
        <ActionStateWithReducer />
      </Box>
    </Box>
  );
};
