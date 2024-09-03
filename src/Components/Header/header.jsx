import React, { useRef, useState, useEffect } from "react";
import "./header.css";
import { NavLink, useLocation ,/*useLocation*/} from 'react-router-dom';
import axios from "axios";

function Header() {
    const hamburgerRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);

    // const [diseases, setDiseases] = useState(["Diabetes","Breast Cancer","Alzheimer","migraine","Heart Diseases","Cancer","CLD","Asthma","Thyroid","Depression","Kidney Disease","Obesity","Bronchiectasis","Sudden Cardiac Arrest","Multiple Sclerosis","PCOD","Strokes","Hypertension","Lung Cancer","Osteoporosis","Arthritis","Glaucoma","COPD",]); // State to store diseases data
    const [diseases, setDiseases] = useState([]); // State to store diseases data
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility
    const [isDiseasesClicked, setIsDiseasesClicked] = useState(false);
    const location=useLocation();
    useEffect(() => {
        // console.log(location.pathname)
        if (!location.pathname.startsWith('/disease')) {
            setIsDiseasesClicked(false);
        }
        else setIsDiseasesClicked(true);
    }, [location]);
    useEffect(() => {
        const getapidata = async () => {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_BACKEND_IP}/header/`
            );
            const fetchedData = response.data;
            // console.log(fetchedData);
            if (fetchedData && fetchedData.diseaseList) {
                setDiseases(fetchedData.diseaseList);
            //   setLoading(false);
            } else {
              console.error("API response structure is not as expected.");
            }
          } catch (error) {
            console.error(error);
          }
        };

        getapidata();
      }, []);
    


    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsDiseasesClicked(true);
    };

    // Close the dropdown when a disease link is clicked or when navigating to a different page
    const handleDiseaseClick = () => {
        setIsDropdownOpen(false);
        // setIsDiseasesClicked(false);
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

    const scrollToTopOnClick = () => {
        window.scrollTo(0, 0);
      };
    // const location =useLocation();
    // let currentPath=location.pathname;
    //   currentPath+='/';
    
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
                        <NavLink className="nav-link underline" to="/" onClick={()=>{handleDiseaseClick(); collapseHandler();  scrollToTopOnClick();}}>Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link underline" to="/about-us" onClick={collapseHandler}>About Us</NavLink>
                    </li> */}
                    <li className="nav-item dropdown">
                        <div
                            className={`nav-link underline ${isDiseasesClicked?'dClick':''}`}
                            // to={`${currentPath} /}`}
                            onClick={handleDropdownToggle}
                            // end
                        >
                            Diseases
                        </div>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            {diseases.map(disease => (
                                <NavLink key={disease} className="dropdown-item" to={`/disease/${disease}`} onClick={ ()=>{handleDiseaseClick();
                                    scrollToTopOnClick();}} >
                                    {disease}
                                </NavLink>
                            ))}
                        </div>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/share-experience" onClick={()=>{handleDiseaseClick(); collapseHandler();  scrollToTopOnClick();}}>Share Experience</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/ask-suggestion"  onClick={()=>{handleDiseaseClick(); collapseHandler();  scrollToTopOnClick();}}>Ask Suggestion</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/pathy" onClick={()=>{handleDiseaseClick(); collapseHandler();  scrollToTopOnClick();}}>Pathy</NavLink>
                    </li>
                      <li className="nav-item">
                        <NavLink className="nav-link underline" to="/clinics/" onClick={()=>{handleDiseaseClick(); collapseHandler();  scrollToTopOnClick();}}>Clinics/Hospitals</NavLink>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default Header;