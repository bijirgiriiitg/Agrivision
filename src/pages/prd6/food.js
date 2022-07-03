import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../components/prd6/tabs/tabss";
//import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
//import Modals from "../../components/prd6/Modal";
import { MdBookmarkBorder, MdLens} from "react-icons/md";
import Chevron from "react-chevron";
import "./styles.module.css";
import App8 from "./mod";
import Sarthak from "../../components/prd6/Topic/NavBar";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
  margin-top: 4%;
`;

export default function Appk() {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState(2);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div>
    <Sarthak className="nav1"/>
    <div className="Akk">
      <TabsContainer className="nav2">
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Dashboard" value={0}></Tab>
          <Chevron className="chevrony" />
          <Tab label="Food Technology" value={1}></Tab>
          <Chevron className="chevrony" />
          <Tab label="Agriculture machinery" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
       
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1 className="tab31">Food Technology : Agriculture machinery</h1>
          <div className="bt01">
            <Button onClick={() => history('/bookmarks')} className="bt0"><MdBookmarkBorder className="oye100" />Bookmark</Button>
          </div>
          <img className="org" src="./images/111.jpg" alt="/"/>
          <p className="tab4">What will you learn ?</p>
          <p className="tab5">WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
            nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
            Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
            diam. WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus diam.</p>
          <p className="tab6"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className="tab8"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className="tab9"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className="tab10"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <div className="bt3">
            <Button onClick={() => history('/lectures/1')}className="bt4">Mark as Complete</Button>
            <Button onClick={() => history('/topics')} className="bt5">Join the Discussion</Button>
         </div>
          
        </TabPanel>
        <App8/>
      </TabPanelContainer>
    </div>
    </div>
  );
}
