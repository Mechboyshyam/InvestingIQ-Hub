import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import BlogCard from '../../Component/BlogCard/Blogcard';

export default function Blog() {
    const [currentBlog, setAllBlog] = useState("");

    
  return (
    <div>
      <div className="container">
      {
                currentBlog?.map((blog, index)=>{
                   return  (<BlogCard 
                      title={blog.title}
                       />)
                })
            }
      </div>
    </div>
  )
}
