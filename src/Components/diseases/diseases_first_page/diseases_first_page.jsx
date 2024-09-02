import React, { useEffect, useState } from "react";
import "./diseases_first_page.scss";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Top = ({ data }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isReadMore2, setIsReadMore2] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getapidata = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/disease/migraine`
        );
        const fetchedData = response.data;

        if (fetchedData && fetchedData.pathies) {

          setLoading(false);
        } else {
          console.error("API response structure is not as expected.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getapidata();
  }, []);

  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    return truncated.slice(0, truncated.lastIndexOf(" ")) + " ";
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
            {/* <div className="extraspace">Hello</div> */}
            <div className="diseases-top-main">
              <div className="diseases-top-container">
                <div className="disease-left">
                  {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
                    <img src={`${process.env.REACT_APP_BACKEND_IP}${data.imageLink}`} alt="img" />
                  ) : (
                    <img src={data.imageLink} alt="img" />
                  )}

                </div>
                <div className="disease-right">
                  <h1>{data.disease}</h1>
                  <p>
                  {isReadMore2
                      ? data.text
                      : truncateText(data.text, 270)}
                    <span
                      onClick={() => {
                        setIsReadMore2(!isReadMore2);
                      }}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      {/* <br /> */}
                      {" "}{!isReadMore2 ? "Read More" : "Read Less"}
                    </span>
                  </p>
                  <h2>Summary</h2>
                  <p>
                  {isReadMore
                      ? data.summary
                      : truncateText(data.summary, 400)}
                    <span
                      onClick={() => {
                        setIsReadMore(!isReadMore);
                      }}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      {/* <br /> */}
                      {!isReadMore ? "Read More" : "Read Less"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="diseases-top-end">
                <div className="g-line">
                  <div className="g-round">Pathies</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Top;
