const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// const router = express.Router();
const Blog = require("./Model/blogs.js");
const mongoose = require("mongoose");
// here we connected mongoose to mongodb
mongoose
  .connect(process.env.MONGODB_URL, {
    // useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// api start here

const router = express.Router();

// Create a new blog post
app.post("/createBlogs", async (req, res) => {
  try {
    const {
      title,
      description,
      paragraph
      // topic1,
      // para1,
      // formula,
      // para2,
      // para3,
      // topic2,
      // topic3,
      // topic4,
      // li1,
      // li2,
      // li3,
      // li4,
      // li5,
      // li6,
      // li7,
      // li71,
      // li72,
      // li73,
      // li74
    } = req.body;
    const blog = new Blog({
      title,
      description,
      paragraph
      // topic1,
      // para1,
      // formula,
      // para2,
      // para3,
      // topic2,
      // topic3,
      // topic4,
      // li1,
      // li2,
      // li3,
      // li4,
      // li5,
      // li6,
      // li7,
      // li71,
      // li72,
      // li73,
      // li74
    });
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all blog posts
app.get("/getBlogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single blog post by ID
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

// Update a blog post by ID
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

// write api under this space

app.use(express.static(path.join(__dirname, "build")));

// app.get('*',(req,res)=>{res.sendFile(path.join(__dirname,'..','client','build','index.html'))});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
