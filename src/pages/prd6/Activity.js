import React from "react";
import styles from "./header.module.css";
import "react-circular-progressbar/dist/styles.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import food from "./food.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Loader from "../Loader";
import styled from "styled-components";
import { useState } from "react";
import "./Activity.css";
import { useHistory } from "react-router-dom";
import SubjectSlider from "./SubjectSlider";
//import { Link } from "react-router-dom";
//import { baseURL } from "../Apis";

const Activity = (props, course ) => {
  const history = useHistory()
  const [loader] = useState(false)

  const setProgressForOuter=(mS,mT)=> {
    let percent = 1 - (mS / mT);
    let value = `${(percent<0?0:percent) * 350}`;
    return value;
  }
  /*
  const handelGoal =(e)=>{
    if(e.target.value==="0"){
      props.setdailyGoal(props.minutesTotal)
    }
    else{
      setloader(true)
      fetch(`https://agrivision-api.herokuapp.com/user/setGoal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({readingGoal: e.target.value,watchingGoal: 0})
      })
      .then((res) => res.json())
      
    }
  }
  */
  const percentage = 0;
  return (
    <>
    { loader && <Loader/>}
    {course && (
    <div className={styles.container}>
        <div className={styles.left}>
        <ActivityContent>
          <ActivityChart>
            <ActivityData>
            <svg width="121" height="121" className="outercircle">
              <circle r="54.5" cx="60.5" cy="60.5" className="backgroundtrack"></circle>
              <circle
                r="54.5"
                cx="60.5"
                cy="60.5"
                className="track"
                strokeDashoffset={setProgressForOuter(props.minutesSpent,props.minutesTotal)}
              ></circle>
              <circle
                r="36"
                cx="60.5"
                cy="60.5"
                className="backgroundtrack-inner"
              ></circle>
              <circle
                r="36"
                cx="60.5"
                cy="60.5"
                className="track-inner"
                strokeDashoffset={0}
                value={percentage}
              ></circle>
             
            </svg>
            </ActivityData>
            <div className={styles.contentOfBar}>
              <p className={styles.number}>{percentage}%</p>
              <p className={styles.text}>PROGRESS</p>
            </div>
          </ActivityChart>
          
          <div className="line1">
              <span className="AL2">
                {props.minutesSpent}/{props.minutesTotal}
              </span>
              <span className="AL3">Topics Completed</span>
            </div>

          
        </ActivityContent>
          <div className={styles.streak}>
            <div className={styles.streakContent}>
              <p className="AL4">
                {props.questionsSolved}
              </p>
              <p className={styles.streakText}>Current Streak</p>
            </div>
            <div className={styles.streakContent}>
              <p className="AL4">8</p>
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
              <div onClick={() => history('/lectures/1')} className={styles.upperIcon}>
                <PlayCircleIcon className={styles.uicon}></PlayCircleIcon>
                <p className={styles.upperText}>{course.totalLectures}Expert Lectures</p>
              </div>
              <div onClick={() => history('/test')} className={styles.upperIcon}>
                <BorderColorIcon className={styles.uicon}></BorderColorIcon>
                <p className={styles.upperText}>{course.totalTests}5 Sectional Tests</p>
              </div>
              <div onClick={() => history('/notes/1')} className={styles.upperIcon}>
                <FormatListBulletedIcon
                  className={styles.uicon}
                ></FormatListBulletedIcon>
                <p className={styles.upperText}>{course.totalNotes}20 Chapter Notes</p>
              </div>
              
            </div>
           
          </div>
          <SubjectSlider/>
        </div>
        
      </div>)}
      </>
  )
}


const ActivityContent = styled.div`
  margin-left:10%;
  margin-top:-20%;
  flex-wrap: wrap;
  justify-content: center;
`

const ActivityData = styled.div`

  .AL2 {
  
    max-width: 3.6875rem;
    min-height: 1.875rem;
    margin-left: 5%;
    margin-top: 10%;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: #1bbc9b;
  
  }
  .AL3 {
  
    max-width: 7.6875rem;
    min-height: 1.3125rem;
    margin-left: 6%;
    margin-top: 3.75rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.3125rem;
  
    color: #000000;
  }
  .AL4 {
  
    max-width: 3.6875rem;
    min-height: 1.875rem;
    margin-left: 5%;
    margin-top: 1rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.875rem;
  
    color: #031e7e;
  }
  .AL5 {
  
    max-width: 9.3125rem;
    min-height: 1.3125rem;
    left: 5.8125rem;
    top: 6.375rem;
    margin-left: 5%;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.3125rem;
  
    color: #000000;
  }
  .AL6 {
 
  
    max-width: 8.4375rem;
    min-height: 1.3125rem;
    margin-left: 5%;
    margin-top: 2rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
  .chooseGoal{
    font-size: medium;
    margin-top: 9px;
    margin-left: 9px;
    margin-bottom: -6px;
  }
  .selectColor {
    margin: 15px;
    margin-left: 34px;
    position: relative;
    padding: 1px;
    border: 1px solid black;
    outline: none;
    width: 184px;
    border-radius: 4px;
  }
  @media (max-width: 420px) {
    .line1 {
      margin-top: 10rem;
    }
    .AL2,
    .AL3 {
      margin-top: 12rem;
    }
  }
  @media (max-width: 1110px) {
    .line1 {
      margin-top: 1.14rem;
    }
  }
`

const ActivityChart = styled.div`
  .outercircle {
    margin-right: 38px;
    fill: none;
    margin-top: -15%;
  }
  .backgroundtrack {
    stroke: #b3ddd4;
    stroke-width: 6;
  }
  .track {
    stroke: #1bbc9b;
    stroke-width: 6;
    stroke-dasharray: 350;
    transform: rotate(-90deg);
    transform-origin: center;
  }
  .backgroundtrack-inner {
    stroke: #b3ddd4;
    stroke-width: 6;
  }
  .track-inner {
    stroke: #031e7e;
    stroke-width: 6;
    stroke-dasharray: 226;
    transform: rotate(-90deg);
    transform-origin: center;
  }
`

export default Activity;