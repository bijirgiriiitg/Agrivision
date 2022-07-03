import styled from "styled-components";
import Sidebar from "./TestSeriesSpecific/TestseriesPageSidebar";
import React, { useState, useEffect } from "react";
import ContentlayOut from "./TestSeriesSpecific/TestseriesPageContentLayout";
import Loader from "./../../pages/Loader"
// import {baseURL} from "./../../Apis"
import Navbar from "./../global/Navbar";
const baseURL = "https://agri-api-pr-148.herokuapp.com/v1"

export const Layout = (props) => {
  const [items, setItems] = useState(null);
  const [cname, setname] = useState(null);

  const [previous, setPrevious] = useState([])
  const [sectional, setSectional] = useState([])
  const [full, setFull] = useState([])
  const [all, setAll] = useState([])
  const [quizFilter, setquizFilter] = useState([])
  const name=props.match.params.name;

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/testseries?page=1&exam=${name}`,
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
          // console.log(baseURL+`/testseries?page=1&exam=${name}`)
        setItems(json.data);
        setname(json.data.exam);
        setAll(json.data.quizzes)
        setquizFilter(json.data.quizzes)
        setPrevious(json.data.quizzes.filter((el)=>el.category===0))
        setSectional(json.data.quizzes.filter((el)=>el.category===1))
        setFull(json.data.quizzes.filter((el)=>el.category===2))
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);
  
    return (
      items?
      <>
      <Navbar course rhead={cname} />
        <StyledLayout>

          <Sidebar items={items} name={cname} />
          <ContentlayOut items={items} name={cname} all={all} previous={previous} sectional={sectional} full={full} quizFilter={quizFilter} setquizFilter={setquizFilter}/>

        </StyledLayout>
      </>
      :<Loader/>
    );
  }

const StyledLayout = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    height: 94vh;
  }
`;


export default Layout;
