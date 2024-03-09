const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  title: {
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
  paragraph: {
    type : Array
  }
  // para1: {
  //   type : String
  // },
  // formula: {
  //   type : String
  // },
  // para2: {
  //   type : String
  // },
  // para3: {
  //   type : String
  // },
  // topic2: {
  //   type : String
  // },
  // topic3: {
  //   type : String
  // },
  // topic4: {
  //   type : String
  // },
  // li1: {
  //   type : String
  // },
  // li2: {
  //   type : String
  // },
  // li3: {
  //   type : String
  // },
  // li4: {
  //   type : String
  // },
  // li5: {
  //   type : String
  // },
  // li6: {
  //   type : String
  // },
  // li7: {
  //   type : String
  // },
  // li71: {
  //   type : String
  // },
  // li72: {
  //   type : String
  // },
  // li73: {
  //   type : String
  // },
  // li74: {
  //   type : String
  // }
},{timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog; // Export the model for use in other files
