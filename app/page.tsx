import { Suspense } from "react";
import { SearchInput, SearchResults } from "@/features/pokemon/components";
import { apolloClient } from "@/libs/apollo-client";
import {
  PokemonsDocument,
  type PokemonsQuery,
} from "@/types/generated/graphql";

type HomeProps = {
  readonly searchParams: Promise<{ search?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const searchParamsProps = await searchParams;
  const searchTerm = searchParamsProps.search;

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

      {data?.pokemons && (
        <SearchResults pokemons={data.pokemons} searchTerm={searchTerm} />
      )}
    </main>
  );
}
