/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: './',
    moduleFileExtensions: ['ts', 'js', 'json'],
    testMatch: ['**/tests/**/*.spec.ts'],
    moduleNameMapper: {
      '^@core/(.*)$': '<rootDir>/src/core/$1',
      '^@app/(.*)$': '<rootDir>/src/application/$1',
      '^@infra/(.*)$': '<rootDir>/src/infrastructure/$1',
      '^@shared/(.*)$': '<rootDir>/src/shared/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts']
  };
  