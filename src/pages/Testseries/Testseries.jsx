//import Layout from "../../components/Testseries/Layout";
import Navbar from "../../components/global/Navbar";
import styled from "styled-components";
import Footer from '../../components/global/Footer';
import LayoutHeading from "../../components/Testseries/LayoutHeading";


function Learning() {
  return (
    <>
      <Navbar/>
      <StyledLayout>
        <LayoutHeading/>
      </StyledLayout>
      <Footer/>
    </>
  );
}


const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const StyledLayout1 = styled.div`
//   width: 100%;
//   display : flex;
//   flex-direction: column;
//   overflow: hidden;
// `;

export default Learning;
