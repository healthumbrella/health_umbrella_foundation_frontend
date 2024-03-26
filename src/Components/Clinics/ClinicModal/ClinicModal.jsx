import React from 'react';
import "./ClinicModal.css"
import { IoMdCloseCircleOutline } from "react-icons/io";

const ClinicModal = ({ setModalVisible,selectedItem}) => {
    // console.log(selectedItem);
    const item = selectedItem;
  return (
    <div className="modal-wrapper " style={{fontFamily: 'Figtree, sans-serif'}}>
      <div className="modal-content modal-card">
        {/* Your modal content goes here */}
                <div className="closemodal" onClick={()=>{setModalVisible(false)}}><IoMdCloseCircleOutline /></div>

                <div key={item.id}  >
              {/* <h3 className="modal-title">{item.title.charAt(0).toUpperCase()}{item.title.slice(1)}</h3> */}
              {/* <a href={item.link} target="_blank" rel="noreferrer">Click here to see the video</a> */}
              <span className="modal-summary">
                short-summary
                
                  <div>
                    <p className="modal-backend-summary">{item.summary}</p>
                    
                  </div>
                
              </span>
             
              <img
                className="t-rb-img2"
                src="/Images/Vector6.png"
                alt="sorry"
              />
              <img
                className="t-rb-img1 selected-summary-img1"
                src="/Images/Vector7.png"
                alt="sorry"
              />
            
            </div>
      </div>
   
    </div>
  );
};

export default ClinicModal;