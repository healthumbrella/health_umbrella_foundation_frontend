import React from "react";
import "./hfp_videos.css";

function HFPVideos(props){
    return(
        <div className="hfourthpv_outer">
             {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
                   <img src={`${process.env.REACT_APP_BACKEND_IP}${props.videosdata.imageLink}`} alt="" className="hfourthpv_outer_image"/>
                  ) : (
                    <img src={props.videosdata.imageLink} alt="Clinic"  className="hfourthpv_outer_image"/>
                  )}


            {/* <img src={`${process.env.REACT_APP_BACKEND_IP}${props.videosdata.imageLink}`} alt="" className="hfourthpv_outer_image"/> */}
            <div className="hfourthpv_outer_text">
                {props.videosdata.heading} <br/> <span><a href={props.videosdata.ytPlaylistLink} target="_blank" rel="noreferrer">Watch now <i className="bi-link-45deg"></i></a></span>
            </div>
        </div>
    );
}

export default HFPVideos;