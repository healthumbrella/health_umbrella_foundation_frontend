import React from 'react'
import Clinics_left_v2 from './Clinics_left/Clinics_left_v2';
import Clinics_card_v2 from './Clinics_card/Clinics_card_v2';
import "./clinics_v2.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClinicFilterProvider } from './ClinicContext/ClinicFilterContext_v2';

const Clinics_v2 = () => {

    const [clinicdata, setClinicdata] = useState(null);

    useEffect(() => {
        const getapidata = async () => {
          try {
            const datafetch = await axios.get(
              `${process.env.REACT_APP_BACKEND_IP}/clinics/`
            );
            setClinicdata(datafetch.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        getapidata();
      }, []);
    
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
