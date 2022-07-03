import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../components/prd6/tabs/tabss";
import { Button } from "react-bootstrap";
import { MdBookmarkBorder} from "react-icons/md";
import logo from "./unlock.jpg"
import { useHistory } from "react-router-dom";
import Chevron from "react-chevron";
import Sarthak from "../../components/prd6/Topic/NavBar";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
  margin-top: 4%;
`;

export default function Apkk() {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState(2);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <>
    <Sarthak className="nav1"/>
    <div className="Appyy">
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Dashboard" value={0}></Tab>
          <Chevron className="chevrony" />
          <Tab label="Food Technology" value={1}></Tab>
          <Chevron className="chevrony" />
          <Tab label="Agriculture machinery" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1 className="tab31">Food Technology : Agriculture machinery</h1>
          <div className="bt01">
            <Button onClick={() => history('/bookmarks')} className="bt0"><MdBookmarkBorder className="oye100" />Bookmark</Button>
          </div>
          <img className="org1" src={logo} alt="/"/>
          <div className="bt140">
            <Button className="bt130">Unlock Now</Button>          
          </div>
          <p className="paisa">for only <span className="shi">₹ 5475475</span></p>
        </TabPanel>
      </TabPanelContainer>
    </div>
    </>
  );
}
