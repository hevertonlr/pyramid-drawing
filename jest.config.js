/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
  testMatch: ["**/tests/**/*.test.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/main.ts",
    "!src/**/index.ts",
    "!src/**/container/**",
    "!src/**/*.interface.ts",
    "!src/**/dto/**",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "lcov"],
};
