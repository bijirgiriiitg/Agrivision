import styled from "styled-components";
import Sidebar from "./CoursePageSidebar";
import React, { useState, useEffect } from "react";
import ContentlayOut from "../free-trial/CoursePageContentLayOut";
import Loader from "../../../../pages/Loader"
import {baseURL} from "../../../../Apis"
import Navbar from "../../../global/Navbar";
import useWindowDimensions from "../../../Util/useWindowDimensions";


export const Layout = ({ courseId }) => {
  const [items, setItems] = useState(null);
  const [cname, setname] = useState(null);
  const { width } = useWindowDimensions();
  const progress = null;
  
  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/course/${courseId}?queryParam=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if(json.success){
        setItems(json.data);
        setname(json.data.name)
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);
  
    return (
      items?
      <>
      <Navbar course rhead={cname} />
        {width > 900?
      (<StyledLayout>
        <Sidebar items={items} name={cname} courseId={courseId} progress={progress}/>
          <ContentlayOut items={items} name={cname} courseId={courseId} progress={progress} />
      </StyledLayout>)
      : 
      (<StyledLayout1>
        <Sidebar items={items} name={cname} courseId={courseId} progress={progress}/>
          <ContentlayOut items={items} name={cname} courseId={courseId} progress={progress} />
      </StyledLayout1>)
      } 
      </>:<Loader/>
    );
  }

const StyledLayout = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;
const StyledLayout1 = styled.div`
  width: 100%;
  height: 80vh;
  display : flex;
  flex-direction: column;
  overflow: hidden;
`;


export default Layout;
