import { useState,useEffect } from "react";
import "./books.css"
import SeparateBook from "./Books/separatebooks";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
function Books(){
    const navigate = useNavigate();
    const {title1,disease} = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }, []);
    return(
        <>
        <div>
          {!title1 || loading ? (
            <ClipLoader
              className="loadingicon"
              color="green"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
            <div className="extraspace"></div>
        <div className="B_outer">
            <div className="B_outer_top" onClick={()=>{navigate(-1)}}>
                <h2>&#60; Migraine/ {title1.charAt(0).toUpperCase()}{title1.slice(1)} /Books & Book Chapters</h2>
                
            </div>
            <div className="B_outer_bottom">
                <div className="B_inner_top">
                    <img src={process.env.PUBLIC_URL +"/Images/bookStack.png"} alt="_blank"/>
                    <h1>Books & Book Chapters</h1>
                </div>
                <div className="B_inner_bottom">
                    <div className="B_inner_left">
                        {title1?(
                            <>
                        <SeparateBook pathy = {title1} disease={disease} className="Sbclass" />
                        </>
                        ):(<p>Books Not Available</p>

                        )}
                    </div>
                    <div className="B_inner_right">
                        <img src={process.env.PUBLIC_URL+"/Images/bookCase.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
        )}
      </div>
    </>
  );
}
export default Books;