import styled from "styled-components";
import Navbar from "../global/Navbar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Wrapper } from "../Course/Foundation";
import { useEffect, useState } from "react";
import Loader from "../../pages/Loader"
import {baseURL} from "../../Apis"
import { Link } from "react-router-dom";

export const Layout = (props) => {

  const [active, setActive] = useState(1);
  const [items, setItems] = useState(null);
  const [closed, setIsClosed] = useState(true);
  const [name,setName] = useState(null);
  const [quizDetails, setquizDetails] = useState(null)

  useEffect(() => {
    
    const testSeriesId = props.match.params.id
    const subjectId  = props.match.params.subjectId
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/testseries/${testSeriesId}?queryParam=2&subjectID=${subjectId}`,
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
        setItems(json.data.subject);
        setName(json.data.subject.name)
      }
    };
    fun();
    // eslint-disable-next-line
  }, []);
 
  const handelSub = async(quiz)=>{
    setActive(2);
    setquizDetails(quiz)
  }
  const handelStart =(millis)=>{
    var date = new Date(millis);
    return date.toLocaleString();
  }
  return (
    <>
    <Navbar course rhead={name}/>
      <StyledLayout>
        {items?
          <>
            <SidebarContainer>
                  <SidebarContent onClick={() => setIsClosed(!closed)}>
                    {name}
                      {closed && (<KeyboardArrowDownIcon onClick={() => setIsClosed(!closed)} />)}
                      {!closed && (<KeyboardArrowUpIcon onClick={() => setIsClosed(!closed)} />)}
                    </SidebarContent>
                    {!closed && (
                      <Dropdown>
                        {items.quizzes.map(quiz=>{
                          return(
                            <div key={quiz._id}>
                              <ViewP onClick={()=>{handelSub(quiz)}}>{quiz.name}</ViewP>
                            </div> 
                          )
                        })}
                      </Dropdown>)}             
                  </SidebarContainer>                  
                  {active===1? 
                    <div style={{width:"80vw", itemsAlign:"center",textAlign:"center", justifyContent: "center"}}>
                      <h2 style={{ margin:"32px 0px 0px 0px", color:"rgba(22, 160, 134, 1)"}}>Pick a quiz & start learning</h2>
                      <img style={{height:"50vh",width:"50vw"}} src="/images/TestseriesSpecificPageLogo.svg" alt="Select any quiz to start learning"/>
                    </div>:
                     active===2?
                      <div style={{width:"80vw", itemsAlign:"center",textAlign:"center", justifyContent: "center"}}>                       
                          <div>
                          <h2 style={{ margin:"16px", color:"rgba(22, 160, 134, 1)"}}>{quizDetails.name}</h2>
                          <h4 style={{ margin:"16px", color:"rgba(22, 160, 134, 1)"}}><span style={{color:"black", fontWeight:"800"}}>Syllabus:</span> {quizDetails.syllabus.join(', ')}</h4>
                          {quizDetails.quizStartDate>Date.now() &&<h4 style={{ margin:"16px", color:"rgba(22, 160, 134, 1)"}}>Test Will be active on <span style={{color:"black"}}>{handelStart(quizDetails.quizStartDate)}</span></h4>}
                          {quizDetails.quizStartDate<Date.now() && <ViewLink to={`/quiz/${quizDetails._id}`}>

                            <button style={{ margin:"16px", border:"none", borderRadius:"6px", padding:"8px", background:"rgba(22, 160, 134, 1)", color:"white"}}>Take test</button>
                          </ViewLink>}
                          <ViewLink to={`/quiz/${quizDetails._id}`}>
                            <button style={{ margin:"16px", border:"none", borderRadius:"6px", padding:"8px", background:"rgba(22, 160, 134, 1)", color:"white"}}>Take test</button>
                          </ViewLink>

                          
                          </div>                      
                        <img style={{height:"50vh",width:"50vw"}} src="/images/TestseriesSpecificPageLogo.svg" alt="Select any quiz to start learning"/>
                      </div>:<Loader/>
                  }            
          </>:<Loader/>
        }
      </StyledLayout>
    </>
  );
};
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


const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
`;

const SidebarContainer = styled(Wrapper)`
  height: 100%;
  /* min-width: 364px; */
  width: 20vw;
  height: 80vh;
  background: #e8f3ff;
  padding: 32px 32px 0px;
`;



const SidebarContent = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor:pointer;
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
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
export default Layout;




