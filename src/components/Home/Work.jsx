import styled from "styled-components";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";
import useWindowDimensions from "../Util/useWindowDimensions";


const data = [
  {
    reviewer: "Pooja Prakash Kesarkar",
    review:
      "The manner of teaching is so wonderful and refreshing! They are patient, supportive and know how to motivate students.",
    image: "/images/Testi/Pooja.png",
  },
  {
    reviewer: "Ansu Mary Varghese",
    review:"I firmly believe that the support and guidance of AgriVision4U helped me clear the GATE 2021 for the 1st time.",
    image: "/images/Testi/Ansu.png",
  },
  {
    reviewer: "Arpit Patel",
    review:"When I started my Preparation for GATE, I was very concerned. AgriVison4U played a vital role throughout my preparation journey.",
    image: "/images/Testi/Arpit.png",
  },
  {
    reviewer: "Venkatalakshmi D",
    review:"AgriVision4U is a great learning platform. It helped me gain a lot of experience through my internship and helped me build a robust skillset.",
    image: "/images/Testi/Venkatalakshmi.png",
  },
  {
    reviewer: "Ritika Padmakar Chaudhari",
    review:"Absolutely Awesome All the learning through Agrivision4U is totally worth it. Entire Manuals are very informative and easy to understand.",
    image: "/images/Testi/Ritika.png",
  },
  {
    reviewer: "Vibha Bhatt",
    review:"AgriVision4U brings to me exclusive detailed coverage of the entire syllabus of GATE. ",
    image: "/images/Testi/Vibha.png",
  },
  {
    reviewer: "Abhilash Arbal",
    review:"I am very thankful towards AgriVision4U for training me for GATE exam. I have had a great experience at AgriVision4U.",
    image: "/images/Testi/Abhilash.png",
  },
];


const Work = () => {
  const { width } = useWindowDimensions();
  function right(){
    if(width<=device.mobileL){
      document.querySelector(".slide").scrollLeft +=380;
    }
    else{
      document.querySelector(".slide").scrollLeft +=460;
    }
  }
  function left(){
    if(width<=device.mobileL){
      document.querySelector(".slide").scrollLeft -=380;
    }
    else{
      document.querySelector(".slide").scrollLeft -=460;
    }
  }
  return (
    <Wrapper>
        <MainHeader>Meet Our Faculty</MainHeader>
        <BackBox>
      <ReviewContainer>
        <Box>
          <Img onClick={()=>left()} src="/images/LeftButtonWhite.svg" alt="" />
          <ReviewSlider className="flex flex-aic flex-jcc slide">
            {data.map(data => {
              return (
                <>
                <ReviewBox>
                <div>
                  <img  style={{width:"90px",borderRadius: "50%", marginLeft: "20px",marginBottom:"15px"}}  src={data.image} alt="" />
                </div>
                <div style={{margin:"auto 20px"}} ><strong>{data.reviewer}</strong></div>
              <div style={{padding:"20px",height:"11rem"}} >
                {data.review}
              </div>
            </ReviewBox>
              </>
              )
            })}
          </ReviewSlider>
          <Img onClick={()=>right()} src="/images/RightButtonWhite.svg" alt="" />
        </Box>
      </ReviewContainer>
      </BackBox>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: white;
`;
const Img = styled.img`
  width: 40px;
  cursor: pointer;
`
const BackBox = styled.div`
  background-color: #0B6E4F;
  height: 350px;
`
const ReviewBox = styled.div`
    background-color:white;
    width: 20rem;
    height: 30rem;
    padding: 20px;
    display: flex;
    color:#5F5F5F;
    margin-right: 140px;
    flex-direction: column;
    font-size: 15px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 10%);
    border-radius: 15px;
    &:last-child{
      margin-right: 0px;
    }
    ${device.mobileL}{
      width: 15rem;
      height: 17rem;
      padding: 5px;
    }
    `
const ReviewSlider = styled.div`
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 25rem;
      margin: 0 auto;
      padding: 1rem;
      font-size: 1.25rem;
      overflow-x: scroll;
      border-radius: 0.5rem;
      ::-webkit-scrollbar {
        width: 12px;
        height: 0px;
        color: #0B6E4F;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #0B6E4F;
        // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
    ${device.laptop}{
      width: 22.5rem;
      align-items: center;
      justify-content: center;
    }
    `;
    
const Box = styled.div`
  display: flex;
  flex-direction: row;

`
const MainHeader = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 70px;
  font-weight: 800;
  padding: 0;
  color: #0B6E4F;
  ${device.tablet} {
    font-size: 1.5rem;
  }

`
const ReviewContainer = styled(Container)`
  // background-color: #0B6E4F;
  width: 100%;
  height: 25rem;
  padding: 1rem 0;
  color: black;
`;

export default Work;
