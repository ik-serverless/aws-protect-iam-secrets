
module.exports = {
  displayName: {
    name: 'aws-managing-access-keys',
    color: 'blue',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/output/'],
  collectCoverageFrom: [
    "**/*.spec.{js,jsx}",
    "!**/vendor/**"
  ],
  globals: {
    skipBabel: true
  },
  testMatch: ["**/__tests__/**/*.(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"]
};
