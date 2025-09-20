export function PokemonCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg animate-pulse">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-300 dark:bg-gray-600 rounded-lg w-24 h-24" />
      </div>

      <div className="space-y-2 mb-4 text-center">
        <div className="bg-gray-300 dark:bg-gray-600 mx-auto rounded w-16 h-4" />
        <div className="bg-gray-300 dark:bg-gray-600 mx-auto rounded w-32 h-6" />
      </div>
    </div>
  );
}
