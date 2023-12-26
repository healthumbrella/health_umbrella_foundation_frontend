import React, { useState, useEffect } from "react";
import "./ejournal_third_page.scss";

// import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function Sub() {
  const [sub, setSub] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [issub, setIssub] = useState(false);

  const handleChange = (e) => {
    //   console.log(e.target.value);
    setEmail(e.target.value);
  };

  const subtime = () => {
    setTimeout(() => {
      setIssub(false);
      return;
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      // Handle the case where email is null
      // alert("Email is required.");
      return;
    }

    // setLoading(true);
    try {
      const datafetch = await axios.get(
        `${process.env.REACT_APP_BACKEND_IP}/ejournal/subscribe?email=${email}`
      );
      setSub(datafetch.data);
      setIssub(true);
      subtime();
      // setIssub(true);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      setEmail("");
    }
    
  };

  // Fetching data from backend and controlling the loading icon
  useEffect(() => {
    const getapidata = async () => {
      try {
        var datafetch;
        if(email!==""){
          datafetch = await axios.get(
            `${process.env.REACT_APP_BACKEND_IP}/ejournal/subscribe?email=${email}`
          );
        }
        
        // console.log(datafetch.data);
        setSub(datafetch.data);
        setIssub(true);
        subtime();
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getapidata();
  });

  return (
        <>
          <div className="sub-main">
            <div className="sub-container">
              <div className="sub-left">
              <img src="/Images/mailbox.png" alt="" />
              </div>
              <div className="sub-right">
                <h2>To Subscribe our E-Journals</h2>
                <p>
                  Subscribe to our e-Journals & get updates right in your inbox
                </p>

                {issub && <p>{sub.message}</p>}

                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <input
                    type="email"
                    className="emailform"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <button type="submit" className="submitbutton">
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      
  );
}

export default Sub;
