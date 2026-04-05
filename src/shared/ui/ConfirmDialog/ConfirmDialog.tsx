import { Box, Button, Typography } from "@mui/material";
import type { FC } from "react";
import { createPortal } from "react-dom";
import { getConfirmRoot } from "./createConfirmContainer";
import styles from "./ConfirmDialog.module.css";

export interface IConfirmDialogProps {
  title: string;
  subtitle: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}

export const ConfirmDialog: FC<IConfirmDialogProps> = ({
  title,
  subtitle,
  onConfirm,
  onCancel,
  isOpen,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <Box
      className={styles.root}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <Typography variant="h4" component="div">
        {title}
      </Typography>

      <Typography variant="subtitle1" component="div">
        {subtitle}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button color="primary" onClick={onCancel}>
          Вернуться
        </Button>

        <Button color="error" onClick={onConfirm}>
          Удалить
        </Button>
      </Box>
    </Box>,
    getConfirmRoot(),
  );
};
