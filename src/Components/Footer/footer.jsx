import React,{useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./footer.css";

import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";


function Footer() {

    const [footerdata,setFooterData] = useState(null);

    useEffect(()=>{

        const getapidatafooter = async () => {
          try{

            const datafetch = await axios.get(
                `${process.env.REACT_APP_BACKEND_IP}/footer/`
              );
            setFooterData(datafetch.data);
           
          }catch(error){
            console.error(error);
          }
        };
  
        getapidatafooter();
      },[]);

      const scrollToTopOnClick = () => {
        window.scrollTo(0, 0);
      };

      
    return (
        <div className="footer">
            <div className="footer_upper">
                <div className="footer_upper_top">
                    <div className="follow-us">
                        <h4>Follow Us</h4>
                        <p>We would like to stay connected with you and keep you updated on
                            all the latest testimonials of different diseases. That's why we invite
                            you to follow our social media handles.</p>
                        {footerdata && 
                        <div className="follow-us_links">
                            
                            <a href={`https://${footerdata.footer.socialMediaInformation.instagramLink}`} target="__blank" >
                                <FaInstagram size={20} color='#ffffff'/>
                            </a>
                            <a href={`https://${footerdata.footer.socialMediaInformation.twitterLink}`} target="__blank" >
                            <FaTwitter size={20} color='#ffffff'/>
                            </a>
                            <a href={`https://${footerdata.footer.socialMediaInformation.youtubeLink}`} target="__blank" >
                            <FaYoutube size={20} color='#ffffff'/>
                            </a>
                            <a href={`https://${footerdata.footer.socialMediaInformation.facebookLink}`} target="__blank">
                            <FaFacebook size={20} color='#ffffff'/>
                            </a>
                        
                       
                        </div>}
                    </div>

                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <div className="quick-links_container">
                            <div className="quick-links_container-1">
                                <Link to="/" onClick={scrollToTopOnClick}>Home</Link>
                                {/* <Link to="#" onClick={scrollToTop}>About</Link> */}
                                <Link to="/our-team" onClick={scrollToTopOnClick}>Members</Link>
                                {/* <Link to="#" onClick={scrollToTop}><span>Donate</span></Link> */}
                            </div>
                            <div className="quick-links_container-2">
                                <Link to="/ejournal" onClick={scrollToTopOnClick}>Newsletter</Link>
                                <Link to="/feedback" onClick={scrollToTopOnClick}>Feedback</Link>
                                <Link to="/join-us" onClick={scrollToTopOnClick}>Join Us</Link>
                            </div>
                        </div>


                    </div>

                    { footerdata && 
                    <div className="reach-us">
                        <h4>Reach Us</h4>
                        <p><MdEmail size={20} color='#56B6DC' style={{marginRight:"0.88rem", marginBottom:"-0.2rem"}}/>
                            <a href={`https://${footerdata.footer.contactInformation.contactEmail}`} target="__blank" >
                                    {footerdata.footer.contactInformation.contactEmail}
                             </a>
                        </p>
                        <p> <IoMdPhonePortrait size={20} color='#56B6DC' style={{marginRight:"0.88rem",marginBottom:"-0.2rem"}}/>{footerdata.footer.contactInformation.contactPhoneNumber}</p>
                        <p><IoLocation size={20} color='#56B6DC' style={{marginRight:"0.88rem",marginBottom:"-0.2rem"}}/>{footerdata.footer.contactInformation.contactAddress}</p>
                    </div>}

                </div>

                <div className="footer_upper_bottom">
                    <p><a href="/">Terms & Conditions</a> | <a href="/">Privacy Policy</a></p>
                </div>

            </div>

            <div className="footer_lower">
                <p><span>Disclaimer:</span> This website does not provide medical advice.
                The information, including but not limited to text, graphics, images and other material content on the website are for informational purposes only, no material on the site is intended to be a substitute for professional medical advice, diagnosis or treatment.</p>
            </div>
        </div>
    )

}
export default Footer;