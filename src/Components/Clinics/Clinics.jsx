import React from 'react'
import Clinics_left from './Clinics_left/Clinics_left';
import Clinics_card from './Clinics_card/Clinics_card';
import "./clinics.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClinicFilterProvider } from './ClinicContext/ClinicFilterContext';

const Clinics = () => {

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
    <Clinics_left clinicdata={clinicdata}/>
    </div>
    <div className="clinics-right">
    <Clinics_card clinicdata={clinicdata}/>
    </div>
        
        
   </div>
   
   </ClinicFilterProvider>
  )
}

export default Clinics
