import React, { useState, useEffect } from "react";
import "./Home_v2_third_page.css"
import gifImage from "./Migraine.gif"

function Home_v2_third_page(props){
    const textArray = ["<span class='highlight'>Collection of 20+ Chronic Disease</span> psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.I was suffering from psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.", 
                        "<span class='highlight'>Suggesting Pathy for</span>  psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.I was suffering from psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.", 
                        "<span class='highlight'>Collecting Common people exp</span> psoriasis from a long time. The treatments, I got to know from the website helped me to cure it.I was suffering from psoriasis from a long time. The treatments, I got to know from the website helped me to cure it."];
    const number = ["1", "2", "3"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currnum, setcurrnum] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
           
            setCurrentTextIndex((prevIndex) =>
                (prevIndex + 1) % textArray.length
            );
           
            setcurrnum((prevIndex) =>
                (prevIndex + 1) % number.length
            );
        }, 6001); 

      
        return () => clearInterval(interval);
    }, [textArray.length, number.length]); 

    return(
<div className="third">
<div className="third_left">
       <div className="one">{number[currnum]}</div> 
</div>

<div className="third_mid">
    <h1 className="h1">Our work at a glance</h1>
    <div className="para"  dangerouslySetInnerHTML={{ __html: textArray[currentTextIndex] }}></div>
</div>

<div className="third_right">

        <img src={gifImage} className="gif" alt="Description of GIF" />
 
       
</div>
</div>
    )
}
export default Home_v2_third_page
