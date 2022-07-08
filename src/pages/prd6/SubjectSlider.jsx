import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slickslider.css";
import Progressbar from './Progress_bar';
const complete = "images/icons/complete.png";
const incomplete = "images/icons/incomplete.png";
const leftarrow = "images/icons/back.png";
const rightarrow = "images/icons/next.png";

const renderSlides = () =>
     [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <StyledCard>
      <Headtext>Mathematics {num}</Headtext>
      <div style={{display:'flex', flexDirection:'row'}}>
      <Text><img src={complete} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" />Geometry</Text>
      <Text><img src={incomplete} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" />Algebra</Text>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <Text><img src={incomplete} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" />Calculus</Text>
      <Text><img src={incomplete} style={{transform: 'scale(0.75)', display:'inline'}} alt="tick mark" />Trigonometry</Text>
      </div>
      <Progressbar bgcolor="#3777FF" progress='70'  height={'1vw'} />
     
      <ProgressText>
      Topics Completed</ProgressText>
      </StyledCard>

      
    ));
  
const SubjectSlider = () => {
  return (
   
    <div>
    <Slider
        arrows={true}
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={false}
        infinite={true}
        prevArrow={<img src={leftarrow} alt="left arrow" />}
        nextArrow={<img src={rightarrow} alt="right arrow" />}
        style={{margin:'0vw -3vw', height:'50%' ,width:'50%',position:'absolute', marginTop:'-2vw'}}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};
const StyledCard = styled.div`
 
  height: 40vh;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  
  @media screen and (max-width: 960px) {
    height: 40vh;
  }
  @media screen and (max-width: 750px) {
    height: 45vh;
  }
  @media screen and (max-width: 650px) {
    height: 42vh;
  }
  @media screen and (max-width: 500px) {
    height: 30vh;
  }
`;

const Headtext = styled.div`
  position: relative;
  width: 15vw;
  height: 7vh;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 2vw;
  color: #5F5F5F;
  margin: 2vw 0 0vw 1vw;;
  @media screen and (max-width: 960px) {
    height: 4vh;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.4vw;
    height: 3vh;
  }
`;

const Text = styled.div`
  position: relative;
  width: 14vw;
  height: 4vh;
  left: 0.66vw;
  top: 2.9vh;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 1.2vw;
  margin: 0 0 1.5vw 0;
  color: #5F5F5F;
  @media screen and (max-width: 960px) {
    width: 15vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.35vw;
    height: 3vh;
  }
`;

const ProgressText = styled.div`
  width: 75%;
  text-align: center;
  margin: 0 auto;
  color: #5F5F5F;
  font-weight: 600;

`;

export default SubjectSlider;
