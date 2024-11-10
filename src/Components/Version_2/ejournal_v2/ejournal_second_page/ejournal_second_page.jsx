import React, { useState } from "react";
import "./ejournal_second_page.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function All() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(new Date().getFullYear()); // Initialize with the current year

  const handleYearChange = (amount) => {
    // Update the 'year' state when + or - buttons are clicked
    if (year <= currentYear && year >= 2019) {
      setYear((prevYear) => prevYear + amount);
    } else {
      setYear(currentYear);
    }
  };

  // Static hardcoded data for e-journals
  const alldata = {
    ejournals: [
      {
        name: "E-Journal on Migraine",
        imageLink: "/Images/cover.png",
        fileLink: "/path/to/migraine-journal.pdf",
      },
      {
        name: "E-Journal on Asthma",
        imageLink: "/Images/cover.png",
        fileLink: "/path/to/asthma-journal.pdf",
      },
      {
        name: "E-Journal on Diabetes",
        imageLink: "/Images/cover.png",
        fileLink: "/path/to/diabetes-journal.pdf",
      },
      // Add more e-journals as needed
    ],
  };

  return (
    <>
      <div>
        <div className="all-main">
          <div className="all-container">
            <div className="head">
              <h1>Our E-Journals</h1>
              <p>
                These are all the e-Journals rich in information of different
                pathies about different diseases under Health Umbrella Foundation
                (HUF) initiative.
              </p>
              <div>
                <div id="year">
                  <div className="yeardiv">
                    <button onClick={() => handleYearChange(-1)}>
                      <span id="cbb">
                        <FaChevronLeft style={{ color: "lightgrey" }} />
                      </span>
                    </button>
                    <p onClick={() => handleYearChange(-1)}>
                      {year > 2019 ? <span>{year - 1}</span> : <span>END</span>}
                    </p>
                    <p id="cb">
                      <span>{year}</span>
                    </p>
                    <p onClick={() => year !== currentYear && handleYearChange(1)}>
                      {year < currentYear ? <span>{year + 1}</span> : <span>END</span>}
                    </p>
                    <button onClick={() => year !== currentYear && handleYearChange(1)}>
                      <span id="cbb">
                        <FaChevronRight style={{ color: "lightgrey" }} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="content">
                <div className="cards">
                  {alldata.ejournals.map((card, i) => (
                    <div key={i} className="card">
                      <a href={card.fileLink}>
                        <img src={card.imageLink} alt="E-Journal Cover" />
                        <h4>
                          <p>The Health Umbrella Foundation</p>
                        </h4>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
