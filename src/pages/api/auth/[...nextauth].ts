import NextAuth, { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { type LoginSchema } from '@/zod/login';
import { compare } from 'bcrypt';
import { env } from '@/env/server.mjs';
import { prisma } from '@/server/db';
import { User } from '@prisma/client';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const { email, password } = credentials as LoginSchema;
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
        } catch (error) {
          throw new Error(error as string);
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    jwt: ({ token, user }) => {
      user && (token.user = user as User);
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user as User;
      return session;
    },
  },
  jwt: { maxAge: 60 * 60 * 24 },
  secret: env.NEXTAUTH_SECRET,
  debug: env.NODE_ENV !== 'production',
};

export default NextAuth(authOptions);
