import React from "react";
import Navbar from "../components/global/Navbar";
import JobHeader from "../components/JobUpdates/JobHeader";
import JobWrapper from "../components/JobUpdates/JobWrapper";
import JobSidebar from "../components/JobUpdates/JobSidebar";
import styled from "styled-components";
import device from "../components/Util/MediaQuery";

const JobUpdate = () => {
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <Container>
        <div className="right">
          <JobHeader></JobHeader>
          <JobWrapper></JobWrapper>
        </div>

        <div className="left">
          <JobSidebar></JobSidebar>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  .right {
    width: 800px;
    margin-right: auto;
  }
  .left {
    margin-right: 20px;
    width: auto;
  }
  ${device.laptop} {
    flex-direction: column;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
    }
  }
 
`;

export default JobUpdate;
