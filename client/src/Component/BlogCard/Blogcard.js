import React from 'react'
import './BlogCard.css'
function BlogCard({ title }) {

//   const [blogs, setBlogs] = useState("");

  return (
    <div className='text-center'>
     <h2>
        {title}
     </h2>
    </div>
  )
}

export default BlogCard;