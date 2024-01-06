import React from "react";
import "./ShareExp.css";
import ShareExpForm from "./ShareExpForm";

const Share_exp = () => {
  return (
    <div className="Share_exp_main">
      <div className="Share_exp_container">
        <div className="Share_exp_container_left">
            <img src="./Images/green_ring_tl.png" className="ring-tl" alt="top-green-circle" />
          <div className="scl_heading">
          Your experience <br></br> <p className="scl-subheading" >really matters for us..</p>
          </div>
          <div className="scl_content">
          This is your space—a confidential and supportive environment where your voice can be 
          heard. By filling out the form below, you're contributing to a tapestry of inspiration 
          that offers hope, guidance, and solace to others walking a similar path.This is your 
          space—a confidential and supportive environment where your voice can be heard. By filling
          out the form below, you're contributing to a tapestry of inspiration that offers hope,
          guidance, and solace to others walking a similar path.
          </div>
        </div>
        <div className="Share_exp_container_right">
          <h2 className="scr_heading">Share your own experience/story</h2>
          <h4 className="scr_subheading ">
            {/* Your story matters; let’s create a legacy of shared experiences together! */}
            <br></br>
            <p className="scr-subheading-1" >
            Thank you for doing your part to help.
            </p>
          </h4>
          <ShareExpForm />
          <img src="./Images/green_ring_rb.png" className="ring-rb" alt="bottom-green-circle" />
        </div>
      </div>
    </div>
  );
};

export default Share_exp;

