import React, { useState, useEffect } from "react";
// import axios from "axios";
import BlogCard from "../../Component/BlogCard/Blogcard.js";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    console.log("fetching all blogs");
    try {
      const response = await fetch("http://localhost:5000/getBlogs");
      const result = await response.json();
      console.log(result);
      console.log("Blogs fetched..", response.data.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  useEffect(() => {
    console.log("Hello!");
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="container">
        {blogs?.map((blogs, index) => {
          return <BlogCard title={blogs} key={index} />;
        })}
      </div>
    </div>
  );
}
