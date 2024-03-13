const express = require("express");
const Blog = require("../Model/blogs");

const router = express.Router();

// Create New Blogs
router.post("/createBlogs", async (req, res) => {
  try {
    const {
      title,
      // description,
      paragraph,
      topic,
      formula,
      list,
      img,
    } = req.body;
    const blog = new Blog({
      title,
      // description,
      paragraph,
      topic,
      formula,
      list,
      img,
    });
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read Blogs
router.get("/getBlogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Blog
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Blogs
router.patch("/blogs/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a blog post by ID
router.delete("/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
