import { Box, Button } from "@mui/material";
import type { FC } from "react";
import { ConfirmDialog } from "shared/ui/ConfirmDialog/ConfirmDialog";
import { useConfirmDialog } from "shared/ui/ConfirmDialog/useConfirmDialog";
import { Tooltip } from "shared/ui/Tooltip/Tooltip";

export const PortalShowcasePage: FC = () => {
  const { isOpen, onCancel, onConfirm, options, showConfirmDialog } =
    useConfirmDialog();

  const handleDelete = async () => {
    const result = await showConfirmDialog({
      title: "Удалить элемент?",
      subtitle: "Это действие необратимо.",
    });

    if (result) {
      alert("Удалено!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        gap: 5,
      }}
    >
      <Tooltip text="Текст тултипа" position="top">
        <Button>Наведите</Button>
      </Tooltip>

      <Button variant="contained" color="error" onClick={handleDelete}>
        Удалить
      </Button>

      <ConfirmDialog
        isOpen={isOpen}
        title={options?.title ?? ""}
        subtitle={options?.subtitle ?? ""}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </Box>
  );
};
