import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { baseURL } from '../../Apis';
import styled from 'styled-components';

export const DashScheduldeSidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [daily, setdaily] = useState(null)
  const [main, setmain] = useState(null)

  const getTime = (millis)=>{
    var d = new Date(millis)
    return d.toLocaleTimeString()
  }

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/user/getSchedule`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        setdaily(json.data.filter((ele) => ele.type===1))
        setmain(json.data.filter((ele) => ele.type===0))
      }
    };
    fun();
  }, []);

    return (
        <DashScheduleContainer>
            <div className="div1">
              <h3 className="nav-heading">Hello {user.name[0]} {user.name[1]}</h3>
              <h4 className="nav-para">Here is your today's schedule</h4>
              {main && main.map((item,i)=>{
                return(
                  <a key={i} style={{color:"black"}} href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                  <div key={i} className="table1">
                    <p className="p1">{item.heading}</p>
                      <span className="p2">Start Time: {getTime(item.startTime).substring(0, 5)} {getTime(item.startTime).substring(8)}</span>
                      <span className="p3"><b>{(item.endTime-item.startTime)/(1000*60*60)} hrs</b></span>
                  </div>
                  </a>
                )
              })}
              <h4 className="nav-para">Daily Tasks</h4>
              <div className="nav-text-bar">
                {daily && daily.map((item,i)=>{
                  return(
                    <a key={i} style={{color:"black"}} href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                    <div className="nav-text-baritem">
                      <p className="nav-text-heading">{item.heading}</p>
                      <p className="nav-text-p">Start Time: {getTime(item.startTime).substring(0, 5)} {getTime(item.startTime).substring(8)}</p>
                    </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </DashScheduleContainer>
    )
}


const DashScheduleContainer = styled.div`
  position: relative;
  .nav-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 27px 10px 40px;
    list-style: none;
    height: 67px;
  }
  .nav-para {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 57px 3px 23px 16px;
    list-style: none;
    height: 30px;
    font-size: large;
  }

  .nav-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 45px;
  }

  .nav-para-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 0px 0px 16px;
    list-style: none;
  }

  .nav-text-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 8px 8px 8px;
    list-style: none;
  }

  .nav-text-baritem {
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 11px 16px;
    margin: 0px;
    background: #b3ddd4;
    border-radius: 17.3983px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  p {
    margin-bottom: 0px;
  }

  .nav-text-heading{
    margin: 0px;
    font-size: large;
    font-weight: 550;
  }
  .nav-text-p{
    margin: 0px;
  }

  .div1,
  .div2 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .table1 {
    background: #ffffff;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin:2px;
    padding: 5px;
    position: initial;
    display: inline-block;
  }
  .p1 {
    color: #ff0404;
    margin: 5px;
    font-size: large;
    font-family: Poppins;
    font-style: normal;
    font-weight: 550;
  }
  
  .p2 {
    color: #1bbc9b;
    margin: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
  }
  
  .p1-1 {
    color: #ff0404;
    margin: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  
  .p2-1 {
    color: #1bbc9b;
    margin: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  
  .p3 {
    margin-left: 20px;
  }
  
  .p3-1 {
    margin-left: 20px;
  }
`