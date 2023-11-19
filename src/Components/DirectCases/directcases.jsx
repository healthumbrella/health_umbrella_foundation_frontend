import React from "react";
import "./directcases.css";

function DirectCases() {
  return (
    <div className="D_outer">
      <div className="D_outer_top">
        <h2>&#60; Migraine/Accupressure</h2>
      </div>
      <div className="D_outer_bottom">
        <div className="D_main_heading">
          <h2>Case 1</h2>
          <div className="line" />
        </div>
        <div className="D_outer_summary">
          <h2 className="D_summary_heading">Summary</h2>
          <p className="D_summary_text">
            A patient suffering from migraines sought relief through acupressure
            therapy. Acupressure involves applying pressure to specific points
            on the body to promote healing. The patient underwent a series of
            sessions where skilled practitioners targeted the relevant pressure
            points. Over time, the patient experienced a reduction in the
            frequency and intensity of their migraines, eventually finding
            complete relief. Acupressure therapy proved to be an effective
            alternative treatment for the patient's migraines, offering them a
            new lease on life.
          </p>
          <div className="line" />
        </div>
        <div className="D_outer_details">
          <div className="D_bottom_top">
            <div className="D_top_left">
              <h2 className="D_detail_heading">Personal Details</h2>
              <div className="D_detail_table">
                <table className="D_detail_inner_table">
                  <tr className="TR">
                    <td className="TD1">Name</td>
                    <td className="TD2">Rahul Sharma</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Age</td>
                    <td className="TD2">29</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Sex</td>
                    <td className="TD2">Male</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Occupation</td>
                    <td className="TD2">Engineer</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Email ID</td>
                    <td className="TD2">rahulsh@gmail.com</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Phone No.</td>
                    <td className="TD2">7777777724</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Region</td>
                    <td className="TD2">India</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="D_top_right">
              <div className="inner_line"></div>
              <div className="D_right_text">
                <h2 className="D_detail_comments">Comments by other</h2>
                <p className="D_detail_text">
                    A patient suffering from migraines sought relief through
                    acupressure therapy. Acupressure involves applying pressure to
                    specific points on the body to promote healing. The patient
                    underwent a series of sessions where skilled practitioners
                    targeted the relevant pressure points. Over time, the patient
                    experienced a reduction in the frequency and intensity of their
                    migraines, eventually finding complete relief. Acupressure
                    therapy proved to be an effective alternative treatment for the
                    patient's migraines, offering them a new <button>...Read More</button>
                </p>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="D_outer_cards">
            <div className="D_cards">
                <div className="D_casehistory">Case History</div>
                <div className="D_allergies">Allergies</div>
                <div className="D_medicalreport">Medical Report</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DirectCases;
