import React, { useRef, useEffect, useState } from "react";
import "./memberdetails.css";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ClipLoader from "react-spinners/ClipLoader";


const Memberdetails = () => {
    
  const [backendData, setBackendData] = useState({ memberList: [] });
  const [loading, setLoading] = useState(true);
  const {team}=useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_IP}/members/${team}`
        );
        const data = await response.json();
        setBackendData(data);
        setCurrentTab(data.memberList[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [currentTab, setCurrentTab] = useState(backendData.memberList[0]);

  const setMyCards = (value) => {
    setCurrentTab(value);
  };

  const dataDivRef = useRef(null);

  const handleScroll = (scrollDirection) => {
    const scrollAmount = 300; // Adjust as needed
    if (dataDivRef.current) {
      const currentScroll = dataDivRef.current.scrollLeft;
      const newScroll =
        scrollDirection === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;
      dataDivRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  if (!currentTab) {
    return (
      <ClipLoader
        className="loadingicon"
        color="green"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  return (
    <div>
      <div className="extraspace"></div>
      {!backendData || loading ? (
        <ClipLoader
          className="loadingicon"
          color="green"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="main-members">
          <div className="navigation-link">
            <Link to="/">
              <p>&lt; Home</p>
            </Link>
            <Link to="/our-team">
              <p>/OurTeam</p>
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
                <p className="about">{currentTab.about.slice(0,180)}</p>
              </div>

              <div className="icons">
                {
                  currentTab.linkedinLink?( <a href={currentTab.linkedinLink} target="_blank">
                  <img
                    className="icons-img"
                    src="/images/icons8-linked-in-240.png"
                    alt="Clickable Image"
                  ></img>
                </a>):("")
                }
                {
                  currentTab.linkedinLink?(  <a
                    href={`mailto:${currentTab.emailAddress}`}
                    target="_blank"
                    className="gmail"
                  >
                    <img
                      className="icons-img"
                      src="/images/icons8-gmail-480 (1).png"
                      alt="Clickable Image"
                    ></img>
                  </a>):("")
                }
                {
                  currentTab.linkedinLink?(  <a href={`tel:${currentTab.phoneNumber}`} target="_blank">
                  <img
                    className="icons-img-ringer"
                    src="/images/icons8-ringer-volume-90.png"
                    alt="Clickable Image"
                  ></img>
                </a>):("")
                }
               
               
              </div>
            </div>
            <div className="right">
              <img className="blur-overlay"
                src={currentTab.imageLink}
                alt="Member's image"
                draggable={false}
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
                  onClick={() => setMyCards(member)}
                >
                  <img
                    src={member.imageLink}
                    alt={member.name}
                    className="image"
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
      )}
    </div>
  );
};

export default Memberdetails;
