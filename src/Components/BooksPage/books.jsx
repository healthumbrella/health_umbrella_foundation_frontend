import "./books.css"
import SeparateBook from "./Books/separatebooks";
import { useNavigate, useParams } from "react-router-dom";

function Books(){
    const navigate = useNavigate();
    const {title1,disease} = useParams();
    return(
        <div className="B_outer">
            <div className="B_outer_top" onClick={()=>{navigate(-1)}}>
                <h2>&#60; Migraine/ {title1.charAt(0).toUpperCase()}{title1.slice(1)} /Books & Book Chapters</h2>
            </div>
            <div className="B_outer_bottom">
                <div className="B_inner_top">
                    <img src={process.env.PUBLIC_URL +"/images/bookStack.png"} alt="_blank"/>
                    <h1>Books & Book Chapters</h1>
                </div>
                <div className="B_inner_bottom">
                    <div className="B_inner_left">
                        <SeparateBook pathy = {title1} disease={disease} className="Sbclass" />
                        <SeparateBook pathy = {title1} disease={disease} className="Sbclass" />
                        <SeparateBook pathy = {title1} disease={disease} className="Sbclass" />
                        <SeparateBook pathy = {title1} disease={disease} className="Sbclass" />
                    </div>
                    <div className="B_inner_right">
                        <img src={process.env.PUBLIC_URL+"/images/bookCase.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;