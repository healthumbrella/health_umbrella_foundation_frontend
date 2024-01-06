import "./books.css"
import SeparateBook from "./Books/separatebooks";
import { useParams } from "react-router-dom";

function Books(){
    const {titlee} = useParams();
    return(
        <div className="B_outer">
            <div className="B_outer_top">
                <h2>&#60; Migraine/ {titlee.charAt(0).toUpperCase()}{titlee.slice(1)} /Books & Book Chapters</h2>
            </div>
            <div className="B_outer_bottom">
                <div className="B_inner_top">
                    <img src={process.env.PUBLIC_URL +"/Images/bookStack.png"} alt="_blank"/>
                    <h1>Books & Book Chapters</h1>
                </div>
                <div className="B_inner_bottom">
                    <div className="B_inner_left">
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                    </div>
                    <div className="B_inner_right">
                        <img src={process.env.PUBLIC_URL+"/Images/bookCase.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;