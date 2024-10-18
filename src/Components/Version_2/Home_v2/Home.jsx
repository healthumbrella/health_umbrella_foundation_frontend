import React, {useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import First from './home_v2_first_page/Home_v2_first.jsx';
import Home_v2_second_page from "./Home_v2_second_page/Home_v2_second_page";
import Home_v2_fifth_page from "./Home_v2_fifth_page/Home_v2_fifth_page";
import Home_v2_third_page from "./Home_v2_third_page/Home_v2_third_page"
import Home_v2_fourth_page from "./Home_v2_fourth_page/Home_v2_fourth_page.jsx"

function Home(){
  
    const [homepagedata, setHomePageData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetching data from backend and controlling the loading icon
    useEffect(()=>{
      const getapidata = async () => {
        try{
          const datafetch = await axios.get(`${process.env.REACT_APP_BACKEND_IP}/home/`);
          setHomePageData(datafetch.data);
          setLoading(false);
        }catch(error){  
          console.log(error);
        }
      };

      getapidata();
      
    },[]);

    return(
        <div>
            { (!homepagedata || loading) ?
            <ClipLoader className="loadingicon" color="green" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/> :
            <>
              <First className="homefirstpage" searchpagedata={homepagedata.topSearchPage} />
            <Home_v2_second_page className="homesecondpage" secondpagedata={homepagedata.ourMissionPage} />
            <Home_v2_third_page className="homethirdpage" thirdpagedata={homepagedata.testimonialPage} />
            < Home_v2_fourth_page className="homefourthpage" fourthpagedata={homepagedata.videoPage} />
            <Home_v2_fifth_page  className="homefifthpage" searchpagedata={homepagedata.topSearchPage} fifthpagedata={homepagedata.bottomSearchPage} />
            </>
            }
        </div>
    );
}

export default Home;