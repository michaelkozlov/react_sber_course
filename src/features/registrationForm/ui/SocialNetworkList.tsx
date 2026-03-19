import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, TextField } from "@mui/material";
import type { FC } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import type { TFormValues } from "../model/types";

export const SocialNetworkList: FC = () => {
  const { control, trigger } = useFormContext<TFormValues>();
  const {
    fields: socialNetworkList,
    append: addItem,
    remove: removeItem,
  } = useFieldArray<TFormValues>({
    name: "socialNetworkList",
  });

  return (
    <>
      {socialNetworkList.map((socialNetworkItem, index) => (
        <Box
          key={socialNetworkItem.id}
          sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}
        >
          <Controller
            name={`socialNetworkList.${index}.value` as const}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ mb: 2 }}
                fullWidth
                label={`Соц сеть ${index + 1}`}
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          {!!index && (
            <IconButton
              onClick={() => removeItem(index)}
              sx={{ ml: 2, mt: "12px" }}
              color="error"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      ))}

      <Button
        onClick={() => {
          addItem({ value: "" });
          trigger("socialNetworkList");
        }}
        color="primary"
        sx={{ mb: 4 }}
        startIcon={<AddIcon />}
      >
        Добавить навык
      </Button>
    </>
  );
};
