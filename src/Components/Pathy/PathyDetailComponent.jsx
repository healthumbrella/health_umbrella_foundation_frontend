import React from "react";

const PathyDetailComponent =(props)=> {
  return (
    <div className="cardContainer" >
      <img src={props.item.imageLink} alt="NA" />
      <div className="pathy-right-content">
        <div className="pathy-right-title">
          {props.item.title.charAt(0).toUpperCase() + props.item.title.slice(1)}
        </div>
        <div className="pathy-right-para" style={{color: "black"}}>{props.item.text}</div>
        <div className="pathy-right-disease">
        <p style={{ color:"black" }}>Most effective for:</p>
          {props.item.diseaseList.map((item, key) => (
              <a href={item.link} target="__blank" key={key}>
                <div className="pathy-right-disease-name-container">
                <div className="pathy-right-disease-name">{item.disease} ,</div>
                </div>
              </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathyDetailComponent;
