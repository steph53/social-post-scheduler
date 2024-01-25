import bcrypt from "bcrypt";
import NextAuth, { AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "johndoe@gmail.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                  throw new Error('Invalid credentials');
                }
        
                const user = await prisma.user.findUnique({
                  where: {
                    email: credentials.email
                  }
                });
        
                if (!user || !user?.hashedPassword) {
                  throw new Error('Invalid credentials');
                }
        
                const isCorrectPassword = await bcrypt.compare(
                  credentials.password,
                  user.hashedPassword
                );
        
                if (!isCorrectPassword) {
                  throw new Error('Invalid credentials');
                }
        
                return user;
              }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
          }),
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    pages: {
      signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);