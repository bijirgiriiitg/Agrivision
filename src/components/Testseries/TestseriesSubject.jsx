import React from 'react'
import styled from "styled-components";
import Footer from '../global/Footer';
import Navbar from '../global/Navbar';
import Subjectspecific from './Subjectspecific';
import Sidebar from "./Sidebar";
import useWindowDimensions from "../../components/Util/useWindowDimensions";

function Subjectnames({match}) {
    const { width } = useWindowDimensions();
    return (
        <>    
            <Navbar/>
            {width > 700 ?
                (<StyledLayout>
                    <Sidebar />
                    <Subjectspecific name={match.params.name.toUpperCase()} />
                </StyledLayout>)
                :
                (<StyledLayout1>
                    <Sidebar style={{
                        background: "#e8f3ff"
                    }} />
                    <Subjectspecific name={match.params.name.toUpperCase()} />
                </StyledLayout1>)
            }
            <Footer />
        </>
    )
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


export default Subjectnames
