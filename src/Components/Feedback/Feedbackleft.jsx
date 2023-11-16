import React, { useState ,useRef} from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FiUpload } from 'react-icons/fi';
import axios from "axios";

const Feedbackleft = () => {
    const fileInputRef=useRef(null);
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

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://backend.healthumbrella.org:8000/feedback/", 
            formData,
            // {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // }
          );
          toast.success("Information successfully submitted!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          console.log("Response from backend:", response.data);
    
        } catch (error) {
          toast.error("Error !", {
            position: toast.POSITION.BOTTOM_RIGHT
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
            {/* <div className="fb_textarea"> */}
                <label htmlFor="feedback"> 
                  <textarea id="feedback" className="fb_textarea-box" name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Describe your experience here.." required/>
                </label>
            {/* </div> */}
            
            <div  className="fb_button">
                <input /* className="fb_submit"*/ type="submit" value="Submit" />
            </div>
            <ToastContainer />

         </form>
      );

}


export default Feedbackleft;