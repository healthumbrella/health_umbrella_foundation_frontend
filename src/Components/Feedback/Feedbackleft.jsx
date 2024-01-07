import React, { useState ,useRef, useEffect} from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line
import { FiUpload } from 'react-icons/fi';
import axios from "axios";
import {FaStar} from "react-icons/fa"

const Feedbackleft = () => {
  // eslint-disable-next-line
    const fileInputRef=useRef(null);
    const [rating,setRating]=useState(null)
    const [hover,setHover]=useState(null)
    const [formData, setFormData] = useState({
        rating: "1",
        feedback: "",
    });
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    useEffect(()=>{
      setFormData((prevFormData) => ({
        ...prevFormData,
        rating: String(rating),
      }));
    },[rating])
    const handleSubmit = async (e) => {
        // console.log(formData)
        e.preventDefault();
        try {
           
          if(rating==0){
            toast.error("Please select a rating to submit Feedback", {
              position: toast.POSITION.TOP_RIGHT,
              style:{top:'90px'}
            });
            return
          }
          console.log(formData);
      
          const response = await axios.post(
            "${process.env.REACT_APP_BACKEND_IP}/feedback/", 
            formData,
            // {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // }
          );
          toast.success("Information successfully submitted!", {
            position: toast.POSITION.TOP_RIGHT,
            style:{top:'90px'}
          });
          console.log("Response from backend:", response.data);
          setFormData({
            rating:'1',
            feedback:""
          })
          setRating(0)
        } catch (error) {
          toast.error("Error !", {
            position: toast.POSITION.TOP_RIGHT,
            style:{top:'90px'}
          });
        }
      };    
      return (
        <form onSubmit={handleSubmit} className="feedback" encType="multipart/form-data">
          <div className="fb_heading">
           We want your feedback
          </div>
            {/* <p className="fb_p1">
                How was your Experience ? 
            </p> */}
            {/*  */}
            <p className="fb_p2">
                Do you have some suggestions or find some bugs ?
            </p>
            <p className="fb_p3">
                let us know in the given field
            </p>
            <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
            <div style={{display:'flex'}}>
            {
              [...Array(5)].map((star,index)=>{
                const currentRating=index+1
                return (
                  <label>
                  <input 
                  type="radio" 
                  name="rating" 
                  value={currentRating} 
                  onClick={()=>setRating(currentRating)}
                  style={{display:"none"}}
                  />
                  <FaStar 
                  size={30} 
                  style={{cursor:"pointer"}}
                  color={currentRating<=(hover||rating)?"ffc107":"gray"}
                  onMouseEnter={()=>
                    setHover(currentRating)
                  }
                  onMouseLeave={()=>setHover(null)}
                  />
                  </label>
                )
              })
            }
            </div>
            {/* <div className="fb_textarea"> */}
                <label htmlFor="feedback"> 
                  <textarea id="feedback" className="fb_textarea-box" name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Describe your experience here.." required/>
                </label>
            {/* </div> */}
            
            <div  className="fb_button">
                <input /* className="fb_submit"*/ type="submit" value="Submit" />
            </div>
            </div>
            <ToastContainer />

         </form>
      );

}


export default Feedbackleft;