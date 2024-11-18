import React from "react";
import { useEffect, useState } from "react";
import styles from "./OurTeam_v2.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const OurTeam = () => {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_BACKEND_IP}/members/`
  //       );
  //       // setData(response.data);
  //       setLoading(false); // Move setLoading inside try block after data retrieval
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false); // Handle setLoading in case of an error as well
  //     }
  //   };

  //   fetchData();
  // }, []);

  const scrollToTopOnClick = () => {
    window.scrollTo(0, 0);
  };
  const data = {
    text: "Our diverse team o passionate individuals is committed towards providing exceptional user experience which drives innovation and success. Meet our dedicated team members here!",
    teamList: [
      "lead-members",
      "data-management-team",
      "website-management-team",
    ],
  };

  return (
    <>
      <div className={styles.wrapper}>
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
            <div className={styles.wrapper_main}>
              <div className={styles.our_team}>
                <div className={styles.upper_div}>
                  <div className={styles.leftdiv}>
                    <div className={styles.text_block}>
                      <div className={styles.team_heading}>Meet Our Team</div>
                      <div className={styles.team_description}>
                        {data?.text ||
                          "Our diverse team o passionate individuals is committed towards providing exceptional user experience which drives innovation and success. Meet our dedicated team members here!"}
                      </div>
                    </div>
                    <div className={styles.lower_div}>
                      <div className={styles.team_links}>
                        <div>
                          {data &&
                            data.teamList
                              .filter((_, index) => index % 2 === 0)
                              .map((team, index) => (
                                <Link
                                  key={index}
                                  to={`/our-team/${team}`}
                                  onClick={scrollToTopOnClick}
                                  className={styles.team_link}
                                >
                                  <img
                                    src={`Images/${team
                                      .split("-")
                                      .map(
                                        (word) =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}.png`}
                                    alt="photograph"
                                    style={{
                                      height: "2.5rem",
                                      width: "2.5rem",
                                    }}
                                  />
                                  <span className={styles.link_text}>
                                    {team
                                      .split("-")
                                      .map(
                                        (word) =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join(" ")}
                                  </span>
                                </Link>
                              ))}
                        </div>
                        <div>
                          {data &&
                            data.teamList
                              .filter((_, index) => index % 2 !== 0)
                              .map((team, index) => (
                                <Link
                                  key={index}
                                  to={`/our-team/${team}`}
                                  className={styles.team_link}
                                >
                                  <img
                                    src={`Images/${team
                                      .split("-")
                                      .map(
                                        (word) =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join("")}.png`}
                                    alt="photograph"
                                    style={{
                                      height: "2.5rem",
                                      width: "2.5rem",
                                    }}
                                  />
                                  <span className={styles.link_text}>
                                    {team
                                      .split("-")
                                      .map(
                                        (word) =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join(" ")}
                                  </span>
                                </Link>
                              ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="Images_v2/ourteam_image.png"
                    alt="team-photos"
                    className={styles.team_photo}
                  ></img>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OurTeam;
