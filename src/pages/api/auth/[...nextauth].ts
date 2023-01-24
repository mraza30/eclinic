import NextAuth, { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { ILoginSchema } from '@/zod/loginSchema';
import { compare } from 'bcrypt';
import { env } from '@/env/server.mjs';
import { prisma } from '@/server/db';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as ILoginSchema;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        return user
          ? (await compare(password, user?.password))
            ? user
            : null
          : null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  secret: env.NEXTAUTH_SECRET,
  debug: env.NODE_ENV !== 'production',
};
export default NextAuth(authOptions);
