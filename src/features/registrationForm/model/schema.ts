import { z } from "zod";

export const validationSchema = z
  .object({
    firstName: z.string().min(2, "Имя обязательно"),
    email: z
      .string()
      .min(6, "Email должен быть минимум 6 символов")
      .refine((data) => data.includes("@"), "Email должен содержать символ @"),
    password: z.string().min(6, "Введите пароль"),
    passwordConfirm: z.string().min(6, "Введите пароль"),
    socialNetworkList: z
      .array(z.object({ value: z.url("Некорректный URL") }))
      .min(1, "Добавьте хотя бы одну социальную сеть"),
  })
  .superRefine((data, ctx) => {
    if (data.password.trim() !== data.passwordConfirm.trim()) {
      ctx.addIssue({
        path: ["password"],
        code: "custom",
        message: "Пароли не совпадают",
      });

      ctx.addIssue({
        path: ["passwordConfirm"],
        code: "custom",
        message: "Пароли не совпадают",
      });
    }
  });
