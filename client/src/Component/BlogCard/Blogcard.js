import React from 'react';
// import axios from 'axios';
import "./BlogCard.css";
function BlogCard({ title }) {
 console.log(title)

  return (
    <div className="text-center">
      <h2>
        hello
        {title}
      </h2>
    </div>
  );
}

export default BlogCard;
