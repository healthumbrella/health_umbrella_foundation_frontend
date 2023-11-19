import React from "react";
import "./suggestion.css";
import ContactForm from "./ContactForm";

const suggestion = () => {
  return (
    <div className="suggestion_main">
      <div className="suggestion_container">
        <div className="suggestion_container_left">
            <img src="./Images/green_ring_tl.png" className="ring-tl" alt="top-green-circle" />
          <div className="scl_heading">
            Ask suggestions for<br></br> <p className="scl-subheading" >any disease</p>
          </div>
          <div className="scl_content">
            This is your space—a confidential and supportive environment where
            your voice can be heard. By filling out the form below, you're
            contributing to a tapestry of inspiration that offers hope,
            guidance, and solace to others walking a similar path.This is your
            space—a confidential and supportive environment where your voice can
            be heard. By filling out the form below, you're contributing to a
            tapestry of inspiration that offers hope, guidance, and solace to
            others walking a similar path.
          </div>
        </div>
        <div className="suggestion_container_right">
          <h2 className="scr_heading">Ask suggestion for any Disease</h2>
          <h4 className="scr_subheading ">
            Every donation no matter how big or small makes a significant
            difference to our cause.
            <br></br>
            <p className="scr-subheading-1" >
            Thank you for doing your part to help.
            </p>
          </h4>
          <ContactForm />
          <img src="./Images/green_ring_rb.png" className="ring-rb" alt="bottom-green-circle" />
        </div>
      </div>
    </div>
  );
};

export default suggestion;
