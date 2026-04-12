import { Box, Button, TextField, Typography } from "@mui/material";
import { useActionState, type FC } from "react";

interface IFormState {
  values: {
    name: string;
    email: string;
  };
  dirty: boolean;
  isSubmitting: boolean;
  success: boolean;
  error: string | null;
}

const initialState: IFormState = {
  values: { name: "", email: "" },
  dirty: false,
  isSubmitting: false,
  success: false,
  error: null,
};

const formAction = async (
  prevState: IFormState,
  formData: FormData,
): Promise<IFormState> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name || !email) {
    return {
      ...prevState,
      error: "Все поля обязательны",
    };
  }

  if (!email.includes("@")) {
    return {
      ...prevState,
      error: "Некорректный email",
    };
  }

  const submittingState: IFormState = {
    ...prevState,
    isSubmitting: true,
    error: null,
  };

  try {
    await new Promise((res) => setTimeout(() => res(null), 3000));

    return initialState;
  } catch (error) {
    return {
      ...submittingState,
      isSubmitting: false,
      error: error as unknown as string,
    };
  }
};

export const ActionStateWithReducer: FC = () => {
  const [state, action, isPending] = useActionState(formAction, initialState);

  const isSubmitting = isPending || state.isSubmitting;

  return (
    <Box
      component="form"
      action={action}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: 400,
        p: 4,
        borderRadius: 2,
        border: "1px solid #e0e0e0",
        mx: "auto",
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        ActionStateWithReducer
      </Typography>

      <TextField
        name="name"
        label="Имя"
        variant="outlined"
        defaultValue={state.values.name}
        fullWidth
        disabled={isSubmitting}
        sx={{ mb: 2 }}
        error={!!state.error}
      />

      <TextField
        name="email"
        label="Email"
        variant="outlined"
        defaultValue={state.values.email}
        fullWidth
        disabled={isSubmitting}
        sx={{ mb: 2 }}
        error={!!state.error}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        sx={{ mt: 1 }}
      >
        {isSubmitting ? "Сохраняем..." : "Сохранить"}
      </Button>
    </Box>
  );
};
