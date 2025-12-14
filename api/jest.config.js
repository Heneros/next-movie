module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: {
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
        },
      },
    ],
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^@/prisma/(.*)$': '<rootDir>/src/prisma/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/data$': '<rootDir>/src/data/$1',
    '^@/users/(.*)$': '<rootDir>/src/users/$1',
    '^@/users$': '<rootDir>/src/users/$1',
    '^@/movies/(.*)$': '<rootDir>/src/movies/$1',

    '^@/redis/(.*)$': '<rootDir>/src/redis/$1',
    '^@/analytics/(.*)$': '<rootDir>/src/analytics/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
