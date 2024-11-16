import React, { useState } from "react";
import "./search_header_v2.css";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  const searchData = props.diseaselist;
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (event) => {
    const searchInputData = event.target.value.toLowerCase();
    setSearchInput(searchInputData);
  };

  // Handle click and Enter key navigation
  const handleNavigation = () => {
    if (searchInput.trim() !== "") {
      navigate(`/disease/${searchInput}`);
      setSearchInput(""); // Clear the search input
    }
  };

  // Handle "Enter" key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNavigation();
    }
  };

  return (
    <div className="Search_cont">
      <div className="Search_out">
        <input
          placeholder="Search"
          type="text"
          className="Search_out_input"
          value={searchInput} // Bind the input value to the state
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className="Search_out_button1" onClick={handleNavigation}>
          Search
        </button>
        <button className="Search_out_button2" onClick={handleNavigation}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
