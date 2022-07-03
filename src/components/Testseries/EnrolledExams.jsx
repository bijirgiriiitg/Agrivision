import styled from "styled-components";
import {AiOutlineRight} from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Loader from "../../pages/Loader"
import { baseURL } from "../../Apis";
import useWindowDimensions from "../Util/useWindowDimensions";
//import { fontSize } from "@mui/system";
// const baseURL = "https://agri-api-pr-148.herokuapp.com/v1";

const PracticeQuiz = () => {
  const [items, setItems] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/testseries?page=1`,
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
        setItems(json.data.examWiseQuizes);
      }
    };
    fun();
  }, []);
  return (
    items? 
    (
      <>
        <H2>
          Exams
        </H2>
        <div
      style={width>750?{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        marginTop: "20px"
      }:{
        display:"flex",
        overflow:"scroll"
      }}
    >
      {items.map((it) => {
        let url = "/prevpapers/exam="+it.exam;
        return (
          <ViewLink to={{pathname: url, state: {}}}>
            <div>
              <StyledCard>
                <Content>
                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                  }}>
                <Topic>
                <H5>
                  {it.exam}
                  </H5>
                  </Topic>
                  <Topic>
                    <H1 style={{width:'50px',color:'#1bbc9b'}} >
                        View All
                    </H1>
                    <AiOutlineRight size='11px' style={{color:"#1bbc9b",marginTop:"0px",marginLeft:"5px"}} />
                  </Topic>

                  </div>
                  <div style={{fontSize:"12px"}} >
                  <H1 style={{marginTop:"0px"}} >
                  {it.quizCount} Previous Year Papers
                  </H1>
                  </div>
                </Content>
              </StyledCard>
            </div>
          </ViewLink>
          
        );
      })}
      
      </div>
    
      </>):
    <></>
  );
  }

  const H2 = styled.h3`
margin: 20px 5px 20px 10px;
font-weight : 500;
`

const H5 = styled.h3`
font-size: 16px;
margin-top: 5px;
margin-left: 8px;
padding: 0px;
`
const H1 = styled.h5`
font-size: 12px;
margin: 8px 0px 8px 20px;
`


const ViewLink = styled(Link)`
text-decoration: none;
color: black;
font-style: normal;
font-weight: normal;
`;

const StyledCard = styled.div`
width: 300px;
filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
border-radius: 8px;
overflow: hidden;
margin: 1rem;
// border: 1px solid black;
`;

// const Bg = styled.div`
// height: 80px;
// background: url("/images/Frame 13.svg") no-repeat center;
// color: white;
// // position: relative;
// `;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  //padding: 32px 10px 45px;
  margin-top: -4px;
  background-color: white;
  font-size: 15px;
  font-weight: 400;
`;

const Topic = styled.div`
  margin: 10px 12px;
  display: flex;
  align-items: center;
`;


export default PracticeQuiz;