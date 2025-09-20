import Link from "next/link";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-6 min-h-screen">
      <div className="space-y-6 text-center">
        <h1 className="font-bold text-gray-400 text-6xl">404</h1>
        <h2 className="font-semibold text-foreground text-2xl">
          Page Not Found
        </h2>
        <p className="mx-auto max-w-md text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 mt-8 px-6 py-3 rounded-lg text-white transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
