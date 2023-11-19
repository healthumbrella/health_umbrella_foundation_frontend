import React from "react";
import styles from "./OurTeam.module.css";
import { Link } from "react-router-dom";
const OurTeam = () => {
  return (
    <>
      <div className={styles.our_team}>
        <div className={styles.upper_div}>
          <div className={styles.text_block}>
            <div className={styles.team_heading}>Meet Our Team</div>
            <div className={styles.team_description}>
              Our diverse team o passionate individuals is committed towards
              providing exceptional user experience which drives innovation and
              success. Meet our dedicated team members here!
            </div>
            <button className={styles.team_button}>Our Team</button>
          </div>
          <img
            src="images/ourteam-photo.png"
            alt="team-photos"
            className={styles.team_photo}
          ></img>
          <img
            src="images/teams-bg.png"
            alt="background"
            className={styles.upper_bg}
          ></img>
        </div>

        <div className={styles.lower_div}>
          <div className={styles.heading}>Our Teams</div>
          <div className={styles.team_links}>
            <Link to="/team1" className={styles.team_link}>
              <img
                src="/images/Leadership.png"
                alt="photograph"
                style={{ height: "2.5rem", width: "2.5rem" }}
              ></img>{" "}
              <span className={styles.link_text}>Lead Members</span>
            </Link>
            <Link to="/team2" className={styles.team_link}>
              <img
                src="/images/Layers.png"
                alt="photograph"
                style={{ height: "2.5rem", width: "2.5rem" }}
              ></img>{" "}
              <span className={styles.link_text}>Data Management Team</span>
            </Link>
            <Link to="/team3" className={styles.team_link}>
              <img
                src="/images/Businessman.png"
                alt="photograph"
                style={{ height: "2.5rem", width: "2.5rem" }}
              ></img>{" "}
              <span className={styles.link_text}>Regional Representatives</span>
            </Link>
            <Link to="/team4" className={styles.team_link}>
              <img
                src="/images/Users.png"
                alt="photograph"
                style={{ height: "2.5rem", width: "2.5rem" }}
              ></img>{" "}
              <span className={styles.link_text}>Our Well-wishers</span>
            </Link>
            <Link to="/team5" className={styles.team_link}>
              <img
                src="/images/Internet.png"
                alt="photograph"
                style={{ height: "2.5rem", width: "2.5rem" }}
              ></img>{" "}
              <span className={styles.link_text}>Website Management Team</span>
            </Link>
            <Link to="/team6" className={styles.team_link}>
              <img
                src="/images/Checked-User.png"
                alt="photograph"
                style={{ height: "2.5rem", width: "2.5rem" }}
              ></img>{" "}
              <span className={styles.link_text}>Our Members</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
