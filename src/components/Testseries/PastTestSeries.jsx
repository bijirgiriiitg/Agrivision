import styled from "styled-components";
import {BsArrowRight} from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hover from "./Hover";
import { baseURL } from "../../Apis";
import useWindowDimensions from "../Util/useWindowDimensions";
// const baseURL = "https://agri-api-pr-148.herokuapp.com/v1"

const ContentlayOut = () => {
  const [items, setItems] = useState(null);
  const { width } = useWindowDimensions();
  const [Hovers,setHovers] = useState(0);
  function HandleHover(i){
    let elem = document.querySelector(`#card-${i}`);
    let rect = elem.getBoundingClientRect().right;
    // console.log(rect); 
    let x = width - rect;
    setHovers(0);
    if(x>310){
      setHovers(1);
    }
  }

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/testseries?page=0`,
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
        setItems(json.data.examTestSeries);
      }
    };
    fun();
  }, []);


  return (
    items? 
    (
      <>
        {items.map((item) => {
          return(
            <>
              <H2>{item[0]}</H2>
              <div
        style={width>750?{
          display: "flex",
          flexWrap: "wrap",
          gap: "0px",
          marginTop: "20px"
        }:{
          display:"flex",
          overflow:"scroll"
        }}
      >
        {item[1].map((it,i) => {
          let url = "/testseries/" + it._id;
          return (
            <>
            <Block>
            <ViewLink key ={it._id} to={{pathname: url, state: { testSeriesId: it._id, name: it.name }}}>
              <div>
                <StyledCard className="stylecard" id={`card-${i}`} onMouseEnter={()=> HandleHover(i)} >
                  <Bg>
                    <h2 style={{
                      position:"absolute",
                      bottom:"35%",
                      left:"17%",
                      color: "black",
                      fontSize: "22px"
                    }} >

                    {it.name}
                    </h2>
                  </Bg>
                  <Content>
                    <div style={{
                      display:"inline-grid",
                      gridTemplateColumns: "10fr 7fr",
                    }}>
                  <Topic>
                    <H5>
                      {it.name}
                    </H5>
                    </Topic>
                    <Topic>
                      <HeadText style={{fontSize:"10px"}} >
                        1.2k Students
                       </HeadText>
                    </Topic>

                    </div>
                    <div style={{fontSize:"12px"}} >
                    <Topic>
                      {it.fullLengthTestCount} Full Tests
                    </Topic>
                    <Topic>
                      {it.sectionalTestCount} Sectional Tests
                    </Topic>
                    <Topic>
                      {it.previousTestCount} Previous Year Papers
                    </Topic>
                    <Topic>
                      {it.modelTestCount} Model Papers
                    </Topic>
                    <Button>
                      View Test Series
                      <span style={{padding:"8px"}} >
                      
                      <BsArrowRight/>

                      </span>
                    </Button>
                    </div>
                  </Content>
                </StyledCard>
              </div>
            </ViewLink>
            {width>750 ? <Hover item={it} i={Hovers} />:<></>}
            </Block>
          </>
          );
        })}
      </div>
            </>
          )
        })}
      </>
    ):
    <></>
  );
  }

  const Block = styled.div`
  &:hover .hov1{
    display: block;
  }
  &:hover .stylecard{
    opacity:90%;
  }

  `
  const H2 = styled.h2`
    margin-left: 16px;
    margin-top: 20px;
  `
  
  const H5 = styled.h5`
  font-size: 15px;
  `
  const Button = styled.button`
  
  padding: 8px;
  background: #002E3E;
  color: white;
  display: block;
  margin: 10px auto;
  border-radius: 8px;
  
  `
  
  
  const ViewLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-style: normal;
    font-weight: normal;
  `;
  
  const StyledCard = styled.div`
    width: 305px;
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
    border-radius: 15px;
    overflow: hidden;
    margin: 20px;
  `;
  
  const Bg = styled.div`
    width: 100%;
    height: 150px;
    background: url("/images/Frame 13.svg") no-repeat center;
    color: white;
    position: relative;
  `;
  
  const HeadText = styled.div`
    padding: 0.4rem 1rem;
    background: #F5F5F5;
    border-radius: 5px;
  
  `;
  
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

export default ContentlayOut;