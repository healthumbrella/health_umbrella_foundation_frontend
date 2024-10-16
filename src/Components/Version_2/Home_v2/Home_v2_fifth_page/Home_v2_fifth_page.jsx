import React from "react";
import "./Home_v2_fifth_page.css";
import SearchBar from "../SearchBar_v2/SearchBar_v2";

function HomeFifthPage(props) {
    return (

        <div className="hfifth">
            <div className="hfifth_upper">
              
                <h3>Health Information for All, Everywhere</h3>
                <p>
                    {props.fifthpagedata.text}
                </p>
               
                <div className="hfifth_search">
                    <SearchBar diseaselist={props.searchpagedata.diseaseList} />
                </div>
            </div>
            
            <div className="hfifth_lower">
                <img src="./Images/g69.png" alt="" />
            </div>
        </div>
    )
}

export default HomeFifthPage;