import Navbar from "../components/global/Navbar";
import React, { useState } from "react";
import Activity from "../components/Dashboard/Activity.js";
import DashCourseCard from "../components/Dashboard/DashCourseCard";
import DashBar from "../components/Dashboard/DashBar.js";
import MyCalendar from "../components/Dashboard/MyCalendar.js";
import DashQuizCard from "../components/Dashboard/DashQuizCard.js";
//import "../components/Dashboard/Welcome.css";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { DashStreakSidebar } from "../components/Dashboard/DashStreakSidebar";
import { DashScheduldeSidebar } from "../components/Dashboard/DashScheduldeSidebar";
import Footer from "../components/global/Footer";
import { useEffect } from "react";
import Loader from "./Loader";
import { baseURL } from "../Apis";
import styled from "styled-components";

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const [userprog, setuserprog] = useState(null);
  const [dailyGoal, setdailyGoal] = useState(null)
  const [progress, setprogress] = useState([])
  const [testProg, settestProg] = useState([])
  const showSidebar = () => setSidebar(!sidebar);

  const [streakSidebar, setStreakSidebar] = useState(false);
  const showStreakSidebar = (e) => {
    setStreakSidebar(!streakSidebar);
  };
  const [user, setuser] = useState(null);
  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        setuser(json.data);
      }
    };
    fun();
  }, []);

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/user/userProgress`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      let prog = Array(31).fill({duration:0});
      var today = new Date();
      today = today.getMonth()+1
      json.data.readingDuration.forEach(ele => {
        if(ele.date){
          var arr = ele.date.split('/');
          if(parseInt(arr[0])===today){
            prog[arr[1]-1] = {duration:ele.duration}
          }
        }
      });
      setprogress(prog)
      prog = Array(31).fill({duration:0});
      json.data.testDuration.forEach(ele => {
        if(ele.date){
          var arr = ele.date.split('/');
          if(parseInt(arr[0])===today){
            prog[arr[1]-1] = {duration:ele.duration}
          }
        }
      });
      settestProg(prog)
      setdailyGoal(json.data.readingGoal)
      setuserprog({ data: json.data });
    };
    fun();
  }, []);

  return (
    <Dash>
      {user&&userprog ? (
        <div>
          <Navbar></Navbar>
          <DashWrapper>
            <DashHead>
              <div className="Welcome">
                <div className="Welcome-krishna">Welcome {user.name[0]} {user.name[1]}</div>
                <div className="Content">
                  <span className="P1">Nice to see you again,</span>
                  <Link to="#">
                    <span className="L1" onClick={showSidebar}>
                      See your Schedule Today
                    </span>
                  </Link>
                </div>
                <div>
                  <span className="P2">There are some new courses for you, </span>
                  <Link to="courses">
                    <span className="L2">Check it out</span>
                  </Link>
                </div>
                <div>
                  <span className="P3">Continue from where you left, </span>
                  {(userprog.data.lastCompleted.courseId && userprog.data.lastCompleted.chapterId) ? 
                  <Link to={`/course/${userprog.data.lastCompleted.courseId}/${userprog.data.lastCompleted.chapterId}`}>
                  <span className="L3" onClick={showStreakSidebar}>
                    Start
                  </span>
                  </Link>
                  :
                  <Link to={`/courses`}>
                  <span className="L3" onClick={showStreakSidebar}>
                    Start
                  </span>
                  </Link>
                  }
                </div>
              </div>
              <Activity
                minutesSpent={userprog.data.todayReadingDuration}
                minutesTotal={dailyGoal}
                setdailyGoal={setdailyGoal}
                questionsSolved={userprog.data.todayTestsCompleted}
                showStreakSidebar={showStreakSidebar}
              ></Activity>
            </DashHead>
            <DashBody>
              <DashCardCont>
                <DashCardContHead>
                  <h1>Your Courses</h1>
                  <span className="dashCard__ongoing">{user.courses.length} ongoing</span>
                  <span className="dashCard__viewAll">View all</span>
                </DashCardContHead>
                <DashCardWrapper>
                  {user.courses.map((t,i) => {
                    return <DashCourseCard key={i} course={t} />;
                  })}
                </DashCardWrapper>
              </DashCardCont>

              <MyCalendar></MyCalendar>
            </DashBody>

            <DashBottom>
              <DashProgress>
                <h1>Your Progress</h1>
                <DashBarBorder>
                  <DashBar courseProg={progress} testProg={testProg} userprog={userprog}/>
                </DashBarBorder>
              </DashProgress>
              <DashQuiz>
                <h1>Your TestSeries</h1>
                <DashGlobalContainer>
                  {user.testSeries.map((t,i)=>{
                    return <DashQuizCard key={i} test={t}/>
                  })}
                </DashGlobalContainer>
              </DashQuiz>
            </DashBottom>
          </DashWrapper>

          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link>
              </li>
              <DashScheduldeSidebar />
            </ul>
          </nav>
          <nav className={streakSidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose onClick={showStreakSidebar} />
                </Link>
              </li>
              <DashStreakSidebar userprog={userprog} dailyGoal={dailyGoal} progress={progress}/>
            </ul>
          </nav>
          <Footer />
        </div>
      ) : (
        <Loader></Loader>
      )}
    </Dash>
  );
}

const Dash = styled.div`
  
  .navbar {
    background-color: #ffffff;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-bars {
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    background-color: white;
    width: 480px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    border-left: 1px solid black;
    z-index: 100;
  }

  .nav-menu.active {
    right: 0;
    transition: 350ms;
  }
  .nav-menu {
    overflow-y: auto;
  }
  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: white;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }


  @media screen and (max-width: 580px) {
    .nav-menu {
      width: 100%;
    }
  }
`

const DashWrapper = styled.div`
  margin: 25px;

  h1 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 760px) {
    padding: 0:
    margin: 1rem;
    h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 1110px) {
    .flexCont {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 1224px) {
    .flexCont {
      display: flex;
    }
  }
  

`

const DashHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
  margin-bottom: 4rem;
  margin-left: 1rem;
  .Welcome {
    min-width: 0;
    position: relative;
    min-height: 16.0625rem;
    margin-top: 20px;
    margin-right: 25px;
    margin-left: 10px;
    background: #ecf2f1;
    box-shadow: 0rem 0.1875rem 0.75rem rgba(0, 0, 0, 0.12);
    border-radius: 0.375rem;
  }

  .welcome a {
    text-decoration: none;
  }
  .Welcome-krishna {

  
    width: 38.1875rem;
    min-height: 3rem;
    margin-left:5.3%;
    margin-top: 1.75rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;

  
    color: #12806b;
  }

  .P1 {

  
    max-width: 12.375rem;
    min-height: 1.6875rem;
    margin-left: 13.5%;
    margin-top: 2.5rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

  
    color: #000000;
  }
  .L1 {

  
    max-width: 14.1875rem;
    min-height: 1.6875rem;
    margin-left: 5%;
    margin-top: 0.5rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    clear: right;
  
  
    color: #0e6656;
  }
  .P2 {

  
    max-width: 20.875rem;
    min-height: 1.6875rem;
    margin-left: 13.5%;
    margin-top: 0.5rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

  
    color: #000000;
  }
  .L2 {

  
    max-width: 6.6875rem;
    min-height: 1.6875rem;
    margin-left: 5%;
    margin-top: 0.5rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    clear: right;
    line-height: 1.6875rem;

  
    color: #0e6656;
  }
  .P3 {

  
    max-width: 16.875rem;
    min-height: 1.6875rem;
    margin-left: 13.5%;
    margin-top: 0.5rem;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

  
    color: #000000;
  }
  .L3 {

    max-width: 12.3125rem;
    min-height: 1.6875rem;
    margin-left: 5%;
    margin-top: 0.5rem;
    clear: right;
  
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

  
    color: #0e6656;
  }
  .Content {
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    .Welcome {
      margin-right: 2.5%;
    }

    .P1,
    .P2,
    .P3 {
      margin-left: 20px;
      display: block;
    }
  }

  @media (max-width: 956px) {
    .Welcome span {
      font-size: 14px;
    }
    .Welcome a {
      font-size: 14px;
    }
  
    .Welcome-krishna {
      font-size: 1.46rem !important;
    }
  }

  @media (max-width: 767px) {
    display: flex !important;
    flex-direction: column;
  }
  
`

const DashBody = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4rem
  margin: 3rem 0rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    column-gap: 4rem;
  }

`

const DashCardCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  flex-basis: 0;
  min-width: 0;
  margin-right: 60px;
  margin-bottom: 20px;
  margin-left: 1rem;
  position: relative;
  .dashCard__viewAll {
    right:.1%;
    position: absolute;
  }
  .dashCard__ongoing {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }

  span {
    color: #17a388;
  }

  p {
    margin-left: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`


const DashCardContHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    p {
      position: relative;
      top: 3px;
      font-size: 11px;
    }

    span {
      font-size: 11px;
    }
  }
`

const DashCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  column-gap: 2rem;
`

const DashBottom = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  h1 {
    margin-bottom: 6px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const DashProgress = styled.div`
  position: relative;
  flex-basis: 0;
  min-width: 0;
  flex-grow: 2;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`

const DashBarBorder = styled.div`
  position: relative;
  padding: 6px 23px;
  border-radius: 3px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  flex-grow: 1;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media screen and (min-width: 1140px) {
    width: 100%;
  }
`

const DashQuiz = styled.div`
  flex-basis: 0;
  min-width: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin-top: 16px;
  }
`

const DashGlobalContainer = styled.div`
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 400px;

  overflow-y: auto;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 1000px) {
    align-items: center;
  }

`

export default Dashboard;
