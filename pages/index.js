// importing libraries
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  return (
    <div className="home p-5">
      <div className="home-header text-2xl font-bold mb-5">
        Welcome to Next learn
      </div>

      <div className="mb-5">
        {status !== "authenticated"
          ? "You're not logged in."
          : "You're logged in."}
      </div>

      <div className="home-securedLink mb-5">
        <div className="home-securedLink-button mb-2">
          {status === "authenticated" ? (
            <Link
              className="bg-yellow-500 rounded-md p-2 text-white"
              href="/secured"
            >
              Secured
            </Link>
          ) : (
            <button
              className="bg-blue-500 rounded-md p-2 text-white"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
        <div className="home-securedLink-text text-sm">
          To access secured data, login is required.
        </div>
      </div>

      <div className="home-unsecuredLink">
        <div className="home-unsecuredLink-button mb-2">
          <Link
            className="bg-green-600 p-2 text-white rounded-md"
            href="/not-secured"
          >
            Not Secured
          </Link>
        </div>
        <div className="home-unsecuredLink-text text-sm">
          No access is required.
        </div>
      </div>
    </div>
  );
}
