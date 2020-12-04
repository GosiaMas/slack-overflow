const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  question: String,
  tags: [String],
  // author
  topic: String,
});

const Question = model("Question", questionSchema);

module.exports = Question;
