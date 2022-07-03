import styled from "styled-components";
import CourseCaraousel from "../CourseCaraousel";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../pages/Loader"
import { baseURL } from "../../../Apis";
import Card from "./Card";
import Hover from "./Hover";
import CourseCard from "./CourseCard";
import useWindowDimensions from "../../Util/useWindowDimensions";


const Layout = () => {
  const [items, setItems] = useState(null);
  const [packs, setpacks] = useState(null);
  const [loader, setloader] = useState(false);
  const [value, setvalue] = useState(-1);
  const { width } = useWindowDimensions();

  const handelSub = async (i,id) => {
    setloader(true);
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
    const response = await fetch(`${baseURL}/user/profile`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            });
            const json = await response.json();
            const cId = id?id:0
            if(json.data.packages.indexOf(cId)!==-1){
                window.location.href = `/package/${id}`;
            }
            else{
                window.open('https://forms.gle/cPVfwwSqngLkJm8WA', '_blank');
            }
            setloader(false);
          }
          else{
            setloader(false);
            window.location.href = "/login";
          }
};

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/course`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        setItems(json.data);
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/package`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      const cId = "61a77f9fa1242d0acbb26258";

      if (json.success) {
        setpacks(json.data);
        setvalue(json.data.filter((ele) => ele._id===cId)[0].sortOrder)
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);


  return (
    <>
    {/* <ToastContainer /> */}
      <CourseContentWrapper>
        <CourseCaraousel query="courses" />
        {
          items && packs ? (
            <>
              <div style={{ gap: "16px" }}>

                { packs.length ? 
                <>
                  <h2 style={{ margin: "40px 0px",
                textAlign: "center",
                fontFamily:"sans-serif"
              
              }}>Available Packages</h2>

                {
                packs.map((pack, i) => {
                  return(
                    <>
                      <H2>{pack.name}</H2>
                      <div style={width>610?{ display: "flex", flexWrap: "wrap" }:{
                        display:"flex",
                        overflow:"scroll"
                      }}>
                        {pack.packages.map((item, it) => {
                          return (
                            
                              <div key={i} className="styleCard"  style={{}} >

                                  {i!==value ?
                                  <ViewLink  to={{pathname: `/package/${item.packageId}`}}>
                                  <div style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    flexDirection: "row"
                                  }} >
                                    <StyledCard>
                                      <Card item={item} x={i} y={it} />
                                    </StyledCard>
                                  </div>
                                  </ViewLink>

                                  :
                                  
                                  <div onClick={() => {handelSub(i,item.packageId)}}>
                                  <div style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    flexDirection: "row"
                                  }} >
                                    <StyledCard>
                                      <Card item={item} x={i} y={it} />
                                    </StyledCard>
                                  </div>
                                  </div>
                                  }
                                
                                {width>700 && <Hover item={item} active={1} val={value}/> }
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
        {loader && <Loader />}
      </CourseContentWrapper>
    </>
  );
};

const H2 = styled.h5`
    margin: 25px 20px;
`

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
   &:hover {
    color: green;
  }
`;

const StyledCard = styled.div`
  width: 295px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  margin: 1rem 0rem 3rem 1rem;
  &:hover{
    opacity:0.9;
  }
  .poster{
    transition: all 0.5s ease;
    width:90%;
    height:10%;
  }
  .poster:hover {
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
  }  
`;


export default Layout;