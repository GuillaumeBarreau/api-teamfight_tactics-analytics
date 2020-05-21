var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  data: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});


module.exports = schema;