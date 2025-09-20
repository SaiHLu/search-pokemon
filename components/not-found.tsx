export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-6 min-h-screen">
      <div className="space-y-6 text-center">
        <h1 className="font-bold text-gray-400 text-6xl">404</h1>
        <h2 className="font-semibold text-foreground text-2xl">
          Data Not Found
        </h2>
        <p className="mx-auto max-w-md text-gray-600">
          The data you're looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
}
