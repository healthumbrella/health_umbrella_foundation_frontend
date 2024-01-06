import React ,{useRef,useState,useEffect} from "react";
import "./header.css";
import {NavLink} from 'react-router-dom';

function Header() {
    const hamburgerRef = useRef(null);
    const [width,setWidth] = useState(window.innerWidth);

    const currentScreenWidth = () =>{
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize",currentScreenWidth);
    });

    const collapseHandler = () =>{
        if(width<=991){
           setTimeout(()=>{
                hamburgerRef.current.click();
            },300);
        }
    };

    const scrollToTopOnClick = () => {
        window.scrollTo(0, 0);
      };
    

    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" to="">
                <img src={process.env.PUBLIC_URL + "/Images/headerlogo.png"} className="navbar-logo d-inline-block align-top" alt=""></img>
            </NavLink>
            <button ref={hamburgerRef} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse adjusting_navbar" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/" onClick={collapseHandler && scrollToTopOnClick}>Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link underline" to="/about-us" onClick={collapseHandler}>About Us</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/diseases" onClick={collapseHandler && scrollToTopOnClick}>Diseases</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/share-experience" onClick={collapseHandler && scrollToTopOnClick}>Share Experience</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/ask-suggestion" onClick={collapseHandler && scrollToTopOnClick}>Ask Suggestion</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/pathy" onClick={collapseHandler && scrollToTopOnClick}>Pathy</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link underline" to="/clinics-hospitals" onClick={collapseHandler}>Clinics/Hospitals</NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header;