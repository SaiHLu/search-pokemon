import Link from "next/link";
import {
  AttackCard,
  EvolutionCard,
  PokemonCard,
} from "@/features/pokemon/components";
import { apolloClient } from "@/libs/apollo-client";
import { PokemonDocument } from "@/types/generated/graphql";

interface PageProps {
  readonly params: Promise<{ name: string }>;
}

export default async function Page(paramsProps: PageProps) {
  const params = await paramsProps.params;
  const { data, error } = await apolloClient.query({
    query: PokemonDocument,
    variables: { name: params.name },
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Search
        </Link>
      </div>

      <div className="flex justify-center px-6 pb-6">
        <div className="flex flex-col gap-2 sm:gap-6 w-full max-w-2xl">
          <PokemonCard {...data?.pokemon} />

          <h3>Fast Attacks</h3>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {data?.pokemon?.attacks?.fast?.map((attack) => (
              <AttackCard attack={attack} key={attack?.name} category="Fast" />
            ))}
          </div>

          <h3>Special Attacks</h3>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {data?.pokemon?.attacks?.special?.map((attack) => (
              <AttackCard
                attack={attack}
                key={attack?.name}
                category="Special"
              />
            ))}
          </div>

          <h3>Evolutions</h3>
          {data?.pokemon?.evolutions?.map((evolution) => (
            <EvolutionCard evolution={evolution} key={evolution?.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
