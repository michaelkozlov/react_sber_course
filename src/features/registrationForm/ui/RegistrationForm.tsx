import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container, TextField, Typography } from "@mui/material";
import { type FC } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import type { TFormValues } from "../model/types";
import { validationSchema } from "../model/schema";
import { SocialNetworkList } from "./SocialNetworkList";

export const RegistraionForm: FC = () => {
  const form = useForm<TFormValues>({
    defaultValues: {
      socialNetworkList: [{ value: "" }],
    },
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const { control } = form;

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          Registration form
        </Typography>

        <Container maxWidth="sm" sx={{ width: "100%" }}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ mb: 2 }}
                fullWidth
                label="Имя"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ mb: 2 }}
                fullWidth
                label="Email"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ mb: 2 }}
                fullWidth
                label="Пароль"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="passwordConfirm"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ mb: 2 }}
                fullWidth
                label="Подтверждение пароля"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <SocialNetworkList />
        </Container>
      </Box>
    </FormProvider>
  );
};
