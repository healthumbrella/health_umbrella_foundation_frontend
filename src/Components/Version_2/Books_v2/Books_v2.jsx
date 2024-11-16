import { useState,useEffect } from "react";
import "./Books_v2.css"
import SeparateBook from "../Books_v2/seperatebooks_v2";
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
           
        <div className="BV_outer">
            <div className="BV_outer_top" style={{marginLeft:50,fontWeight:"BVold"}}>
                <p>&#60; <span onClick={() => navigate(-2)}>{disease.charAt(0).toUpperCase()}{disease.slice(1)}</span>
                <span onClick={() => navigate(-1)}>/{title1.charAt(0).toUpperCase()}{title1.slice(1)}</span> /Books & Book Chapters</p>
            </div>
            <div className="BV_outer_middle">
                <h1>Books & Book Chapters</h1>
            </div>
            <div className="BV_outer_bottom">
                
                <div className="BV_inner_bottom">
                    <div className="BV_inner_left">
                        <img src={process.env.PUBLIC_URL+"/images/bookCase.png"} alt="" />
                    </div>
                    <div className="BV_inner_right">
        
                        <SeparateBook pathy = {title1} disease = {disease} className="Sbclass" />
                  
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
