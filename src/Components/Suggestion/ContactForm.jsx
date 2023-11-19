import React, { useState ,useRef} from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FiUpload } from 'react-icons/fi';
import axios from "axios";
const ContactForm = () => {
  const fileInputRef=useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    email_address: "",
    phone_number: "",
    disease: "",
    pathies: "",
    query: "",
    show_study: "false",
    show_email: "false",
    reports: null, 
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = (e) => {
    var upld=e.target.files[0].name.split('.').pop();
    if(upld==='pdf')
    {
      setFormData({
        ...formData,
        reports: e.target.files[0], 
        
      });
    }
    else{
      toast.error("Only pdf files are allowed", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };
  const handleUploadClick = () =>{
    fileInputRef.current.click();
  }

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://backend.healthumbrella.org:8000/user-forms/ask-suggestion", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Information successfully submitted!", {
        position: toast.POSITION.TOP_RIGHT
      });
      console.log("Response from backend:", response.data);

    } catch (error) {
      toast.error("Error !", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };
    return (
        <form onSubmit={handleSubmit} className="suggestion_form" encType="multipart/form-data">
          <div className="form firstrow">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" required /> <br /> <br />

            <label htmlFor="age"></label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Age*" required /> <br /> <br />

            <label htmlFor="gender"></label>
            <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender*" required /> <br /> <br />
          </div>
          <div className="form secondrow">
            <label htmlFor="email_address"></label>
            <input type="email" id="email" name="email_address" value={formData.email_address} onChange={handleChange} placeholder="Email*" required /> <br /> <br />
            <label htmlFor="city"></label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City*" required /> <br /> <br />
          </div>
          <div className="form thirdrow">

            <label htmlFor="phone_number"></label>
            <input type="tel" id="phone" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone No" /> <br /> <br />
            <label htmlFor="state"></label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} placeholder="State*" required /> <br /> <br />
          </div>
          <div className="form fourthrow">

            <label htmlFor="country"></label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Country*" required /> <br /> <br />
            <label htmlFor="disease"></label>
            <input type="text" id="disease" name="disease" value={formData.disease} onChange={handleChange} placeholder="Disease"  /> <br /> <br />
          </div>
          <div className="form fifthrow">

            <label htmlFor="pathies"></label>
            <input type="text" id="pathies" name="pathies" value={formData.pathies} onChange={handleChange} placeholder="Pathies" /> <br /> <br />
          </div>
          <div className="last-half">
            <div className="sixthrow">
                <label htmlFor="queries">
                  <p className=" text-area-heading" >
                    Queries<tag className="asterik">*</tag>
                  </p>
                  <textarea id="queries" className="textarea-box" name="queries" value={formData.queries} onChange={handleChange} placeholder="Please share your problems here..." required
                  />
                </label>
            </div>

            <div className="lastrow">
              <div className="last1">
                <p className="last1 p1">
                  Can we share your case study by keeping <br></br>you anonymous?
                  <tag className="asterik">*</tag>
                </p>
                <div className="gap-yes-no">
                    <input  type="radio"  name="show_study"  value="true"  checked={formData.show_study === "true"}  onChange={handleRadioChange}
                    />
                    <p className="radio-text">Yes</p> 
                    <input  type="radio"  name="show_study"  value="false"  checked={formData.show_study === "false"}  onChange={handleRadioChange}
                    />
                    <p className="radio-text">No</p> 
                </div>
              </div>
              <div className="last2">
                <p className="last2 p1">Can we Share your email?</p>
                <div className="gap-yes-no">
                    <input type="radio" name="show_email" value="true" checked={formData.show_email === "true"} onChange={handleRadioChange}/> <p className="radio-text">Yes</p> 
                    <input type="radio" name="show_email" value="false" checked={formData.show_email === "false"} onChange={handleRadioChange}/><p className="radio-text">No</p>  
                </div>
              </div>
              <div className="last3">
              <p className="last3 p1">Reports (Any supporting Docx (pdf format only)):</p>
              <input type="file" name="supportingDocx" onChange={handleFileInputChange} hidden ref={fileInputRef} accept="application/pdf" />
              <label className="btn" onClick={handleUploadClick}>
                <FiUpload size={18} color="#000000" /> Upload
              </label>
            </div>
            </div>
          <input className="submit" type="submit" value="Submit" />
          </div>
          <ToastContainer />
        </form>
      
    );
  }


export default ContactForm;
