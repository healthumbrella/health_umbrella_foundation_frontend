import { useState,useEffect } from "react";
import "./books.css"
import SeparateBook from "./Books/separatebooks";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Books(){
    const {titlee} = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }, []);
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
          {!titlee || loading ? (
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
        <>
        <div>
          {!titlee || loading ? (
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
        <div className="B_outer">
            <div className="B_outer_top">
                <h2>&#60; Migraine/ {titlee.charAt(0).toUpperCase()}{titlee.slice(1)} /Books & Book Chapters</h2>
            </div>
            <div className="B_outer_bottom">
                <div className="B_inner_top">
                    <img src={process.env.PUBLIC_URL +"/images/bookStack.png"} alt="_blank"/>
                    <h1>Books & Book Chapters</h1>
                </div>
                <div className="B_inner_bottom">
                    <div className="B_inner_left">
                        {titlee?(
                            <>
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                        <SeparateBook pathy = {titlee} className="Sbclass" />
                        </>
                        ):(<p>Books Not Available</p>

                        )}
                    </div>
                    <div className="B_inner_right">
                        <img src={process.env.PUBLIC_URL+"/images/bookCase.png"} alt="" />
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
