const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String, 
    author: String,
    body: String,
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);