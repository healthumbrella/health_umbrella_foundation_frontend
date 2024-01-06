import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import "./testimonials.css";
import { useNavigate, useParams } from "react-router-dom";
import imageInfo from "./imageLink";
import Modal from "../Modal/Modal";

const Testimonials = () => {
  const [fetchData, setFetchData] = useState({ text: "", sourceList: [] });
  const { disease,title1, title2 } = useParams();
  const [matchedImageLink, setMatchedImageLink] = useState("");
  const [selectedSummary, setSelectedSummary] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(title1);
  console.log(title2);
 
  const [selectedItem, setSelectedItem] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  

  const navigate = useNavigate();
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `http://backend.healthumbrella.org:8000/disease/${disease}/${title1}/${title2}`
        );
        console.log(response.data);
        setFetchData(response.data);
       
        setLoading(false);
      } catch (error) { 
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPI();

    const matchedImage = imageInfo.find((info) => info.title === title2);
    if (matchedImage) {
      setMatchedImageLink(matchedImage.imageLink);
    }
    // eslint-disable-next-line
  }, [title2]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalVisible && e.target.classList.contains('modal-wrapper')) {
        setModalVisible(false);
      }
    };

    if (modalVisible) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [modalVisible]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };





  return (
    <>
    <div>
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
    <div className="testimonials-main">
      <p className="testimonials-link-topleft" onClick={() => navigate(-1)}>
        &lt; Migraine/{title1.charAt(0).toUpperCase()}{title1.slice(1)}/{title2.charAt(0).toUpperCase()}{title2.slice(1)}
      </p>
      <div className="testimonials-container">
        <div className="t-row1">
          {matchedImageLink && (
            <img src={matchedImageLink} alt={title2} className="t-image" />
          )}
          <h1 className="t-row1 heading">{title2.charAt(0).toUpperCase()}{title2.slice(1)}</h1>
        </div>
        <div className="t-row2">TESTIMONIALS</div>
        <div className="t-row3">{fetchData.text}</div>
        <div className="t-row4">
          {/* <> */}
          {fetchData.sourceList.map((item) => (
            <div key={item.id} className="t-card">
              <h3 className="t-title">{item.title.charAt(0).toUpperCase()}{item.title.slice(1)}</h3>
              <a href={item.link} target="_blank" rel="noreferrer">Click here to see the video</a>
              <span className="t-summary">
                short-summary

                <button
                  className="t-button"
                  onClick={() =>
                    fetchData.text === "directcase"
                      ? navigate(`/disease/${disease}/${title1}/directCase/${item.caseId}`) // Assuming you have a function for directcases navigation
                      : handleCardClick(item)
                  }
                >
                  Click here &rarr;
                </button>
              </span>
              <span className="t-rating">
                <p1>Our Rating for this data </p1>
                <p2>{item.rating}/10</p2>
              </span>
              <span className="t-comment">
                <p1>Comments</p1>
                <p2>{item.comment}</p2>
              </span>
              <img
                className="t-rb-img2"
                src="/Images/Vector6.png"
                alt="sorry"
              />
              <img
                className={`t-rb-img1 ${selectedSummary === item.summary
                  ? "selected-summary-img1"
                  : ""
                  }`}
                src="/Images/Vector7.png"
                alt="sorry"
              />
              <span className="t-id">
                <p1>ID:</p1>
                <p2>{item.id}</p2>
              </span>
            </div>
          ))}
          {/* </> */}
        </div>
      </div>

      {modalVisible && <Modal setModalVisible={setModalVisible} selectedItem={selectedItem} />}


    </div>
    </>
    )}
    </div>
    </>
  );
};

export default Testimonials;
