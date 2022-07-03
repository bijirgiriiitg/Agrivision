import React from "react";
import styled from "styled-components";
import device from "../Util/MediaQuery";

const JobHeader = () => {
  return (
    <Container>
      <h2>Job Updates</h2>
      <p>
        The job board where new grad and intern product design jobs are posted.
        Updated frequently.
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 900px;
  padding: 15px;
  margin-left: 5px;
  justify-content: start;
  text-align: justify;
  h2 {
    color: #16a086;
    width: 250px;
  }
  p {
    width: 400px;
    ${device.laptop} {
      width: 400px;
      ${device.tablet} {
        margin-top: 10px;
        display: block;
        width: 75vw;
      }
    }
  }
  h2 {
    font-size: 35px;
    font-weight: 600;
    ${device.laptopL} {
      font-size: 32px;
    }
    ${device.laptop} {
      font-size: 28px;
      width: 200px;
    }
  }
  ${device.tablet} {
    display: block;
    width: 100vw;
  }
`;

export default JobHeader;
