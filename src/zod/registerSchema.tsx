import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(5).max(40),
  email: z.string().email(),
  phone: z.string(),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "PATIENT", "DOCTOR"]),
});

export type IRegisterSchema = z.infer<typeof registerSchema>;
