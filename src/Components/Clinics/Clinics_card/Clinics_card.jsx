import React, { useContext } from "react";
import "./clinics_card.scss";
import { useState, useEffect } from "react";

import axios from "axios";
import ClinicModal from "../ClinicModal/ClinicModal";
import { ClinicFilterContext } from "../ClinicContext/ClinicFilterContext";

const Clinics_card = ({ clinicdata }) => {
  const { selectedPathies, selectedCity } = useContext(ClinicFilterContext);

  const [selectedItem, setSelectedItem] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  // console.log(selectedCity);
  // console.log(selectedPathies);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalVisible && e.target.classList.contains("modal-wrapper")) {
        setModalVisible(false);
      }
    };

    if (modalVisible) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modalVisible]);

  const handleCardClick = (item) => {
    // console.log(item);
    setSelectedItem(item);
    setModalVisible(true);
  };
  
  const handleTagClick = (index) => {
    setShowAllTags(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  //   console.log(clinicdata);

  return (
    <>
      {/* <div className="extraspace"></div> */}
      <div className="clinics-main-scroll">
        <h2 className="clinic-heading">Clinic and Medical communities</h2>
        <div className="clinics-card-main">
          <div className="clinics-card-container">


            {clinicdata &&
              clinicdata.clinicsList
                .filter((clinic) => {
                  // Filter logic:
                  // console.log("Filtering clinic:", clinic.location, selectedCity);

                  return (
                    // (selectedCity.length === 0 || clinic.location === selectedCity) &&
                    (selectedPathies.length === 0 ||
                      clinic.tagList.some((tag) => selectedPathies.includes(tag)))
                  );
                }).map((clinic, index) => (
                  <div className="clinics-cards" key={index}>
                    <div className="clinics-card">
                      <div className="clinics-card-img">
                        {/* Image or placeholder */}
                       
                        {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
                          <img src={`${process.env.REACT_APP_BACKEND_IP}${clinic.imageLink}`} alt="Clinic" />
                        ) : (
                          <img src={clinic.imageLink} alt="Clinic" />
                        )}
                      </div>

                      <div className="clinics-card-text">
                        <h5>{clinic.name}</h5>
                        {/* <p><img src="./Images/Place_Marker.png" alt="" /> */}
                        <p><img src="./Images/Place_Marker.png" alt="" /> 
                          {clinic.location.slice(0, 20)} {clinic.address.slice(0, 60)}...
                        </p>
                        <div className="clinics-card-tags">
                      {clinic.tagList.slice(0, showAllTags[index] ? clinic.tagList.length : 3).map((tag, tagIndex) => (
                        <p className="clinics-tag" key={tagIndex}>{tag}</p>
                      ))}
                      <p className="clinics-tag-more" onClick={() => handleTagClick(index)}>
                        {showAllTags[index] ? "See Less..." : "See More..."}
                      </p>
                    </div>
                  </div>
                      <div className="clinics-card-summary">
                        {/* <p className='clinics-summary clinics-s'>(-) {clinic.summary}</p> */}
                        <button
                          className="clinics-summary clinics-s"
                          onClick={() => handleCardClick(clinic)}
                        >
                          <img id="clinic-summary-icon" src="./Images/Brief.png" alt="" /> summary
                        </button>
                        <p className="clinics-summary clinics-m">
                          <img id="clinic-summary-icon" src="./Images/Ringer_volume.png" alt="" /> {clinic.contact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}


          </div>
        </div>

        {modalVisible && (
          <ClinicModal
            setModalVisible={setModalVisible}
            selectedItem={selectedItem}
          />
        )}
      </div>
    </>
  );
};

export default Clinics_card;

// summary and location link pending in this page yet to add
