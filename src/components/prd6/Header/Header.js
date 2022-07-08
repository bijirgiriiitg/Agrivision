import React from "react";
import styles from "./header.module.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import food from "./food.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BorderColorIcon from "@mui/icons-material/BorderColor";
function Header5() {
  const percentage = 12.5;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.progressbar}>
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: `#13AE7E`,
                textColor: "#0B6E4F",
                width: "100px",
              })}
            ></CircularProgressbarWithChildren>
          </div>
          <div className={styles.contentOfBar}>
            <p className={styles.number}>{percentage}%</p>
            <p className={styles.text}>PROGRESS</p>
          </div>
          <p className={styles.topic}>5/7 Topics Completed</p>
          <div className={styles.streak}>
            <div className={styles.streakContent}>
              <p className={styles.streakNumber}>8</p>
              <p className={styles.streakText}>Current Streak</p>
            </div>
            <div className={styles.streakContent}>
              <p className={styles.streakNumber}>8</p>
              <p className={styles.streakText}>Max Streak</p>
            </div>
          </div>
          <div className={styles.subjects}>
            <p className={styles.heading}>Start Learning</p>
            <div className={styles.list}>
              <CircleOutlinedIcon className={styles.icon}></CircleOutlinedIcon>
              <p className={styles.point}>Mathematics</p>
            </div>
            <div className={styles.list}>
              <CircleOutlinedIcon className={styles.icon}></CircleOutlinedIcon>
              <p className={styles.point}>Mathematics</p>
            </div>
            <div className={styles.list}>
              <CircleOutlinedIcon className={styles.icon}></CircleOutlinedIcon>
              <p className={styles.point}>Mathematics</p>
            </div>
            <div className={styles.list}>
              <CircleOutlinedIcon className={styles.icon}></CircleOutlinedIcon>
              <p className={styles.point}>Mathematics</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.upper}>
            <img src={food} alt="food" className={styles.img} />
            <p className={styles.upperHeading}>Food Technology</p>
            <div className={styles.upperIcons}>
              <div className={styles.upperIcon}>
                <PlayCircleIcon className={styles.uicon}></PlayCircleIcon>
                <p className={styles.upperText}>Expert Lectures</p>
              </div>
              <div className={styles.upperIcon}>
                <BorderColorIcon className={styles.uicon}></BorderColorIcon>
                <p className={styles.upperText}>5 Sectional Tests</p>
              </div>
              <div className={styles.upperIcon}>
                <FormatListBulletedIcon
                  className={styles.uicon}
                ></FormatListBulletedIcon>
                <p className={styles.upperText}>20 Chapter Notes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header5;
