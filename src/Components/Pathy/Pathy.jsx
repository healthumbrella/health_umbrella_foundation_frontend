import React, { useEffect, useState } from "react";
import "./Pathy.css";
import axios from "axios";
import PathyDetailComponent from "./PathyDetailComponent";
import ClipLoader from "react-spinners/ClipLoader";

const Pathy = () => {
  const [data, setData] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function getData()  {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/pathy/`
         
        );
        // console.log(res);
        setData(res.data.pathyList);
        const fetchedData = res.data.pathyList;

        if (fetchedData) {
          
          setLoading(false);
        } else {
          console.error("API response structure is not as expected.");
        }
      } catch (error) {
        console.error(error);
      }
    };
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
      const yOffset = -100; // Adjust this value to include any fixed headers or offsets
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  const scrollToTopOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <div >
        {loading ? (
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
    <div className="pathy-container " >
      <div className="pathy-select" style={{marginTop:"110px",backgroundColor:"#F6F6F6"}}>
      
        <h1 className="pathy-select-heading" style={{fontWeight:600,color:"#053B3F",marginTop:40}}>Pathy Gallery</h1>
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
              style={{borderRadius:"15px",fontSize:18,height:55}}
            >
              {capitalizeFirstLetter(item.title)}
            </div>
          ))}
        </div>
      </div>
  

      <div className="pathy-detail">
        <img
          src={process.env.PUBLIC_URL + "/Images/green_ring_tl.png"}
          alt="_blank"
          className="pathy-ring-left"
        />
        <img
          src={process.env.PUBLIC_URL + "/Images/green_ring_rb.png"}
          alt="_blank"
          className="pathy-ring-right"
        />
        {data.map((item, key) => (
            
          <div id={"mp"+item.title} key={key} className={key%2===0 ? "pathyEven" : "pathyOdd"}>
            <PathyDetailComponent item={item} />
          </div>
        ))}
      </div>
      {showScrollButton && (
        <div className="scrollToTopButton" onClick={scrollToTopOnClick}>
          <i className="fas fa-arrow-up" ></i>
        </div>
      )}
    </div>
    </>
        )}
        </div>
        </>
  );
};

export default Pathy;

