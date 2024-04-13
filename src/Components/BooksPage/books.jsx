import { useState,useEffect } from "react";
import "./books.css"
import SeparateBook from "./Books/separatebooks";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Books(){
    const {title1,disease} = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
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
           
        <div className="B_outer">
            <div className="B_outer_top" style={{marginLeft:50,fontWeight:"bold"}}>
                <h2>&#60; <span onClick={() => navigate(-2)}>{disease.charAt(0).toUpperCase()}{disease.slice(1)}</span>
                <span onClick={() => navigate(-1)}>/{title1.charAt(0).toUpperCase()}{title1.slice(1)}</span> /Books & Book Chapters</h2>
            </div>
            <div className="B_outer_bottom">
                <div className="B_inner_top" style={{marginBottom:0}}>
                    <img src={process.env.PUBLIC_URL +"/images/bookStack.png"} alt="_blank"/>
                    <h1>Books & Book Chapters</h1>
                </div>
                <div className="B_inner_bottom">
                    <div className="B_inner_left">
                        {/* {title1?(
                            <> */}
                        <SeparateBook pathy = {title1} disease = {disease} className="Sbclass" />
                      
                        {/* </>
                        ):(<p>Books Not Available</p>

                        )} */}
                    </div>
                    <div className="B_inner_right">
                        <img src={process.env.PUBLIC_URL+"/images/bookCase.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
      
        )}
      </div>
    </>
  );
}
export default Books;
