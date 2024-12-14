// src/app.js

function add(a, b) {
    return a + b;
  }
  
  function fetchData(callback) {
    // Simulate an asynchronous operation, e.g., fetching from an API
    setTimeout(() => {
      callback("Data fetched successfully!");
    }, 1000);
  }
  
  module.exports = { add, fetchData };
  