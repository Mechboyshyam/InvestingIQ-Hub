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
                <h3 className="text-center title-design-topic">{item?.title}</h3> <hr />
                <img className="img-fluid" src={item?.img} alt="Blog Thumbnail" /> 
              </div>
              <hr />
              <div>
                {item.topic.map((d) => (
                  <div key={d.title}>
                    <h4>{d.title}</h4>
                    <div >
                      {d.content.map((e, index) => (
                        <p className="text-justify" key={index}>{e.value}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {item.subList.map((e, index) => (
                 <div>
                   <h4 key={index}>{e.subListTitle}</h4>
                  <p>
                  {item?.subListContent.map((e,index)=>(
                  <ul><li key={index}>{e.subListItem}</li></ul>
                ))}
                  </p>
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
