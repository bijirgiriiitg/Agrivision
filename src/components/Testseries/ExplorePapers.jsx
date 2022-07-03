import styled from "styled-components";
//import {AiOutlineRight} from "react-icons/ai";
import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import Loader from "../../pages/Loader"
// import { baseURL } from "../../Apis";
import useWindowDimensions from "../Util/useWindowDimensions";
//import { fontSize } from "@mui/system";
// const baseURL = "https://agri-api-pr-148.herokuapp.com/v1/testseries?page=1"

const PracticeQuiz = () => {
  // const [items, setItems] = useState(null);
  const [state, setstate] = useState(0);
  const { width } = useWindowDimensions();

  // useEffect(() => {
  //   const fun = async (e) => {
  //     const response = await fetch(
  //       `${baseURL}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     const json = await response.json();
  //     if(json.success){
  //       setItems(json.message);
  //     }
  //   };
  //   fun();
  // }, []);


    return (
      <div style={width>750?{ 
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
      }:{
          width:"100%"
      }}>
          <div style={width>750?{ 
          display: "flex",
          flexDirection: "row",
          width: "75%",
          margin: "32px 0px",
          background: "white",
          filter: "drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1))",
          borderRadius: "0px",
          padding:"16px 16px 16px 0px"
            }:{
          display: "flex",
          flexDirection: "row",
          width: "85%",
          margin: "32px 0px",
          background: "white",
          filter: "drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1))",
          borderRadius: "0px",
          padding:"16px 16px 16px 0px"
            }}>
          <Namediv>
            <div className={`${state === 1 ? "active" : ""}`} 
                onClick={(e) => {
                  setstate(1);
                }}
            >Bachelor's
              {/* {items.examWiseQuizes[0][1].name} */}
            </div>
            <div className={`${state === 2 ? "active" : ""}`} 
                onClick={(e) => {
                  setstate(2);
                }}
            >Master's</div>
            <div className={`${state === 3 ? "active" : ""}`} 
                onClick={(e) => {
                  setstate(3);
                }}
            >PhD</div>
          </Namediv>
          <div style={{
              display:"flex", 
              flexWrap: "wrap",
              alignItems:"center",
              justifyContent:"center",
              background: "#E7E7E7",
              padding:"16px"
              }}>
          {/* {items ? items.map((item) => {
            let url = "/testseries/" + item.testSeriesId;
            return (
              <ViewLink key ={item.testSeriesId} to={{pathname: url, state: { testSeriesId: item.testSeriesId, name: item.name }}}>
                <div>
                  <StyledCard style={width>750?{width:"300px"}:{width:"200px"}}>

                    <Content>
                      <div style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                      }}>
                    <Topic>
                    <H5>
                      {item.name}
                      </H5>
                      </Topic>
                      <Topic>
                        <H1 style={{color:'#1bbc9b'}} >
                            Take Test
                        </H1>
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
          }):<Loader></Loader>} */}
          </div>
      </div>
      </div>


        // <div
        //   style={width>750?{
        //     display: "flex",
        //     flexWrap: "wrap",
        //     gap: "16px",
        //     marginTop: "20px"
        //   }:{
        //     display:"flex",
        //     overflow:"scroll"
        //   }}
        // >
          
          
        // </div>
    );
  }

const Namediv = styled.div`
    display: flex;
    flex-direction: column;
    div{
        max-width: 150px;
        padding: 8px 32px 8px 16px;
        cursor: pointer;
        background: white;
        color: black;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 36px;
    }
    .active{
        background: #E7E7E7;
    }
`

// const H5 = styled.h5`
// font-size: 12px;
// margin-top: 5px;
// margin-left: 8px;
// padding: 0px;
// `
// const H1 = styled.h5`
// margin-top: 5px;
// font-size: 10px;
// margin-left: 20px;
// `


// const ViewLink = styled(Link)`
//   text-decoration: none;
//   color: black;
//   font-style: normal;
//   font-weight: normal;
// `;

// const StyledCard = styled.div`
//   filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
//   border-radius: 8px;
//   overflow: hidden;
//   margin: 8px;
// `;

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

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: -4px;
//   background-color: white;
//   font-size: 15px;
//   font-weight: 400;
// `;

// const Topic = styled.div`
//   margin: 10px 12px;
//   display: flex;
//   align-items: center;
// `;

export default PracticeQuiz;