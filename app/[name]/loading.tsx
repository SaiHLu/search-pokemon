import { PokemonCardSkeleton } from "@/features/pokemon/components";

export default function Loading() {
  return (
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="w-full max-w-2xl">
        <PokemonCardSkeleton />
      </div>
    </div>
  );
}
