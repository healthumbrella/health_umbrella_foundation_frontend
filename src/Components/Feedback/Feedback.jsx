import React from "react";
import "./Feedback.css";
import Feedbackleft from "./Feedbackleft";

const Feedback = () => {
  return (
    <div className="Feedback_main">

      <div className="Feedback_container">
        <div className="Feedback_left">
          <Feedbackleft />
        </div>
        <div className="doctor-image">

        <img 
        src="./Images/Doctors_standing.png" 
        className="doctor-r" 
        alt="doctors-standing">
        </img>
        </div>

      </div>

    </div>
  );
};

export default Feedback;
