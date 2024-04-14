import React, { useEffect, useState } from "react";
import "./PathyInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from "./Cards/Card/Card";
import BookCard from "./Cards/BookCard/BookCard";

const PathyInfo = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [tabsData, setTabsData] = useState([])
  const params = useParams();
  const disease = params.disease;
  const therapy = params.therapy;
  const navigate = useNavigate();

  useEffect(() => {
    const getapidata = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_IP}/disease/${disease}/${therapy}`
        );
        const fetchedData = response.data;

        if (fetchedData) {
            setData(fetchedData);
            console.log("Data: ", data)
          setTabs(fetchedData.informationSources);
          let tempTab = [];
          let tempTabsData = [];
          for(let i=0; i<fetchedData.informationSources.length; i++) {
            try {
                const response1 = await axios.get(
                    `${process.env.REACT_APP_BACKEND_IP}/disease/${disease}/${therapy}/${fetchedData.informationSources[i]}`
                );
                if(response1.data) {
                    tempTab.push(fetchedData.informationSources[i])
                    tempTabsData.push(response1.data);
                }
            } catch {
            }
          }
          setTabs(tempTab);
          setTabsData(tempTabsData);
          setLoading(false);
          console.log("tabs data: ", tabsData);
        } else {
          console.error("API response structure is not as expected.");
        }


      } catch (error) {
        console.error(error);
      }
    };

    getapidata();
  }, [disease, therapy]);

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
            <div className="pathy_info_outer">
                <div>
                    <h3>{data.pathy}</h3>
                    <p>{data.text}</p>
                </div>
                {tabs && tabs.length>0 &&

                <Tabs>
                    <TabList>
                        {tabs.map((tab, index) => (
                            <Tab>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Tab>
                        ))}
                    </TabList>
                    {tabsData.map((tabData, index) => (
                        (<TabPanel>
                            <div className="card_collection_outer">
                                {tabData.text &&
                                    tabData.sourceList.map((sourceInnerData, index) => {
                                        return <Card type={tabData.text} sourceData={sourceInnerData}></Card>
                                    })
                                }
                                {tabData.books && 
                                    tabData.books.map((sourceInnerData, index) => {
                                        return <BookCard sourceData={sourceInnerData}></BookCard>
                                    })
                                }
                            </div>
                        </TabPanel>)
                    ))}
                </Tabs>
                }
            </div>
        )}
      </div>
  );
};

export default PathyInfo;
