import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import device from "../Util/MediaQuery";
import { baseURL } from "../../Apis";
// import { Link } from "react-router-dom";


const CourseCaraousel = ({ query }) => {
  const [carouselImages, setcarouselImages] = useState(null)
  
  useEffect(() => {
    fetch(`${baseURL}/carousels?page=${query}`,{
      method:"GET"
    }).then((res) => res.json())
    .then((res)=>{
      if(res.success){
        setcarouselImages(res.data)
      }
    })
  }, [query])

  const handelRedirect = (url)=>{
    if(url){
      window.open(
        `${url}`,
        '_blank' 
      )
    }
  }

  return (
    <>
      <Container>
        <Carousel>
          {carouselImages && carouselImages.map((image, i) => (
              <Item
                onClick={()=>handelRedirect(image.redirectingPage)}
                key={i}
                style={{
                  background: `url(${image.link})`,
                  borderRadius: " 15px",
                  objectFit: "contain",
                  backgroundPosition: "0% 0%",
                  // backgroundSize: "auto 100%"
                  backgroundSize: "cover",
                  cursor:`${image.redirectingPage?"pointer":""}`
                }}
              ></Item>
            ))}
        </Carousel>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 256px;
  margin-left: 0px;
  margin-right: 32px;
  margin-top: 20px;
  ${device.tablet} {
    height: 73px;
    width: 100%;
  }
  
  .rec-slider-container {
    border-radius: 15px;
  }
  .rec-item-wrapper{
    width:500px;
  }

  .rec-arrow {
    display: none;
  }
  .rec-dot {
    box-shadow: 0 0 1px 2px #1bbc9b;
    height: 7px;
    width: 7px;
  }
  .rec-dot_active {
    background-color: #16a086;
  }
  .rec-pagination {
    margin-top: -20px;
    z-index: 10;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 262px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  
  ${device.tablet} {
    height: 100px;
  }
`;

export default CourseCaraousel;
