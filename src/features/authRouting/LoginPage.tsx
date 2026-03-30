import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react"
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { SignInFormValues } from "./model/types";
import { signInSchema } from "./model/validator";
import { toast } from "react-toastify";
import { parseErrorWithZod } from "shared/lib/common";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useLoginMutation } from "./api/authApi";
import { useAuthContext } from "./AuthContext";

export const LoginPage: FC = () => {
    const navigate = useNavigate();
    
    const form = useForm<SignInFormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
        resolver: zodResolver(signInSchema),
    });

    const {
        formState: { errors, isValid, isSubmitted },
        control,
        handleSubmit,
    } = form;

    const [loginFn, {isLoading}] = useLoginMutation();
    const {login} = useAuthContext();

    const submitHandler = async (formValues: SignInFormValues) => {
        try {
            const response = await loginFn(formValues).unwrap();

            if ('user' in response) {
                login({
                    accessToken: response.accessToken,
                    refreshToken: '',
                    userId: response.user.id,
                    email: response.user.email,
                });

                toast.success('Вы успешно вошли в систему');
            }

            navigate('/profile');
        } catch (error) {
            toast.error(parseErrorWithZod(error).message);
        }
    };

    return (
        <FormProvider {...form}>
            <Box component="form" onSubmit={handleSubmit(submitHandler)}>
                <Typography variant="h2" align="center" sx={{ mb: 6 }}>
                    LoginPage
                </Typography>

                <Container sx={{ display: 'flex', flexFlow: 'column', justifyContent: 'center' }} maxWidth="sm">
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                type="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                label="Email"
                                sx={{ mb: 2 }}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                type="password"
                                autoComplete="current-password"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                label="Password"
                                sx={{ mb: 2 }}
                            />
                        )}
                    />
                    
                    <Button loading={isLoading} disabled={isSubmitted && !isValid} type="submit" variant="contained">
                        login
                    </Button>
                </Container>
            </Box>
        </FormProvider>
    );
}