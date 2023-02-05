import { genSalt, hash } from 'bcrypt';

import { publicProcedure } from './../trpc';
import { registerSchema } from '@/zod/register';

export const newUser = publicProcedure
  .input(registerSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const { password, email, phone, ...rest } = input;
      const userExists = await ctx.prisma.user.findMany({
        where: {
          OR: [{ email }, { phone }],
        },
      });
      if (userExists.length)
        return {
          ok: false,
          status: 400,
          user: null,
          error: 'A user with that email or phone already exists',
        };
      const user = await ctx.prisma.user.create({
        data: {
          password: await hash(password, await genSalt(12)),
          email,
          phone,
          ...rest,
        },
      });
      if (input.role === 'PATIENT')
        await ctx.prisma.patient.create({
          data: {
            user: { connect: { id: user.id } },
          },
        });
      else if (input.role === 'DOCTOR')
        await ctx.prisma.doctor.create({
          data: {
            user: { connect: { id: user.id } },
          },
        });
      return { ok: true, status: 201, user, error: null };
    } catch (error) {
      throw new Error('Error while creating new user');
    }
  });
