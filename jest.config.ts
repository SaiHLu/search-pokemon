import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  testMatch: ["**/__tests__/**/*.(test|spec).(ts|tsx|js)"],

  testPathIgnorePatterns: ["/node_modules/", "/__tests__/mocks/"],

  clearMocks: true,
};

export default createJestConfig(config);
