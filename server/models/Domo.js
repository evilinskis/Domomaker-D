const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();
const setFood = (favoriteFood) => _.escape(favoriteFood).trim();

const DomoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  favoriteFood: {
    type: String,
    required: true,
    trim: true,
    set: setFood,
  },
});

DomoSchema.statics.toAPI = (doc) => ({
  name: doc.name,
  age: doc.age,
  favoriteFood: doc.favoriteFood,
});

const DomoModel = mongoose.model('Domo', DomoSchema);
module.exports = DomoModel;
