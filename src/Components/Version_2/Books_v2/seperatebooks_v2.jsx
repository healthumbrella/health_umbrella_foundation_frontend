import React, { useState } from "react";
import "./seperatebooks_v2.css";
import ClipLoader from "react-spinners/ClipLoader";

function SeparateBook({ pathy, disease }) {
  const staticData = {
    books: [
      {
        name: "Accupressure treatment and Food Therapy for Headache",
        author: "A.K. Saxena",
        rating: "7",
        text: "This book is about how we can use acupressure to effectively treat this disease.",
        imageLink: "https://picsum.photos/id/237/200/300",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473",
      },
      {
        name: "Accupressure treatment and Food Therapy for Headache",
        author: "Maxwell",
        rating: "8",
        text: "This book is about how we can use acupressure to effectively treat this disease.",
        imageLink: "https://picsum.photos/id/238/200/300",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473",
      },
      {
        name: "Road to success",
        author: "Simon Dsouza",
        rating: "6",
        text: "Description about this book.",
        imageLink: "https://picsum.photos/id/239/200/300",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473",
      },
      {
        name: "Cure Everything ",
        author: "Henry Cavill ",
        rating: "9",
        text: "Another description.",
        imageLink: "https://picsum.photos/id/240/200/300",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473",
      },
      {
        name: "Muscle Memory",
        author: "Michael Jordan",
        rating: "7",
        text: "Extra book description.",
        imageLink: "https://picsum.photos/id/241/200/300",
        buyLink: "https://www.google.com/shopping/product/17777120323974940473",
      },
    ],
  };

  const [fetchData, setFetchData] = useState(staticData);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const openModal = (text) => {
    setModalText(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
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
          <div className="SbV">
            {fetchData.books.length === 0 ? (
              <h1
                style={{
                  marginTop: "20rem",
                  marginLeft: "5rem",
                  fontSize: "3rem",
                }}
              >
                No Books found
              </h1>
            ) : (
              fetchData.books.map((book, index) => (
                <div className="SbV_outer" key={index}>
                  <div className="SbV_inner_left">
                    <img src={book.imageLink} alt="Book Cover" />
                  </div>

                  <div className="SbV_inner_right">
                    <p className="author_name">{book.author}</p>
                    <p className="book_name">{book.name}</p>
                    <span className="rating_text_v2">
                      Our Rating for this Book: {book.rating}/10
                    </span>
                    <div className="button_div">
                      <button onClick={() => openModal(book.text)}>
                        Summary
                      </button>
                      <a href={book.buyLink} target="_blank" rel="noreferrer">
                        <button>Visit Site</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {isModalOpen && (
            <div className="modal_overlay">
              <div className="modal_content">
                <button className="close_button" onClick={closeModal}>
                  &times;
                </button>
                <p>{modalText}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SeparateBook;
