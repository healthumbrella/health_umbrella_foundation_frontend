import React from "react";
import "./home_third_page.css";
import HTPTestimonial from "./htp_testimonial/htp_testimonial";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide:2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
      slidesToSlide:2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide:1,
    }
};

function HomeThirdPage(props) {
    
    const testimonialdata=props.thirdpagedata;
    console.log(testimonialdata);
    return (
        <div className="htp_outer">
            <div className="temp" >
                <div className="htp_outer_mid_top">
                    <h2 className="htp_outer_mid_top_heading">Testimonials</h2>
                    <img src="./Images/123.png" alt="" />
                </div>
                <div>
                    <Carousel responsive={responsive}
                        autoPlaySpeed={4000}
                        infinite={true}
                        autoPlay={true}
                        swipeable={true}
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                            {testimonialdata.testimonialList.map((innerdata)=>
                            <HTPTestimonial key={innerdata.heading}  testimonialtext={innerdata} /> )}
                    </Carousel>        
                </div>
            </div>
        </div>
    );
}

export default HomeThirdPage;