import React from "react";

const PathyDetailComponent = ({ item, isEven }) => {
  return (
    <div
      className="cardContainer"
    //   style={{
    //     flexDirection: isEven ? "row" : "row-reverse",
    //     borderTopLeftRadius: isEven ? "150px" : "40px",
    //     borderBottomLeftRadius: isEven ? "150px" : "40px",
    //     borderTopRightRadius: isEven ? "40px" : "150px",
    //     borderBottomRightRadius: isEven ? "40px" : "150px",
    //   }}
    >
      {/* Using static image URL from the JSON data */}
      <img src={item.imageLink} alt="img" />

      <div className="Pathy-right-content">
        <div className="Pathy-right-title">
          {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
        </div>
        <div className="Pathy-right-para" style={{ color: "#727272" }}>
          {item.text}
        </div>
        <div className="Pathy-right-disease">
          {item.diseaseList.length > 0 && (
            <p style={{ color: "black" }}>Most effective for:</p>
          )}
          {item.diseaseList.map((disitem, key) => (
            <React.Fragment key={key}>
              <a href={disitem.link} target="__blank" rel="noopener noreferrer">
                <div className="Pathy-right-disease-name-container">
                  <div className="Pathy-right-disease-name">{disitem.disease}</div>
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
