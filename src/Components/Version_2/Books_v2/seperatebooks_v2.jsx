import React, { useEffect, useState } from "react";
import "./seperatebooks_v2.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";


function SeparateBook({ pathy,disease }) {
  const staticData = {
    books: [
      {
        name: "Accupressure treatment and Food Therapy for Headache",
        author: "A.K. Saxena",
        rating: "7",
        text: "This book is about how we can use acupressure to effectively treat this disease.",
        imageLink: "https://picsum.photos/id/237/200/300  ",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473"
      },
      {
        name: "Accupressure treatment and Food Therapy for Headache",
        author: "Maxwell",
        rating: "8",
        text: "This book is about how we can use acupressure to effectively treat this disease.",
        imageLink: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473"
      },
      {
        name: "Accupressure treatment and Food Therapy for Headache",
        author: "A.K. Saxena",
        rating: "7",
        text: "This book is about how we can use acupressure to effectively treat this disease.",
        imageLink: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473"
      },
      {
        name: "Accupressure treatment and Food Therapy for Headache",
        author: "Maxwell",
        rating: "8",
        text: "This book is about how we can use acupressure to effectively treat this disease.",
        imageLink: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473"
      }
    ]
  };
  // const [fetchData, setFetchData] = useState({ books: [] });
  const [fetchData, setFetchData] = useState(staticData);
  const [loading, setLoading] = useState(false);
  // console.log(pathy);
  // console.log(disease);

  // useEffect(() => {
  //   const fetchDataFromAPI = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://backend.healthumbrella.org:8000/disease/${disease}}/${pathy}/books`
  //       );
  //       setFetchData(response.data);
  //       setLoading(false);
  //       // console.log('hi');
  //       // console.log(response.data);
  //       setLoading(false);
        
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //       setLoading(false);
  //     }
  //   };
  //   fetchDataFromAPI();
  // }, [pathy]);
  console.log(fetchData)
  return (
   
    <>
    <div>
      {!fetchData || loading ? (
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
    <div className="SbV">{

    fetchData.books.length==0?<h1 style={{marginTop:"20rem", marginLeft:"5rem",fontSize:"3rem"}}>No Books found</h1>:
      fetchData.books.map((book, index) => (
        <div className="SbV_outer" key={index}>
          <div className="SbV_inner_left">
            <img src={book.imageLink} alt="Book Cover" />
          </div>
          {/* <div className="vertical_line"></div> */}
          <div className="SbV_inner_right">
            <h3>{book.name} <span>({book.author})</span></h3>
            <p>{book.text}</p>
            <a href={book.buyLink} target="_blank" rel="noreferrer" >
              <button><i className="fas fa-bolt"></i> Go to Store</button>
            </a>
            <span className="summary_text_v2">
              For Summary <NavLink className="SbV_Navlink">Click Here &#9654;</NavLink>
            </span>
            <span className="rating_text_v2">Our Rating for this Book: {book.rating}/10</span>
          </div>
        </div>
      ))}

    </div>
    </>
        )}
      
      </div>
    </>
  );
}
export default SeparateBook;
