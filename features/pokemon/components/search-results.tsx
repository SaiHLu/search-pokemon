import Link from "next/link";
import { PokemonCard } from "./pokemon-card";
import {
  PokemonDocument,
  PokemonQuery,
  type PokemonsQuery,
} from "@/types/generated/graphql";
import { apolloClient } from "@/libs/apollo-client";
import { NotFound } from "@/components/not-found";

type SearchResultsProps = {
  readonly pokemons: NonNullable<PokemonsQuery["pokemons"]>;
  readonly searchTerm?: string;
};

export async function SearchResults({
  pokemons,
  searchTerm,
}: SearchResultsProps) {
  if (searchTerm) {
    const { data, error } = await apolloClient.query<PokemonQuery>({
      query: PokemonDocument,
      variables: { name: searchTerm },
    });

    if (error) return <div>Error: {error.message}</div>;

    if (!data?.pokemon) return <NotFound />;

    return (
      <>
        <div className="py-4">
          <h2 className="mb-2 font-semibold text-lg">
            Search results for "{searchTerm}"
          </h2>
        </div>

        <div className="py-4 max-w-fit">
          <Link
            key={data.pokemon.id}
            href={`/${data.pokemon.name?.toLowerCase()}`}
          >
            <PokemonCard {...data.pokemon} />
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
      {pokemons.map((pokemon) => (
        <Link key={pokemon?.id} href={`/${pokemon?.name?.toLowerCase()}`}>
          <PokemonCard {...pokemon} />
        </Link>
      ))}
    </div>
  );
}
