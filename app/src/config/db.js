// mongodb - db.js
const { MongoClient } = require('mongodb');

let dbConnection;
let uri = 'mongodb+srv://bmichaelh13:<2024,Autumn,2024>@alert-cluster.ihikv.mongodb.net/'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect('uri', { useNewUrlParser: true, useUnifiedTopology: true })
      .then((client) => {
        dbConnection = client.db();  // Fixed the typo: 'clent' -> 'client'
        return cb();  // No errors, continue with the callback
      })
      .catch(err => {
        console.log(err);
        return cb(err);  // Pass the error to the callback
      });
  },

  getDb: () => dbConnection  // Function to get the current database connection
};
