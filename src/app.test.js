// src/app.test.js

const { add, fetchData } = require('./app');

describe('Integration Tests', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  
});
