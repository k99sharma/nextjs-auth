import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, account, profile }) {
      if (account) {
        (token.accessToken = account.access_token),
          (token.id = profile.id),
          (token.username = profile.login);
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.username = token.username;

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
