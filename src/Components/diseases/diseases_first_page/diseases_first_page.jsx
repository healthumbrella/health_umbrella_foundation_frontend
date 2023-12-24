import React, { useState } from "react";
import "./diseases_first_page.scss";

const Top = ({data}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isReadMore2, setIsReadMore2] = useState(false);
 
  return (
    <>
      <div className="extraspace">{/* Hello */}</div>
      <div className="diseases-top-main">
        <div className="diseases-top-container">
          <div className="disease-left">
            <img src={data.imageLink} alt="img" />
            {/* <img src="/Images/women.png" alt="img" /> */}
          </div>
          <div className="disease-right">
            <h1 style={{textTransform:"capitalize"}}>{data.disease}</h1>
            <p>
              {/* {data.text} */}
              {isReadMore2 ? `${data.text}` : `${data.text}`.slice(0, 270)}
              <span
                onClick={() => {
                  setIsReadMore2(!isReadMore2);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                <br />
                {!isReadMore2 ? "Read More..." : "...Read Less"}
              </span>
            </p>
            <h2>Summary</h2>
            <p>
              {isReadMore ? `${data.summary}` : `${data.summary}`.slice(0, 270)}
              {/* {isReadMore ? TEXT : TEXT.slice(0, 400)} */}

              <span
                onClick={() => {
                  setIsReadMore(!isReadMore);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                <br />
               {!isReadMore?"Read More...":"...Read Less"}
              </span>
            </p>
          </div>
        </div>
        <div className="diseases-top-end">
          <div className="g-line">
            <div className="g-round">Pathies</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
