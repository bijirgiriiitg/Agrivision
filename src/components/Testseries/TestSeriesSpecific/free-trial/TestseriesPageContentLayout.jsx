import React,{useState} from "react";
import TestCard from "./TestseriesCard";
import styled from "styled-components";
import device from "../../../Util/MediaQuery";
import useWindowDimensions from "../../../Util/useWindowDimensions";


const ContentlayOut = ({ items, all,previous,sectional,full,quizFilter,setquizFilter }) => {
  const [active, setactive] = useState(0);
  const { width } = useWindowDimensions();

  const handelFilter = (act,categ)=>{
    setactive(act)
    setquizFilter(categ)
  }

  return (
    items && (
      <Wrapper style={width>1000?{width:"80vw"}:{width:"100vw"}}>
        <Container>
        <ul>
          <li onClick={()=>handelFilter(0,all)} className={active===0?"active":""}>All Tests &nbsp; ({all.length})</li>
          <li onClick={()=>handelFilter(1,previous)} className={active===1?"active":""}>Previous Tests &nbsp; ({previous.length})</li>
          <li onClick={()=>handelFilter(2,sectional)} className={active===2?"active":""}>Sectional Tests &nbsp; ({sectional.length})</li>
          <li onClick={()=>handelFilter(3,full)} className={active===3?"active":""}>Full Tests &nbsp; ({full.length})</li>
        </ul>
      </Container>
      
        {quizFilter && quizFilter.map((quiz)=>{
            return <TestCard
              key={quiz._id}
              quiz={quiz}
            />
        })}
          
          
      </Wrapper>
    )
  );
};


const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  // float: left;
  text-align:center;
  flex-wrap: nowrap;
  flex-direction:column;
  overflow: scroll;
  padding: 20px;
`

const Container = styled.div`
  width: 800px;
  ul {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    margin-left: 13.5vw;
    ${device.tablet} {
      width: 100vw;
      grid-auto-flow: row;
      grid-template-columns: 150px 150px;
      justify-items: end;
      margin-left: 0px;
      
    }
  }
  li {
    color: #1bbc9b;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 156px;
    background: #e8f3ff;
    border-radius: 24px;
    margin: 17px;
    border: 1px solid #1bbc9b;
    font-size: 13px;
    cursor: pointer;
    ${device.tablet} {
      width: 135px;
    }
  }
  .active {
    color: white;
    background: #1bbc9b;

  }
`;


export default ContentlayOut;