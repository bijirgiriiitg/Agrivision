import React from "react";
import styled from "styled-components";

export default function StatBox(props){
  return(
    <StatMain>
      <div className='stat-box'>
        <div className='head'>
          <div className='icon'>{props.icon}</div>
          <div className='name'>{props.name}</div>
        </div>
        <div className='body'>
          {props.data}
        </div>
      </div>
    </StatMain>
  )
}

const StatMain = styled.div`
  .stat-box {
    padding: 16px;
    width: 95%;
    text-align: center;
    margin: 3px;
    border-radius: 19px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  .stat-box .head {
    display: flex;
    justify-content: space-around;
    padding: 2px 2px;
    color: rgba(0, 0, 0, 0.7);
  }
  .stat-box .icon {
    display: flex;
    align-items: center;
    height: 50%;
    margin-right: 10px;
    margin-top: auto;
    padding: 5px;
  }
  .stat-box .name {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    margin-left: auto;
    text-align: left;
  }
  .stat-box .body {
    font-size: 2rem;
  }
`;