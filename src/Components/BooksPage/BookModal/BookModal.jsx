import React from 'react';
import "./BookModal.css"
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ setModalVisible,selectedItem}) => {
    // console.log(selectedItem);
    const item = selectedItem;
  return (
    <div className="modal-wrapper " style={{fontFamily: 'Figtree, sans-serif'}}>
      <div className="modal-content modal-card">
        {/* Your modal content goes here */}
                <div className="closemodal" onClick={()=>{setModalVisible(false)}}><IoMdCloseCircleOutline /></div>

                <div key={item.id}  >
              <h3 className="modal-title">{item.name.charAt(0).toUpperCase()}{item.name.slice(1)}</h3>
              {/* <a href={item.link} target="_blank" rel="noreferrer">Click here to see the video</a> */}
              <span className="modal-summary">
                short-summary
                
                  <div>
                    <p className="modal-backend-summary">{item.text}</p>
                    
                  </div>
                
              </span>
             
            </div>
      </div>
   
    </div>
  );
};

export default Modal;

