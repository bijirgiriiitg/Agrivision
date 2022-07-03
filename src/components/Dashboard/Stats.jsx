import React from "react";
import * as BsIcons from "react-icons/bs";
import StatBox from "./StatBox";
import styled from "styled-components";

export default function Stats(props) {
  return (
    <StatContainer>
      <div className="head-sidebar">
        <div className="sidebar-left">
          <h2>Stats</h2>
        </div>
        <div className="sidebar-right">Last 7 days</div>
      </div>
      {/* <div className='sidebar-left'><h2>Stats</h2></div><div className='right mb-2'>Last 7 days</div> */}
      <div className="stats-body">
        <StatBox
          name="Total watch time"
          data={
            props.userprog.data.totalTimeSpent ? props.userprog.data.totalTimeSpent : 0
          }
          icon={<BsIcons.BsCollectionPlay size={45} />}
        />
        <StatBox
          name="Total Tests Completed"
          data={
            props.userprog.data.testsCompleted ? props.userprog.data.testsCompleted : 0
          }
          icon={<BsIcons.BsPencilSquare size={45} />}
        />
      </div>
      <div className="stats-body">
        {/* <StatBox
          name="Total Courses Completed"
          data={
            props.userprog.data.coursesCompleted
              ? props.userprog.data.coursesCompleted
              : 0
          }
          icon={<BsIcons.BsBookmarkCheck size={45} />}
        />
        <StatBox
          name="Total Questions Completed"
          data={
            props.userprog.data.totalQuestionsCompleted
              ? props.userprog.data.totalQuestionsCompleted
              : 0
          }
          icon={<BsIcons.BsPencil size={45} />}
        /> */}
      </div>
    </StatContainer>
  );
}

const StatContainer = styled.div`
  position: relative;
  .sidebar {
    background-color: #fff;
    width: 50vw;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 10px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    padding-bottom: 30px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  .left,
  .right {
    display: inline-block;
    width: 50%;
  }
  .head-sidebar {
    display: flex;
    flex-direction: row;
  }

  .stats-body {
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    column-gap: 1.5rem;
  }
  
  .sidebar-left {
    margin-left: 20px;
  }
  .sidebar-right {
    margin: auto;
    padding: 7px;
  }

  @media screen and (max-width: 760px) {
    .sidebar {
      width: 100vw;
    }

    .stats-body {
      padding: 0%;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 1080px) {
    .sidebar {
      width: 75vw;
    }
  }
`
