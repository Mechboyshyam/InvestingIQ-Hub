import React from "react";
import "./BlogCard.css";

function BlogCard({ blogs }) {
  console.log("blogs", blogs);

  const myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

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
          {blogs?.map((item) => (
            <h6>
              <ul>
                <li>
                  <b>{item?.title}</b>
                </li>
              </ul>
            </h6>
          ))}
        </div>
        <div className="col-md-9">
          {blogs?.map((item) => (
            <div key={item?._id} className="mb-4 blog-border">
              <div className="text-center">
                <h3 className="text-center title-design-topic">
                  {item?.title}
                </h3>
                <img
                  className="img-fluid"
                  src={item?.img}
                  alt="Blog Thumbnail"
                />
              </div>
              <br />
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
                <span id="dots"></span>
                <span id="more">
                  {item.subList.map((subListItem, index) => (
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
                </span>
              </div>
              <button onClick={myFunction} id="myBtn">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
