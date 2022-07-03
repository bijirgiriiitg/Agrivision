import React from 'react';
import SectionContent from "./SectionContent";
import { Wrapper } from "../Foundation";
import styled from "styled-components";
import useWindowDimensions from "../../Util/useWindowDimensions";
import {FiFilter} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import { useState} from "react";
import { Link } from "react-router-dom";

const ChapterSideBar = ({items,handelSub,completed}) => {
  const [sidebar,setSidebar] = useState(false);
  const { width } = useWindowDimensions();

    function showSidebar () {
        setSidebar(!sidebar);
    } 
    return (
        <>

{width<900 && (
          <>
          <Filter>
          <MenuBars>
            <Link to = "#" >
            <FiFilter onClick={showSidebar} color="#1bbc9b" />
            </Link>
          </MenuBars>
        </Filter>
        <MenuActive style={sidebar?{
              backgroundColor: "#e8f3ff",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifySelf: "center",
              position: "fixed",
              top: "0",
              left: "0",
              transition: "350ms",
              zIndex:"999",
              overflow:"scroll"
        }:{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifySelf: "center",
              position: "fixed",
              top: "0",
              left: "-100%",
              transition: "550ms",
              zIndex:"999",
              overflow:"scroll"
        }} >
          <MenuItems>
            <Toggle>
              <MenuBars>
              <Link to="#" >
                  <AiOutlineClose onClick={showSidebar} color="#1bbc9b" />
              </Link>
              </MenuBars>
            </Toggle>
            {items.map((item,i) => {
            return (
              <div key={i}>
                <SectionContent item={item} handelSub={handelSub} completed={completed} showSidebar={showSidebar} />
              </div>
            );
          })}
        </MenuItems>
          </MenuActive>
          </>
        )}
        { width>=900 && 
      (<SidebarContainer>

        {items.map((item,i) => {
            return (
              <div key={i}>
                <SectionContent item={item} handelSub={handelSub} completed={completed}/>
              </div>
            );
          })}
        </SidebarContainer> )}

        
        
        </>
    )
}
const SidebarContainer = styled(Wrapper)`
  height: 100%;
  /* min-width: 364px; */
  width: 20vw;
  background: #e8f3ff;
  padding: 32px 32px 0px;
`;

const Filter = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`

const MenuItems = styled.ul`
    margin-right: 20px;
    width: 100%;
`

const Toggle = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
const MenuBars = styled.div`
    margin-left: 0.5rem;
    font-size: 1.3rem;
    background: none;

`
const MenuActive = styled.nav``;

export default ChapterSideBar
