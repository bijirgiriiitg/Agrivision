// import Sidebar from "../../components/Course/Sidebar";
import Navbar from "../../components/global/Navbar";
import styled from "styled-components";
import PictureAsPdfOutlinedIcon from "@material-ui/icons/PictureAsPdfOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { baseURL } from "../../Apis";
import { useState } from "react";
// import {Redirect} from "react-router-dom" 
import Loader from "../Loader";

function Package(props) {
    const [data, setdata] = useState(null)
    // const [bought, setbought] = useState(1)
    const [name, setName] = useState(null)
    const [testseries, settestseries] = useState(null)
    const packageId = props.match.params.id;
    
    useEffect(() => {
        const fun =  async (e) => {
          const response = await fetch(`${baseURL}/package/${packageId}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
              });
              const json = await response.json();
              if(json.success){
                  settestseries(json.data.testSeries.length!==0?json.data.testSeries:null)
                  setdata(json.data)
                  setName(json.data.name)
              } 
          }
          fun()
      }, [packageId])

    //   useEffect(() => {
    //     const fun =  async (e) => {
    //       const response = await fetch(`${baseURL}/user/profile`, {
    //             method: "GET",
    //             headers: {
    //               "Content-Type": "application/json",
    //               "Authorization": `Bearer ${localStorage.getItem("token")}`,
    //             },
    //           });
    //           const json = await response.json();
    //           const cId = packageId?packageId:0
    //           if(json.data.packages.indexOf(cId)!==-1){
    //             setbought(2)
    //           }
    //           else{
    //             setbought(3)
    //           }
    //       }
    //       fun()
    //   }, [packageId])
    
  return (
      <>
      <Navbar course rhead={name}/>
      {data?
      <StyledLayout>
        {/* <Sidebar/> */}
        <div style={{display: "flex",flexWrap: "wrap",gap: "16px",overflow: "scroll"}}>
          {data.courses.map((item) => {
            let url = "/free-trial/course/" + item._id;
            return (
               <ViewLink key ={item._id} to={{pathname: url, state: { courseId: item._id, name: item.name }}}> 
                <div>
                  <StyledCard>
                    <Bg>
                      <Head>
                        <HeadText>
                          <span>1.2k</span> Students
                        </HeadText>
                        <HeadText>
                          <span>{item.duration?item.duration:0}</span> Hrs
                        </HeadText>
                      </Head>
                      <BgTitle>{item.name}</BgTitle>
                    </Bg>
                    <Content>
                      <Topic>
                        <PictureAsPdfOutlinedIcon />
                        {item.chapters.length?item.chapters.length:0} Chapter Notes
                      </Topic>
                      <Topic>
                        <YouTubeIcon />
                        30+ Lecture Videos
                      </Topic>
                      <Topic>
                        <BookmarkBorderIcon />
                        100+ MCQ Questions
                      </Topic>
                      <Topic>
                        <BorderColorIcon />
                        10 Full Tests
                      </Topic>
                    </Content>
                  </StyledCard>
                </div>
              </ViewLink>
             ); 
          })} 
         
          {testseries && testseries.map((item) => {
            let url = "/free-trial/testseries/" + item._id;
            return (
              <ViewLink key ={item._id} to={{pathname: url, state: { testSeriesId: item._id, name: item.name }}}>
                <div>
                  <StyledCard>
                    <Bg>
                      <Head>
                        <HeadText>
                          <span>1.2k</span> Students
                        </HeadText>
                        <HeadText>
                          <span>{item.duration?item.duration:"4+"}</span> Hrs
                        </HeadText>
                      </Head>
                      <BgTitle>{item.name}</BgTitle>
                    </Bg>
                    <Content>
                      <Topic>
                        <BookmarkBorderIcon />
                        100+ MCQ Questions
                      </Topic>
                      <Topic>
                        <BorderColorIcon />
                        10 Full Tests
                      </Topic>
                    </Content>
                  </StyledCard>
                </div>
              </ViewLink>
            );
          })}
          </div>
      </StyledLayout>:<Loader/>}
    </>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  height: 90vh;
  // display: grid;
  // grid-template-columns: 1fr 3fr;
  display: flex;
  padding:20px;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    height: 93vh;
  }
`;

const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
  &:hover {
    color: green;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px 10px 45px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;
`;
const Topic = styled.div`
  margin: 15px 0px;
  display: flex;
  align-items: center;
`;
const StyledCard = styled.div`
  width: 335px;
  height: 300px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  // overflow: hidden;
  margin: 1rem;
`;
const Bg = styled.div`
  width: 100%;
  height: 150px;
  background: url("/images/card-bg.svg") no-repeat center;
  color: white;
  position: relative;
`;
const Head = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const HeadText = styled.div`
  padding: 0.6rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
`;
const BgTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  color: black;
  position: absolute;
  padding: 12px 60px;
  border-radius: 4px 4px 0px 0px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
export default Package;