import { z } from 'zod';

export const phoneNumber = z.object({
  phone: z.string(),
});

export type PhoneNumber = z.infer<typeof phoneNumber>;
