import React from "react";
import "./Home_v2_second_page.css";
import { useState } from "react";

function Home_v2_second_page(props) {

    const ourmissiontext=props.secondpagedata.ourMissionText;
    const ourmissionyoutubelink=props.secondpagedata.youtubeLink;
    const [collapse,setCollapse] = useState(false);

    function clickHandler() {
        setCollapse(prev => !prev);
    }

    return (
        <div className="hs_outer">
            <div className="hs_outer_mid">
                {/* remove this down div for breakage */}
                <div className="hs_outer_mid_left">
                      <iframe className="hs_outer_mid_left_video" src={ourmissionyoutubelink} title="youtubevideo" allowFullScreen></iframe>
                </div>
                <div className="hs_outer_mid_right">
                    <h1 className="hs_outer_mid_right_heading">Our Mission</h1>
                    <span >
                    {collapse ? ourmissiontext : `${ourmissiontext.slice(0,300)}...`}
                    </span>
                    <button className="hs_outer_mid_right_button" onClick={clickHandler}>{collapse ? 'Read Less' : 'Read More'}</button>
                </div>
            </div>
        </div>
    );
}

export default Home_v2_second_page;