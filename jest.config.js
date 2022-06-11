// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require("ts-jest");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require("./tsconfig");

module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
  ],
  // modulePathIgnorePatterns: ['<rootDir>/dist'],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: "<rootDir>/",
  // }),
  // rootDir: "./",
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["src/**/*.{js,ts}"],
  // coverageDirectory: "<rootDir>/coverage",
  // collectCoverage: true,
  // coverageReporters: ["lcov"],
  testEnvironment: "node",
  setupFiles: [
    "<rootDir>/test/jest_setup.ts",
  ],
};
