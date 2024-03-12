const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  // description: {
  //   type: String,
  //   required: true
  // },
  date: {
    type: Date,
    default: Date.now 
  },
  img : {
    type: String
  },
  topic: [
    {
      // id : Math.Floor(1000+Math.random()*9000),
      title : String,
      content : String
    }
  ],
  // paragraph: {
  //   type : Array
  // }, 
  formula: {
    type: String
  },
  list: {
    type: Array
  }
},{timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog; // Export the model for use in other files
