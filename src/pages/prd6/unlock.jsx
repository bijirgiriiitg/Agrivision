import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../components/prd6/tabs/tabss";
import { Button } from "react-bootstrap";
import { MdBookmarkBorder} from "react-icons/md";
import logo from "./unlock.jpg"
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
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
    <Sarthak/>
    <div className={styles.Appyy}>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Dashboard" value={0}></Tab>
          <Chevron className={styles.chevrony} />
          <Tab label="Food Technology" value={1}></Tab>
          <Chevron className={styles.chevrony} />
          <Tab label="Agriculture machinery" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1 className={styles.tab31}>Food Technology : Agriculture machinery</h1>
          <div className={styles.bt01}>
            <Button onClick={() => history('/bookmarks')} className={styles.bt0}><MdBookmarkBorder className={styles.oye100}/>Bookmark</Button>
          </div>
          <img className={styles.org1} src={logo} alt="/"/>
          <div className={styles.bt140}>
            <Button className={styles.bt130}>Unlock Now</Button>          
          </div>
          <p className={styles.paisa}>for only <span className={styles.shi}>₹ 5475475</span></p>
        </TabPanel>
      </TabPanelContainer>
    </div>
    </>
  );
}
