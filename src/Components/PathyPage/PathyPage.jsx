import React, { useEffect, useState } from 'react';
import './PathyPage.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PathyPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    pathy: '',
    text: '',
    informationSource: [],
  });
  const {disease,titles } = useParams();
  // console.log(titles);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://backend.healthumbrella.org:8000/disease/${disease}/${titles}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [titles]);

  return (
    <div className='PathyPage-main'>
      <div className='PathyPage-nav' onClick={()=>{navigate(-1)}}>&lt; Migraine / {titles.charAt(0).toUpperCase()}{titles.slice(1)}</div>
      <div className='PathyPage-container'>
        <img src={process.env.PUBLIC_URL +"/Images/green_ring_tl.png"} alt="_blank" className="greenring-tl" />
        <h1 className="PathyPage-heading">{titles.charAt(0).toUpperCase()}{titles.slice(1)}</h1>
        <h3 className="PathyPage-subheading">THERAPY</h3>
        <div className="PathyPage-content">{data.text}</div>
        <div className="PathyPage-cards">
          <Link to={`/${disease}/${titles}/directCase`} className="item">
            <img src={process.env.PUBLIC_URL + '/Images/man.png'} alt="" />
            <div className="PathyPage-cards-desc">Direct Cases</div>
          </Link>
          <Link to={`/${disease}/${titles}/youtube`} className="item">
            <img src={process.env.PUBLIC_URL + '/Images/youtube-logo.png'} alt="" />
            <div className="PathyPage-cards-desc">Youtube</div>
          </Link>
          <Link to={`/${disease}/${titles}/website`} className="item">
            <img src={process.env.PUBLIC_URL+'/Images/globe-icon.png'} alt="" />
            <div className="PathyPage-cards-desc">Website</div>
          </Link>
          <Link to={`/${disease}/${titles}/socialMedia`} className="item">
            <img src={process.env.PUBLIC_URL + '/Images/socialmedia-women.png'} alt="" />
            <div className="PathyPage-cards-desc">Social Media</div>
          </Link>
          <Link to={`/${disease}/${titles}/books`} className="item" >
            <img src={process.env.PUBLIC_URL+'/Images/books.png'} alt="" />
            <div className="PathyPage-cards-desc">Books/Book Chapters</div>
          </Link>
          <Link to={`/${disease}/${titles}/article`} className="item">
            <img src={process.env.PUBLIC_URL + '/Images/articles-search.png'} alt="" />
            <div className="PathyPage-cards-desc">Articles</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PathyPage;
