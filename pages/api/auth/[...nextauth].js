import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { prisma } from "../../../libs/prismaConfig";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid email or password");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashPassword) {
          throw new Error("No user found");
        }

        const checkPass = await bcrypt.compare(
          credentials.password,
          user.hashPassword
        );
        if (!checkPass) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  pages: { signIn: "/login" },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
