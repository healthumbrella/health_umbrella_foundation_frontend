import {  useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Home_v2_fourth_page.css"

const healthData = {
    disease: [
      {
        name: "Migraine",
        pathies: [
          {
            name: "Fasting",
            testimonials: [
             
              { id: 3, name: "Website" },
              { id: 4, name: "Youtube Comments" },
              { id: 5, name: "Youtube" },
              { id: 6, name: "Whatspp" },
              { id: 7, name: "Books/Chapters" },
            ]
          },
          {
            name: "Yoga",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Allopathy",
            testimonials: [

                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Unani",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Ayurveda",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Homeopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
               
                { id: 7, name: "Books/Chapters" },
              ]
          }
        ]
      },
      {
        name: "Psoarisis",
        pathies: [
        
          {
            name: "Allopathy",
            testimonials: [
               
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Unani",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
               
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Ayurveda",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
              
              ]
          },
          {
            name: "Homeopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          }
        ]
      },
      {
        name: "Diabetes",
        pathies: [
        
          {
            name: "Unani",
            testimonials: [
        
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Ayurveda",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Homeopathy",
            testimonials: [
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          }
        ]
      },
      {
        name: "Alzhiemer",
        pathies: [
          {
            name: "Fasting",
            testimonials: [
       
              { id: 5, name: "Youtube" },
              { id: 6, name: "Whatspp" },
              { id: 7, name: "Books/Chapters" },
            ]
          },
          {
            name: "Yoga",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
               
              ]
          },
          {
            name: "Allopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
              
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Unani",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },

              ]
          },
          {
            name: "Ayurveda",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
               
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Homeopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },

                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          }
        ]
      },
      {
        name: "Cancer",
        pathies: [
          
          {
            name: "Allopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
              
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Unani",
            testimonials: [
              
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Ayurveda",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
          
              ]
          },
          {
            name: "Homeopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 7, name: "Books/Chapters" },
              ]
          }
        ]
      },
      {
        name: "Asthma",
        pathies: [
          {
            name: "Fasting",
            testimonials: [
             
              { id: 4, name: "Youtube Comments" },
              { id: 5, name: "Youtube" },
              { id: 6, name: "Whatspp" },
              { id: 7, name: "Books/Chapters" },
            ]
          },
          {
            name: "Yoga",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
               
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Allopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
              ]
          },
          {
            name: "Unani",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },

                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Ayurveda",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Homeopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 4, name: "Youtube Comments" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          }
        ]
      },
      {
        name: "Depression",
        pathies: [
          {
            name: "Fasting",
            testimonials: [
              { id: 1, name: "Qoura" },
              { id: 2, name: "Personal Interview" },
              { id: 4, name: "Youtube Comments" },
              { id: 6, name: "Whatspp" },
              { id: 7, name: "Books/Chapters" },
            ]
          },
          {
            name: "Yoga",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 4, name: "Youtube Comments" },
                { id: 5, name: "Youtube" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Allopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          
          {
            name: "Ayurveda",
            testimonials: [
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          },
          {
            name: "Homeopathy",
            testimonials: [
                { id: 1, name: "Qoura" },
                { id: 2, name: "Personal Interview" },
                { id: 3, name: "Website" },
                { id: 5, name: "Youtube" },
                { id: 6, name: "Whatspp" },
                { id: 7, name: "Books/Chapters" },
              ]
          }
        ]
      },
    ]
  };
  
  console.log(healthData);
  
  const Home_v2_fourth_page = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredIndexPathy, setHoveredIndexPathy] = useState(null);
    const [hoveredIndexTestimonial, setHoveredIndexTestimonial] = useState(null);
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [selectedPathy, setSelectedPathy] = useState(null);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const navigate=useNavigate();
    const handleClick = () =>{
      navigate(`disease/${selectedDisease.name}/${selectedPathy.name}/${selectedTestimonial.name}`);
    }
    const handleMouseOver = (index, disease) => {
        setHoveredIndex(index);
        setSelectedDisease(disease);
    };

    const handleMouseLeaveOuter = () => {
        // setHoveredIndex(null);
        setHoveredIndexPathy(null);
        setHoveredIndexTestimonial(null);
        setSelectedDisease(null);
        setSelectedPathy(null);
    };

    const handleMouseOverPathy = (index,pathy) => {
        setHoveredIndexPathy(index);
        setSelectedPathy(pathy)
    };
    const handleMouseOverTestimonial = (index,testimonial) => {
        console.log(testimonial)
        setHoveredIndexTestimonial(index);
        setSelectedTestimonial(testimonial)
    };


    console.log(selectedTestimonial)
    return (
        <div className="Home_v2_fourth_main">
            <div className="Home_v2_fourth_left">
                <h1 className="Home_v2_fourth_left_heading">
                    Health Umbrella Foundation    
                </h1>
                <p className="Home_v2_fourth_left_para">
                    An overview of health umbrella foundation, what we actually do...
                    An overview of health umbrella foundation, what we actually do...
                </p>
                <button className="Home_v2_fourth_left_button">Selected Summary</button>
            </div>
            <div className="Home_v2_fourth_right">
                <div className="Home_v2_fourth_right_section_outer" onMouseLeave={handleMouseLeaveOuter}>
                  <div className = "Home_v2_fourth_right_section_outer_inner">
                    <div className="Home_v2_fourth_right_section_outer_inner_subheading">Diseases</div>
                    <div className="Home_v2_fourth_right_section">
                        <ul>
                            {healthData.disease.map((disease, index) => (
                                <li
                                    className={`Home_v2_fourth_right_section1_listItem ${hoveredIndex === index ? 'hovered' : ''}`}
                                    onMouseOver={() => handleMouseOver(index, disease)}
                                    
                                    key={disease.name}
                                >
                                    {disease.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                        {selectedDisease && selectedDisease.pathies && (
                          <div className = "Home_v2_fourth_right_section_outer_inner">

                                <div className="Home_v2_fourth_right_section_outer_inner_subheading">Pathies</div>
                    <div className="Home_v2_fourth_right_section">
                            {/* <> */}
                                <ul>
                                    {selectedDisease.pathies.map((pathy, index) => (
                                        <li className={`Home_v2_fourth_right_section1_listItem ${hoveredIndexPathy === index ? 'hovered' : ''}`}
                                            onMouseOver={() => handleMouseOverPathy(index,pathy)}
                                            key={pathy.name}>
                                            {pathy.name}
                                        </li>
                                    ))}
                                </ul>
                            {/* </> */}
                    </div>
                    </div>
                        )}
                        {selectedPathy && selectedPathy.testimonials && (
                          <div className = "Home_v2_fourth_right_section_outer_inner">
                                <div className="Home_v2_fourth_right_section_outer_inner_subheading">Testimonials</div>
                    <div className="Home_v2_fourth_right_section">
                            {/* <> */}
                                <ul>
                                    {selectedPathy.testimonials.map((testimonial, index) => (
                                        <li className={`Home_v2_fourth_right_section1_listItem ${hoveredIndexTestimonial === index ? 'hovered' : ''}`}
                                            onMouseOver={() => handleMouseOverTestimonial(index,testimonial)}
                                            onClick={()=>handleClick()}
                                            key={testimonial.name}>
                                            {testimonial.name}
                                        </li>
                                    ))}
                                </ul>
                            {/* </> */}
                    </div>
                    </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Home_v2_fourth_page;