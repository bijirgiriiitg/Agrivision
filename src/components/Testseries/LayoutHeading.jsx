import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentLayOut from "./ContentLayOut"
import { Link } from "react-router-dom";
import LiveTest from "./LiveTest"
import PracticeQuiz from "./PracticeQuiz"
import PracticeQuiz1 from "./PracticeQuiz1"
import PracticeQuiz2 from "./PracticeQuiz2"
import PastTestSeries from "./PastTestSeries";
import EnrolledExams from "./EnrolledExams";
// import ExplorePapers from "./ExplorePapers";
import SolvedPapers from "./SolvedPapers";
import useWindowDimensions from "../Util/useWindowDimensions";
import Loader from "../../pages/Loader"
import { baseURL } from "../../Apis";


function GlobalLayout() {
  const [state, setstate] = useState(1);
  const { width } = useWindowDimensions();

  const [items, setItems] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user"))
    {
    const fun = async (e) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(
        `${baseURL}/testseries?page=3&userId=${user._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if(json.success){
        setItems(json.data);
      }
    };
    fun();
  }
  else{
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/testseries?page=3`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if(json.success){
        setItems(json.data);
      }
    };
    fun();
  }
  }, []);

  return (
    <>
      <Containers>
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
                    ? "/images/global/testseries_white.png"
                    : "/images/global/testseries_green.png"
                }`}
                alt="Test series"
              ></img>
              <h6 className={`${state === 1 ? "text" : ""}`} style={width>620? {whiteSpace: "nowrap"}: {}}>Test Series</h6>
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
                  state === 2 ? "/images/global/previous_papers_white.png" : "/images/global/previous_papers_green.png"
                }`}
                alt="Previous Year Papers"
              ></img>
              <h6 className={`${state === 2 ? "text" : ""}`} style={width>620? {whiteSpace: "nowrap"}: {}}>Previous Year Papers</h6>
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
                    ? "/images/global/practise_white.png"
                    : "/images/global/practise_green.png"
                }`}
                alt="Practice"
              ></img>
              <h6 className={`${state === 3 ? "text" : ""}`} style={width>620? {whiteSpace: "nowrap"}: {}}>Practice</h6>
            </Items>
          </div>
          <div
            className={`${state === 4 ? "active" : ""}`}
            onClick={(e) => {
              setstate(4);
            }}
          >
            <Items>
              <img
                src={`${
                  state === 4
                    ? "/images/global/quizzes_white.png"
                    : "/images/global/quizzes_green.png"
                }`}
                alt="Quizzes"
              ></img>
              <h6 className={`${state === 4 ? "text" : ""}`} style={width>620? {whiteSpace: "nowrap"}: {}}>{items? items.quizName : `Exams`}</h6>
            </Items>
          </div>
        </Menu>

        <Content>
            <div className={`${state !== 1 ? "hidden" : ""}`}>
                  <ContentLayOut/>
                  <LiveTest/>
                  <PastTestSeries/>
              </div>

              <div className={`${state !== 2 ? "hidden" : ""}`}>
                  <EnrolledExams/>
                  <SolvedPapers/>
                {/* <H2>
                  Explore Papers
                </H2>
                  <ExplorePapers /> */}
              </div>

              <div className={`${state !== 3 ? "hidden" : ""}`}>
                <div style={{display:"flex"}} >
                  <H2>
                    Full Length Tests
                  </H2>
                      <Link>
                  <H1 style={{color:'#1bbc9b'}} >
                      View All
                  </H1>
                      </Link>

                    </div>
                  <PracticeQuiz/>
                    <H2>
                      Latest Quizzes
                    </H2>
                      <PracticeQuiz1/>
                      <H2 style={{marginLeft:"40%"}} >
                      Subject Wise Quizzes
                    </H2>
                    <PracticeQuiz2/>
              </div>

              <div className={`${state !== 4 ? "hidden" : ""}`}>
                    {items? 
      (
      <>
        <Container>
            <h2 style={{ margin:"32px 0px 0px 0px", color:"rgba(22, 160, 134, 1)"}}>{items.quizName}</h2>
            <h3 style={{ margin:"16px 0px 32px 0px"}}>
                {items.date}, {items.time}
            </h3>
            {items.isAlreadyRegistered ?
            <ViewLink2 onClick={ (event) => event.preventDefault() }>Registered</ViewLink2>
            :
            <ViewLink to={{pathname: `/register/${items.quizId}`}}>Register now</ViewLink>
            }
            {/* <img style={{height:"50vh",width:"50vw"}} src="/images/TestseriesSpecificPageLogo.svg" alt="Select any quiz to start learning"/> */}
        </Container>
      </>
      ):
      <Loader/>
      }
              </div>
        </Content>
      </Containers>
    </>
  );
}

const H2 = styled.h3`
margin: 20px 5px 20px 10px;
font-weight : 500;
`

const H1 = styled.h5`
margin-top: 30px;
font-size: 12px;
margin-left: 10px;
`
const Container = styled.div`
    width: 100%;
    items-align: center;
    text-align: center;
    justify-content: center;
`

const ViewLink = styled(Link)`
    outline: none;
    border: none;
    background-color: #0e6656;
    color: white;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
    :hover {
    background-color: #0e6656;
    box-shadow: 0px 0px 8px #13846f;
    color: white;
    }
`

const ViewLink2 = styled.button`
    outline: none;
    border: none;
    background-color: #7BC17E;
    color: white;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    border-radius: 8px;
    opacity: 0.8;
    cursor:text;
    text-transform: uppercase;
`

// const H3 = styled.h3`
// margin: 24px 40%;
// font-size:30px;
// font-weight : 500;
// width: 500px;
// `

const Containers = styled.div`
width: 90%;
padding: 20px;

`

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #1bbc9b;
  border-radius: 5px;
  margin: 0px 0px;
  over-flow: scroll;
  cursor: pointer;

  div {
    width: 25%;
    // border-right: 1px solid #1bbc9b;
  }

  .active {
    background-image: linear-gradient(to right, #1bbc9b, #16a086);
    border-radius: 5px;
  }
`;

const Items = styled.div`
  margin: 10px auto;
  vertical-align: text-bottom;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  img {
    width: 40px;
    height: 40px;
  }
  h6 {
    margin: 6px -2px 0px;
    font-size: 12px;
    color: #16a086;
    }
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
