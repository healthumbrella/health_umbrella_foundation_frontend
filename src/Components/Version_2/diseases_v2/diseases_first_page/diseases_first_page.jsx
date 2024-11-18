import React, { useState } from "react";
import "./diseases_first_page.scss";

const Top = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isReadMore2, setIsReadMore2] = useState(false);

  // Static data
  const data = {
    disease: "Migraine",
    text: "Migraine is a neurological condition that causes intense, debilitating headaches. It is often accompanied by nausea, vomiting, and sensitivity to light and sound. Migraines can last from a few hours to several days, and the pain can be so severe that it interferes with daily activities. The pain is typically described as throbbing or pulsating, often located on one side of the head. Migraines can be triggered by several factors, including stress, hormonal changes, environmental influences, certain foods, and even changes in weather. Each individual's migraine experience may differ, making personalized treatment and management important.",
    summary: "Migraine is a complex and often debilitating condition that can be managed with medications and lifestyle changes. The goal of treatment is to reduce the frequency and severity of migraine attacks, allowing individuals to regain their quality of life. Treatment may include acute medications, such as pain relievers and triptans, to stop attacks, and preventive medications to reduce their frequency. In addition to medications, lifestyle modifications like avoiding known triggers, stress management, regular sleep patterns, and hydration play a crucial role. Migraines are typically diagnosed based on a person's medical history, symptoms, and sometimes imaging tests to rule out other conditions. It's essential for individuals with migraines to collaborate with their healthcare providers to develop a treatment strategy tailored to their specific needs and triggers.",
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
              {isReadMore2 ? data.text : truncateText(data.text, 500)}
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
            <p style={{height:"140px"}}>
              {isReadMore ? data.summary : truncateText(data.summary, 700)}
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
