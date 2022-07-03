import React from "react";
// import { useEffect } from "react";
import {Button } from "../global/Global";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import device from "../Util/MediaQuery";
import Carousel2 from "./Carousel2";
// import './Carousel.css';
// import { baseURL } from "../../Apis";
// import { Link } from "react-router-dom";


const CourseCaraousel = ({ query }) => {
  // const [carouselImages, setcarouselImages] = useState(null)
  
  // useEffect(() => {
  //   fetch(`${baseURL}/carousels?page=${query}`,{
  //     method:"GET"
  //   }).then((res) => res.json())
  //   .then((res)=>{
  //     if(res.success){
  //       setcarouselImages(res.data)
  //     }
  //   })
  // }, [query])

  // const handelRedirect = (url)=>{
  //   if(url){
  //     window.open(
  //       `${url}`,
  //       '_blank' 
  //     )
  //   }
  // }

  return (
    <div style={{marginBottom:"64px"}}>
      <Container>
      <MainHeader>Hall of Fame</MainHeader>
        <Carousel>
              <Item
                style={{
                  borderRadius: " 15px",
                  objectFit: "contain",
                  backgroundPosition: "0% 0%",
                  // backgroundSize: "auto 100%"
                  backgroundSize: "cover",
                }}
              >
                <Data>
                  <Img src="/images/HOF1.svg" alt="" />
                  <Name>Anuska Gupta</Name>
                  <H4>25 AIR</H4>
                  <H4>Gate</H4>
                </Data>
                <Data>
                  <Img src="/images/HOF2.svg" alt="" />
                  <Name>Arya Sharma</Name>
                  <H4>47 AIR</H4>
                  <H4>Gate</H4>
                </Data>
                <Box>
                  Finding Happiness in your Success
                </Box>
              </Item>
              <Item
                style={{
                  borderRadius: " 15px",
                  objectFit: "contain",
                  backgroundPosition: "0% 0%",
                  // backgroundSize: "auto 100%"
                  backgroundSize: "cover",
                }}
              >
                <Data1>
                  <Img1 src="/images/HOF3.svg" alt="" />
                  <Name>Kanya</Name>
                  <H4>625 AIR</H4>
                  <H4>Gate</H4>
                </Data1>
                <Data1>
                  <Img1 src="/images/HOF3.svg" alt="" />
                  <Name>Kanya</Name>
                  <H4>625 AIR</H4>
                  <H4>Gate</H4>
                </Data1>
                <Data1>
                  <Img1 src="/images/HOF3.svg" alt="" />
                  <Name>Kanya</Name>
                  <H4>625 AIR</H4>
                  <H4>Gate</H4>
                </Data1>
                <Data1>
                  <Img1 src="/images/HOF3.svg" alt="" />
                  <Name>Kanya</Name>
                  <H4>625 AIR</H4>
                  <H4>Gate</H4>
                </Data1>
                <Data1>
                  <Img1 src="/images/HOF3.svg" alt="" />
                  <Name>Kanya</Name>
                  <H4>625 AIR</H4>
                  <H4>Gate</H4>
                </Data1>
                <Data1>
                  <Img1 src="/images/HOF3.svg" alt="" />
                  <Name>Kanya</Name>
                  <H4>625 AIR</H4>
                  <H4>Gate</H4>
                </Data1>
              </Item>
              <Item
                style={{
                  borderRadius: " 15px",
                  objectFit: "contain",
                  backgroundPosition: "0% 0%",
                  // backgroundSize: "auto 100%"
                  backgroundSize: "cover",
                }}
              >
                <Data>
                  <Img2  src="/images/HOF4.svg" alt="" />
                  <Name>You can be next</Name>
                </Data>
                <Box1>
                <Button1 primary >Join Now</Button1>
                </Box1>
              </Item>
        </Carousel>
      </Container>

      <Carousel2/>
     
    </div>
  );
};
const Button1 = styled(Button)`
  display: block;
  background: #13AE7E;
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 56px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 10%);
`;

const Img = styled.img`
  width: 200px;
  border: 20px solid white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 10%);
  border-radius: 50%;
  margin: 20px;
`
const Img2 = styled.img`
  width: 300px;

`
const Img1 = styled.img`
  width: 120px;
  border: 20px solid white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 10%);
  border-radius: 50%;
  margin: 20px;
`
const Name = styled.div`
font-size: 25px;
`
const H4 = styled.div`
`
const Box1 = styled.div`
  width: 30%;
  height:100%;
  // border: 2px solid red;
  margin-left:60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  width: 30%;
  background: #0B6E4F;
  height:100%;
  font-weight: 600;
  font-size: 38px;
  line-height: 70px;
  color: #FFFFFF;
  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  text-align: left;
  padding: 75px 15px;
`
const MainHeader = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 40px;
  line-height: 70px;
  font-weight: 800;
  padding: 0;
  color: #0B6E4F;
  ${device.tablet} {
    font-size: 1.5rem;
  }

`
const Data = styled.div`
  display: flex;
  flex-direction: column;
  color: #696F79;
  margin-right: 60px;
`
const Data1 = styled.div`
  display: flex;
  flex-direction: column;
  color: #696F79;
  // margin-right: 10px;
`
const Container = styled.div`
  height: 600px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 120px;
  margin-bottom: 70px;
  padding: 20px;
  // border: 2px solid red;
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
    // display: none;
  }
  .rec-dot {
    box-shadow: 0 0 1px 2px #1bbc9b;
    height: 7px;
    width: 7px;
    margin-top: 60px;
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
  z-index:1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-align : center;
  width: 65%;
  height: 400px;
  color: #fff;
  margin: 20px 15px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 10%);
  border-radius: 40px;
  ${device.tablet} {
    height: 100px;
  }
`;

// const Img3 = styled.img `
//     width: 600px;
//     height: 100%;
//     border-radius: 10px;
//     object-fit: cover;
//   `

export default CourseCaraousel;
