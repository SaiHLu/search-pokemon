import type { PokemonQuery } from "@/types/generated/graphql";

type AttackType =
  | NonNullable<
      NonNullable<NonNullable<PokemonQuery["pokemon"]>["attacks"]>["fast"]
    >[number]
  | NonNullable<
      NonNullable<NonNullable<PokemonQuery["pokemon"]>["attacks"]>["special"]
    >[number];

type AttackCardProps = {
  readonly attack: AttackType;
  readonly category: "Fast" | "Special";
};

const getTypeColor = (type: string | null | undefined) => {
  if (!type) return "bg-gray-100 text-gray-800";

  const typeColors: Record<string, string> = {
    normal: "bg-gray-100 text-gray-800",
    fire: "bg-red-100 text-red-800",
    water: "bg-blue-100 text-blue-800",
    electric: "bg-yellow-100 text-yellow-800",
    grass: "bg-green-100 text-green-800",
    ice: "bg-cyan-100 text-cyan-800",
    fighting: "bg-red-200 text-red-900",
    poison: "bg-purple-100 text-purple-800",
    ground: "bg-yellow-200 text-yellow-900",
    flying: "bg-indigo-100 text-indigo-800",
    psychic: "bg-pink-100 text-pink-800",
    bug: "bg-lime-100 text-lime-800",
    rock: "bg-amber-100 text-amber-800",
    ghost: "bg-indigo-200 text-indigo-900",
    dragon: "bg-purple-200 text-purple-900",
    dark: "bg-gray-800 text-white",
    steel: "bg-gray-300 text-gray-900",
    fairy: "bg-pink-200 text-pink-900",
  };

  return typeColors[type.toLowerCase()] || "bg-gray-100 text-gray-800";
};

export function AttackCard({ attack, category }: AttackCardProps) {
  if (!attack) return null;

  const getDamageColor = (damage: number | null | undefined) => {
    if (!damage) return "text-gray-600";
    if (damage >= 50) return "text-red-600 font-bold";
    if (damage >= 30) return "text-orange-600 font-semibold";
    return "text-green-600";
  };

  return (
    <div className="bg-white hover:shadow-md p-4 border border-gray-200 rounded-lg transition-shadow duration-200">
      <div className="flex flex-col justify-center items-center mb-2">
        {attack.damage && (
          <>
            <div
              className={`text-2xl font-bold ${getDamageColor(attack.damage)}`}
            >
              {attack.damage}
            </div>
            <div className="text-gray-500 text-xs">Damage</div>
          </>
        )}

        {attack.type && (
          <div className="mt-3">
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full ${getTypeColor(
                attack.type
              )}`}
            >
              {attack.type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
