import { Box, Button, Typography } from "@mui/material";
import { useRef, type FC } from "react";

interface IClickData {
  startTime: number | null;
  clickCount: number;
}

export const ClickTimer: FC = () => {
  const clickDataRef = useRef<IClickData>({
    startTime: null,
    clickCount: 0,
  });

  const handleClick = () => {
    const current = clickDataRef.current;
    if (current.startTime === null) {
      current.startTime = Date.now();
    }

    current.clickCount += 1;

    console.log(current.clickCount, "Клики");
    console.log(
      Date.now() - (current.startTime ?? Date.now()),
      "Разница во времени от первого до последнего клика",
    );
  };

  return (
    <>
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        ClickTimer
      </Typography>

      <Button onClick={handleClick}>Кликни</Button>
    </>
  );
};
