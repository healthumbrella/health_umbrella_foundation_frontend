import React from 'react'
import Clinics_left_v2 from './Clinics_left/Clinics_left_v2';
import Clinics_card_v2 from './Clinics_card/Clinics_card_v2';
import "./clinics_v2.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClinicFilterProvider } from './ClinicContext/ClinicFilterContext_v2';
// import staticImageClinic from "../../../../public/Images_v2/clinics-temp.webp"
const Clinics_v2 = () => {
  const clinicStaticData = {
    clinicsList: [
      {
        name: "Wellness Acupuncture Center",
        imageLink:process.env.PUBLIC_URL +"/Images_v2/clinics-1.jpg",
        location: "Delhi",
        address: "123 Main Road, Connaught Place, Delhi, India",
        LocationLink: "https://maps.app.goo.gl/t5ZssrYenjeCWGQt5",
        summary: "Providing holistic health solutions for decades.",
        contact: "9876543210",
        tagList: ["acupuncture", "wellness", "therapy"],
      },
      {
        name: "Tranquil Acupuncture Clinic",
        imageLink:process.env.PUBLIC_URL +"/Images_v2/clinics-2.jpg",
        location: "Bangalore",
        address: "78 Greenfield Lane, Koramangala, Bangalore, Karnataka, India",
        LocationLink: "https://maps.app.goo.gl/t5ZssrYenjeCWGQt5",
        summary: "Expert care in acupuncture and natural healing.",
        contact: "9345678901",
        tagList: ["acupuncture", "natural healing", "pain relief"],
      },
      {
        name: "Harmony Wellness Clinic",
        imageLink:process.env.PUBLIC_URL +"/Images_v2/clinics-3.webp",
        location: "Hyderabad",
        address: "56 Jubilee Hills Road, Hyderabad, Telangana, India",
        LocationLink: "https://maps.app.goo.gl/t5ZssrYenjeCWGQt5",
        summary: "Comprehensive therapies for complete wellness.",
        contact: "8123456789",
        tagList: ["wellness", "homeopathy", "therapy"],
      },
      {
        name: "Healing Touch Clinic",
        imageLink:process.env.PUBLIC_URL +"/Images_v2/clinics-4.webp",
        location: "Mumbai",
        address: "45 Park Street, Andheri West, Mumbai, Maharashtra, India",
        LocationLink: "https://maps.app.goo.gl/t5ZssrYenjeCWGQt5",
        summary: "Your trusted destination for specialized therapies.",
        contact: "9089908990",
        tagList: ["therapy", "allopathy", "homeopathy"],
      },
      {
        name: "Revive Health Center",
        imageLink:process.env.PUBLIC_URL +"/Images_v2/clinics-5.webp",
        location: "Chennai",
        address: "12 Ocean Drive, Besant Nagar, Chennai, Tamil Nadu, India",
        LocationLink: "https://maps.app.goo.gl/t5ZssrYenjeCWGQt5",
        summary: "Specializing in advanced acupressure and care.",
        contact: "9101122334",
        tagList: ["acupressure", "therapy", "pain management"],
      },
    ],
  };
  

    const [clinicdata, setClinicdata] = useState(clinicStaticData );

    // useEffect(() => {
    //     const getapidata = async () => {
    //       try {
    //         const datafetch = await axios.get(
    //           `${process.env.REACT_APP_BACKEND_IP}/clinics/`
    //         );
    //         console.log(datafetch.data)
    //         setClinicdata(datafetch.data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    
    //     getapidata();
    //   }, []);
    
  return (
   <ClinicFilterProvider>
   <div className="extraspace"></div>
   <div className='clinics-main'>
    <div className="clinics-left">
    <Clinics_left_v2 clinicdata={clinicdata}/>
    </div>
    <div className="clinics-right">
    <Clinics_card_v2 clinicdata={clinicdata}/>
    </div>
        
        
   </div>
   
   </ClinicFilterProvider>
  )
}

export default Clinics_v2
