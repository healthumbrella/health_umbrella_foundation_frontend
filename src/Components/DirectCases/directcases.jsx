import React, { useState } from "react";
import "./directcases.css";
import { useNavigate } from "react-router-dom";

function DirectCases() {
  const navigate = useNavigate();
  const hardcodedData = {
    caseId: "001",
    summary:
      "This is a summary of the case. It includes all the relevant details about the case and the patient's background. John Doe is a 30-year-old male engineer from California who presented with symptoms including fatigue, shortness of breath, and occasional chest pain. He has a family history of heart disease, which raises concerns for potential cardiovascular issues. After a series of diagnostic tests, including blood work, an ECG, and an echocardiogram, John was diagnosed with mild hypertension and early signs of atherosclerosis. His blood pressure readings have been consistently high over the past six months, which has prompted a more detailed evaluation of his cardiovascular health. Doctors have recommended lifestyle changes such as increased physical activity, a heart-healthy diet, and medication to manage blood pressure and cholesterol levels. Further follow-ups are scheduled to monitor his progress and ensure that there are no complications. The case involves not only managing John’s immediate health concerns but also educating him on the importance of regular health checkups and preventive care to avoid more serious conditions like heart attack or stroke.",
    personalDetails: {
      name: "John Doe",
      age: 30,
      sex: "Male",
      occupation: "Engineer",
      emailAddress: "john.doe@example.com",
      phoneNumber: "1234567890",
      region: "California",
      maritalStatus: "Single",
      emergencyContact: {
        name: "Jane Doe",
        relationship: "Sister",
        phoneNumber: "9876543210",
      },
    },
    comment:
      "John Doe is undergoing treatment for hypertension and early-stage atherosclerosis. His doctors have advised lifestyle modifications including weight loss, a low-sodium diet, and an exercise regimen that involves cardiovascular activities like walking or cycling. Additionally, he has been prescribed medications such as ACE inhibitors and statins to help control his blood pressure and cholesterol levels. It is crucial for John to adhere to his medication schedule and attend regular follow-up appointments to prevent further complications. The patient has expressed concerns about the long-term management of his condition and has requested more information on how to maintain a healthy lifestyle. Education on stress management and mindfulness techniques will also be incorporated into his treatment plan to help him cope with work-related stress, which may be contributing to his hypertension.",
    caseHistory: "/path/to/case-history.pdf",
    allergies: "/path/to/allergies.pdf",
    medicalReport: "/path/to/medical-report.pdf",
    treatmentPlan: {
      medications: [
        "ACE Inhibitors (Lisinopril) 10 mg daily",
        "Statins (Atorvastatin) 20 mg daily",
        "Aspirin 81 mg daily",
      ],
      lifestyleRecommendations: [
        "Increased physical activity (e.g., walking, cycling, swimming)",
        "Heart-healthy diet (e.g., low-sodium, high-fiber, rich in fruits and vegetables)",
        "Weight loss (target: 5-10% reduction in body weight)",
        "Stress management (e.g., yoga, meditation, mindfulness)",
      ],
      followUpAppointments: [
        { date: "2024-12-01", type: "Cardiology Consultation" },
        { date: "2025-01-15", type: "Blood Pressure Check" },
      ],
      monitoring: "Regular monitoring of blood pressure, cholesterol levels, and kidney function through blood tests every 3 months.",
    },
    familyHistory: [
      {
        relative: "Father",
        condition: "Coronary Artery Disease",
        ageAtDiagnosis: 52,
      },
      {
        relative: "Mother",
        condition: "Type 2 Diabetes",
        ageAtDiagnosis: 50,
      },
    ],
    socialHistory: {
      smoking: "Non-smoker",
      alcohol: "Occasional (2-3 drinks per week)",
      exercise: "Moderate (cycling, walking 3 times per week)",
      diet: "Low-fat, moderate in carbohydrates, high in vegetables",
    },
    diagnosticTests: [
      {
        testName: "ECG",
        date: "2024-11-05",
        result: "Normal sinus rhythm, no signs of ischemia or arrhythmias",
      },
      {
        testName: "Echocardiogram",
        date: "2024-11-06",
        result: "Mild left ventricular hypertrophy, no valve abnormalities",
      },
      {
        testName: "Blood Pressure",
        date: "2024-11-07",
        result: "145/95 mmHg (Hypertension Stage 1)",
      },
      {
        testName: "Cholesterol Panel",
        date: "2024-11-07",
        result: "Total Cholesterol: 210 mg/dL, LDL: 130 mg/dL, HDL: 50 mg/dL",
      },
    ],
  };
  

  const [isReadMore2, setIsReadMore2] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className="D_outer">
      <div className="D_outer_top">
        <h2 style={{ cursor: "pointer", fontSize: "15px" }}>
          &lt;{" "}
          <span onClick={() => navigate(-3)}>Migraine</span>
          /
          <span onClick={() => navigate(-2)}>Acupressure Therapy</span>
          <span onClick={() => navigate(-1)}>/DirectCase/</span>
          {hardcodedData.caseId}
        </h2>
      </div>
      <div className="D_outer_bottom">
        <div className="D_main_heading">
          <h2>Case {hardcodedData.caseId}</h2>
          <div className="line" />
        </div>
        <div className="D_outer_summary">
          <h2 className="D_summary_heading">Summary</h2>
          <p className="D_summary_text">
            {isReadMore
              ? hardcodedData.summary
              : hardcodedData.summary.slice(0, 1180)}
            <span
              onClick={() => setIsReadMore(!isReadMore)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              <br />
              {!isReadMore ? "Read More..." : "...Read Less"}
            </span>
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
                    <td className="TD2">{hardcodedData.personalDetails.name}</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Age</td>
                    <td className="TD2">{hardcodedData.personalDetails.age}</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Sex</td>
                    <td className="TD2">{hardcodedData.personalDetails.sex}</td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Occupation</td>
                    <td className="TD2">
                      {hardcodedData.personalDetails.occupation}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Email ID</td>
                    <td className="TD2">
                      {hardcodedData.personalDetails.emailAddress}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Phone No</td>
                    <td className="TD2">
                      {hardcodedData.personalDetails.phoneNumber}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Region</td>
                    <td className="TD2">{hardcodedData.personalDetails.region}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="D_top_right">
              <div className="inner_line"></div>
              <div className="D_right_text">
                <h2 className="D_detail_comments">Comments by Other</h2>
                <p className="D_detail_text">
                  {isReadMore2
                    ? hardcodedData.comment
                    : hardcodedData.comment.slice(0, 600)}
                  <span
                    onClick={() => setIsReadMore2(!isReadMore2)}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    <br />
                    {!isReadMore2 ? "Read More..." : "...Read Less"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="D_outer_cards">
          <div className="D_cards">
            {hardcodedData.caseHistory && (
              <div className="D_medicalreport">
                {/* <a
                  href={hardcodedData.caseHistory}
                  target="__blank"
                  className="D_linkStyle"
                > */}
                  <span style={{ marginLeft: "8px" }}>Case History</span>
                {/* </a> */}
              </div>
            )}
            {hardcodedData.allergies && (
              <div className="D_medicalreport">
                {/* <a
                  href={hardcodedData.allergies}
                  target="__blank"
                  className="D_linkStyle"
                > */}
                  <span style={{ marginLeft: "8px" }}>Allergies</span>
                {/* </a> */}
              </div>
            )}
            {hardcodedData.medicalReport && (
              <div className="D_medicalreport">
                {/* <a
                  href={hardcodedData.medicalReport}
                  target="__blank"
                  className="D_linkStyle"
                > */}
                  <span style={{ marginLeft: "8px" }}>Medical Report</span>
                {/* </a> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectCases;
