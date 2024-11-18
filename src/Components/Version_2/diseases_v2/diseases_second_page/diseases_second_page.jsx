import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./diseases_second_page.scss";
import ClipLoader from "react-spinners/ClipLoader";
import Top from "../diseases_first_page/diseases_first_page";
import axios from "axios";

const gradientarry = [
  "linear-gradient(rgb(224, 165, 224),white)",
  "linear-gradient(rgb(142, 241, 175),white)",
  "linear-gradient(skyblue,white)",
  "linear-gradient(rgb(244, 244, 159),white)",
  "linear-gradient(rgb(242, 204, 132),white)",
  "linear-gradient(rgb(239, 241, 178),white)",
  "linear-gradient(rgb(249, 175, 239),white)"
];

// Static data
const staticData = {
  imageLink: "/Images/cover.png",
  disease: "Migraine",
  text: "Migraine is a prevalent neurological condition that causes intense, recurring headaches. These headaches are often accompanied by other symptoms like nausea, vomiting, and sensitivity to light, sound, or smell. Migraines are usually unilateral (affecting one side of the head) and can last from a few hours to several days. Migraines can significantly impact daily activities, making work, social events, and even basic tasks difficult. It is important to understand that migraines are not just bad headaches but complex neurological episodes with varying triggers and severity across individuals.",
  summary: "Migraine is a multifaceted condition that can be managed with a combination of medications, lifestyle changes, and therapeutic interventions. The goal of treatment is to reduce the frequency and severity of migraines, improving the individual's quality of life. Migraines are diagnosed based on a detailed medical history and symptom evaluation. Various therapies, ranging from drug-based treatments to alternative therapies like acupuncture or homeopathy, can help alleviate symptoms and prevent future attacks. Collaboration with healthcare providers is crucial to developing an effective treatment plan tailored to the individual.",
  pathies: {
    therapiesWithDrugs: [
      {
        name: "Acupressure Therapy",
        imageLink: "/Images_v2/acupressure.jpeg",
        summary: "Acupressure involves applying physical pressure to specific points on the body to relieve pain and tension. It is often used as a complementary treatment for migraine relief and can be done at home or under the guidance of a trained practitioner.",
        isReadMore: true
      },
      {
        name: "Herbal Remedies",
        imageLink: "/Images_v2/herbs.jpeg",
        summary: "Certain herbs, such as Feverfew and Butterbur, have been traditionally used to treat migraines. These herbs are thought to have anti-inflammatory properties that help reduce the frequency and intensity of migraine attacks. However, it's essential to consult a healthcare provider before starting any herbal regimen.",
        isReadMore: true
      },
      {
        name: "Triptans (e.g., Sumatriptan)",
        imageLink: "/Images_v2/sumatrip.jpeg",
        summary: "Triptans are a class of prescription drugs that are commonly used to treat acute migraine attacks. They work by stimulating serotonin receptors in the brain, which helps to constrict blood vessels and reduce inflammation, providing relief from the throbbing pain associated with migraines.",
        isReadMore: true
      },
      {
        name: "NSAIDs (e.g., Ibuprofen, Aspirin)",
        imageLink: "/Images_v2/nsaids.jpeg",
        summary: "Nonsteroidal anti-inflammatory drugs (NSAIDs) are often used to manage mild to moderate migraine pain. These over-the-counter medications help reduce inflammation and relieve pain, although they may not be effective for more severe migraines.",
        isReadMore: true
      },
      {
        name: "Ergotamines",
        imageLink: "/Images_v2/ergotamine.jpg",
        summary: "Ergotamines, like Dihydroergotamine, are used for severe migraines and work by constricting blood vessels to stop the migraine process. It can be taken as a nasal spray or injection.",
        isReadMore: true
      },
      // {
      //   name: "Anti-nausea Medications",
      //   imageLink: "https://example.com/images/nausea_meds.png",
      //   summary: "Medications like Metoclopramide help treat nausea and vomiting, common symptoms during migraine attacks. They can be taken with other migraine medications to provide holistic relief.",
      //   isReadMore: true
      // }
    ],
    therapiesWithoutDrugs: [
      {
        name: "Cow Therapy (Cow Urine Therapy)",
        imageLink: "/Images_v2/cowt.jpeg",
        summary: "In Ayurvedic medicine, cow urine is believed to have therapeutic properties and is traditionally used to treat various ailments, including migraines. The effectiveness of this therapy is debated, and it should be approached with caution. Always consult with a healthcare provider before trying alternative therapies.",
        isReadMore: true
      },
      {
        name: "Reiki Therapy",
        imageLink: "/Images_v2/reiki.jpeg",
        summary: "Reiki is an energy healing practice where the practitioner channels healing energy into the patient by touch or by focusing on energy points. It aims to promote relaxation, reduce stress, and help in the healing of migraine-related pain.",
        isReadMore: true
      },
      {
        name: "Mindfulness and Meditation",
        imageLink: "/Images_v2/meditation.jpeg",
        summary: "Mindfulness and meditation practices have been shown to reduce stress, one of the primary triggers for migraines. These practices can help individuals with migraines manage their pain, improve their emotional well-being, and reduce the frequency of attacks by promoting a calm and focused mind.",
        isReadMore: true
      },
      {
        name: "Acupuncture",
        imageLink: "/Images_v2/acupuncture.jpg",
        summary: "Acupuncture involves inserting fine needles into specific points of the body to stimulate energy flow and relieve pain. It has been found to reduce migraine frequency and severity in some individuals by balancing the body's energy and improving circulation.",
        isReadMore: true
      },
      {
        name: "Yoga Therapy",
        imageLink: "/Images_v2/yoga.webp",
        summary: "Yoga has been found to be helpful for migraine sufferers by promoting relaxation, increasing flexibility, and reducing the frequency of attacks. Breathing exercises and specific poses can help alleviate headache symptoms and improve overall well-being.",
        isReadMore: true
      },
      // {
      //   name: "Chiropractic Care",
      //   imageLink: "https://example.com/images/chiropractic_care.png",
      //   summary: "Chiropractors often use spinal manipulation to treat migraines. This can help with muscle tension and alignment issues that may trigger or exacerbate headaches. This therapy is useful for patients whose migraines are linked to musculoskeletal problems.",
      //   isReadMore: true
      // }
    ],
    lessKnownTherapies: [
      {
        name: "Fasting Therapy",
        imageLink: "/Images_v2/fasting.webp",
        summary: "Fasting has been proposed as a potential therapy for migraines by resetting the body's internal systems and reducing inflammation. Some believe that fasting for a certain period can help reduce the severity and frequency of migraines by promoting detoxification and reducing trigger factors.",
        isReadMore: true
      },
      {
        name: "Hydrotherapy (Cold and Hot Compresses)",
        imageLink: "/Images_v2/hydro.jpeg",
        summary: "Hydrotherapy, which involves the use of hot or cold compresses, is another non-invasive treatment for migraines. Applying a cold compress to the forehead or a hot compress to the neck can help relieve migraine pain by reducing inflammation and improving blood flow.",
        isReadMore: true
      },
      {
        name: "Biofeedback Therapy",
        imageLink: "/Images_v2/bio.jpg",
        summary: "Biofeedback is a technique that helps individuals control physiological functions such as heart rate, muscle tension, and blood pressure. It has been used to help people with migraines manage pain and reduce the frequency of attacks by increasing awareness of body responses to stress.",
        isReadMore: true
      },
      {
        name: "Massage Therapy",
        imageLink: "/Images_v2/massage.jpg",
        summary: "Massage therapy can help alleviate the muscle tension that often accompanies migraines. Gentle techniques focused on the shoulders, neck, and scalp can reduce discomfort and promote relaxation, helping to prevent the onset of migraine attacks.",
        isReadMore: true
      },
      {
        name: "Light Therapy",
        imageLink: "/Images_v2/light.jpg",
        summary: "Light therapy uses specific wavelengths of light to help reduce migraine frequency and severity. It can help manage migraines in individuals sensitive to light by offering a controlled exposure to light that soothes rather than triggers attacks.",
        isReadMore: true
      }
    ]
  }
};


const Bottom = () => {
  const [selectedTherapy, setSelectedTherapy] = useState("therapiesWithDrugs");
  const [data, setData] = useState(staticData); // Use static data
  const [loading, setLoading] = useState(false); // Set to false since we have static data
  const params = useParams();
  const disease = params.disease;

  // useEffect(() => {
  //   const getapidata = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_BACKEND_IP}/disease/${disease}`
  //       );
  //       const fetchedData = response.data;

  //       if (fetchedData && fetchedData.pathies) {
  //         setData(fetchedData);
  //         setLoading(false);
  //       } else {
  //         console.error("API response structure is not as expected.");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getapidata();
  // }, [disease]);

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
          isReadMore: i === index ? !therapy.isReadMore : false
        }))
      }
    }));
  };

  const formatString = (str) => str.replace(/(?<!^)([A-Z])/g, " $1");
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
                      className={selectedTherapy === therapyType ? "disease-therapy-button" : ""}
                    >
                      {formatString(therapyType)}
                    </button>
                  ))}
                </div>

                <div className="disease-cards">
                  {therapyArray &&
                    therapyArray.map((therapy, index) => (
                      <div
                        key={index}
                        className="disease-card"
                        style={{
                          backgroundImage: gradientarry[index % gradientarry.length]
                        }}
                      >
                        <div className="disease-card-img">
                          {/* {process.env.REACT_APP_IS_PRODUCTION === "true" ? (
                            <img
                              src={`${process.env.REACT_APP_BACKEND_IP}${"/Images/cow.png"}`}
                              alt="img"
                            />
                          ) : ( */}
                            {/* <img src="/Images/cow.png" alt="img" /> */}
                            <img src={therapy.imageLink} alt="img" />
                          {/* )} */}
                        </div>
                        <Link
                          to={`/disease/${disease}/${therapy.name}`}
                          onClick={scrollToTopOnClick}
                        >
                          <h4>{therapy.name}</h4>
                        </Link>
                        <p>
                          {therapy.isReadMore
                            ? therapy.summary
                            : truncateText(therapy.summary, 60)}
                          <button
                            onClick={() => toggleReadMore(index)}
                            style={{
                              color: "blue",
                              cursor: "pointer",
                              background: "none",
                              border: "none"
                            }}
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
