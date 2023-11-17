import React, { useEffect, useState } from 'react';
import './PathyPage.css';
import axios from 'axios';

const PathyPage = () => {
  const [data,setData]=useState({
    pathy:'',
    text:'',
    informationSource:[]
});

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://backend.healthumbrella.org:8000/disease/migraine/acupressure');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
},[]);


  return (
    <div className='PathyPage-main'>
      <div className='PathyPage-nav'>&lt; Migraine / Accupressure</div>
      <div className='PathyPage-container'>
        <img src="./Images/green_ring_tl.png" className="greenring-tl" />
        <h1 className="PathyPage-heading">ACUPRESSURE</h1>
        <h3 className="PathyPage-subheading">THERAPY</h3>
        <div className="PathyPage-content">{data.text}</div>
        <div className="PathyPage-cards">
            <div className="item">
              <img src="./Images/man.png" alt="" />
              <div className="PathyPage-cards-desc">Direct Cases</div>
            </div>
            <div className="item">
              <img src="./Images/youtube-logo.png" alt="" />
              <div className="PathyPage-cards-desc">Youtube</div>
            </div>
            <div className="item">
              <img src="./Images/globe-icon.png" alt="" />
              <div className="PathyPage-cards-desc">Website</div>
            </div>
            <div className="item">
              <img src="./Images/socialmedia-women.png" alt="" />
              <div className="PathyPage-cards-desc">SocialMedia</div>
            </div>
            <div className="item">
              <img src="./Images/books.png" alt="" />
              <div className="PathyPage-cards-desc">Books/Book Chapters</div>
            </div>
            <div className="item">
              <img src="./Images/articles-search.png" alt="" />
              <div className="PathyPage-cards-desc">Articles</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PathyPage;
