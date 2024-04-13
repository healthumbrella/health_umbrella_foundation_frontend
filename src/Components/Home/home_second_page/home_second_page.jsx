import React from "react";
import "./home_second_page.css";
import { useState } from "react";

function HomeSecondPage(props) {

    const ourmissiontext=props.secondpagedata.ourMissionText;
    const ourmissionyoutubelink=props.secondpagedata.youtubeLink;
    const [collapse,setCollapse] = useState(false);

    function clickHandler() {
        setCollapse(prev => !prev);
    }

    return (
        <div className="hsp_outer">
            <div className="hsp_outer_mid">
                {/* remove this down div for breakage */}
                <div className="hsp_outer_mid_left">
                      <iframe className="hsp_outer_mid_left_video" src={ourmissionyoutubelink} title="youtubevideo" allowFullScreen></iframe>
                </div>
                <div className="hsp_outer_mid_right">
                    <h1 className="hsp_outer_mid_right_heading">Our Mission</h1>
                    <span >
                    {collapse ? ourmissiontext : `${ourmissiontext.slice(0,300)}...`}
                    </span>
                    <button className="hsp_outer_mid_right_button" onClick={clickHandler}>{collapse ? 'Read Less' : 'Read More'}</button>
                </div>
            </div>
        </div>
    );
}

export default HomeSecondPage;