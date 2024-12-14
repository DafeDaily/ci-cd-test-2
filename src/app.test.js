// src/app.test.js

const { add, fetchData } = require('./app');

describe('Integration Tests', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('fetchData returns expected data', (done) => {
    function callback(data) {
      try {
        expect(data).toBe("Data fetched successfully!");
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchData(callback);
  });
});
