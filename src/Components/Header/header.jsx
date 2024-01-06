import React, { useRef, useState, useEffect } from "react";
import "./header.css";
import { NavLink } from 'react-router-dom';
import axios from "axios";

function Header() {
    const hamburgerRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);

    const [diseases, setDiseases] = useState(["Diabetes","Breast Cancer","Alzheimer","migraine","Heart Diseases","Cancer","CLD","Asthma","Thyroid","Depression","Kidney Disease","Obesity","Bronchiectasis","Sudden Cardiac Arrest","Multiple Sclerosis","PCOD","Strokes","Hypertension","Lung Cancer","Osteoporosis","Arthritis","Glaucoma","COPD",]); // State to store diseases data
    // const [diseases, setDiseases] = useState([]); // State to store diseases data
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

    // useEffect(() => {
    //     const getapidata = async () => {
    //       try {
    //         const response = await axios.get(
    //           `${process.env.REACT_APP_BACKEND_IP}/header`
    //         );
    //         const fetchedData = response.data;
    //         console.log(fetchedData);
    //         if (fetchedData && fetchedData.diseaseList) {
    //           setDiseases(fetchedData);
    //         //   setLoading(false);
    //         } else {
    //           console.error("API response structure is not as expected.");
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };

    //     getapidata();
    //   }, []);



    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close the dropdown when a disease link is clicked or when navigating to a different page
    const handleDiseaseClick = () => {
        setIsDropdownOpen(false);
    };

    const currentScreenWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth);
    });

    const collapseHandler = () => {
        if (width <= 991) {
            setTimeout(() => {
                hamburgerRef.current.click();
            }, 300);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" to="">
                <img src={process.env.PUBLIC_URL + "/Images/headerlogo.png"} className="navbar-logo d-inline-block align-top" alt=""></img>
            </NavLink>
            <button ref={hamburgerRef} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse adjusting_navbar" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/" onClick={collapseHandler}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/about-us" onClick={collapseHandler}>About Us</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink
                            className="nav-link underline "
                            // to="/diseases"
                            onClick={handleDropdownToggle}
                        >
                            Diseases
                        </NavLink>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            {diseases.map(disease => (
                                <NavLink key={disease} className="dropdown-item" to={`/disease/${disease}`} onClick={handleDiseaseClick} >
                                    {disease}
                                </NavLink>
                            ))}
                        </div>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/share-experience" onClick={collapseHandler}>Share Experience</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/ask-suggestion" onClick={collapseHandler}>Ask Suggestion</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/pathy" onClick={collapseHandler}>Pathy</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/clinics-hospitals" onClick={collapseHandler}>Clinics/Hospitals</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;