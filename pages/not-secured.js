import Link from "next/link";

export default function NotSecuredPage() {
  return (
    <div className="notSecured p-5">
      <div className="notSecured-header text-2xl font-bold mb-5">
        Not Secured Page
      </div>

      <div className="notSecured-go-back text-sm text-blue-600">
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
