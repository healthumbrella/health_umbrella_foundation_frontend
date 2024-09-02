import React, { useContext, useEffect, useState } from "react";
import "./clinics_left.scss";
import axios from "axios";
import { ClinicFilterContext } from "../ClinicContext/ClinicFilterContext";

const Clinics_left = ({clinicdata}) => {
 
  const [cities, setCities] = useState([]);
  const [pathies, setPathies] = useState([]);
  console.log(clinicdata)
  const {  handlePathyChange, handleCityChange, selectedPathies, selectedCity  } = useContext(ClinicFilterContext);
  
  const handlePathyChange1 = (event) => {
    const newSelectedPathies = event.target.checked
      ? [...selectedPathies, event.target.value]
      : selectedPathies.filter((pathy) => pathy !== event.target.value);
    handlePathyChange(newSelectedPathies);
  };

  const handleCityChange1 = (event) => {
    const newSelectedCity = event.target.checked
      ? [...selectedCity, event.target.value]
      : selectedCity.filter((city) => city !== event.target.value);
    handleCityChange(newSelectedCity);
  };

  useEffect(() => {
    if (clinicdata && clinicdata.clinicsList) {
      const uniqueCities = Array.from(
        new Set(clinicdata.clinicsList.map((clinic) => clinic.location))
      ).sort();
      setCities(uniqueCities);

      const uniquePathies = Array.from(
        new Set(
          clinicdata.clinicsList
            .flatMap((clinic) => clinic.tagList)
           // .filter((tag) => tag !== "allopathy") // Exclude 'allopathy' if needed like this
        )
      ).sort();
      setPathies(uniquePathies);
    }
  }, [clinicdata]);
  


  return (
    <>
      <div className="clinics-left-main">
        <div className="clinics-left-container">
          <div className="clinics-left-top">
            <h6>Health Umbrella</h6>
            <div className="clinics-filter1">
              {cities.map((city, index) => (
                <label key={index} className="clinics-radio">
                  <input type="checkbox"  name="city" value={city} onChange={handleCityChange1} style={{cursor:"pointer"}}/>
                  <p className="clinicsf1">{city}</p>
                </label>
              ))}
            </div>
          </div>
          <div className="clinics-left-bottom">
            <h6>Pathies</h6>
            <div className="clinics-filter2">
              {pathies.map((pathy, index) => (
                <li key={index} className="clinicsf2">
                <input type="checkbox" name="pathy" value={pathy} onChange={handlePathyChange1} style={{cursor:"pointer"}}/> {pathy}
              </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clinics_left;
