import React from 'react'
import SearchBar from "./search_v2";

import "./Home_v2_first.scss";

const Home_v2_first = ({ searchpagedata }) => {
  return (
    <>
     {/* <div className="extraspace"></div> */}
     <div className="extraspace"></div>
      <div className='Home_v2_first_main'>
        <h1>Are You Confused about your line of treatment?</h1>
        <h6>With Some Valuable Testimonial Shared By Common People Of Different Treatments.
        <br />Find Out Which Therapy Out Of Many May Suit You Best !</h6>
        <div className="Home_v2_first_search">
           <img src="/Images_v2/Search2.png" alt="icon" />
        <SearchBar diseaselist={searchpagedata.diseaseList} />
        </div>
        <div className='Home_v2_first_img'> 
          
                
        
        <img className='img_main' src="/Images_v2/main.png" alt="Umberall img" />
        
        </div>
      </div>
    </>
  )
}

export default Home_v2_first