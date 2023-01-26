import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function SecuredPage() {
  const { data, status } = useSession();
  const email = data?.user.email;

  if (status === "loading") return <div>Loading....</div>;

  if (status === "authenticated") {
    return (
      <>
        <p>Sign in as {email}</p>
        <Link href="/">Go back</Link>

        <button
          className="p-2 bg-red-500 text-white rounded-md"
          onClick={() => signOut({ callbackUrl: process.env.NEXTAUTH_URL })}
        >
          Sign Out
        </button>
      </>
    );
  }

  return (
    <>
      <div className="text-2xl font-bold mb-5">Not authenticated !!!</div>

      <Link href="/">Go back</Link>
    </>
  );
}
