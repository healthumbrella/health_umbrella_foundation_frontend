import React, { useState, useEffect } from "react";
import "./directcases.css";
import axios from "axios";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function DirectCases() {
  const { disease, pathy, caseId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://backend.healthumbrella.org:8000/disease/${disease}/${pathy}/directCase/${caseId}`
      );
      // const res = await axios.get(
      // `http://backend.healthumbrella.org:8000/disease/migraine/acupressure/directCase/001`
      // );

      // console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const capitalizedDisease = `${disease.charAt(0).toUpperCase()}${disease.slice(
    1
  )}`;
  const capitalizedPathy = `${pathy.charAt(0).toUpperCase()}${pathy.slice(1)}`;
  const concatenatedString = `${capitalizedDisease}/${capitalizedPathy}`;

  const handleNavigateBack = () => {
    navigate(-1);
  };

  console.log(data);
  return (
    <div className="D_outer">
      <div className="D_outer_top">
        <h2 onClick={handleNavigateBack} style={{ cursor: "pointer" }}>
          &lt; {concatenatedString}
        </h2>
      </div>
      <div className="D_outer_bottom">
        <div className="D_main_heading">
          <h2>Case {data?.caseId}</h2>
          <div className="line" />
        </div>
        <div className="D_outer_summary">
          <h2 className="D_summary_heading">Summary</h2>
          <p className="D_summary_text">{data?.summary}</p>
          <div className="line" />
        </div>
        <div className="D_outer_details">
          <div className="D_bottom_top">
            <div className="D_top_left">
              <h2 className="D_detail_heading">Personal Details</h2>
              <div className="D_detail_table">
                <table className="D_detail_inner_table">
                  <tr className="TR">
                    <td className="TD1">Name  </td>
                    <td className="TD2">
                      {data?.personalDetails?.name ?? "NA"}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Age  </td>
                    <td className="TD2">
                      {data?.personalDetails?.age ?? "NA"}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Sex  </td>
                    <td className="TD2">
                      {data?.personalDetails?.sex ?? "NA"}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Occupation  </td>
                    <td className="TD2">
                      {data?.personalDetails?.occupation ?? "NA"}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Email ID  </td>
                    <td className="TD2">
                      {data?.personalDetails?.emailAddress ?? "NA"}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Phone No  </td>
                    <td className="TD2">
                      {data?.personalDetails?.phoneNumber ?? "NA"}
                    </td>
                  </tr>
                  <tr className="TR">
                    <td className="TD1">Region  </td>
                    <td className="TD2">
                      {data?.personalDetails?.region ?? "NA"}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="D_top_right">
              <div className="inner_line"></div>
              <div className="D_right_text">
                <h2 className="D_detail_comments">Comments by other</h2>
                <p className="D_detail_text">{data?.comment}</p>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="D_outer_cards">
          <div className="D_cards">
            
          {data?.caseHistory&& <div className="D_medicalreport">
              <a
                href={data?.caseHistory}
                target="__blank"
                className="D_linkStyle"
              >
                {/* <FiDownload size={18} color="black" className="D_FiUpload" />{""} */}
                <span style={{ marginLeft: '8px' }}>Case History</span>
              </a>
            </div>}
            {data?.allergies&&<div className="D_medicalreport">
              <a
                href={data?.allergies}
                target="__blank"
                className="D_linkStyle"
              >
                {/* <FiDownload size={18} color="black" className="D_FiUpload" />{""} */}
                <span style={{ marginLeft: '8px' }}>Allergies</span>
              </a>
            </div>}
            {data?.medicalReport&&<div className="D_medicalreport">
              <a
                href={data?.medicalReport}
                target="__blank"
                className="D_linkStyle"
              >
                {/* <FiDownload size={18} color="black" className="D_FiUpload" />{""} */}
                <span style={{ marginLeft: '8px' }}>Medical Report</span>
              </a>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectCases;
