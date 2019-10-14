const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const userSchema = require('./User');



// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  acronym: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  wallet: {
    type: String,
    required: true
  },
  cap: {
    type: Number,
    required: false,
    default: 1
  },
  t_init: {
    type: Number,
    required: false
  },
  t_end: {
    type: Number,
    required: false
  },
  decimals: {
    type: String,
    required: true
  },
  tokenAddress: {
    type: String,
    default: null,
    required: false
  },
  icoAddress: {
    type: String,
    default: null,
    required: false
  },
  type: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    default: 2000,
    required: false
  },
  state: {
    type: String,
    required: true
  },

  user: { 
    type: Schema.Types.ObjectId,
    ref: "user" 
  }

});

module.exports = Project = mongoose.model("projects", ProjectSchema);
