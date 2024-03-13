const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    topic: [
      {
        title: String,
        content: [
          {
            value: String,
          },
        ],
      },
    ],
    formula: {
      type: String,
    },
    list: {
      type: Array,
    },
    subList: [
      {
        subListTitle: String,
        subListContent: [
          {
            subListItem: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog; // Export the model for use in other files
