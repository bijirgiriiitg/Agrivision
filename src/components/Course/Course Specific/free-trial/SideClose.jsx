import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
const lock = "/images/LockSimple.svg";

const SideClose = ({ items, name, courseId, progress }) => {
    return(
      <>
      <SidebarHeading>
            <SidebarHeadingContainer>Course Summary</SidebarHeadingContainer>
          </SidebarHeading>

          {items.chapters.map((item) => {
            let url = "/free-trial/course/" + courseId + "/" + item._id;
            return (
              item.isFreeTrial ? 
              <>
              <ViewLink key={item._id} to={{pathname: url,state: {courseId: courseId,name: name,chapterId: item._id,chapterName: item.name}}}>
               <div style={{ margin: "4px", color: "black" }}>{item.name}</div>
                <Range
                  type="range"
                  min="0"
                  max="100"
                  style={{ margin: "4px", color: "#1bbc9b" }}
                  value={ (item.completedSubtopics/item.totalSubTopics)*100}
                  onChange={()=>{}}
                />
              </ViewLink>
              </>
              :
              <div style={{opacity: "50%"}}>
              <div style={{ margin: "4px", color: "black", cursor: "pointer"}}>
                <Img src={lock} alt="lock" />
                <span>{item.name}</span>
              </div>
                <Range
                  type="range"
                  min="0"
                  max="100"
                  style={{ margin: "4px", color: "#1bbc9b" }}
                  value={ (item.completedSubtopics/item.totalSubTopics)*100}
                  onChange={()=>{}}
                />
              </div>
            );
          })}
      </>
    )
  }

  const Range = styled.input`
  pointer-events: none;
  width: 100%;
  background-color: red;
  &::-webkit-slider-thumb {
    opacity: 0;
  }
`;

const Img = styled.img`
  margin: 0px 8px 0px 0px;
`

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
