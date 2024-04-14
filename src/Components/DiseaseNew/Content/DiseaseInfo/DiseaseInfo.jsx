import React, { useEffect, useState } from "react";
import "./DiseaseInfo.css";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DiseaseInfo = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const disease = params.disease;
  const navigate = useNavigate();

  useEffect(() => {
    const getapidata = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/disease/${disease}`
        );
        const fetchedData = response.data;

        if (fetchedData && fetchedData.pathies) {
            console.log("Data: ", data)
          setData(fetchedData);
          setLoading(false);
        } else {
          console.error("API response structure is not as expected.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getapidata();
  }, [disease]);

//   const scrollToTopOnClick = () => {
//     window.scrollTo(0, 0);
//   };

  return (
    <div>

    {loading ? (
        <ClipLoader
          className="loadingicon_sm_len"
          color="green"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
            ):(
            <div className="disease_info_outer">
              <div>
                {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
                  <img src={`${process.env.REACT_APP_BACKEND_IP}${data.imageLink}`} alt="img" className="disease_image"/>
                  ) : (
                    <img src={data.imageLink} alt="img" className="disease_image"/>
                    )
                  }
              </div>
              <div>
                <h1>{data.disease.charAt(0).toUpperCase() + data.disease.slice(1)}</h1>
                <p>{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}</p>
                <div>
                  <h3>Summary</h3>
                  <p>{data.summary}</p>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default DiseaseInfo;
