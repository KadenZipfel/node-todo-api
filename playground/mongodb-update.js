// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the database');
  
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ab5d347c6982478fe25bf20')
  }, {
    $set: {
      name: 'Hello'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  // db.close();
});