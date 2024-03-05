import React from "react";
// import axios from 'axios';
import "./BlogCard.css";
function BlogCard({ blogs }) {
  console.log("blogs", blogs);

  return (
    <div className="text-center">
      <h2>
        hello
        {blogs?.map((item) => {
          return (
            <div key={item?._id}>
              <h1>{item?.title}</h1>
              <p>{item?.description}</p>
            </div>
          );
        })}
      </h2>
    </div>
  );
}

export default BlogCard;
