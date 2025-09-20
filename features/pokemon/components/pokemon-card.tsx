import { PokemonsQuery } from "@/types/generated/graphql";
import Image from "next/image";
import React from "react";

type Pokemon = NonNullable<NonNullable<PokemonsQuery["pokemons"]>[number]>;
type PokemonCardProps = Omit<Pokemon, "id">;

const typeColors: { [key: string]: string } = {
  Fire: "bg-red-500",
  Water: "bg-blue-500",
  Grass: "bg-green-500",
  Electric: "bg-yellow-500",
  Psychic: "bg-purple-500",
  Ice: "bg-cyan-400",
  Dragon: "bg-indigo-600",
  Dark: "bg-gray-800",
  Fighting: "bg-red-700",
  Poison: "bg-purple-600",
  Ground: "bg-yellow-600",
  Flying: "bg-indigo-400",
  Bug: "bg-green-400",
  Rock: "bg-yellow-800",
  Ghost: "bg-purple-900",
  Steel: "bg-gray-500",
  Normal: "bg-gray-400",
  Fairy: "bg-pink-400",
};

export const PokemonCard: React.FC<PokemonCardProps> = ({
  number,
  name,
  weight,
  height,
  classification,
  types,
  resistant,
  weaknesses,
  fleeRate,
  maxCP,
  maxHP,
  image,
}) => {
  const getTypeColor = (type: string | null) => {
    if (!type) return "bg-gray-400";
    return typeColors[type] || "bg-gray-400";
  };

  return (
    <div className="bg-white shadow-md hover:shadow-xl p-6 border border-gray-200 rounded-lg sm:hover:scale-105 transition-shadow duration-300">
      <div className="flex items-start space-x-4 mb-4">
        {image && (
          <div className="flex-shrink-0">
            <Image
              src={image}
              alt={name ?? "Pokemon"}
              className="bg-gray-100 rounded-lg w-24 h-24 object-cover"
              width={96}
              height={96}
              priority={true}
            />
          </div>
        )}

        <div className="flex-1 overflow-hidden">
          <div className="flex items-center space-x-2 mb-2">
            {number && (
              <span className="font-mono text-gray-500 text-sm">#{number}</span>
            )}
            {name && (
              <h3 className="min-w-0 font-bold text-gray-900 text-xl truncate">
                {name}
              </h3>
            )}
          </div>

          {classification && (
            <p className="mb-2 text-gray-600 text-sm">{classification}</p>
          )}

          {types && types.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {types.map(
                (type) =>
                  type && (
                    <span
                      key={type}
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
                        type
                      )}`}
                    >
                      {type}
                    </span>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <div className="gap-4 grid grid-cols-2 mb-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-700 text-sm">
            Physical Stats
          </h4>

          {weight && (
            <div className="text-xs">
              <span className="text-gray-600">Weight: </span>
              <span className="font-medium">
                {weight.minimum} - {weight.maximum}
              </span>
            </div>
          )}

          {height && (
            <div className="text-xs">
              <span className="text-gray-600">Height: </span>
              <span className="font-medium">
                {height.minimum} - {height.maximum}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-700 text-sm">Combat Stats</h4>

          {maxCP && (
            <div className="text-xs">
              <span className="text-gray-600">Max CP: </span>
              <span className="font-medium">{maxCP}</span>
            </div>
          )}

          {maxHP && (
            <div className="text-xs">
              <span className="text-gray-600">Max HP: </span>
              <span className="font-medium">{maxHP}</span>
            </div>
          )}

          {fleeRate && (
            <div className="text-xs">
              <span className="text-gray-600">Flee Rate: </span>
              <span className="font-medium">
                {(fleeRate * 100).toFixed(1)}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {resistant && resistant.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-gray-700 text-sm">
              Resistant To
            </h4>
            <div className="flex flex-wrap gap-1">
              {resistant.map(
                (type) =>
                  type && (
                    <span
                      key={`resistant-${type}`}
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
                        type
                      )} opacity-80`}
                    >
                      {type}
                    </span>
                  )
              )}
            </div>
          </div>
        )}

        {weaknesses && weaknesses.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-gray-700 text-sm">
              Weak Against
            </h4>
            <div className="flex flex-wrap gap-1">
              {weaknesses.map(
                (type) =>
                  type && (
                    <span
                      key={`weakness-${type}`}
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
                        type
                      )} ring-2 ring-red-400`}
                    >
                      {type}
                    </span>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
