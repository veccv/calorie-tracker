import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "default-secret",
  // Opcjonalnie: dalsze konfiguracje np. callbacks, session, pages itp.
  callbacks: {
    // Przykładowy callback umożliwiający dodanie nazwy użytkownika do tokena sesji
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = { ...session.user, name: token.name };
      }
      return session;
    }
  }
});
