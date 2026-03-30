import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, type FC } from "react";

export const FocusTracker: FC = () => {
  const counter = useRef<number>(0);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const setFocus = () => {
    firstInputRef.current?.focus();
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      counter.current += 1;
      console.log(
        `Количество переходов фокуса на первый инпут ${counter.current}`,
      );
    }
  };

  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        FocusTracker
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <TextField
          inputRef={firstInputRef}
          id="outlined-basic"
          label="Текст 1"
          variant="outlined"
          onFocus={handleFocus}
        />
        <TextField
          inputRef={secondInputRef}
          id="outlined-basic"
          label="Текст 2"
          variant="outlined"
        />

        <Button onClick={setFocus}>Фокус</Button>
      </Box>
    </Box>
  );
};
