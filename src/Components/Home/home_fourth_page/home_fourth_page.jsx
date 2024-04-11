import React from "react";
import "./home_fourth_page.css";
import HFPVideos from "./hfp_videos/hfp_videos";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide:3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide:3,
    },
    stablet: {
        breakpoint: { max: 700, min: 500 },
        items: 2,
        slidesToSlide:2,
      },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide:1,
    }
};

function HomeFourthPage(props){

    let pagetext=props.fourthpagedata;

    return(

        <div className="hfourthp_outer_mid">
            <div className="hfourthp_outer_mid_top">
                <h3 className="hfourthp_outer_mid_top_heading">
                    Under Health Umbrella Foundation Initiative
                </h3> 
                <span className="hfourthp_outer_mid_top_text">
                    {pagetext.text}
                </span>
            </div>
            <div className="hfourthp_outer_mid_bottom">
                <Carousel responsive={responsive} 
                autoPlaySpeed={4000} 
                infinite={true} 
                keyBoardControl={true}
                autoPlay={true}
                swipeable={true}
                showDots={true}
                removeArrowOnDeviceType={["tablet","stablet", "mobile", "desktop"]}>
                    {pagetext.videoList.map((videos)=>
                     <HFPVideos  key={videos.heading} videosdata={videos} /> )}
                </Carousel>
            </div>
        </div>
    );
}

export default HomeFourthPage;