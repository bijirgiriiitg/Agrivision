import styled from "styled-components";
import {AiOutlineRight} from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../pages/Loader"
import { baseURL } from "../../Apis";
import useWindowDimensions from "../Util/useWindowDimensions";
//import { fontSize } from "@mui/system";
// const baseURL = "https://agri-api-pr-148.herokuapp.com/v1"

const PracticeQuiz1 = () => {
  const [items, setItems] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/testseries?page=2`,
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
  }, []);


    return (
      items? 
      (

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
          {items.freeQuizes.map((item) => {
            let url = "/quiz/" + item._id;
            return (
              <ViewLink key ={item._id} to={{pathname: url, state: { testSeriesId: item._id, name: item.name }}}>
                <div>
                  <StyledCard>
                    <Bg>
                    <h2 style={{
                        position:"absolute",
                        bottom:"20%",
                        left:"15%",
                        color: "black",
                        fontSize: "16px",
                        fontFamily:"unset"
                      }} >

                      {item.name}
                      </h2>
                    </Bg>
                    <Content>
                      <div style={{
                        display:"inline-grid",
                        gridTemplateColumns: "4fr 2fr",
                        //justifyContent:"space-between",
                      }}>
                    <Topic>
                    <H5>
                      {item.exam}
                      </H5>
                      </Topic>
                      <Topic>
                        <H2 style={{color:'#1bbc9b'}} >
                            Take Test
                        </H2>
                        <AiOutlineRight size='11px' style={{color:"#1bbc9b",marginTop:"0px",marginLeft:"5px"}} />
                      </Topic>

                      </div>
                      <div style={{fontSize:"12px"}} >
                      <H1 style={{marginTop:"0px"}} >
                      Chapter 1
                      </H1>
                      </div>
                    </Content>
                  </StyledCard>
                </div>
              </ViewLink>
            );
          })}
          
        </div>
      ):
      <Loader/>
    );
  }

const H5 = styled.h5`
font-size: 18px;
margin-top: 5px;
margin-left: 8px;
padding: 0px;
`
const H1 = styled.h5`
margin-top: 5px;
font-size: 10px;
margin-left: 20px;
`
const H2 = styled.h5`
font-size:12px;
margin-top:8px;
`;


const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
`;

const StyledCard = styled.div`
  width: 305px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 6px;
  overflow: hidden;
  margin: 1rem;
`;

const Bg = styled.div`
  width: 100%;
  height: 80px;
  background: url("/images/Frame 13.svg") no-repeat center;
  color: white;
  position: relative;
`;

// const Head = styled.div`
//   width: 100%;
//   padding: 0.5rem 1rem;
//   font-size: 10px;
//   font-weight: 600;
//   display: flex;
//   justify-content: space-between;
// `;

// const HeadText = styled.div`
//   padding: 0.4rem 1rem;
//   background: #F5F5F5;
//   border-radius: 5px;

// `;

// const BgTitle = styled.div`
//   font-size: 18px;
//   font-weight: 600;
//   background-color: white;
//   color: black;
//   position: absolute;
//   padding: 12px 24px;
//   border-radius: 4px 4px 0px 0px;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);
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

export default PracticeQuiz1;