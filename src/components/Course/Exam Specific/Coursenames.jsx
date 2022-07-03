import React from 'react'
import styled from "styled-components";
import Footer from '../../global/Footer';
import Navbar from '../../global/Navbar';
import Sidebar from "../Sidebar";
import CourseCaraousel from '../CourseCaraousel'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL } from "../../../Apis";
import Card from '../All Courses/Card'
import CourseCard from '../All Courses/CourseCard'
import Hover from "../All Courses/Hover";
import Loader from "../../../pages/Loader";
import useWindowDimensions from "../../Util/useWindowDimensions";


const Coursenames = (props) => {
    const [items, setItems] = useState(null);
    const [packs, setpacks] = useState(null);
    const { width } = useWindowDimensions();
  let name = props.match.params.name.toUpperCase();

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/course?exam=${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        setItems(json.data);
      }
    };
    fun();
    // eslint-disable-next-line
  },[]);
  useEffect(() => {
    return () => {
      window.location.reload(false);
    }
  }, [name])
  


  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/package?exam=${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        setpacks(json.data);
      }
    };
    fun();
    // eslint-disable-next-line
  },[]);


    return (
        <>    
            <Navbar/>
            <StyledLayout style={ width > 700 ? {
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              overflow: "hidden"
            }:{
              width: "100%",
              display: "flex",
              flexDirection:"column",
              overflow: "hidden"
            }}  >
                <Sidebar/>
                <CourseContentWrapper>
            <CourseCaraousel query="courses"/>

      <PopularCoursesHeading>
      <h2 style={{ margin: "32px auto 8px auto"}}>{name}</h2>
        {props.trending && <Trending>Trending</Trending>}
        {/* <ViewAll href="/course/dashboard">View all</ViewAll> */}
      </PopularCoursesHeading>

{
          items && packs ? (
            <>
              <div style={{ gap: "16px" }}>

                { packs.length ? 
                <>

                {
                packs.map((pack) => {
                  return(
                    <>
                      <H2>{pack.name}</H2>
                      <div style={width>610?{ display: "flex", flexWrap: "wrap" }:{
                        display:"flex",
                        overflow:"scroll"
                      }}>
                        {pack.packages.map((item, i) => {
                          return (
                            
                              <div key={i} className="styleCard"  style={{}} >
                                <ViewLink  to={{ pathname: `/package/${item.packageId}`, state: { packageId: item.packageId, name: item.name } }}>
                                  <div style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    flexDirection: "row"
                                  }} >
                                    <StyledCard>
                                      <Card item={item} />
                                    </StyledCard>
                                  </div>
                                </ViewLink>
                                {width>700 && <Hover item={item} active={1}/> }
                              </div>
                            
                          )
                        })}
                      </div>
                    </>
                  )
                })
                }
                </>
                :<></>
                }

                {items.length ? 
                <>
                  <H2>Our Courses</H2>
                <div style={width>610?{ display: "flex", flexWrap: "wrap" }:{
                  display:"flex",
                  overflow:"scroll"
                }}>

                  {items.map((item, i) => {
                    return (
                      
                        <div key={i} className="styleCard">
                          <ViewLink  to={{ pathname: `/course/${item.courseId}`, state: { courseId: item.courseId, name: item.name } }}>
                            <div>
                              <StyledCard>
                                <CourseCard item={item} />
                              </StyledCard>
                            </div>
                          </ViewLink>
                          {width>700 && <Hover item={item} active={1}/> }
                        </div>
                      
                    )
                  })}

                </div>
                </>
                : <></>
                }

              </div>
            </>
          ) : <Loader />
        }
        </CourseContentWrapper>
            </StyledLayout>
            <Footer />
        </>
    )
}

const H2 = styled.h5`
  margin-top: 40px;
  margin-Left: 30px;
  margin-bottom: 20px;
`
const StyledLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;

const CourseContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .styleCard:hover .hov{
      display:block;
    }
    .styleCard:hover .hov1{
      display:block;
    }
`
const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
`;

const StyledCard = styled.div`
  width: 295px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  margin: 1rem 0rem 3rem 1rem;
  .poster{
    transition: all 0.5s ease;
    width:90%;
    height:10%;
  }
  .poster:hover {
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
`;


const PopularCoursesHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Trending = styled.div`
  font-size: 12px;
  line-height: 18px;
  margin-left: 16px;
  background: linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  );
  border-radius: 4px;
  width: 69px;
  height: 18px;
  padding: 0px 8px;
`;


export default Coursenames