// jest.config.js

module.exports = {
    // **Root Directory**
    // The root directory that Jest should scan for tests and modules within.
    rootDir: './',
  
    // **Test Environment**
    // Specifies the environment in which the tests are run. Common options are 'node' and 'jsdom'.
    testEnvironment: 'node',
  
    // **Verbose Reporting**
    // If true, each individual test will be reported during the run.
    verbose: true,
  
    // **Module File Extensions**
    // An array of file extensions your modules use.
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    // **Transform**
    // A map from regular expressions to paths to transformers. Jest will use the transformer to process files matching the regex.
    // Useful for handling ES6+ syntax or TypeScript.
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transforms JavaScript and JSX files using Babel
      '^.+\\.tsx?$': 'ts-jest',    // Transforms TypeScript files using ts-jest
    },
  
    // **Setup Files After Env**
    // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
    // **Test Match**
    // Specifies the glob patterns Jest uses to detect test files.
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
  
    // **Test Path Ignore Patterns**
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped.
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  
    // **Collect Coverage**
    // Indicates whether the coverage information should be collected while executing the tests.
    collectCoverage: true,
  
    // **Coverage Directory**
    // The directory where Jest should output its coverage files.
    coverageDirectory: 'coverage',
  
    // **Coverage Providers**
    // A list of provider names that cover code. 'v8' is recommended for speed.
    coverageProvider: 'v8',
  
    // **Coverage Threshold**
    // Enforces minimum threshold enforcement for coverage results. All numbers are percentages.
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  
    // **Module Name Mapper**
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module.
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
      '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock static assets
    },
  
    // **Global Variables**
    // Configures global variables that need to be available in all test environments.
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json', // Specify the path to your TypeScript config if using TypeScript
      },
    },
  
    // **Watch Plugins**
    // An array of paths to watch plugins that will be used when running in watch mode.
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  
    // **Snapshot Serializers**
    // A list of paths to snapshot serializer modules Jest should use for snapshot testing.
    snapshotSerializers: ['enzyme-to-json/serializer'],
  
    // **Error On Deprecated APIs**
    // When true, deprecated APIs will throw helpful error messages.
    errorOnDeprecated: true,
  
    // **Reset Mocks**
    // Automatically reset mock state before every test.
    resetMocks: true,
  
    // **Clear Mocks**
    // Automatically clear mock calls and instances before every test.
    clearMocks: true,
  
    // **Restore Mocks**
    // Automatically restore mock implementations before every test.
    restoreMocks: true,
  };
  