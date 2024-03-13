import React from "react";
import "./BlogCard.css";
function BlogCard({ blogs }) {
  console.log("blogs", blogs);

  return (
    <div className="parent main-1 mt-2">
      <div className="mt-2">
        {/* this text will be in the top of the page which will show always */}
        <h3 className="text-center title-design">
          "Welcome aboard our blog! We're delighted to have you join us as we
          kick off this adventure together. Get ready to dive into intriguing
          topics and insightful discussions. Let's make this journey one to
          remember!"
        </h3>
        <hr />
      </div>
      <div>
        {blogs?.map((item) => {
          return (
            <div key={item?._id}>
              <div>
                {/* making two dives here for the content and the information  */}
                <div className="d-flex flex-box text-align">
                  <div className="col-4 text-center content p-3">
                    Content List
                  </div>
                  <div className="col-8 blog">
                    <div className="text-center">
                      <h4 className="text-center title-design-topic ">
                        {item?.title}
                      </h4>
                      <img className="img-fluid" src={item?.img} alt="jpeg" />
                    </div>
                    <hr />
                    <p>
                      {item.topic.map((d) => {
                        console.log("d", d);
                        return (
                          <div>
                            <h3>{d.title}</h3>
                            <div>
                              {d.content.map((e) => {
                                return <p>{e.value}</p>;
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </p>
                    <ul>
                      {item?.list.map((e) => {
                        return <li>{e.listItem}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogCard;
