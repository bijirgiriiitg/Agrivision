import Layout from "../../components/Course/All Courses/Layout";
import Navbar from "../../components/global/Navbar";
import Sidebar from "../../components/Course/Sidebar";
import styled from "styled-components";
import useWindowDimensions from "../../components/Util/useWindowDimensions";


function Learning() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Navbar course />
      {width > 700?
      (<StyledLayout>
        <Sidebar/>
        <Layout/>
      </StyledLayout>)
      : 
      (<StyledLayout1>
        <Sidebar style={{
          background: "#e8f3ff"
        }} />
        <Layout />
      </StyledLayout1>)
      }  
      
    </>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;
const StyledLayout1 = styled.div`
  width: 100%;
  display : flex;
  flex-direction: column;
  overflow: hidden;
`;

export default Learning;
