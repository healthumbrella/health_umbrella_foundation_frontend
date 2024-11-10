import React, { useState } from "react";
import "./ejournal_first_page.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import All from "../ejournal_second_page/ejournal_second_page";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Top() {
  const [show, setShow] = useState(false);
  const [loading] = useState(false); // Disable loading spinner

  // Hardcoded data with the updated path for cover.png
  const topdata = {
    latestEjournalPage: {
      text: "These are the latest e-Journals published by Health Umbrella Foundation. Through these e-journals we aim societies to become more healthier.",
      ejournals: [
        { fileLink: "#", imageLink: `/Images/cover.png` },
        { fileLink: "#", imageLink: `/Images/cover.png` },
        { fileLink: "#", imageLink: `/Images/cover.png` },
      ],
    },
  };

  const scrollToCertainHeight = () => {
    const specificHeight = 500;
    window.scrollTo({
      top: specificHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {!topdata || loading ? (
        <div className="loadingicon">Loading...</div>
      ) : (
        <>
          <div className="top-main">
            <div className="top-container">
              <div className="left">
                <h1>E-Journals</h1>
                <p>{topdata.latestEjournalPage.text}</p>
                <h5><span>To See All E-Journals of Health Umbrella Foundation</span></h5>
                <button onClick={() => {
                  scrollToCertainHeight();
                  setShow(!show);
                }}>
                  {!show ? "See More" : "See Less"}
                </button>
              </div>
              <div className="right">
                {/* <Swiper
                  effect={"coverflow"}
                  autoplay={true}
                  interval={1000}
                  grabCursor={true}
                  centeredSlides={true}
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
                </Swiper> */}
                <img  className="imgswiper" src="/Images_v2/cover.png" alt="" />
              </div>
            </div>
          </div>
          {show && <All />}
        </>
      )}
    </div>
  );
}

export default Top;
