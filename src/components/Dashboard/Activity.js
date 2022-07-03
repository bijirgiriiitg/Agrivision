import { Link } from "react-router-dom";
import { baseURL } from "../../Apis";
import Loader from "../../pages/Loader"
import styled from "styled-components";
import React from 'react'
import { useState } from "react";

const Activity = (props) => {

  const [loader, setloader] = useState(false)

  const setProgressForOuter=(mS,mT)=> {
    let percent = 1 - (mS / mT);
    let value = `${(percent<0?0:percent) * 350}`;
    return value;
  }
  const handelGoal =(e)=>{
    if(e.target.value==="0"){
      props.setdailyGoal(props.minutesTotal)
    }
    else{
      setloader(true)
      fetch(`${baseURL}/user/setGoal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({readingGoal: e.target.value,watchingGoal: 0})
      })
      .then((res) => res.json())
      .then(
        (result) => {
          setloader(false)
          if(result.success){
            props.setdailyGoal(e.target.value)
          }
        },
        (error) => {
          setloader(false)
          console.log(error)
        })
    }
  }
  return (
    <>
    {loader && <Loader/>}
    <ActivityMain>
        <span className="AL1">Today</span>
        <ActivityContent>
          <ActivityData>
            <div className="line1">
              <span className="AL2">
                {props.minutesSpent}/{props.minutesTotal}
              </span>
              <span className="AL3">Reading Goal Completed</span>
            </div>
            <div>
              <span className="AL4">
                {props.questionsSolved}
              </span>
              <span className="AL5">Tests Attempted</span>
            </div>
            <div>
              <Link to="#">
                <span className="AL6" onClick={props.showStreakSidebar}>
                  See All Activity
                </span>
              </Link>
            </div>
            <h5 className="chooseGoal">Set your daily reading goal:</h5>
              <select onChange={handelGoal} className="selectColor">
                <option value={0}>-select-</option>
                <option value={60}>60 Minutes</option>
                <option value={120}>120 Minutes</option>
                <option value={240}>240 Minutes</option>
                <option value={300}>300 Minutes</option>
              </select>
            </ActivityData>
          <ActivityChart>
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
              ></circle>
            </svg>
          </ActivityChart>
        </ActivityContent>
      </ActivityMain>
      </>
  )
}

const ActivityMain = styled.div`


  position: relative;

  min-height: 18.0625rem;

  padding-top: 2rem;
  margin-top: 1rem;
  box-shadow: 0rem 0.1875rem 0.75rem rgba(0, 0, 0, 0.12);
  margin-left: 10px;
  background: #ffffff;

  border-radius: 0.375rem;

  span {
    font-size: 1.4rem;
  }

  .AL1 {

  
    margin-left: 30%;
  
    max-width: 3.125rem;
    min-height: 1.5rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.5rem;

    color: #000000;
  }

  @media(max-width: 420px) {
    .Al1 {
      left: 10%;
    }
  }


`

const ActivityContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ActivityData = styled.div`
  flex-grow: 1;
  margin-left: 23px;
  
  .line1 {
    margin-top: 3rem;
  }

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
    margin-left: 5%;
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

export default Activity

