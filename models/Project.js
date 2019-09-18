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
    type: String,
    required: false
  },
  t_init: {
    type: Date,
    default: Date.now,
    required: false
  },
  t_end: {
    type: Date,
    default: Date.now,
    required: false
  },
  decimals: {
    type: String,
    required: true
  },
  contractAddress: {
    type: String,
    default: null
  },

  user: { 
    type: Schema.Types.ObjectId,
    ref: "User" 
  }

});

module.exports = Project = mongoose.model("projects", ProjectSchema);
