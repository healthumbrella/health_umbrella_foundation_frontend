import React, { useRef, useState } from "react";
import "./memberdetails_v2.css";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Memberdetails = () => {
  const { team } = useParams();
  console.log(team);

  const backendData = {
    memberList: [
      {
        name: "Dr. Amit Neogi",
        designation: "Founder",
        imageLink: "/Images/person.png",
        about:
          "Dr Neogi has been working as an Assistant Professor of Physics in an IT Engineering Institute started by steel King Mr L N Mittal in 2003.",
        linkedinLink: "linkedin.com",
        emailAddress: "dr.amitneogi@example.com",
        phoneNumber: "123456789",
      },
      {
        name: "Arun",
        designation: "FullStack Developer",
        imageLink: "/Images/person.png",
        about:
          "Experienced FullStack Developer of 2 years",
        linkedinLink: "linkedin.com",
        phoneNumber: "987654321",
      },
      {
        name: "Dhruv Bandi",
        designation: "Web Developer",
        imageLink: "/Images/person.png",
        about:
          "Fullstack Developer who loves to do frontend.",
        linkedinLink: "linkedin.com",
        emailAddress: "dhruvbandi03@gmail.com",
      },
    ],
  };

  const [currentTab, setCurrentTab] = useState(backendData.memberList[0]);

  const dataDivRef = useRef(null);

  const handleScroll = (scrollDirection) => {
    if (dataDivRef.current) {
      const scrollAmount = dataDivRef.current.offsetWidth / 2;
      const currentScroll = dataDivRef.current.scrollLeft;
      const newScroll =
        scrollDirection === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;
      dataDivRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="extraspace"></div>
      <div className="main-members">
        <div className="navigation-link">
          <Link to="/our-team">
            <p>&lt; OurTeam </p>
          </Link>
          <Link to={window.location.pathname}>
            <p>/{team}</p>
          </Link>
        </div>
        <div className="container-members">
          <div className="container-2">
            <div className="left-1">
              <div className="name-about">
                <div className="name-span">
                  <p>{currentTab.name}</p>
                  <span className="span">{currentTab.designation}</span>
                </div>
                <p className="about">{currentTab.about.slice(0, 180)}</p>
              </div>
              <div className="icons">
                {currentTab.linkedinLink && (
                  <a
                    href={currentTab.linkedinLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icons-img"
                      src="/Images/icons8-linked-in-240.png"
                      alt="LinkedIn"
                    />
                  </a>
                )}
                {currentTab.emailAddress && (
                  <a
                    href={`mailto:${currentTab.emailAddress}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icons-img"
                      src="/Images/icons8-gmail-480 (1).png"
                      alt="Email"
                    />
                  </a>
                )}
                {currentTab.phoneNumber && (
                  <a
                    href={`tel:${currentTab.phoneNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icons-img-ringer"
                      src="/Images/icons8-ringer-volume-90.png"
                      alt="Phone"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="right">
              <img
                src="/Images/person.png"
                alt={"Member"}
                className="mimage"
                draggable="false"
              />
            </div>
          </div>
          <div className="gray-div">
            <button
              className="button-left"
              onClick={() => handleScroll("left")}
            >
              <IoIosArrowBack />
            </button>
            <div className="data-div" ref={dataDivRef}>
              {backendData.memberList.map((member, index) => (
                <div
                  key={index}
                  className="member-card"
                  onClick={() => setCurrentTab(member)}
                >
                  <img
                    src={member.imageLink}
                    alt={member.name}
                    className="mimage"
                    draggable="false"
                  />
                  <div className="member-info">
                    <p className="name">{member.name}</p>
                    <span className="designation">{member.designation}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="button-right"
              onClick={() => handleScroll("right")}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberdetails;
