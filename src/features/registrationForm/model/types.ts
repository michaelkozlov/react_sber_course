import type z from "zod";
import type { validationSchema } from "./schema";

export type TFormValues = z.infer<typeof validationSchema>;
