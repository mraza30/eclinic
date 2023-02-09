import { phone as checkPhone } from 'phone';
import { z } from 'zod';

export const userRegisterSchema = z
  .object({
    name: z
      .string()
      .min(5, 'Name must contain at least 5 characters')
      .max(40, 'Name must contain at most 40 characters'),
    country: z.string(),
    phone: z.string(),
    password: z.string().min(8, 'Please choose a stronger password'),
    role: z.enum(['PATIENT', 'DOCTOR']),
  })
  .transform((data, ctx) => {
    const phoneNumber = checkPhone(data.phone, { country: data.country });
    if (!phoneNumber.isValid) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['phone'],
        message: 'Invalid phone number',
      });
      return z.NEVER;
    }
    return {
      ...data,
      phone: phoneNumber.phoneNumber,
    };
  });

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;
