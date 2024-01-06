import React from "react";
import "./ejournal_first_page.scss";
// import img1 from "../../../../public/Images/cover.png";
import { Swiper, SwiperSlide } from "swiper/react";
import All from "../ejournal_second_page/ejournal_second_page";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
// import { DeferredData } from "@remix-run/router/dist/utils";

function Top() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [topdata, setTopdata] = useState(null);

  // Fetching data from backend and controlling the loading icon
  useEffect(() => {
    const getapidata = async () => {
      try {
        const datafetch = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/ejournal/`
        );
        console.log(datafetch);
        setTopdata(datafetch.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getapidata();
  }, []);

  const ShowName = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(setShow);
  };
 
const scrollToCertainHeight = () => {
    const specificHeight = 500; // Define the height you want to scroll to
    window.scrollTo({
        top: specificHeight,
        behavior: 'smooth',
    });
};



  return (
    <>
      <div>
        {!topdata || loading ? (
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
            {/* <div className="extraspace"> */}
              {/* Hello */}
            {/* </div> */}
            <div className="top-main">
              <div className="top-container">
                <div className="left">
                  <h1>E-Journals</h1>
                  <p>{topdata.latestEjournalPage.text}</p>
                  <h5><span>To See All E-Journals of health Umbrella Foundation</span></h5>
                  <button onClick={() => {
   scrollToCertainHeight() 
   setShow(!show);
    
}}>
    {!show ? "See More" : "See Less"}
</button>
                </div>
                <div className="right">
                  <Swiper
                    effect={"coverflow"}
                    autoplay={true}
                    interval={1000}
                    grabCursor={true}
                    centeredSlides={true}
                    // infiniteloop={true}
                    loop={true}
                    slidesPerView={"1"}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 100,
                      depth: 100,
                      modifier: 2.5,
                    }}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                      clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                  >
                    {topdata.latestEjournalPage.ejournals.map((ele, ind) => (
                      <SwiperSlide key={ind}>
                        <a href={ele.fileLink}>
                          <img src={ele.imageLink} alt="slide_image" />
                        </a>
                      </SwiperSlide>
                    ))}

                    {/* <div className="slider-controler">
                      <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                      </div>
                      <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                      </div>
                      <div className="swiper-pagination"></div>
                    </div> */}
                  </Swiper>
                </div>
              </div>
            </div>
            {/* </div> */}

            {show && <All />}
          </>
        )}
      </div>
    </>
  );
}

export default Top;
