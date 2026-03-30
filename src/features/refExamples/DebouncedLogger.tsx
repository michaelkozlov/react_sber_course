import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState, type FC } from "react";

export const DebouncedLogger: FC = () => {
  const [value, setValue] = useState<string>("");
  const timerRef = useRef<number>(null);

  const debouncedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    setValue(e.target.value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      console.log("Значение", value);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ mb: 6 }}>
        DebouncedLogger
      </Typography>

      <TextField
        id="outlined-basic"
        label="Текст 1"
        variant="outlined"
        value={value}
        onChange={debouncedChange}
      />
    </Box>
  );
};
