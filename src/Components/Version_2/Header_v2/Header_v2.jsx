import React, { useRef, useState, useEffect } from "react";
import "./Header_v2.scss";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import SearchBar from "./search_header_v2"
function Header() {
  const hamburgerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  
  // Static diseases data
  const [diseases, setDiseases] = useState([
    "Cancer",
    "Migraine",
    "Psoriasis",
    "Diabetes",
  "Hypertension",
  "Asthma",
  "Arthritis",
  "Alzheimer's Disease",
  "Parkinson's Disease",
  "Tuberculosis",
  "Epilepsy",
  "Hepatitis",
  "HIV-AIDS",
  "Depression",
  "Anxiety",
  "Obesity",
  "COVID-19",
  "Influenza",
  "Chronic Kidney Disease",
  "Thyroid Disorders"
  ]); // Using static data instead of fetching from an API
  // const [diseases, setDiseases] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDiseasesClicked, setIsDiseasesClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith("/disease")) {
      setIsDiseasesClicked(false);
    } else setIsDiseasesClicked(true);
  }, [location]);

  // useEffect(() => {
  //   const getapidata = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_BACKEND_IP}/header/`
  //       );
  //       const fetchedData = response.data;
  //       // console.log(fetchedData);
  //       if (fetchedData && fetchedData.diseaseList) {
  //           setDiseases(fetchedData.diseaseList);
  //       //   setLoading(false);
  //       } else {
  //         console.error("API response structure is not as expected.");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getapidata();
  // }, []);


  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDiseasesClicked(true);
  };

  const handleDiseaseClick = () => {
    setIsDropdownOpen(false);
  };

  const currentScreenWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  }, []);

  const collapseHandler = () => {
    if (width <= 991) {
      setTimeout(() => {
        hamburgerRef.current.click();
      }, 300);
    }
  };

  const scrollToTopOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <NavLink className="navbar-brand" to="">
        <img
          src={process.env.PUBLIC_URL + "/Images/headerlogo.png"}
          className="navbar-logo d-inline-block align-top"
          alt=""
        ></img>
      </NavLink>
      <button
        ref={hamburgerRef}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse adjusting_navbar" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link underline"
              to="/"
              onClick={() => {
                handleDiseaseClick();
                collapseHandler();
                scrollToTopOnClick();
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <div
              className={`nav-link underline ${
                isDiseasesClicked ? "dClick" : ""
              }`}
              onClick={handleDropdownToggle}
            >
              Diseases
            </div>
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              {diseases.map((disease) => (
                <NavLink
                  key={disease}
                  className="dropdown-item"
                  to={`/disease/${disease}`}
                  onClick={() => {
                    handleDiseaseClick();
                    scrollToTopOnClick();
                  }}
                >
                  {disease}
                </NavLink>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link underline"
              to="/share-experience"
              onClick={() => {
                handleDiseaseClick();
                collapseHandler();
                scrollToTopOnClick();
              }}
            >
              Share Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link underline"
              to="/ask-suggestion"
              onClick={() => {
                handleDiseaseClick();
                collapseHandler();
                scrollToTopOnClick();
              }}
            >
              Ask Suggestion
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link underline"
              to="/pathy"
              onClick={() => {
                handleDiseaseClick();
                collapseHandler();
                scrollToTopOnClick();
              }}
            >
              Pathy
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link underline"
              to="/clinics/"
              onClick={() => {
                handleDiseaseClick();
                collapseHandler();
                scrollToTopOnClick();
              }}
            >
              Clinics/Hospitals
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Header_v2_search">
        <img src="/Images_v2/Search.png" alt="icon" />
        {/* <input type="text" placeholder="Search" /> */}
        <SearchBar diseaselist={diseases} />
      </div>
    </nav>
  );
}

export default Header;
