import styled from "styled-components";
import device from "../Util/MediaQuery";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const Carouselitem = () => {
  return (
    <>
    <Container>
      <div>
        <ViewLink to="/">
          <ArrowBackIosIcon fontSize="small"/>
          <HomeIcon fontSize="large"/>
        </ViewLink>
      </div>
      <img src="/images/carousel-img-1.svg" alt="" />
      <h2>Cultivating ideas for your growth</h2>
      <h3>India's first Agri e-learning platform</h3>
    </Container>
    </>
  );
};

const ViewLink = styled(Link)`
  text-decoration:none;
  color:black;  
  &:hover {
    color: #0e6656;
  }
`

const Container = styled.div`
  padding: 12px;
  position: relative;
  img {
    width: 100%;
  }
  h2,
  h3 {
    text-transform: uppercase;
    color: #0e6656;
    text-align: center;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-top: 40px;
    ${device.laptopL} {
      font-size: 24px;
    }
    ${device.laptop} {
      font-size: 22px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    ${device.laptopL} {
      font-size: 18px;
    }
    ${device.laptop} {
      font-size: 16px;
    }
  }
`;

export default Carouselitem;
