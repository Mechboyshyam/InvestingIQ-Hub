import React, { useState, useEffect } from "react";
import "./BlogCard.css";

function BlogCard({ blogs }) {
  const [selectedContent, setSelectedContent] = useState(0); // Initialize with the index of the first blog

  const handleContentClick = (index) => {
    setSelectedContent(index === selectedContent ? null : index);
  };

  useEffect(() => {
    // Ensure first blog is displayed on component mount
    setSelectedContent(0);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="container parent-border">
      <div className="row">
        <div className="col-12 mt-2">
          <h3 className="text-center title-design">
            Welcome aboard our blog! We're delighted to have you join us as we
            kick off this adventure together. Get ready to dive into intriguing
            topics and insightful discussions. Let's make this journey one to
            remember!
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 content p-3">
          <h2 className="text-center">
            <b>Content List</b> <br />
          </h2>
          {blogs?.map((item, index) => (
            <h6 key={index} onClick={() => handleContentClick(index)} style={{ cursor: 'pointer', textDecoration: 'none', color: selectedContent === index ? 'blue' : 'black' }}>
              <ul>
                <li>
                  <b>{item.title}</b>
                </li>
              </ul>
            </h6>
          ))}
        </div>
        <div className="col-md-9">
          {selectedContent !== null && (
            <div className="mb-4 blog-border">
              <div className="text-center">
                <h3 className="text-center title-design-topic">
                  {blogs[selectedContent]?.title}
                </h3>
                <img
                  className="img-fluid"
                  src={blogs[selectedContent]?.img}
                  alt="Blog Thumbnail"
                />
              </div>
              <br />
              <div>
                {blogs[selectedContent]?.topic.map((topic) => (
                  <div key={topic.title}>
                    <h4>{topic.title}</h4>
                    <div>
                      {topic.content.map((contentItem, index) => (
                        <p className="text-justify" key={index}>
                          {contentItem.value}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {blogs[selectedContent]?.subList.map((subListItem, index) => (
                  <div key={index}>
                    <h4>{subListItem.subListTitle}</h4>
                    <div>
                      <ol>
                        {subListItem.subListContent.map(
                          (subListContentItem, subIndex) => (
                            <li key={subIndex}>
                              {subListContentItem.subListItem}
                            </li>
                          )
                        )}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
