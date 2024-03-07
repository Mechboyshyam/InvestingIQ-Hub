import React from "react";
// import axios from 'axios';
import "./BlogCard.css";
function BlogCard({ blogs }) {
  console.log("blogs", blogs);

  return (
    <div className="parent main-1 mt-2">
       <div className="mt-2">
          <h3 className="text-center title-design">
            "Welcome aboard our blog! We're delighted to have you join us
            as we kick off this adventure together. Get ready to dive into
            intriguing topics and insightful discussions. Let's make this
            journey one to remember!"
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
            <div className="col-4 text-center content p-3">Content List</div>
            <div className="col-8 blog">
              {/* <div className="text-center"><span className=" over-view">Overview</span></div> */}
              <div className="text-center">
                <h4 className="text-center title-design-topic ">
                {item?.title}
                </h4>
                <img className="img-fluid" alt="jpeg" />
              </div>
              <hr />
              <p>
                <b>{item?.topic1}</b>
                <br />
                {item?.para1}
                <br />
                <span className="formula">
                  {item?.formula}
                </span>
                <br />
                <br />{item?.para2}
              </p>
              <p>
                {item?.para3}
              </p>
              <p>
               {item?.topic2}
                <ul>
                  <li>
                   {item?.li1}
                  </li>
                  <li>
                   {item?.li2}
                  </li>
                </ul>
              </p>
              <hr />
              <span>
                <b>
                  {item?.topic3}
                </b>
                <ol>
                  <li>
                   {item?.li3}
                  </li>
                  <li>
                    {item?.li4}
                  </li>
                </ol>
              </span>
              {/* what is nse and bse */}
              <p>
                <b>{item?.topic4}</b>
                <ol>
                  <li>
                    {item?.li5}
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                    <ul>
                      <li>{item?.li71}</li>
                      <li>{item?.li72}</li>
                      <li>{item?.li73}</li>
                      <li>{item?.li74}</li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
              {/* <h1>{item?.title}</h1> */}
              {/* <p>{item?.description}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogCard;
