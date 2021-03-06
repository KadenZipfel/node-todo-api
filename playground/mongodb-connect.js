// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the database');
  
  // db.collection('Todos').insertOne({
    
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
    
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  
  // db.collection('Users').insertOne({
  //   name: 'Kaden',
  //   age: 19,
  //   location: 'Vancouver'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert new user', err);
  //   }
    
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  
  db.collection('Todos').insertOne({
    name: 'Dance',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo', err);
    }
    
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  
  db.close();
});