import React from 'react'
import styled from "styled-components";
import Footer from '../../global/Footer';
import Navbar from '../../global/Navbar';
import CourseContent from './CourseContent';
import Sidebar from "../Sidebar";

function CourseDashboard() {
    return (
        <>
            <Navbar/>
            <StyledLayout>
                <Sidebar/>
                <CourseContent/>
            </StyledLayout>
            <Footer/>
        </>
    )
}


const StyledLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;


export default CourseDashboard
