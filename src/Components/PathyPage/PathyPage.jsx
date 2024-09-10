import React, { useEffect, useState } from 'react';
import './PathyPage.css';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const   PathyPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    pathy: '',
    text: '',
    informationSource: [],
  }); 
  const [loading, setLoading] = useState(true);

  const { disease, titles } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_IP}/disease/${disease}/${titles}`);
        setData(response.data);
        // setData({ ...data, text: "hvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv" });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  
    setLoading(false);
  }, [titles]);


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
    <div className='PathyPage-main' >
      <div style={{fontSize:"18px"}} className='PathyPage-nav'>
        <span onClick={()=>{navigate(-1)}}>&lt; { disease.charAt(0).toUpperCase()}{disease.slice(1)}/</span>
        <span>{titles.charAt(0).toUpperCase()}{titles.slice(1)}</span>
      </div>
      <div className='PathyPage-container' >
        <img src={process.env.PUBLIC_URL +"/Images/green_ring_tl.png"} alt="_blank" className="greenring-tl" />
        <h1 className="PathyPage-heading" style={{marginBottom:0.5}}>{titles}</h1>
        <h3 className="PathyPage-subheading">THERAPY</h3>
        <div className="PathyPage-content">{data.text}</div>
        <div className="PathyPage-cards" style={{zIndex:100}}>
          <Link to={`/disease/${disease}/${titles}/directCase`} className="item" onClick={scrollToTopOnClick} style={{textDecoration:"none"}}>
            <img src={process.env.PUBLIC_URL + '/Images/man.png'} alt="" />
            <div className="PathyPage-cards-desc" style={{color:"black"}}>Direct Cases</div>
          </Link>
         
          <Link to={`/disease/${disease}/${titles}/youtube`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
            <img src={process.env.PUBLIC_URL + '/Images/youtube-logo.png'} alt="" style={{height:90}}/>
            <div className="PathyPage-cards-desc" style={{color:"black"}}>Youtube</div>
          </Link>
  
          <Link to={`/disease/${disease}/${titles}/website`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
            <img src={process.env.PUBLIC_URL+'/Images/globe-icon.png'} alt="" />
            <div className="PathyPage-cards-desc" style={{color:"black"}}>Website</div>
          </Link>

          <Link to={`/disease/${disease}/${titles}/socialMedia`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
            <img src={process.env.PUBLIC_URL + '/Images/socialmedia-women.png'} alt="" />
            <div className="PathyPage-cards-desc" style={{color:"black"}}>Socialmedia</div>
          </Link>
          
          <Link to={`/disease/${disease}/${titles}/books`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
            <img src={process.env.PUBLIC_URL+'/Images/books.png'} alt="" />
            <div className="PathyPage-cards-desc" style={{color:"black"}}>Books/Book Chapters</div>
          </Link>
          
          <Link to={`/disease/${disease}/${titles}/article`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
            <img src={process.env.PUBLIC_URL + '/Images/articles-search.png'} alt="" />
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



// import React, { useEffect, useState } from 'react';
// import './PathyPage.css';
// import ClipLoader from "react-spinners/ClipLoader";
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const PathyPage = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     pathy: '',
//     text: '',
//     informationSource: [],
//   }); 
//   const [loading, setLoading] = useState(true);
//   const [showFullText, setShowFullText] = useState(false);

//   const { disease, titles } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_IP}/disease/${disease}/${titles}`);
//         setData(response.data);
//         // 

//         // setData(...data,text:"hvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [titles]);

//   const scrollToTopOnClick = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     <>
//       <div>
//         {loading ? (
//           <ClipLoader
//             className="loadingicon"
//             color="green"
//             loading={loading}
//             size={150}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         ) : (
//           <>
//             <div className='PathyPage-main'>
//               <div style={{ fontSize: 20 }} className='PathyPage-nav' onClick={() => { navigate(-1) }}>&lt; {disease.charAt(0).toUpperCase()}{disease.slice(1)} / {titles.charAt(0).toUpperCase()}{titles.slice(1)}</div>
//               <div className='PathyPage-container'>
//                 <img src={process.env.PUBLIC_URL + "/Images/green_ring_tl.png"} alt="_blank" className="greenring-tl" />
//                 <h1 className="PathyPage-heading" style={{ marginBottom: 0.5 }}>{titles}</h1>
//                 <h3 className="PathyPage-subheading">THERAPY</h3>
//                 {data.text.length > 200 && !showFullText ? (
//                   <div>
//                     <div className="PathyPage-content">{data.text.slice(0, 200)}...</div>
//                     <button onClick={() => setShowFullText(true)}>Read More</button>
//                   </div>
//                 ) : (
//                   <div className="PathyPage-content">{data.text}</div>
//                 )}
//                 <div className="PathyPage-cards" style={{ zIndex: 100 }}>
//                   <Link to={`/disease/${disease}/${titles}/directCase`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
//                     <img src={process.env.PUBLIC_URL + '/Images/man.png'} alt="" />
//                     <div className="PathyPage-cards-desc" style={{ color: "black" }}>Direct Cases</div>
//                   </Link>

//                   <Link to={`/disease/${disease}/${titles}/youtube`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
//                     <img src={process.env.PUBLIC_URL + '/Images/youtube-logo.png'} alt="" style={{ height: 90 }} />
//                     <div className="PathyPage-cards-desc" style={{ color: "black" }}>Youtube</div>
//                   </Link>

//                   <Link to={`/disease/${disease}/${titles}/website`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
//                     <img src={process.env.PUBLIC_URL + '/Images/globe-icon.png'} alt="" />
//                     <div className="PathyPage-cards-desc" style={{ color: "black" }}>Website</div>
//                   </Link>

//                   <Link to={`/disease/${disease}/${titles}/socialMedia`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
//                     <img src={process.env.PUBLIC_URL + '/Images/socialmedia-women.png'} alt="" />
//                     <div className="PathyPage-cards-desc" style={{ color: "black" }}>Socialmedia</div>
//                   </Link>

//                   <Link to={`/disease/${disease}/${titles}/books`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
//                     <img src={process.env.PUBLIC_URL + '/Images/books.png'} alt="" />
//                     <div className="PathyPage-cards-desc" style={{ color: "black" }}>Books/Book Chapters</div>
//                   </Link>

//                   <Link to={`/disease/${disease}/${titles}/article`} className="item" onClick={scrollToTopOnClick} style={{ textDecoration: 'none' }}>
//                     <img src={process.env.PUBLIC_URL + '/Images/articles-search.png'} alt="" />
//                     <div className="PathyPage-cards-desc" style={{ color: "black" }}>Articles</div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default PathyPage;
