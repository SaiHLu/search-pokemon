import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql-pokemon2.vercel.app",
  documents: ["./**/*.graphql"],
  generates: {
    "./types/generated/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
