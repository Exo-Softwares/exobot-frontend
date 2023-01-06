import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { env } from '../../../env/server.mjs';
import prisma from '../../../server/db/client';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt', // overwrite 'database' which is the default when using an adapter
    maxAge: 30 * 24 * 60 * 60, // seconds until an idle session expires (default 30 days)
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.role = ["300397728523878400", "507387375018573824"].includes(profile?.id as string) ? "admin" : "user"
        token.id = user.id;
        token.accessToken = account?.access_token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken as string;
        session.user.role = token.role as string
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);