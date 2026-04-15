import { Box, Button, TextField, Typography } from "@mui/material";
import { useActionState, type FC } from "react";

interface IFormState {
  textField: string;
}

const initialState: IFormState = {
  textField: "",
};

const formAction = async (prevState: IFormState, formData: FormData) => {
  const value = formData.get("textField") as string;

  if (!value) {
    return prevState;
  }

  await new Promise((res) => setTimeout(res, 1500));
  return initialState;
};

export const FormWithAsyncSave: FC = () => {
  const [state, action, isPending] = useActionState(formAction, initialState);

  return (
    <Box
      component="form"
      action={action}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        ActionStateWithReducer
      </Typography>

      <TextField
        name="textField"
        sx={{ mb: 2 }}
        fullWidth
        label="Поле ввода"
        variant="outlined"
        defaultValue={state.textField}
        type="text"
      />

      <Button type="submit">{isPending ? "Saving…" : "Saved!"}</Button>
    </Box>
  );
};
