import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-zinc-50 ">
      <h2 className="text-4xl font-bold mb-2">404</h2>
      <p className="text-zinc-500 mb-6">
        We couldn&apos;t find that product or your session expired.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black  text-white  rounded-xl font-semibold"
      >
        Return to Catalog
      </Link>
    </div>
  );
}
