import React, { useState } from "react";
import "./search_header_v2.css";
import { useNavigate, NavLink } from "react-router-dom";

function SearchBar(props) {
  const searchData = props.diseaselist;
  const [resultData, setResultData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // Handle input change and filter search results
  const handleChange = (event) => {
    const searchInputData = event.target.value.toLowerCase();
    setSearchInput(searchInputData);

    if (searchInputData === "") {
      setResultData([]);
    } else {
      const newResultData = searchData.filter((value) =>
        value.toLowerCase().includes(searchInputData)
      );
      setResultData(newResultData);
    }
  };

  // Handle click and Enter key navigation
  const handleNavigation = () => {
    if (searchInput.trim() !== "") {
      navigate(`/disease/${searchInput}`);
    }
  };

  // Handle "Enter" key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNavigation();
    }
  };

  const scrollToTopOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Search_cont">
      <div className="Search_out">
        <input
          placeholder="Search"
          type="text"
          className="Search_out_input"
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Added onKeyDown event
        />
        <button className="Search_out_button1" onClick={handleNavigation}>
          Search
        </button>
        <button className="Search_out_button2" onClick={handleNavigation}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {resultData.length !== 0 && (
        <div className="dataResult">
          {resultData.slice(0, 5).map((value) => (
            <NavLink
              className="dataItem"
              to={`/disease/${value}`}
              key={value}
              onClick={scrollToTopOnClick}
            >
              {value}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
