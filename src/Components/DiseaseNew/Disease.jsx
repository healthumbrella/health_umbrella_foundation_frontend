import React, { useEffect, useState } from "react";
import "./Disease.css";
import DiseaseSidebar from "./DiseaseSidebar/DiseaseSidebar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Disease = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const disease = params.disease;
  const navigate = useNavigate();

  useEffect(() => {
    const getapidata = async () => {
      try {
        setLoading(true);
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
            className="loadingicon"
            color="green"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            ):(
            <div className="disease_outer">
                {((data.pathies.therapiesWithDrugs && data.pathies.therapiesWithDrugs.length>0) || (data.pathies.therapiesWithoutDrugs && data.pathies.therapiesWithoutDrugs.length>0) || (data.pathies.lessKnownTherapies && data.pathies.lessKnownTherapies.length>0)) &&
                    <DiseaseSidebar name={disease} pathies={data.pathies}></DiseaseSidebar>
                }

                {/* switch between two components here */}
                <Outlet/>
            </div>
        )}
      </div>
  );
};

export default Disease;
