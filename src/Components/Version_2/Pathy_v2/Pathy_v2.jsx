import React, { useEffect, useState } from "react";
import "./Pathy_v2.css";
import axios from "axios";
import PathyDetailComponent from "./PathyDetailComponent_v2";
import ClipLoader from "react-spinners/ClipLoader";
import { HiArrowUp } from "react-icons/hi";

const Pathy = () => {
  const [data, setData] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const staticData = {
    pathyList: [
      {
        imageLink: "/Images_v2/acupressure.jpg",
        title: "acupressure",
        text: "Acupressure is a form of traditional Chinese medicine that involves applying pressure to specific points on the body to relieve pain, promote relaxation, and improve overall health. It is based on the belief that there are energy pathways called meridians throughout the body, and by stimulating certain points along these meridians.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "healthumbrella.org/disease/psoriasis/case/2" },
          { disease: "cancer", link: "google.com/some-sample-link" }
        ]
      },
      {
        imageLink: "/Images_v2/fasting.jpg",
        title: "fasting",
        text: "Fasting involves voluntarily abstaining from food or drink for a certain period of time, often for religious, health or personal reasons. It can have benefits such as weight loss, improved metabolism and reduced inflammation. Eating, on the other hand, is the act of consuming food and drink for nourishment and energy to sustain the body's functions.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "google.com/disease/psoriasis/case/2" },
          { disease: "cancer", link: "wikipedia.org/some-sample-link" }
        ]
      },
      {
        imageLink: "/Images_v2/reiki.jpeg",
        title: "reiki",
        text: "Reiki is a form of traditional Chinese medicine that involves applying pressure to specific points on the body to relieve pain, promote relaxation, and improve overall health. It is based on the belief that there are energy pathways called meridians throughout the body, and by stimulating certain points along these meridians.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "healthumbrella.org/disease/psoriasis/case/2" },
          { disease: "cancer", link: "google.com/some-sample-link" }
        ]
      },
      {
        imageLink: "/Images_v2/fasting.jpg",
        title: "food therapy",
        text: "food therapy is a form of traditional Chinese medicine that involves applying pressure to specific points on the body to relieve pain, promote relaxation, and improve overall health. It is based on the belief that there are energy pathways called meridians throughout the body, and by stimulating certain points along these meridians.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "healthumbrella.org/disease/psoriasis/case/2" },
          { disease: "cancer", link: "google.com/some-sample-link" }
        ]
      },
      {
        imageLink: "/Images_v2/allopathy.png",
        title: "allopathy",
        text: "allopathy is a form of traditional Chinese medicine that involves applying pressure to specific points on the body to relieve pain, promote relaxation, and improve overall health. It is based on the belief that there are energy pathways called meridians throughout the body, and by stimulating certain points along these meridians.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "healthumbrella.org/disease/psoriasis/case/2" },
          { disease: "cancer", link: "google.com/some-sample-link" }
        ]
      },
      
      {
        imageLink: "/Images_v2/music.jpeg",
        title: "Music Therapy",
        text: "Music Therapy is a form of traditional Chinese medicine that involves applying pressure to specific points on the body to relieve pain, promote relaxation, and improve overall health. It is based on the belief that there are energy pathways called meridians throughout the body, and by stimulating certain points along these meridians.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "healthumbrella.org/disease/psoriasis/case/2" },
          { disease: "cancer", link: "google.com/some-sample-link" }
        ]
      },
      {
        imageLink: "/Images_v2/yoga.jpg",
        title: "Yoga",
        text: "Yoga is a form of traditional Chinese medicine that involves applying pressure to specific points on the body to relieve pain, promote relaxation, and improve overall health. It is based on the belief that there are energy pathways called meridians throughout the body, and by stimulating certain points along these meridians.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "healthumbrella.org/disease/psoriasis/case/2" },
          { disease: "cancer", link: "google.com/some-sample-link" }
        ]
      },
      {
        imageLink: "/Images_v2/cow.jpeg",
        title: "Cow Therapy",
        text: "Cow Therapy is a form of traditional Chinese medicine that involves applying pressure to specific points on the body to relieve pain, promote relaxation, and improve overall health. It is based on the belief that there are energy pathways called meridians throughout the body, and by stimulating certain points along these meridians.",
        diseaseList: [
          { disease: "migraine", link: "healthumbrella.org/disease/migraine/case/1" },
          { disease: "psoriasis", link: "healthumbrella.org/disease/psoriasis/case/2" },
          { disease: "cancer", link: "google.com/some-sample-link" }
        ]
      },
      {
        imageLink: "/Images_v2/water.jpeg",
        title: "Water Therapy",
        text: "Water Therapy involves using water for pain relief, relaxation, and treatment of conditions such as arthritis, back pain, and sports injuries.",
        diseaseList: [
          { disease: "arthritis", link: "healthumbrella.org/disease/arthritis/case/1" },
          { disease: "sports injuries", link: "healthumbrella.org/disease/sports-injuries/case/2" },
          { disease: "chronic pain", link: "google.com/sample-chronic-pain-link" }
        ]
      },
      {
        imageLink: "/Images_v2/aroma.jpeg",
        title: "Aromatherapy",
        text: "Aromatherapy uses essential oils to enhance physical and emotional health. The oils are often inhaled or applied to the skin for relaxation and healing.",
        diseaseList: [
          { disease: "stress", link: "healthumbrella.org/disease/stress/case/1" },
          { disease: "insomnia", link: "healthumbrella.org/disease/insomnia/case/2" },
          { disease: "headaches", link: "google.com/sample-headaches-link" }
        ]
      },
      {
        imageLink: "/Images_v2/electro.jpg",
        title: "Electro Homeopathy",
        text: "Electro Homeopathy uses essential oils to enhance physical and emotional health. The oils are often inhaled or applied to the skin for relaxation and healing.",
        diseaseList: [
          { disease: "stress", link: "healthumbrella.org/disease/stress/case/1" },
          { disease: "insomnia", link: "healthumbrella.org/disease/insomnia/case/2" },
          { disease: "headaches", link: "google.com/sample-headaches-link" }
        ]
      }
      
    ]
  };

  useEffect(() => {
    setData(staticData.pathyList);
    // async function getData()  {
    //   try {
    //     const res = await axios.get(
    //       `${process.env.REACT_APP_BACKEND_IP}/pathy/`
         
    //     );
    //     // console.log(res);
    //     // setData(res.data.pathyList);
    //     const fetchedData = res.data.pathyList;

    //     if (fetchedData) {
          
    //       setLoading(false);
    //     } else {
    //       console.error("API response structure is not as expected.");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getData();
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
    <div className="Pathy-container" >
      <div className="Pathy-select" >
      
        <h1 className="Pathy-select-heading" style={{fontWeight:600,color:"#005985",marginTop:40}}>Pathy Gallery</h1>
        <h3 className="Pathy-select-subheading"style={{color:"black", marginBottom:"2rem"} }>
          Each pathy is a unique roadway to wellness
        </h3>
        <p className="Pathy-select-text"style={{color:"black" , marginBottom:"2rem"}} >
          Know briefly about different therapies, the books and resources to go
          into depth, and the specific diseases each of these therapies
          addresses well
        </p>
        <div className="Pathy-select-list">
          {data.map((item, key) => (
            <div
              key={key}
              className="Pathy-select-items"
              onClick={() => scrollToDetail(item.title)}
              style={{borderRadius:"28px",fontSize:18,height:55}}
            >
              {capitalizeFirstLetter(item.title)}
            </div>
          ))}
        </div>
      </div>
  

      <div className="Pathy-detail">
      
        {data.map((item, key) => (
            
          <div id={"mp"+item.title} key={key} className={key%2===0 ? "PathyEven" : "PathyOdd"}>
            <PathyDetailComponent item={item} isEven={key % 2 === 0}/>
          </div>
        ))}
      </div>
      {showScrollButton && (
      <div className="scrollToTopButton" onClick={scrollToTopOnClick}>
       
         <i><HiArrowUp/></i>
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

