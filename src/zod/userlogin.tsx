import { phone as checkPhone } from 'phone';
import { z } from 'zod';

export const userLoginSchema = z
  .object({
    country: z.string(),
    phone: z.string(),
    password: z.string().min(8, 'Password must contain at least 8 characters'),
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

export type UserLoginSchema = z.infer<typeof userLoginSchema>;
