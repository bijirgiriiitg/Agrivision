import React from "react";
import Streak from "./Streak";
import styled from "styled-components";

export const DashStreakSidebar = (props) => {
  return (
    <Sideb>
      <Streak userprog={props.userprog} dailyGoal={props.dailyGoal} progress={props.progress}/>
    </Sideb>
  );
};

const Sideb = styled.div`
  -webkit-overflow-scrolling: touch;
`