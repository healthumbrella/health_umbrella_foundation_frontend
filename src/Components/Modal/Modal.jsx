import React from 'react';
import "./modal.css"
const Modal = ({ setModalVisible,selectedItem}) => {
    // console.log(selectedItem);
    const item = selectedItem;
  return (
    <div className="modal-wrapper " style={{fontFamily: 'Figtree, sans-serif'}}>
      <div className="modal-content modal-card">
        {/* Your modal content goes here */}
                <div className="closemodal" onClick={()=>{setModalVisible(false)}}>close</div>

                <div key={item.id}  >
              <h3 className="t-title">{item.title.charAt(0).toUpperCase()}{item.title.slice(1)}</h3>
              {/* <a href={item.link} target="_blank" rel="noreferrer">Click here to see the video</a> */}
              <span className="modal-summary">
                short-summary
                
                  <div>
                    <p className="modal-backend-summary">{item.summary}</p>
                    
                  </div>
                
              </span>
              {/* <span className="t-rating">
                <p1>Our Rating for this data </p1>
                <p2>{item.rating}/10</p2>
              </span>
              <span className="t-comment">
                <p1>Comments</p1>
                <p2>{item.comment}</p2>
              </span> */}
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
              <span className="t-id">
                <p1>ID:</p1>
                <p2>{item.id}</p2>
              </span>
            </div>
      </div>
   
    </div>
  );
};

export default Modal;

