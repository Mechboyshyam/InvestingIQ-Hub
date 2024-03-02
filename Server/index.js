const express= require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
const router = express.Router();
const Blog = require("./Model/blogs");
// api start here

router.post("/createBlog", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create a new instance of the Blog model
    const newBlog = new Blog({
      title: title,
      description: description,
    });

    // Save the new blog to the database
    const savedBlog = await newBlog.save();

    // Send a success response with the saved blog data
    res.json({
      success: true,
      message: "Blog created successfully",
      data: savedBlog,
    });
  } catch (error) {
    // If there's an error, send an error response
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message,
    });
  }
});

module.exports = router;

// write api under this space

// app.use(express.static(path.join(__dirname,'..','client','build')));

// app.get('*',(req,res)=>{res.sendFile(path.join(__dirname,'..','client','build','index.html'))});
app.get('/', (req,res)=>{
    res.json({
        message:"Welcome, to InvestingIQ-Hub"
    })
})


const PORT= process.env.PORT || 5001

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})