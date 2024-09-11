import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import "./diseases_second_page.scss";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Top from "../diseases_first_page/diseases_first_page";

const gradientarry = ['linear-gradient(rgb(224, 165, 224),white)', 'linear-gradient(rgb(142, 241, 175),white)', 'linear-gradient(skyblue,white)', 'linear-gradient(rgb(244, 244, 159),white)', 'linear-gradient(rgb(242, 204, 132),white)', 'linear-gradient(rgb(239, 241, 178),white)', 'linear-gradient(rgb(249, 175, 239),white)']
const Bottom = () => {

  const [selectedTherapy, setSelectedTherapy] = useState("therapiesWithDrugs");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const disease = params.disease;
  // const navigate=useNavigate();
  useEffect(() => {
    const getapidata = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/disease/${disease}`
        );
        const fetchedData = response.data;

        if (fetchedData && fetchedData.pathies) {
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

  console.log(data)
  const scrollToTopOnClick = () => {
    window.scrollTo(0, 0);
  };
 const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    return truncated.slice(0, truncated.lastIndexOf(" ")) + " ";
  };

  const handleButtonClick = (therapyType) => {
    setSelectedTherapy(selectedTherapy === therapyType ? "" : therapyType);
  };


  const toggleReadMore = (index) => {
    setData((prevData) => ({
      ...prevData,
      pathies: {
        ...prevData.pathies,
        [selectedTherapy]: prevData.pathies[selectedTherapy].map((therapy, i) => ({
          ...therapy,
          isReadMore: i === index ? !therapy.isReadMore : false,
        })),
      },
    }));
  };
 
  function formatString(str) { return str.replace(/(?<!^)([A-Z])/g, ' $1'); }


  const therapyArray = data.pathies && data.pathies[selectedTherapy];

  return (
    <>
      <Top data={data} />
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
            <div className="diseases-bottom-main">
              <div className="diseases-bottom-container">
                <div className="disease-bottom-buttons">
                  {Object.keys(data.pathies || {}).map((therapyType, index) => (
                    <button
                      key={index}
                      onClick={() => handleButtonClick(therapyType)}
                      className={selectedTherapy === therapyType ? "disease-therapy-button " : ""}
                    >
                     {formatString(therapyType)}

                    </button>
                  ))}
                </div>

                <div className="disease-cards">
                  {therapyArray &&
                    therapyArray.map((therapy, index) => (
                      <div key={index} className="disease-card" style={{ backgroundImage: gradientarry[index % gradientarry.length] }}>
                        <div className="disease-card-img">
                          {process.env.REACT_APP_IS_PRODUCTION == 'true' ? (
                            <img src={`${process.env.REACT_APP_BACKEND_IP}${therapy.imageLink}`} alt="img" />
                          ) : (
                            <img src={therapy.imageLink} alt="img" />
                          )
                          }

                        </div>
                        <Link to={`/disease/${disease}/${therapy.name}`} onClick={scrollToTopOnClick}><h4>{therapy.name}</h4></Link>
                        <p>
                          {therapy.isReadMore
                            ? therapy.summary
                            : truncateText(therapy.summary, 80)}
                          <button
                            onClick={() => toggleReadMore(index)}
                            style={{ color: "blue", cursor: "pointer", background: "none", border: "none" }}
                          >
                            {therapy.isReadMore ? "Read Less" : "Read More"}
                          </button>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Bottom;
