// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir />'],
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: -10,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

module.exports = createJestConfig(customJestConfig)
