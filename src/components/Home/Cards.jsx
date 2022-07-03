import styled from "styled-components";
import { Container } from "../global/Global";
import { Button } from "../global/Global";
import device from "../Util/MediaQuery";
const CardData = [
  {
    img: "/images/learning_girl.svg",
    heading: "Learning"
  },
  {
    img: "/images/practice_girl.svg",
    heading: "Practice and Testing"
  },
  {
    img: "/images/lecture_boy.svg",
    heading: "Expert Lectures"
  },
];

const Cards = () => {
  return (
    <Wrapper>
      <StyledCards>
        {CardData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </StyledCards>

      <StyledMsgs>
          <MessageBox>
            <div style={{width:"100px", height: "100px",marginBottom:"20px", borderRadius:"100%", background: "rgba(11, 110, 79, 1)"}}></div>
            <h4>A message from our founder</h4>
            <p style={{margin:"20px 0px", fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu. 
adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            <h5 style={{float:"right"}}>-Raju Prajapati</h5>
          </MessageBox>

          <MessageBox2>
            <h4 style={{margin:"0px 0px 40px"}}>To share great modern and contemporary art with the public</h4>
            <p style={{margin:"40px 0px", fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu. 
adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            <div style={{display: "flex",padding:"10px", justifyContent: "space-between"}}>
              <StyledButton>Explore courses</StyledButton>
              <StyledButton>Test yourself</StyledButton>
            </div>
          </MessageBox2>
      </StyledMsgs>
      <StyledMsgs2>
        <Img src="/images/sneakpeakpic.svg" alt="sneak-peak"/>
        <MessageBox3>
            <h2 style={{marginLeft:"12px"}}>A <span style={{color:"rgba(11, 110, 79, 1)"}}>sneak-peak</span> under our courses</h2>
            <TextCont>
              <img style={{width:"80px"}} src="/images/sneakpeakpic1.svg" alt="1"/>
              <p style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do</p>
            </TextCont>
            <TextCont>
              <img style={{width:"80px"}} src="/images/sneakpeakpic2.svg" alt="1"/>
              <p style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do</p>
            </TextCont>
            <TextCont>
              <img style={{width:"80px"}} src="/images/sneakpeakpic3.svg" alt="1"/>
              <p style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do</p>
            </TextCont>
            {/* <p style={{margin:"20px 0px", fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu. 
adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            <h5 style={{float:"right"}}>-Raju Prajapati</h5> */}
          </MessageBox3>
      </StyledMsgs2>
      <StyledMsgs3>
            <div style={{width: "450px"}}>
              <h2>Subject</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div style={{width: "450px"}}>
              <h2>Faculty</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
      </StyledMsgs3>
    </Wrapper>
  );
};

const Card = ({ item }) => {
  return (
    <StyledCard>
      <img src={item.img} alt="" />
      <>
        <CardHeader>{item.heading}</CardHeader>
      </>
    </StyledCard>
  );
};

const Img = styled.img`
    width: 750px;
    ${device.tablet}{
      width: 400px;
    }
`

const Wrapper = styled.section`
  background: white;
  margin-bottom: 5rem;
  font-family: 'Poppins', 'Roboto', sans-serif;
`;

const StyledCards = styled.div`
  min-height: 32rem;
  color: black;
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

const StyledMsgs = styled(Container)`
  color: black;
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

const StyledMsgs2 = styled(Container)`
  color: black;
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const StyledMsgs3 = styled(Container)`
  color: white;
  width: 75%;
  background: #0B6E4F;
  margin-top: 64px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  gap: 60px;
`;

const TextCont = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

`;

const MessageBox = styled.div`
    width: 450px;
    background: white;
    padding: 20px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.13);
    border-radius: 12px;
`

const MessageBox3 = styled.div`
    width: 400px;
    background: white;
    padding: 20px;
`

const MessageBox2 = styled.div`
    width: 600px;
    background: white;
    padding: 45px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.13);
    border-radius: 12px;
`

const StyledButton = styled(Button)`
  background: #0B6E4F;
  font-size: 12px;
  color: white;
`;

const StyledCard = styled.div`
  width: 420px;
  img {
    width: 21rem;
    height: 18.5rem;
    object-fit: cover;
  }
`;

const CardHeader = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin-top: 28px;
  text-align: center;
`;

export default Cards;
