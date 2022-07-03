import React from "react";
import styled from "styled-components";
import device from "../Util/MediaQuery";
import { baseURL } from "../../Apis";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";

export default function JobSidebar() {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleJobUpdatesSignUp = () => {
    if (emailRegex.test(email)) {
      notify("success", "Job Updates subscription added.")
      subscribeJobUpdates();
      setEmailError("");
      setIsClicked(true);
    } else {
      notify("info", "Invalid Email.")
      setEmailError("Invalid Email address.")
    }
  }

  const subscribeJobUpdates = () => {
    const fields = {
      email: email,
      type: "jobUpdate"
    }

    fetch(`${baseURL}/newsletter/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(fields)
    }).then((res) => res.json())
  }


  return (
    <Container className="job-sidebar">
      <ToastContainer/>
      <div className="job-sidebar-box">
        <h4>Subscribe For Updates</h4>
        <p className="about">Be the first to know</p>
        <input  placeholder="Email Address" onChange={handleEmailChange} className={emailError.length > 0 ? 'email error' : 'email'}></input>
        {emailError.length > 0 && (<span style={{color: "red",fontSize: "12px",marginLeft: "10px",paddingTop:"10px"}}>{emailError}</span>)}
        {isClicked && (<span style={{color: "#1bbc9b",fontSize: "12px",marginLeft: "10px",paddingTop:"10px"}}>Job Updates subscription added!</span>)}
        <button onClick={!isClicked ? handleJobUpdatesSignUp : () => {}} className={isClicked ? 'job-updates-button clicked': 'job-updates-button'}>Subscribe</button>
      </div>
      <div className="job-sidebar-box" style={{ height: "355px" }}>
        <h4>Here to hire ?</h4>
        <p className="about">
          Promote your job opprtunities and connect with the best candidates
        </p>
        <button>Post a Job</button>
      </div>
      <div className="circle"></div>
    </Container>
  );
}

const Container = styled.div`
  .job-sidebar {
    width: 30%;
    text-align: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
    padding: 20px;
  }
  .job-sidebar-box {
    max-width: 460px;
    height: 316px;
    background-color: #e8f3ff;
    padding: 20px 10px;
    border-radius: 5px;
    margin: 30px 10px 30px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${device.tablet} {
      width: 80vw;
      margin: 30px 10px 30px 30px;
    }

    h4 {
      text-align: center;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 36px;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      text-align: center;

      color: #4a4a4a;
    }
    input {
      width: 360px;
      height: 48px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      box-sizing: border-box;
      border-radius: 8px;
    }

    .error {
      border: 2.5px solid red;
    }

    .clicked {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }

  .job-sidebar-box .about {
    font-size: 0.8rem;
    margin-top: 10px;
    color: rgb(0, 0, 0, 0.6);
    padding: 0 50px;
  }
  .job-sidebar-box input {
    margin-top: 30px;
    width: 80%;
    padding: 7px;
    border: none;
  }
  .job-sidebar-box button {
    margin-top: 30px;
    width: 50%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #1bbc9b;
    font-weight: 600;
    cursor: pointer;
  }
  .circle {
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    position: absolute;
    top: -25vw;
    right: -25vw;
    background-color: #1bbc9b;
    z-index: -99;

    ${device.laptop} {
      display: none;
    }
  }
`;
