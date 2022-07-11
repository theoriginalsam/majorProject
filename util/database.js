const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://samir:samir@cluster0.sj8rp.mongodb.net/?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  )
    .then(client => {
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
