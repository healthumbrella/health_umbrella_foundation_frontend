import React from "react";
import "./Feedback.css";
import Feedbackleft from "./Feedbackleft";

const Feedback = () => {
  return (
    <div className="Feedback_main" style={{backgroundColor:"#E3F4FC"}}>

      <div className="Feedback_container">
          <div className="doctor-image">

          <img src="./Images_v2/doctorimage.png"/>
          </div>
        <div className="Feedback_left">
          <Feedbackleft />
        </div>
        

      </div>

    </div>
  );
};

export default Feedback;
