import React from "react";
import "./BlogCard.css";

function BlogCard({ blogs }) {
  console.log("blogs", blogs);

  return (
    <div className="container parent-border">
      <div className="row">
        <div className="col-12 mt-2">
          {/* This is common title for blog */}
          <h3 className="text-center title-design">
            Welcome aboard our blog! We're delighted to have you join us as we
            kick off this adventure together. Get ready to dive into intriguing
            topics and insightful discussions. Let's make this journey one to
            remember!
          </h3>
          {/* <hr /> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3  content p-3">
          <h2 className="text-center">
            <b>Content List</b> <br />
          </h2>
          {blogs?.map((item) => (
            <h6 >
              <ul>
                <li><b>{item?.title}</b></li>
              </ul>
            </h6>
          ))}
        </div>
        <div className="col-md-9">
          {blogs?.map((item) => (
            <div key={item?._id} className="mb-4">
              <div className="text-center">
                {/* title of the blog */}
                <h3 className="text-center title-design-topic">
                  {item?.title}
                </h3>
                <hr />
                {/* image of that blog */}
                <img
                  className="img-fluid"
                  src={item?.img}
                  alt="Blog Thumbnail"
                />
              </div>
              <hr />
              <div>
                {item.topic.map((topic) => (
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
                {item.subList.map((subListItem, index) => (
                  <div key={index}>
                    <h4>{subListItem.subListTitle}</h4>
                    <div>
                      {/* here array is mapped */}
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
