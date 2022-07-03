import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Button } from "../global/Global";
import device from "../Util/MediaQuery";

const Top = () => {
  return (
    <>
      <HeroSection>
        <HeaderBoard>
          <HeaderText>
            <div>Here at</div>
            <div style={{float:"left"}} >AgriVision4U</div>
          </HeaderText>
          <Tagline>
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. Nbc nt per conubia nostra, per inceptos himenaeos.
          </Tagline>
          {!localStorage.getItem("token") && <Link to="/login">
            <Button1 primary>Sign up</Button1>
          </Link> }
        </HeaderBoard>
        <HeroImage src="/images/home-image1.svg" alt="Agrivision 4U"/>
      </HeroSection>
      <Container></Container>
    </>
  );
};

const HeroSection = styled.div`
  background-color: #0B6E4F;
  padding:100px;
  padding-bottom:100px;
  color:white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${device.laptopL}{
    flex-direction: column;
    padding: 20px;
  }

`;
const HeaderBoard = styled.div`
display: flex;
flex-direction: column;
// width:35%;
`

const HeaderText = styled.h1`
  font-weight: 500;
  font-size: 45px;
  line-height: 60px;
  // max-width: 33.75rem;
`;
const Tagline = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const HeroImage = styled.img`
`;
const Button1 = styled(Button)`
  margin-top: 16px;
  background: white;
  color: #0B6E4F;
`;
export default Top;
