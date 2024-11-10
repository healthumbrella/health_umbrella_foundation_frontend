import React, { useEffect, useState } from 'react';
import './PathyPage_v2.css';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PathyPage = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   pathy: '',
  //   text: '',
  //   informationSource: [],
  // }); 
  const [data, setData] = useState({
    pathy: 'Accupressure Therapy',  // Static value for pathy
    text: 'Discover life-altering testimonials showcasing our effective migraine solution. The effectiveness of accupressure in treating chronic migraine has been documented in multiple studies, offering relief to those who suffer from frequent migraines.',  // Static value for text
    informationSource: ['directCases', 'youtube', 'website', 'socialMedia'],  // Static array for information sources
  });
  
  const [loading, setLoading] = useState(false); // No longer need to wait for API, so false

  const { disease, titles } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_IP}/disease/${disease}/${titles}`);
        setData(response.data);
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  
    setLoading(false);
  }, [titles]);

  // useEffect(() => {
  //   // simulate a delay like an API call
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);  // Delay for demo purpose
  // }, []);

  const scrollToTopOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div>
        {loading ? (
          <ClipLoader
            className="loadingicon"
            color="green"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <div className='PathyPage-main'>
              <div style={{fontSize:"15px"}} className='PathyPage-nav'>
                <span onClick={() => { navigate(-1) }}>
                &lt; {disease.charAt(0).toUpperCase()}{disease.slice(1)}/{titles.charAt(0).toUpperCase()}{titles.slice(1)}
                </span>
              </div>
              <div className='PathyPage-container'>
                <h1 className="PathyPage-heading" style={{marginBottom:0.5}}>{titles.toUpperCase()}</h1>
                <div className='heading-line'></div>
                <div className="PathyPage-content">{data.text}</div>
                <div className="PathyPage-cards" style={{zIndex:100}}>
                  <Link to={`/disease/${disease}/${titles}/directCase`} className="item" onClick={scrollToTopOnClick} style={{textDecoration:"none"}}>
                    <img src={process.env.PUBLIC_URL + '/Images/man.png'} alt=""  style={{height:55}}/>
                    <div className="PathyPage-cards-desc" style={{color:"black"}}>Direct Cases</div>
                  </Link>
                  
                  <Link to={`/disease/${disease}/${titles}/youtube`} className="item" onClick={scrollToTopOnClick} style={{textDecoration:"none"}}>
                    <img src={process.env.PUBLIC_URL + '/Images/youtube-logo.png'} alt="" style={{height:55}}/>
                    <div className="PathyPage-cards-desc" style={{color:"black"}}>Youtube</div>
                  </Link>

                  <Link to={`/disease/${disease}/${titles}/website`} className="item" onClick={scrollToTopOnClick} style={{textDecoration:"none"}}>
                    <img src={process.env.PUBLIC_URL + '/Images/globe-icon.png'} alt=""  style={{height:55}}/>
                    <div className="PathyPage-cards-desc" style={{color:"black"}}>Website</div>
                  </Link>

                  <Link to={`/disease/${disease}/${titles}/socialMedia`} className="item" onClick={scrollToTopOnClick} style={{textDecoration:"none"}}>
                    <img src={process.env.PUBLIC_URL + '/Images/socialmedia-women.png'} alt=""  style={{height:55}}/>
                    <div className="PathyPage-cards-desc" style={{color:"black"}}>Social Media</div>
                  </Link>

                  <Link to={`/disease/${disease}/${titles}/books`} className="item" onClick={scrollToTopOnClick} style={{textDecoration:"none"}}>
                    <img src={process.env.PUBLIC_URL + '/Images/books.png'} alt=""  style={{height:55}}/>
                    <div className="PathyPage-cards-desc" style={{color:"black"}}>Books/Book Chapters</div>
                  </Link>

                  <Link to={`/disease/${disease}/${titles}/article`} className="item" onClick={scrollToTopOnClick} style={{textDecoration:"none"}}>
                    <img src={process.env.PUBLIC_URL + '/Images/articles-search.png'} alt=""  style={{height:55}}/>
                    <div className="PathyPage-cards-desc" style={{color:"black"}}>Articles</div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PathyPage;
