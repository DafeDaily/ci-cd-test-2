// jest.config.js

module.exports = {
    bail: 1,
    coverageThreshold: {
        global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
        }
    },
    testEnvironment: 'node', // Change to 'jsdom' if testing frontend code
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // If using Babel
      // '^.+\\.tsx?$': 'ts-jest',  // Uncomment if using TypeScript
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    // Other configurations as needed
  };
  