import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card_outer">
        {
          props.type==='directCase' &&
          <p>ID: {props.sourceData.caseId}</p>
        }
        {
          props.type!=='directCase' &&
          <p>ID: {props.sourceData.id}</p>
        }
        <p>{props.sourceData.title}</p>

        {
          props.type==='website' &&
          <a href={props.sourceData.link} target="_blank" rel="noopener noreferrer">Click here to see the website</a>
        }
        {
          props.type==='youtube' &&
          <a href={props.sourceData.link} target="_blank" rel="noopener noreferrer">Click here to see the video</a>
        }
        {
          props.type==='directCase' &&
          <div>
            <p>Case Detail</p>
            <p>Click here</p>
          </div>
        }

        {
          props.type!=='directCase' &&
          <div>
            <p>Short Summary</p>
            <a href="#" rel="noopener noreferrer">Click here</a>
          </div>
        }

        <p>Our rating: {props.sourceData.rating}/10</p>

        <div>
          <p>Comments</p>
          <p>{props.sourceData.comment.slice(0,70)}{props.sourceData.comment.length>70?'...':''}</p>
        </div>

    </div>
  );
};

export default Card;
