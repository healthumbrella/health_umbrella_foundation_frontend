import React, { useState ,useRef} from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FiUpload } from 'react-icons/fi';
import axios from "axios";

const ShareExpForm = () => {
  const fileInputRef=useRef(null);
  const [fileName,setFileName]=useState("")

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    house:"",
    city: "",
    state: "",
    country: "",
    email_address: "",
    phone_number: "",
    disease: "",
    pathies: "",
    date_from: "",
    date_to: "",
    experience: "",
    show_name: "true",
    preferred_communication: "",
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

  const handleRadioChange1 = (e) => {
    const newValue = formData.preferred_communication === e.target.value ? "" : e.target.value;

    setFormData({
      ...formData,
      preferred_communication:newValue,
    });
  };
  
  const handleRadioClick = (e) => {
    if (e.target.value === formData.preferred_communication) {
        e.target.checked = false;
        handleRadioChange1(e);
    }
};
  
  const [dateError,setDateError]=useState("")
  const handleDateFromChange = (e) => {
    const date=new Date()
    const enterDate=new Date(e.target.value)
    if(enterDate<=date){
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
    setDateError("")
  }else{
    setDateError("Date cannnot be in the future")
  }
  };

  const handleDateToChange = (e) => {
    const date=new Date()
    const enterDate=new Date(e.target.value)
    if(enterDate<=date){
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
    setDateError("")
  }else{
    setDateError("Date cannnot be in the future")
  }
  };
  const handleFileInputChange = (e) => {
    var upld=e.target.files[0].name.split('.').pop();
    if(upld==='pdf')
    {
      setFormData({
        ...formData,
        reports: e.target.files[0], 
        
      });
      setFileName(e.target.files[0].name)
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

  const [loading,setLoading]=useState(false)
  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      if (new Date(formData.date_from) > new Date(formData.date_to)) {
        setDateError("date from cannot be greater than date to")
        return
      }
      if(!formData.date_from || !formData.date_to){
        setDateError("Select Dates")
        return 
      }
      setLoading(true)
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_IP}/user-forms/share-experience`, 
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
       setFormData({
        name: "",
        age: "",
        gender: "",
        house:"",
        city: "",
        state: "",
        country: "",
        email_address: "",
        phone_number: "",
        disease: "",
        pathies: "",
        date_from: "",
        date_to: "",
        experience: "",
        show_name: "false",
        preferred_communication: "email",
        reports: null, 
       })
       setFileName("")
    } catch (error) {
      toast.error("Error !", {
        position: toast.POSITION.TOP_RIGHT
      });
    }finally{
      setLoading(false)
    }
  };
    return (
        <form onSubmit={handleSubmit} className="Share_exp_form" encType="multipart/form-data">
          <div className="form firstrow">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" required /> <br /> <br />

            <label htmlFor="age"></label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Age*" required  min="0"/> <br /> <br />

            
           <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
           <option value="">Gender</option>
           <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="female">Other</option>

          </select>
          </div>
          <div className="form secondrow">
          <label htmlFor="house"></label>
            <input type="text" id="house" name="house" value={formData.house} onChange={handleChange} placeholder="House/Street/Landscape*" required /> <br /> <br />
            <label htmlFor="email_address"></label>
            <input type="email" id="email" name="email_address" value={formData.email_address} onChange={handleChange} placeholder="Email*" required /> <br /> <br />
          </div>
          <div className="form thirdrow">
          <label htmlFor="city"></label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City*" required /> <br /> <br />
            <label htmlFor="phone_number"></label>
            <input type="tel" id="phone" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone No*" required /> <br /> <br />
          </div>
          <div className="form fourthrow">
          <label htmlFor="state"></label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} placeholder="State*" required /> <br /> <br />
            <label htmlFor="country"></label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Country*" required /> <br /> <br />
          </div>
          <div className="form fifthrow">
          <label htmlFor="disease"></label>
            <input type="text" id="disease" name="disease" value={formData.disease} onChange={handleChange} placeholder="Disease*" required /> <br /> <br />

            <label htmlFor="disease"></label>
            <input type="text" id="disease" name="pathies" value={formData.pathies} onChange={handleChange} placeholder="Pathies*" required/> <br /> <br />
          </div>


          <div className = "form date">
            <div className="form_date_text">
              Duration of Disease <span style={{color:'red',fontSize:'17px',fontWeight:'bold'}}>*</span>
            </div>
            <div style={{height:"30px"}}>
              <input
              type="date"
              id="date_from"
              name="date_from"
              value={formData.date_from}
              onChange={handleDateFromChange}
              placeholder="From"
              style={{width:"118px"}}
            />
            <input
              type="date"
              id="date_to"
              name="date_to"
              value={formData.date_to}
              onChange={handleDateToChange}
              placeholder="To"
              style={{width:"118px"}}
            />
         {dateError && <p style={{color:"red",fontSize:"12px"}}>{dateError}</p>}
            </div>
           
          </div>
         

          <div className="last-half">
            <div className="sixthrow">
                <label htmlFor="experience"> 
                {/* <div className="temp"> */}

                  <textarea id="experience" className="textarea-box" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience*" required
                  />
                {/* </div> */}
                </label>
            </div>

            <div className="lastrow">
              <div className="last11">
              
                <p className="p1">
                Can we publish your experience with name ? 
                <span className="asterik" style={{fontWeight:'bold',fontSize:'17px'}}>*</span>
                </p>
               
                <div className="gap-yes-no">
                    <input  type="radio"  name="show_name"  value="true"  checked={formData.show_name === "true"}  onChange={handleRadioChange}
                    />
                    <p className="radio-text">Yes</p> 
                    <input  type="radio"  name="show_name"  value="false"  checked={formData.show_name === "false"}  onChange={handleRadioChange}
                    />
                    <p className="radio-text">No</p> 
                </div>
              </div>

              <div className="last2">
                <p className="last2 p1">Preferable mode of communication :</p>
                <div className="gap-yes-no">
                    <input type="radio" name="preferred_communication" value="email" checked={formData.preferred_communication === "email"} onChange={handleRadioChange1} onClick={handleRadioClick}/> <p className="radio-text">Email</p> 
                    <input type="radio" name="preferred_communication" value="mobile" checked={formData.preferred_communication === "mobile"} onChange={handleRadioChange1} onClick={handleRadioClick}/><p className="radio-text">Phone no</p>  
                </div>
              </div>

              <div className="last3">
              <p className="last3 p1">Reports (Any supporting Docx (pdf format only)):</p>
              <input type="file" name="supportingDocx" onChange={handleFileInputChange} hidden ref={fileInputRef} accept="application/pdf" />

              <div style={{display:'flex', flexDirection:'column'}}>
              <label className="btn" onClick={handleUploadClick}>
                <FiUpload size={18} color="#000000" /> Upload
              </label>
              <p style={{color:"gray"}}>{fileName}</p>
              </div>
            </div>
            </div>
          <input className="submit" type="submit" value={!loading?"Submit":"Processing..."} disabled={loading} />
          </div>
          <ToastContainer />
        </form>
      
    );
  }


export default ShareExpForm;
