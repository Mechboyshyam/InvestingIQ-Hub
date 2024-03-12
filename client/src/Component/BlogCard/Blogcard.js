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
                        return (
                          <div>
                            <h3>{d.title}</h3>
                            <p>{d.content}</p>
                          </div>
                        );
                      })}
                      {/* <b>{item?.topic[0]}</b>
                <br />
                {item?.paragraph[0]}
                <br />
                <span className="formula">
                  {item?.formula}
                </span>
                <br />
                <br />{item?.paragraph[1]}
              </p>
              <p>
                {item?.paragraph[2]}
              </p>
              <p>
               {item?.topic[1]}
                <ul>
                  <li>
                   {item?.list[0]}
                  </li>
                  <li>
                   {item?.list[1]}
                  </li>
                </ul>
              </p>
              <hr />
              <span>
                <b>
                  {item?.topic[2]}
                </b>
                <ol>
                  <li>
                   {item?.list[2]}
                  </li>
                  <li>
                    {item?.list[3]}
                  </li>
                </ol>
              </span>
              <p>
                <b>{item?.topic[3]}</b>
                <ol>
                  <li>
                    {item?.list[4]}
                  </li>
                  <li>
                  {item?.list[5]}
                  </li>
                  <li>
                    
                    <ul>
                      <li>{item?.list[6]}</li>
                      <li>{item?.list[7]}</li>
                      <li>{item?.list[8]}</li>
                      <li>{item?.list[9]}</li>
                    </ul>
                  </li>
                </ol>
              */}
                    </p>
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
