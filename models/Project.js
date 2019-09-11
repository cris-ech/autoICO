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
  state: {
    type: String,
    required: true
  },
  user: { 
    type: Schema.Types.ObjectId,
    ref: "User" 
  }

});

module.exports = Project = mongoose.model("projects", ProjectSchema);
