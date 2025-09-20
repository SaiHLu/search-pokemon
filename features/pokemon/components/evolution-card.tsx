import Image from "next/image";
import Link from "next/link";
import type { PokemonQuery } from "@/types/generated/graphql";

type EvolutionCardProps = {
  readonly evolution: NonNullable<
    NonNullable<PokemonQuery["pokemon"]>["evolutions"]
  >[number];
};

export function EvolutionCard({ evolution }: EvolutionCardProps) {
  if (!evolution) return null;

  return (
    <div className="bg-white shadow-md hover:shadow-lg p-4 border border-gray-200 rounded-lg transition-shadow duration-200">
      {evolution.image && (
        <div className="relative mb-3 w-full h-32">
          <Image
            src={evolution.image}
            alt={evolution.name || "Pokemon evolution"}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="text-center">
        <Link
          href={`/?search=${encodeURIComponent(evolution.name || "")}`}
          className="inline-block"
        >
          <h3 className="mb-1 font-semibold hover:text-blue-600 text-lg transition-colors duration-200 cursor-pointer">
            {evolution.name}
          </h3>
        </Link>

        {evolution.number && (
          <p className="mb-2 text-gray-500 text-sm">#{evolution.number}</p>
        )}

        {evolution.classification && (
          <p className="mb-2 text-gray-600 text-sm">
            {evolution.classification}
          </p>
        )}

        {evolution.types && evolution.types.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1 mb-2">
            {evolution.types.map(
              (type) =>
                type && (
                  <span
                    key={type}
                    className="bg-blue-100 px-2 py-1 rounded-full text-blue-800 text-xs"
                  >
                    {type}
                  </span>
                )
            )}
          </div>
        )}

        <div className="gap-2 grid grid-cols-2 text-gray-600 text-xs">
          {evolution.maxCP && (
            <div>
              <span className="font-medium">Max CP:</span> {evolution.maxCP}
            </div>
          )}
          {evolution.maxHP && (
            <div>
              <span className="font-medium">Max HP:</span> {evolution.maxHP}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
