const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5ab807b09832c8e519b875fd').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({_id: '5ab807b09832c8e519b875fd'}).then((todo) => {
  
});