var mongoose = require('mongoose');
var schema = require('./composition.model');

schema.statics = {
  create: function (data, cb) {
    var data = new this(data);
    data.save(cb);
  },

  get: function (config, cb) {
    this.find(config.query, cb)
      .sort({ $natural: -1 })
      .limit(config.limit);
  },

  unique: function (config, cb) {
    this.findById(config.query, cb);
  },

  update: function (config, updateData, cb) {
    this.findOneAndUpdate(config.query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (config, cb) {
    this.findOneAndDelete(config.query, cb);
  }
}

var model = mongoose.model('Comps', schema);
module.exports = model;