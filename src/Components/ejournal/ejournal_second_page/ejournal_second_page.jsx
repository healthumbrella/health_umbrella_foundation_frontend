import React from "react";
import "./ejournal_second_page.scss";

import { useState, useEffect } from "react";
// import img2 from "../assets/cover.png";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function All() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [loading, setLoading] = useState(true);
  const [alldata, setAlldata] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear()); // Initialize with the current year

  const handleYearChange = (amount) => {
    // Update the 'year' state when + or - buttons are clicked
    if (year <= currentYear && year >= 2019) {
      setYear((prevYear) => prevYear + amount);
    } else {
      setYear(currentYear);
    }
  };




  // Fetching data from backend and controlling the loading icon
  useEffect(() => {
    const getapidata = async () => {
      try {
        const datafetch = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/ejournal/get-all?year=${year}`
        );

        setAlldata(datafetch.data);
        // console.log(year);
        setLoading(false);
      } catch (error) {
        // console.log(year);
        console.log(error);
      }
    };

    getapidata();
  }, [year]);

  return (
    <>
      <div>
        {!alldata || loading ? (
          <ClipLoader
            className="loadingicon"
            color="green"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <div className="all-main">
              <div className="all-container">
                <div className="head">
                  <h1>Our E-Journals</h1>
                  <p>
                    These are all the e-Journals rich in information of
                    different pathies about different diseases under Health
                    Umbrella Foundation (HUF) initiative.
                  </p>
                  <div>
                    <div id="year">
                      <div className="yeardiv">
                        <button
                          onClick={() => {
                            handleYearChange(-1);

                          }}
                        >
                          <span id="cbb">
                            <FaChevronLeft style={{ color: "lightgrey" }} />
                          </span>
                        </button>
                        <p onClick={() => {
                          handleYearChange(-1);
                        }}>
                          {year > 2019 ? <span>{year - 1}</span> : <span>END</span>}
                        </p>
                        <p id="cb">
                          <span >{year}</span>
                        </p>
                        <p onClick={() => {
                          if (year !== currentYear) handleYearChange(1);
                        }}>
                          {year < currentYear ? <span>{year + 1}</span> : <span>END</span>}

                        </p>
                        <button
                          onClick={() => {
                            if (year !== currentYear) handleYearChange(1);
                          }}
                        >
                          <span id="cbb">
                            <FaChevronRight style={{ color: "lightgrey" }} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section">
                  {/* <p>Here Card will be added for book showcase</p> */}
                  <div className="content">
                    <div className="cards">
                      {alldata.ejournals.map((card, i) => (
                        <div key={i} className="card">
                          <a href={card.fileLink}>
                            {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
                              <img src={`${process.env.REACT_APP_BACKEND_IP}${card.imageLink}`} alt="img" />
                            ) : (
                              <img src={card.imageLink} alt="img" />
                            )}

                            
                            <h4>
                              <p>{card.name}</p>
                            </h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default All;
