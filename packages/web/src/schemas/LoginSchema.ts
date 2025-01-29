import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Endereço de email inválido."),
  password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres."),
});

export type LoginFormData = z.infer<typeof loginSchema>;
