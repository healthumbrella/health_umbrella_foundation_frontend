import React, { useState } from "react";
import "./directcases.css";
import { useNavigate } from "react-router-dom";

function DirectCases() {
  const navigate = useNavigate();
  const hardcodedData = {
    caseId: "001",
    summary:
      "This is a summary of the case. It includes all the relevant details about the case and the patient's background.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt quia quo iure. Tenetur, nostrum. Odio, iste aperiam itaque tempora labore suscipit quas optio nostrum odit inventore quibusdam? Mollitia tenetur molestias accusantium ipsum! Eveniet illo nesciunt deleniti quasi quidem voluptatum non nulla aspernatur accusamus ipsam modi sapiente expedita est mollitia impedit minima ab totam tempora id dolore, labore voluptatem. Ad qui cum exercitationem vero esse non enim illum, a quod nostrum earum consequuntur quibusdam expedita. Distinctio aliquid, ipsa deleniti harum, perferendis voluptate molestiae natus similique suscipit molestias a odit provident eos quae vel exercitationem recusandae unde laborum! Beatae doloribus optio in corrupti aut, quos consectetur vel. Nostrum ratione, numquam adipisci ullam eaque velit obcaecati facilis suscipit eum nam mollitia corporis, nisi culpa illo. Totam quis deleniti nam corporis explicabo repudiandae doloribus nobis recusandae perferendis amet corrupti voluptas doloremque, beatae qui impedit, exercitationem, culpa laboriosam voluptate? Quam ab eveniet praesentium reprehenderit ad voluptate iure nobis. Vel doloribus facere, ut mollitia expedita nobis nostrum veritatis tempora id quasi voluptas ad doloremque, consectetur quibusdam, suscipit alias rerum architecto dolorem obcaecati laboriosam. Quas ut iste officiis ad atque hic aperiam sit! Quod, suscipit quasi voluptates repudiandae, dolorum magnam laudantium rem eos ipsam est expedita?",
    personalDetails: {
      name: "John Doe",
      age: 30,
      sex: "Male",
      occupation: "Engineer",
      emailAddress: "john.doe@example.com",
      phoneNumber: "1234567890",
      region: "California",
    },
    comment:
      "This is a summary of the case. It includes all the relevant details about the case and the patient's background.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt quia quo iure. Tenetur, nostrum. Odio, iste aperiam itaque tempora labore suscipit quas optio nostrum odit inventore quibusdam? Mollitia tenetur molestias accusantium ipsum! Eveniet illo nesciunt deleniti quasi quidem voluptatum non nulla aspernatur accusamus ipsam modi sapiente expedita est mollitia impedit minima ab totam tempora id dolore, labore voluptatem. Ad qui cum exercitationem vero esse non enim illum, a quod nostrum earum consequuntur quibusdam expedita. Distinctio aliquid, ipsa deleniti harum, perferendis voluptate molestiae natus similique suscipit molestias a odit provident eos quae vel exercitationem recusandae unde laborum! Beatae doloribus optio in corrupti aut, quos consectetur vel. Nostrum ratione, numquam adipisci ullam eaque velit obcaecati facilis suscipit eum nam mollitia corporis, nisi culpa illo. Totam quis deleniti nam corporis explicabo repudiandae doloribus nobis recusandae perferendis amet corrupti voluptas doloremque, beatae qui impedit, exercitationem, culpa laboriosam voluptate? Quam ab eveniet praesentium reprehenderit ad voluptate iure nobis. Vel doloribus facere, ut mollitia expedita nobis nostrum veritatis tempora id quasi voluptas ad doloremque, consectetur quibusdam, suscipit alias rerum architecto dolorem obcaecati laboriosam. Quas ut iste officiis ad atque hic aperiam sit! Quod, suscipit quasi voluptates repudiandae, dolorum magnam laudantium rem eos ipsam est expedita? the case that should be taken into consideration.",
    caseHistory: "/path/to/case-history.pdf",
    allergies: "/path/to/allergies.pdf",
    medicalReport: "/path/to/medical-report.pdf",
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
              : hardcodedData.summary.slice(0, 700)}
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
                    : hardcodedData.comment.slice(0, 400)}
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
