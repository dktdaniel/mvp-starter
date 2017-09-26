var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/calories');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  activity: String,
  duration: Number,
  calories: Number
});

var Item = mongoose.model('Item', itemSchema);

var save = (activity) => {
  return new Item(activity).save();
};

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;