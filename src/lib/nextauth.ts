import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        await connectDB();
        const existing = await User.findOne({ email: user.email });
        if (!existing) {
          await User.create({
            name: user.name || user.email.split("@")[0],
            email: user.email,
            googleId: user.id,
            image: user.image || "",
            role: "user",
          });
        } else if (!existing.googleId) {
          existing.googleId = user.id;
          existing.image = user.image || existing.image;
          await existing.save();
        }
      }
      return true;
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        await connectDB();
        const dbUser = await User.findOne({ email: user.email });
        if (dbUser) {
          token.sub = dbUser._id.toString();
          token.role = dbUser.role;
          token.name = dbUser.name;
          token.email = dbUser.email;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub as string;
        session.user.role = (token.role as string) || "user";
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
