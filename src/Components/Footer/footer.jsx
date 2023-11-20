import React,{useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {

    const [footerdata,setFooterData] = useState(null);

    useEffect(()=>{

        const getapidatafooter = async () => {
          try{

            const datafetchfooter = await axios.get(`${process.env.REACT_APP_BACKEND_IP}/footer/`);
            setFooterData(datafetchfooter.data);
          }catch(error){
            
          }
        };
  
        getapidatafooter();
      },[]);


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
                        <a href={footerdata.footer.socialMediaInformation.instagramLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href={footerdata.footer.socialMediaInformation.twitterLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                        <a href={footerdata.footer.socialMediaInformation.youtubeLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        <a href={footerdata.footer.socialMediaInformation.facebookLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        </div>}
                    </div>

                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <div className="quick-links_container">
                            <div className="quick-links_container-1">
                                <Link to="/">Home</Link>
                                <Link to="#">About</Link>
                                <Link to="/our-team">Members</Link>
                                <Link to="#"><span>Donate</span></Link>
                            </div>
                            <div className="quick-links_container-2">
                                <Link to="/ejournal">Newsletter</Link>
                                <Link to="/feedback">Feedback</Link>
                                <Link to="/join-us">Join Us</Link>
                            </div>
                        </div>


                    </div>

                    { footerdata && 
                    <div className="reach-us">
                        <h4>Reach Us</h4>
                        <p><i className="fa-solid fa-envelope"></i><span>{footerdata.footer.contactInformation.contactEmail}</span></p>
                        <p><i className="fa-solid fa-phone"></i><span>{footerdata.footer.contactInformation.contactPhoneNumber}</span></p>
                        <p><i className="fa-solid fa-location-dot"></i><span>{footerdata.footer.contactInformation.contactAddress}</span></p>
                    </div>}

                </div>

                <div className="footer_upper_bottom">
                    <p><a href="/">Terms & Conditions</a> | <a href="/">Privacy Policy</a></p>
                </div>

            </div>

            <div className="footer_lower">
                <p><span>Disclaimer:</span> This website does not provide medical advice.</p>
                <p>The information, including but not limited to text, graphics, images and other material content on the website are for informational purposes only, no material on the site is intended to be a substitute for professional medical advice, diagnosis or treatment.</p>
            </div>
        </div>
    )

}
export default Footer;