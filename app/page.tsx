import { Suspense } from "react";
import { SearchInput, PokemonCard } from "@/features/pokemon/components";
import { apolloClient } from "@/libs/apollo-client";
import {
  PokemonsDocument,
  type PokemonsQuery,
} from "@/types/generated/graphql";

export default async function Home() {
  const { data, error } = await apolloClient.query<PokemonsQuery>({
    query: PokemonsDocument,
    variables: { first: 20 },
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="p-6 h-screen">
      <div className="flex flex-col justify-center items-center gap-[32px]">
        <Suspense fallback={<div>Loading search input...</div>}>
          <SearchInput />
        </Suspense>
      </div>
      <div className="gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
        {data?.pokemons && (
          <>
            {data.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon?.id} {...pokemon} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
