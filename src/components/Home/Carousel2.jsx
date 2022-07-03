import React from "react";
import { useState} from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import device from "../Util/MediaQuery";
import styled from "styled-components";
// import { dividerClasses } from "@mui/material";

const Carousel2 = () => {
  const [state,setS] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });
  


  const slides = [
    {
      key: uuidv4(),
      content: <Img src="/images/hallof1.svg" alt="1" />
    },
    {
      key: uuidv4(),
      content: <Img src="/images/hallof2.svg" alt="2" />
    },
    {
      key: uuidv4(),
      content: <Img style={state.goToSlide===2?{cursor:"pointer"}:{}} src="/images/hallof3.svg" alt="3" />
    }
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => setS({ goToSlide: index }) };
  });

  function onChangeInput(e) {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };


    // const [slide,SetSlide] = useState(0);
    return (
      <div style={
        { width: "80%", height: "500px", margin: "80px auto", paddingTop:"100px", paddingBottom:"50px" }
      }>
        <Carousel onchange = {()=>onChangeInput()}
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation="true"
          animationConfig={state.config}
        />
      </div>
    );
}



const Img = styled.img`
${device.laptop}{
  width: 550px;
}
  ${device.tablet}{
    width: 470px;
  }
  ${device.mobileL}{
    width: 400px;
  }
`
export default Carousel2;
