import React from "react";

const PathyDetailComponent = ({ item, isEven }) => {
  return (
    <div className="cardContainer"  style={{
      flexDirection: isEven ? "row" : "row-reverse",
      borderTopLeftRadius: isEven ? "150px" : "40px",
      borderBottomLeftRadius: isEven ? "150px" : "40px",
      borderTopRightRadius: isEven ? "40px" : "150px",
      borderBottomRightRadius: isEven ? "40px" : "150px",
    }}>
      {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
        <img src={`${process.env.REACT_APP_BACKEND_IP}${item.imageLink}`} alt="img" />
      ) : (
        <img src={item.imageLink} alt="img"/>
      )}

      {/* <img src={props.item.imageLink} alt="NA" /> */}
      <div className="pathy-right-content">
        <div className="pathy-right-title">
          {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
        </div>
        <div className="pathy-right-para" style={{ color: "black" }}>{item.text}</div>
        <div className="pathy-right-disease">
          {item.diseaseList.length > 0 && (
            <p style={{ color: "black" }}>Most effective for:</p>
          )}
          {item.diseaseList.map((disitem, key) => (
            <React.Fragment key={key}>
              <a href={disitem.link} target="__blank" key={key}>
                <div className="pathy-right-disease-name-container">
                  <div className="pathy-right-disease-name">{disitem.disease}</div>
                </div>
              </a>
              {key !== item.diseaseList.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathyDetailComponent;
