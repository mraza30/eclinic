import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(5, 'Name must contain at least 5 characters')
    .max(40, 'Name must contain at most 40 characters'),
  email: z.string().email(),
  phone: z.string(),
  password: z.string().min(8, 'Please choose a stronger password'),
  role: z.enum(['PATIENT', 'DOCTOR']),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
