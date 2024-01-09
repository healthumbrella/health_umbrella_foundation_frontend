import React from "react";
import  { useEffect, useState } from 'react';
import styles from "./OurTeam.module.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const OurTeam = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_IP}/members/`);
        setData(response.data);
        setLoading(false); // Move setLoading inside try block after data retrieval
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Handle setLoading in case of an error as well
      }
    };
  
    fetchData();
  }, []);
  
  
  return (
    <>
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
      <div className={styles.our_team}>
        <div className={styles.upper_div}>
          <div className={styles.text_block}>
            <div className={styles.team_heading}>Meet Our Team</div>
            <div className={styles.team_description}>
              {data.text}
            </div>
            <button className={styles.team_button}>Our Team</button>
          </div>
          <img
            src="images/ourteam-photo.png"
            alt="team-photos"
            className={styles.team_photo}
          ></img>
          {/* <div className={styles.hi}> */}
          <img
          src="images/teams-bg.png"
          alt="background"
          className={styles.upper_bg}
          ></img>
          {/* </div> */}
        </div>

        <div className={styles.lower_div}>
          <div className={styles.heading}>Our Teams</div>
          <div className={styles.team_links}>
         
  <div>

  {data &&
    data.teamList
      .filter((_, index) => index % 2 === 0)
      .map((team, index) => (
        <Link key={index} to={`/our-team/${team}`} className={styles.team_link}>
          <img
            src={`images/${team
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join('')}.png`}
            alt="photograph"
            style={{ height: '2.5rem', width: '2.5rem' }}
          />
          <span className={styles.link_text}>
            {team
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </span>
        </Link>
      ))}
</div>
<div>
 
  {data &&
    data.teamList
      .filter((_, index) => index % 2 !== 0)
      .map((team, index) => (
        <Link key={index} to={`/our-team/${team}`} className={styles.team_link}>
          <img
            src={`images/${team
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join('')}.png`}
            alt="photograph"
            style={{ height: '2.5rem', width: '2.5rem' }}
          />
          <span className={styles.link_text}>
            {team
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </span>
        </Link>
      ))}
</div>

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
