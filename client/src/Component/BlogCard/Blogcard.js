import React from "react";
import "./BlogCard.css";

function BlogCard({ blogs }) {
  console.log("blogs", blogs);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-2">
          <h3 className="text-center title-design">
            Welcome aboard our blog! We're delighted to have you join us as we
            kick off this adventure together. Get ready to dive into intriguing
            topics and insightful discussions. Let's make this journey one to
            remember!
          </h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 text-center content p-3">
          Content List
        </div>
        <div className="col-md-9">
          {blogs?.map((item) => (
            <div key={item?._id} className="mb-4">
              <div className="text-center">
                <h3 className="text-center title-design-topic">{item?.title}</h3>
                <hr />
                <img className="img-fluid" src={item?.img} alt="Blog Thumbnail" />
              </div>
              <hr />
              <div>
                {item.topic.map((topic) => (
                  <div key={topic.title}>
                    <h4>{topic.title}</h4>
                    <div>
                      {topic.content.map((contentItem, index) => (
                        <p className="text-justify" key={index}>{contentItem.value}</p>
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
                      <ol>
                        {subListItem.subListContent.map((subListContentItem, subIndex) => (
                          <li key={subIndex}>{subListContentItem.subListItem}</li>
                        ))}
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
