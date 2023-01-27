import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile: (profile) => {
        return {
          id: profile.id,
          username: profile.login,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
  ],
  events: {
    signIn: ({ user }) => {
      console.info(user);
    },
  },
  session: {
    strategy: "jwt",
  },
});
