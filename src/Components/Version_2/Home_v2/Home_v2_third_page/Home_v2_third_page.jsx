import React, { useState, useEffect } from "react";
import "./Home_v2_third_page.css";
import gifImage1 from "./img1.png"; 
import gifImage2 from "./img2.png"; 
import gifImage3 from "./img3.png"; 

function Home_v2_third_page(props) {
    const textArray = [
        "<span class='highlight'>Collection of 20+ Chronic Disease</span> psoriasis from a long time.The treatments, I got to know from the website helped me to cure it.I was suffering from psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.",
        "<span class='highlight'>Suggesting Pathy for</span>  psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.I was suffering from psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.",
        "<span class='highlight'>Collecting Common people exp</span> psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.I was suffering from psoriasis from a long time. The treatments, I got to know from the website helped me to cure it."
    ];

    const imageArray = [gifImage1, gifImage2, gifImage3];
    const imageSizes = ["300px", "450px", "500px"]; 

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % imageArray.length
                );
                setCurrentTextIndex((prevIndex) =>
                    (prevIndex + 1) % textArray.length
                );
                setFade(true); 
            }, 1000); 

        }, 6000);

        return () => clearInterval(interval);
    }, [textArray.length, imageArray.length]);

    return (
        <div className="third">
            <div className="third_left">
                <h1 className="h1">Our work at a glance</h1>
                <div className="third_left_inner">
                    <div className="one">{currentImageIndex + 1}</div>
                    <div className="para" dangerouslySetInnerHTML={{ __html: textArray[currentTextIndex] }}></div>
                </div>
            </div>

            <div className="third_right">
                
                <img 
                    src={imageArray[currentImageIndex]} 
                    className={`gif ${fade ? "fade-in" : "fade-out"}`} 
                    alt="Dynamic Image"
                    style={{ width: imageSizes[currentImageIndex], height: imageSizes[currentImageIndex] }} 
                />
            </div>
        </div>
    );
}

export default Home_v2_third_page;
