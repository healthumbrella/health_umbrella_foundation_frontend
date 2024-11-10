import React, { useState } from "react";
import "./Testimonials_v2.css";
import { useNavigate, useParams } from "react-router-dom";
import imageInfo from "./imageLink";
import { MdOutlineArrowRight } from "react-icons/md";

const Testimonials = () => {
    // const [fetchData, setFetchData] = useState({ text: "", sourceList: [] });
  const [fetchData, setFetchData] = useState({
    text: "Our dedicated members have picked up some important and exciting case histories and testimonials from huge and scattered data in youtube.",
    sourceList: [
      {
        id: "M/H/Y/001",
        title: "Best Treatment for migraine in one month",
        link: "https://www.youtube.com/watch?v=hQH3viVFhPA&ab_channel=MarkManson",
        summary: "This video is about how we can use acupressure to effectively treat this disease",
        rating: "7",
        comment: "Very important video",
      },
      {
        id: "M/H/Y/002",
        title: "My unforgettable story",
        link: "https://www.youtube.com/watch?v=hQH3viVFhPA&ab_channel=MarkManson",
        summary: "This video is about how we can use acupressure to effectively treat this disease",
        rating: "7",
        comment: "Really useful testimonial",
      },
      {
        id: "M/H/Y/002",
        title: "My unforgettable story",
        link: "https://www.youtube.com/watch?v=hQH3viVFhPA&ab_channel=MarkManson",
        summary: "This video is about how we can use acupressure to effectively treat this disease",
        rating: "7",
        comment: "Really useful testimonial",
      },
      {
        id: "M/H/Y/002",
        title: "My unforgettable story",
        link: "https://www.youtube.com/watch?v=hQH3viVFhPA&ab_channel=MarkManson",
        summary: "This video is about how we can use acupressure to effectively treat this disease",
        rating: "7",
        comment: "Really useful testimonial",
      },
      {
        id: "M/H/Y/002",
        title: "My unforgettable story",
        link: "https://www.youtube.com/watch?v=hQH3viVFhPA&ab_channel=MarkManson",
        summary: "This video is about how we can use acupressure to effectively treat this disease",
        rating: "7",
        comment: "Really useful testimonial",
      },
    ],
    whatsappData: "s3.aws.com?file=LKJoeSDFdl2sdfsdlkjfsd",
  });

  const { disease, title1, title2 } = useParams();
  const [matchedImageLink, setMatchedImageLink] = useState("");
  const [selectedSummary, setSelectedSummary] = useState("");
  const navigate = useNavigate();

  useState(() => {
    const matchedImage = imageInfo.find((info) => info.title === title2);
    if (matchedImage) {
      setMatchedImageLink(matchedImage.imageLink);
    }
  }, [title2]);

  const handleSummaryClick = (summary) => {
    window.open(summary, '_blank');
  };

  return (
    <div className="testimonials-main">
      <p className="testimonials-link-topleft" style={{ fontWeight: "bold", marginLeft: 50 }}>
        &lt; <span onClick={() => navigate(-2)}>{disease.charAt(0).toUpperCase()}{disease.slice(1)}</span>
        <span onClick={() => navigate(-1)} >/{title1.charAt(0).toUpperCase()}{title1.slice(1)}</span>
        /{title2.charAt(0).toUpperCase()}{title2.slice(1)}
      </p>
      <div className="testimonials-container">
        <div className="t-row1">
          {matchedImageLink && (
            <img style={{ height: 83, width: 110 }} src={matchedImageLink} alt={title2} className="t-image" />
          )}
          <div>
          <h1 style={{ color: "#005985" }} className="t-row1 heading">{title2.charAt(0).toUpperCase()}{title2.slice(1)}</h1>
          <div className="t">TESTIMONIALS</div>
          </div>
        </div>
        <div className="t-row3">{fetchData.text}</div>
        <div className="t-row4">
          {fetchData.sourceList.map((item) => (
            <div key={item.id} className="t-card">
              <h3 className="t-title">{item.title.charAt(0).toUpperCase()}{item.title.slice(1)}</h3>
               <span className="t-rating">
                <p1>Our Rating for this data <span>{item.rating}/10</span></p1>
                
              </span>

              <span className="t-comment">
                <p1>Our Comment</p1>
                <p2>{item.comment}</p2>
              </span>

              <div className="buttons"> 

              <span className="t-post">

            <button
                style={{ display: "flex", alignItems: "center" }}
                    className="t-button"
                    onClick={() => {
                    if (title2 === "directCase") {
                        navigate(`/disease/${disease}/${title1}/${title2}/${item.caseId}`);
                        } else {
                     handleSummaryClick(item.link);
                    }
                    }}
                >
                 See Post
                {/* <MdOutlineArrowRight style={{ marginLeft: "-3px" }} size={20} /> */}
                    </button>
            </span>
              <span className="t-summary">
                {/* {title2 === "directCase" ? (
                  <p id="casedetail">Case Detail</p>
                ) : (
                  <p id="casedetail">short-summary</p>
                )} */}

                {/* {selectedSummary === item.summary ? (
                  <div> */}
                    {/* <p className="t-backend-summary">{item.summary}</p> */}
                    {/* <button className="t-button" onClick={() => handleSummaryClick(item.summary)}>
                      Close &larr;
                    </button>
                  </div>
                ) : ( */}
                  <button
                    style={{ display: "flex", alignItems: "center" }}
                    className="t-button"
                    onClick={() => {
                      if (title2 === "directCase") {
                        navigate(`/disease/${disease}/${title1}/${title2}/${item.caseId}`);
                      } else {
                        handleSummaryClick(item.summary);
                      }
                    }}
                  >
                   Summary
                    {/* <MdOutlineArrowRight style={{ marginLeft: "-3px" }} size={20} /> */}
                  </button>
                {/* ) */}
                {/* } */}
              </span>


              </div>
              <img className="t-rb-img2" src="/Images_v2/bluegradientcurve.png" alt="sorry" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
