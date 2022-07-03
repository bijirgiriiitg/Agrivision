import React, { useState } from "react";
import { Container } from "../global/Global";
import styled from "styled-components";
import AcademicLayout from "../Academics/AcademicsPage";
import JobWrapper from "../JobUpdates/JobWrapper";
import MagazineLayout from "../Magazine/MagazineLayout";

function GlobalLayout() {
  const [state, setstate] = useState(1);

  return (
    <>
      <Container>
        <Menu>
          <div
            className={`${state === 1 ? "active" : ""}`}
            onClick={(e) => {
              setstate(1);
            }}
          >
            <Items>
              <img
                src={`${
                  state === 1
                    ? "/images/global/academic_white.png"
                    : "/images/global/academic.png"
                }`}
                alt="Academics"
              ></img>
              <h6 className={`${state === 1 ? "text" : ""}`}>Academics</h6>
            </Items>
          </div>
          <div
            className={`${state === 2 ? "active" : ""}`}
            onClick={(e) => {
              setstate(2);
            }}
          >
            <Items>
              <img
                src={`${
                  state === 2 ? "/images/global/job_white.png" : "/images/global/job.png"
                }`}
                alt="Jobs"
              ></img>
              <h6 className={`${state === 2 ? "text" : ""}`}>Job Updates</h6>
            </Items>
          </div>
          <div
            className={`${state === 3 ? "active" : ""}`}
            onClick={(e) => {
              setstate(3);
            }}
          >
            <Items>
              <img
                src={`${
                  state === 3
                    ? "/images/global/magazine_white.png"
                    : "/images/global/magazine.png"
                }`}
                alt="Magazine"
              ></img>
              <h6 className={`${state === 3 ? "text" : ""}`}>Magazine</h6>
            </Items>
          </div>
        </Menu>
        <Content>
          <div className={`${state !== 1 ? "hidden" : ""}`}>
            <AcademicLayout ig={true}/>
          </div>

          <div className={`${state !== 2 ? "hidden" : ""}`}>
            <div className="center">
              <JobWrapper></JobWrapper>
            </div>
          </div>

          <div className={`${state !== 3 ? "hidden" : ""}`}>
            <MagazineLayout />
          </div>
        </Content>
      </Container>
    </>
  );
}

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #1bbc9b;
  border-radius: 10px;
  margin-top: 40px;

  div {
    width: 33.33%;
    text-align: center;
  }

  .active {
    background-image: linear-gradient(to right, #1bbc9b, #16a086);
    border-radius: 10px;
  }
`;

const Items = styled.div`
  margin: 20px auto;
  vertical-align: text-bottom;
  img {
    width: 65px;
    height: 50px;
  }
  h6 {
    margin: 0;
    font-size: 15px;
    margin-top: 10px;
    color: #16a086;
  }
  .text {
    color: white;
  }
`;

const Content = styled.div`
  .center {
    padding: 0 auto;
  }
  .hidden {
    display: none;
  }
`;
export default GlobalLayout;
