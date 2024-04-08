import React from "react";

const PathyDetailComponent = (props) => {
  return (
    <div className="cardContainer" >
      {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
        <img src={`${process.env.REACT_APP_BACKEND_IP}${props.item.imageLink}`} alt="img" />
      ) : (
        <img src={props.item.imageLink} alt="img" />
      )}

      {/* <img src={props.item.imageLink} alt="NA" /> */}
      <div className="pathy-right-content">
        <div className="pathy-right-title">
          {props.item.title.charAt(0).toUpperCase() + props.item.title.slice(1)}
        </div>
        <div className="pathy-right-para" style={{ color: "black" }}>{props.item.text}</div>
        <div className="pathy-right-disease">
          {props.item.diseaseList.length > 0 && (
            <p style={{ color: "black" }}>Most effective for:</p>
          )}
          {props.item.diseaseList.map((item, key) => (
            <React.Fragment key={key}>
              <a href={item.link} target="__blank" key={key}>
                <div className="pathy-right-disease-name-container">
                  <div className="pathy-right-disease-name">{item.disease}</div>
                </div>
              </a>
              {key !== props.item.diseaseList.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathyDetailComponent;
