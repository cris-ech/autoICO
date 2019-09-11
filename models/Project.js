const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = mongoose.model('User');


// Create Schema
const ProjectSchema = new Schema({
  name: {
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
  user: { type: Schema.ObjectId, ref: "User" }

});

module.exports = Project = mongoose.model("projects", ProjectSchema);
