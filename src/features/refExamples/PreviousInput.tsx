import { Box, TextField, Typography } from "@mui/material";
import { useState, type FC } from "react";
import { usePrevInputValue } from "shared/lib/hooks/usePrevInputValue";

export const PreviousInput: FC = () => {
  const [value, setValue] = useState("");
  const prevValue = usePrevInputValue(value);

  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Предыдущее состояние: {prevValue}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          id="outlined-basic"
          value={value}
          label="Текст 1"
          variant="outlined"
        />
      </Box>
    </Box>
  );
};
