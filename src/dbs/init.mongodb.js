'use strict';

const mongoose = require('mongoose');
const {
  db: { host, port, name },
} = require('../configs/config.mongodb');
const connectString = `mongodb://${host}:${port}/${name}`;
console.log(connectString);

const { countConnection } = require('../helpers/check.connect');
class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug');
      mongoose.set('debug', { color: true });
    }

    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then(_ => {
        console.log('MongoDB connected');
        countConnection();
      })
      .catch(err => {
        console.log('Error connecting to MongoDB', err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
