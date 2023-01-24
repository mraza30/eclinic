import { genSalt, hash } from "bcrypt";

import { publicProcedure } from "./../trpc";
import { registerSchema } from "@/zod/registerSchema";

export const newUser = publicProcedure
  .input(registerSchema)
  .mutation(async ({ ctx, input }) => {
    const { password, ...rest } = input;

    const salt = await genSalt(12);

    const hashPassword = await hash(password, salt);

    const user = await ctx.prisma.user.create({
      data: {
        password: hashPassword,
        ...rest,
      },
    });

    if (input.role === "PATIENT")
      await ctx.prisma.patient.create({
        data: {
          user: { connect: { id: user.id } },
        },
      });
    else if (input.role === "DOCTOR")
      await ctx.prisma.doctor.create({
        data: {
          user: { connect: { id: user.id } },
        },
      });

    return user;
  });
