import Link from "next/link";
import { useSession, signOut, profile } from "next-auth/react";

export default function SecuredPage() {
  const { data, status } = useSession();
  const user = data?.user;

  if (status === "loading") return <div>Loading....</div>;

  if (status === "authenticated") {
    return (
      <>
        <p>Sign in as {user.email}</p>
        {console.log(data)}
        <Link href="/">Go back</Link>

        <button
          className="p-2 bg-red-500 text-white rounded-md"
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
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
