import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../../Component/BlogCard/Blogcard.js";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    // console.log("fetching all blogs");
    try {
      const response = await axios.get("http://localhost:5000/getBlogs");
      console.log("Blogs fetched..", response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    // console.log("Hello!");
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="container">
        <BlogCard blogs={blogs} />;
      </div>
    </div>
  );
}
