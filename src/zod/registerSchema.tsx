import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(5).max(40),
  email: z.string().email(),
  phone: z.string(),
  password: z.string().min(8),
  role: z.enum(['PATIENT', 'DOCTOR']),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
