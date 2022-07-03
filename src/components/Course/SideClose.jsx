import React from 'react'
import styled from "styled-components";
import { useState} from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const SideClose = ({showSidebar}) => {
    const [closed, setIsClosed] = useState(true);
    const [close, setIsClose] = useState(true);
    return(
      <>
      <SidebarHeading>
          <SidebarHeadingContainer>Filter courses by</SidebarHeadingContainer>
          <SearchIcon style={{marginTop:"-10px"}} />
        </SidebarHeading>
        <SidebarContent onClick={() => setIsClosed(!closed)}>
          Exams
          {closed && (
            <KeyboardArrowDownIcon onClick={() => setIsClosed(!closed)} />
          )}
          {!closed && (
            <KeyboardArrowUpIcon onClick={() => setIsClosed(!closed)} />
          )}
        </SidebarContent>
        {!closed && (
          <Dropdown>
            <ViewP>
              <ViewLink to={{pathname: "/courses/exam=GATE"}} onClick={showSidebar} >GATE</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to={{pathname: "/courses/exam=CFTRI"}} onClick={showSidebar} >CFTRI</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to={{pathname: "/courses/exam=CFSO"}} onClick={showSidebar} >CFSO/TO</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to={{pathname: "/courses/exam=ICAR"}} onClick={showSidebar} >ICAR</ViewLink>
            </ViewP>
            <ViewP>

              <ViewLink to="/courses/exam=ibps afo" onClick={showSidebar} >IBPS AFO</ViewLink>
            </ViewP>
            {/* <ViewP>
              <ViewAll href="/courses/dashboard">See All</ViewAll>
            </ViewP> */}
          </Dropdown>
        )}
        <SidebarLine></SidebarLine>
        <SidebarContent onClick={() => setIsClose(!close)}>
          Subjects
          {close && (
            <KeyboardArrowDownIcon onClick={() => setIsClose(!close)} />
          )}
          {!close && (
            <KeyboardArrowUpIcon onClick={() => setIsClose(!close)} />
          )}
        </SidebarContent>
        {!close && (
          <Dropdown>
            <ViewP>

              <ViewLink to="/courses/subject=Food Technology" onClick={showSidebar} >Food Technology</ViewLink>
            </ViewP>
          <ViewP>

              <ViewLink to="/courses/subject=General Aptitude" onClick={showSidebar} >General Aptitude</ViewLink>
            </ViewP>
          <ViewP>

              <ViewLink to="/courses/subject=Engineering Mathematics" onClick={showSidebar} >Engineering Mathematics</ViewLink>
            </ViewP>
            <ViewP>
            <ViewLink to="/courses/subject=Thermodynamics" onClick={showSidebar} >Thermodynamics</ViewLink>
            </ViewP>
          <ViewP>
            <ViewLink to="/courses/subject=Fluid Mechanics" onClick={showSidebar} >Fluid Mechanics</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Physics" onClick={showSidebar} >Physics</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Chemistry" onClick={showSidebar} >Chemistry</ViewLink>
            </ViewP>
          <ViewP>
              <ViewLink to="/courses/subject=Geomatics Engineering" onClick={showSidebar} >Geomatics Engineering</ViewLink>
            </ViewP>
          <ViewP>
              <ViewLink to="/courses/subject=Agriculture Engineering" onClick={showSidebar} >Agriculture Engineering</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Biology" onClick={showSidebar} >Biology</ViewLink>
            </ViewP>
          <ViewP>
              <ViewLink to="/courses/subject=Biochemistry" onClick={showSidebar} >Biochemistry</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Zoology & Botany" onClick={showSidebar} >Zoology & Botany</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Microbiology" onClick={showSidebar} >Microbiology</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Food Biotechnology, Biochemistry & Nutrition" onClick={showSidebar} >Food Biotechnology, Biochemistry & Nutrition</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Agriculture & Dairy Technology" onClick={showSidebar} >Agriculture & Dairy Technology</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Food Engineering" onClick={showSidebar} >Food Engineering</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Mental Ability" onClick={showSidebar} >Mental Ability</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=General Awareness on Health & Wellness" onClick={showSidebar} >General Awareness on Health & Wellness</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Entomology" onClick={showSidebar} >Entomology</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Plant Science" onClick={showSidebar} >Plant Science</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Food Science & Technology" onClick={showSidebar} >Food Science & Technology</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/courses/subject=Agronomy" onClick={showSidebar} >Agronomy</ViewLink>
            </ViewP>
          </Dropdown>
        )}
      </>
    )
  }

  const SidebarHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const SidebarHeadingContainer = styled.p`
  font-size: 20px;
  line-height: 30px;
  @media screen and (max-width: 432px) {
        font-size: 13px !important;
        line-height: 20px !important;
    }
`;

const SidebarContent = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidebarLine = styled.div`
  width: 100%;
  height: 0.1px;
  background-color: black;
  margin-top: 20px;
`;

const Dropdown = styled.div`
  margin-left: 10px;
  margin-top: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #7a8188;
`;

const ViewP = styled.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ViewLink = styled(Link)`
  text-decoration: none;
  color: #7a8188;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export default SideClose
