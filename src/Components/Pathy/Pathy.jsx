import React, { useEffect, useState } from "react";
import "./Pathy.css";
import axios from "axios";
import PathyDetailComponent from "./PathyDetailComponent";

const Pathy = () => {
  const [data, setData] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  async function getData() {
    try {
      const res = await axios.get(
        "http://backend.healthumbrella.org:8000/pathy/"
      );
      console.log(res);
      setData(res.data.pathyList);
    } catch (err) {
      console.error("Error fetching data of pathy", err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function capitalizeFirstLetter(str) {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setShowScrollButton(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDetail = (title) => {
    const element = document.getElementById(`mp${title}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pathy-container">
      <div className="pathy-select">
        <h1 className="pathy-select-heading" style={{fontWeight:600}}>Pathy Gallery</h1>
        <h3 className="pathy-select-subheading"style={{color:"black", marginBottom:"2rem"} }>
          Each pathy is a unique roadway to wellness
        </h3>
        <p className="pathy-select-text"style={{color:"black" , marginBottom:"2rem"}} >
          Know briefly about different therapies, the books and resources to go
          into depth, and the specific diseases each of these therapies
          addresses well
        </p>
        <div className="pahty-select-list">
          {data.map((item, key) => (
            <div
              key={key}
              className="pathy-select-items"
              onClick={() => scrollToDetail(item.title)}
            >
              {capitalizeFirstLetter(item.title)}
            </div>
          ))}
        </div>
      </div>
      <div className="pathy-detail">
        <img
          src={process.env.PUBLIC_URL + "/Images/green_ring_tl.png"}
          className="pathy-ring-left"
        />
        <img
          src={process.env.PUBLIC_URL + "/Images/green_ring_rb.png"}
          className="pathy-ring-right"
        />
        {data.map((item, key) => (
            
          <div id={"mp"+item.title} key={key} className={key%2===0 ? "pathyEven" : "pathyOdd"}>
            <PathyDetailComponent item={item} />
          </div>
        ))}
      </div>
      {showScrollButton && (
        <div className="scrollToTopButton" onClick={scrollToTop}>
          <i className="fas fa-arrow-up" ></i>
        </div>
      )}
    </div>
  );
};

export default Pathy;
