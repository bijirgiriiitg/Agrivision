import { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styled from "styled-components";
const lock = "/images/LockSimple.svg";

const SectionContent = ({ item,handelSub,completed,showSidebar }) => {
  const [closed, setIsClosed] = useState(true);
  return (
    <div>
      {item.isFreeTrial?
      <>
        <SidebarContent onClick={() => setIsClosed(!closed)}>
          {item.name}
          {closed && <KeyboardArrowDownIcon onClick={() => setIsClosed(!closed)} />}
          {!closed && <KeyboardArrowUpIcon onClick={() => setIsClosed(!closed)} />}
        </SidebarContent>
        {!closed && (
          <Dropdown>
            {item.subTopics.map((subTopic) => {
              return (
                <div key={subTopic._id} onClick={showSidebar} >
                  <ViewP onClick={() => {handelSub(subTopic._id)}}
                  >
                    {completed.includes(subTopic._id) && <IMG src="/images/Tick.svg" alt="BookOpen" />}
                    {subTopic.name}
                  </ViewP>
                </div>
              );
            })}
          </Dropdown>
        )}
      </>
      :
      <>
        <SidebarContent style={{opacity: "50%"}}>
          <div>
            <Img src={lock} alt="lock"/>
            {item.name}
          </div>
          <KeyboardArrowDownIcon onClick={() => setIsClosed(!closed)} />
        </SidebarContent>
      </>
      }
    </div>
  );
};

export default SectionContent;

const Img = styled.img`
  margin: 0px 8px 0px 0px;
`

const SidebarContent = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const IMG = styled.img`
  margin-right: 7px;
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
