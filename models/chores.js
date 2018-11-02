const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choresSchema = new Schema({
  Chore: { type: String, required: true },
  Description: { type: String, required: true },
  Deadline: { type: Date, default: Date.now }
});

const Chores = mongoose.model("Chores", choresSchema);

module.exports = Chores;