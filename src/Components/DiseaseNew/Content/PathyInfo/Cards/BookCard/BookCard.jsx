import React, { useEffect, useState } from "react";
import "./BookCard.css";

const BookCard = (props) => {
  return(
      <div className="bookcard_outer">
        <div>
            {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
                <img src={`${process.env.REACT_APP_BACKEND_IP}${props.sourceData.imageLink}`} alt="img" className="bookcard_image"/>
            ) : (
                <img src={props.sourceData.imageLink} alt="img" className="bookcard_image"/>
            )
            }
        </div>
        <div>
            <p><b>Title:</b> {props.sourceData.name}</p>
            <p><b>Author:</b> {props.sourceData.author}</p>
            {/* <p>{props.sourceData.text.slice(0,300)}{props.sourceData.text.length>300?'...':''}</p> */}
            <p><b>Summary:</b> {props.sourceData.text}</p>
            <p>Our rating for this book: {props.sourceData.rating}/10</p>
            <a href={props.sourceData.buyLink} className="buynow_button" target="_blank" rel="noopener noreferrer"><b>Buy Now</b></a>
        </div>
      </div>
  );
};

export default BookCard;
