import React, { useEffect, useState } from "react";
import "./separatebooks.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FiBookOpen } from "react-icons/fi";
import Modal from "../BookModal/BookModal";

function SeparateBook({ pathy,disease }) {
  const [fetchData, setFetchData] = useState({ books: [] });
  const [selectedItem, setSelectedItem] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(pathy+disease);
  
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `http://backend.healthumbrella.org:8000/disease/${disease}/${pathy}/books`
        );
        // console.log(response.data);
        setFetchData(response.data);
        window.scrollTo(0,0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataFromAPI();
  }, [pathy]);
  
    
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalVisible && e.target.classList.contains('modal-wrapper')) {
        setModalVisible(false);
      }
    };

    if (modalVisible) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [modalVisible]);
   
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  

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
            {/* <p>{book.text}</p> */}
            <a href={book.buyLink} target="_blank" rel="noreferrer" >
              <button><i className="fas fa-bolt"></i> Go to Store</button>
            </a>
            <span className="summary_text"  onClick={() => handleCardClick(book)}>
              For Summary <NavLink className="Sb_Navlink">Click Here &#9654;</NavLink>
            </span>
            <span className="rating_text">Our Rating for this Book: {book.rating}/10</span>
          </div>
        </div>
      ))}
      
      {modalVisible && <Modal setModalVisible={setModalVisible} selectedItem={selectedItem} />}


    </div>
  );
}

export default SeparateBook;
