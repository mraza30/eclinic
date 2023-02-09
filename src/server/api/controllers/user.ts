import { genSalt, hash } from 'bcrypt';
import { protectedProcedure, publicProcedure } from './../trpc';

import { phoneNumber } from '@/zod/userVerify';
import { userRegisterSchema } from '@/zod/userRegister';

export const addNewUser = publicProcedure
  .input(userRegisterSchema)
  .mutation(async ({ ctx, input }) => {
    const { password, phone, ...rest } = input;
    if (
      await ctx.prisma.user.findUnique({
        where: {
          phone,
        },
      })
    )
      return {
        ok: false,
        status: 400,
        user: null,
        error: 'A user with that phone number already exists',
      };
    const user = await ctx.prisma.user.create({
      data: {
        password: await hash(password, await genSalt(12)),
        phone,
        ...rest,
      },
    });
    if (user.role === 'PATIENT')
      await ctx.prisma.patient.create({
        data: {
          user: { connect: { id: user.id } },
        },
      });
    else if (user.role === 'DOCTOR')
      await ctx.prisma.doctor.create({
        data: {
          user: { connect: { id: user.id } },
        },
      });
    return { ok: true, status: 201, user, error: null };
  });

export const checkUserExists = publicProcedure
  .input(phoneNumber)
  .mutation(async ({ ctx, input: { phone } }) => {
    return (await ctx.prisma.user.findUnique({ where: { phone } }))
      ? true
      : false;
  });
