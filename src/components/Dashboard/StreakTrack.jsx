import React from "react";


export default function StreakTrack(props){
  const box = {
    display : 'flex' ,
    justifyContent : 'space-around' ,
    margin : '30px 0px' ,
  }
  const subbox = {
    textAlign : 'center' ,
    fontWeight : 'bold' ,
    fontSize : '1.2rem' ,
    margin: '0px 20px' ,


  }
  return(
    <>
      <div style={box}>

        <div style={subbox}>Current<br/><span style={{color:'green'}}>{props.data.currentStreakDay?props.data.currentStreakDay:0} days</span></div>
        <div style={subbox}>Longest<br/><span style={{color:'blue'}}>{props.data.longestStreakDay?props.data.longestStreakDay:0} days</span></div>
        <div><img src="/images/fire.svg" alt="Fire"></img></div>
      </div>
    </>
  )
}