const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  
});
module.exports = mongoose.model( "ToDo", todoSchema);
