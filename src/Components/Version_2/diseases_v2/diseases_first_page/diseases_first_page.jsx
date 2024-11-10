import React, { useState } from "react";
import "./diseases_first_page.scss";

const Top = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isReadMore2, setIsReadMore2] = useState(false);

  // Static data
  const data = {
    disease: "Migraine",
    text: "Migraine is a neurological condition that causes intense, debilitating headaches. It is often accompanied by nausea, vomiting, and sensitivity to light and sound. Migraines can last from a few hours to several days, and the pain can be so severe that it interferes with daily activities. Several factors, including stress, hormonal changes, and environmental factors, can trigger migraines.",
    summary: "Migraine is a complex condition that can be treated with medications and lifestyle changes. The goal of treatment is to reduce the frequency and severity of attacks. Migraines are typically diagnosed based on medical history and symptoms. It's essential for individuals with migraines to work with their healthcare providers to develop effective treatment strategies.",
    imageLink: "/Images_v2/disman.png", // Use a static image for illustration
  };

  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    return truncated.slice(0, truncated.lastIndexOf(" ")) + " ";
  };

  return (
    <div>
      <div className="diseases-top-main">
        <div className="diseases-top-container">
          <div className="disease-left">
            <img src={data.imageLink} alt="img" />
          </div>
          <div className="disease-right">
            <h1>{data.disease}</h1>
            <p>
              {isReadMore2 ? data.text : truncateText(data.text, 270)}
              <span
                onClick={() => {
                  setIsReadMore2(!isReadMore2);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                {" "}
                {!isReadMore2 ? "Read More" : "Read Less"}
              </span>
            </p>
            <h2>Summary from all Therapies-</h2>
            <p>
              {isReadMore ? data.summary : truncateText(data.summary, 400)}
              <span
                onClick={() => {
                  setIsReadMore(!isReadMore);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                {!isReadMore ? "Read More" : "Read Less"}
              </span>
            </p>
          </div>
        </div>
        <div className="diseases-top-end">
          {/* <div className="g-line">
            <div className="g-round">Pathies</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Top;
