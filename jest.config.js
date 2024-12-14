// jest.config.js

module.exports = {
    testEnvironment: 'node', // Change to 'jsdom' if testing frontend code
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // If using Babel
      // '^.+\\.tsx?$': 'ts-jest',  // Uncomment if using TypeScript
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    // Other configurations as needed
  };
  