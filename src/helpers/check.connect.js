'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const NUMBER_OF_SECONDS_TO_CHECK = 5000; // 5 seconds

const countConnection = () => {
  const count = mongoose.connections.length;

  console.log(`MongoDB connection count: ${count}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    // Maximum number of connections
    const maxConnections = numCores * 4;
    if (numConnection > maxConnections) {
      console.log(
        `Connections overload detected: ${numConnection} > ${maxConnections}`,
      );
    }
  }, NUMBER_OF_SECONDS_TO_CHECK);
};

module.exports = {
  countConnection,
  checkOverload,
};
