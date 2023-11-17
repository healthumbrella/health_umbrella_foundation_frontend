// import React, { useEffect, useState } from "react";
// import "./separatebooks.css";
// import { NavLink, useParams } from "react-router-dom";
// import axios from "axios";
// function SeparateBook({pathy}){
//     const [fetchData,setFetchData]=useState([]);
//     // const titles =useParams();
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(`http://backend.healthumbrella.org:8000/disease/migraine/${pathy}/books`);
//             setFetchData(response.data);
//           } catch (error) {
//             console.error('Error fetching data:', error);
//           }
//         };
//         fetchData();
//       }, [pathy]);
//       console.log(fetchData);
//     return(
//         <div className="Sb_outer">
//             <div className="Sb_inner_left">
//                 <img src={process.env.PUBLIC_URL+"/images/demobook.png"} alt="_blank"/>
//             </div>
//             <div className="vertical_line"></div>
//             <div className="Sb_inner_right">
//                 <h3>Accupressure Treatment And Food Therapy For headache <span>(Easwarabala)</span></h3>      
//                 <button><i className="fas fa-bolt"></i> Go to Amazon</button>
//                 <span className="summary_text">For Summary <NavLink className="Sb_Navlink">Click Here &#9654;</NavLink></span>
//                 <span className="rating_text">Our Rating for this Book</span>
//             </div>
//         </div>
//     )
// }

// export default SeparateBook;
import React, { useEffect, useState } from "react";
import "./separatebooks.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function SeparateBook({ pathy }) {
  const [fetchData, setFetchData] = useState({ books: [] });

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `http://backend.healthumbrella.org:8000/disease/migraine/${pathy}/books`
        );
        setFetchData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataFromAPI();
  }, [pathy]);

  return (
    <div className="Sb">
      {fetchData.books.map((book, index) => (
        <div className="Sb_outer" key={index}>
          <div className="Sb_inner_left">
            <img src={book.imageLink} alt="Book Cover" />
          </div>
          <div className="vertical_line"></div>
          <div className="Sb_inner_right">
            <h3>{book.name} <span>({book.author})</span></h3>
            <p>{book.text}</p>
            <a href={book.buyLink} target="_blank" rel="noreferrer" >
              <button><i className="fas fa-bolt"></i> Go to Store</button>
            </a>
            <span className="summary_text">
              For Summary <NavLink className="Sb_Navlink">Click Here &#9654;</NavLink>
            </span>
            <span className="rating_text">Our Rating for this Book: {book.rating}/10</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeparateBook;
