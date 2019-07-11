module.exports = {
  setupFiles: [
    './jest.setup.js',
  ],
  testMatch: [
    '<rootDir>/src/app/components/**/__test__/?(*.)+(spec|test).js?(x)',
    '<rootDir>/src/app/page/**/__test__/?(*.)+(spec|test).js?(x)',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  verbose: true,
  // testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
  testEnvironment: 'node',
  moduleNameMapper: {
    "^.+\\.css$": "jest-transform-css"
  },
};