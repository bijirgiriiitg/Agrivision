import React from "react";
import Progress from "./Progress";
import StreakTrack from "./StreakTrack";
import Stats from "./Stats";
import styled from "styled-components";

export default function Streak(props) {
  return (
    <StreakContainer>
      <div className="mb-4 mt-5">
        <div className="head-sidebar">
          <div className="sidebar-left">
            <h2>Learning Streak</h2>
          </div>
          <div className="sidebar-right">
            {props.userprog.data.todayReadingDuration ? props.userprog.data.todayReadingDuration : "0"}/
            {props.dailyGoal ? props.dailyGoal : 0} minutes
            today
          </div>
        </div>
        <StreakTrack data={props.userprog.data} />
        <Progress data={props.userprog.data} progress={props.progress}/>
        <Stats userprog={props.userprog} />
      </div>
    </StreakContainer>
  );
}

const StreakContainer = styled.div`

  position: relative;


  .sidebar-left {
    margin-left: 20px;
  }
  .sidebar-right {
    margin: auto;
    margin-left: 10px;
    padding: 7px;
  }
  
  .head-sidebar {
    display: flex;
    flex-direction: row;
  }
`