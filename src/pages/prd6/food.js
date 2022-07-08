import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../components/prd6/tabs/tabss";
//import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
//import Modals from "../../components/prd6/Modal";
import { MdBookmarkBorder, MdLens} from "react-icons/md";
import Chevron from "react-chevron";
import App8 from "./mod";
import styles from "./styles.module.css";
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
    <div className={styles.Akk}>
      <TabsContainer className={styles.nav2}>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Dashboard" value={0}></Tab>
          <Chevron className={styles.chevrony} />
          <Tab label="Food Technology" value={1}></Tab>
          <Chevron className={styles.chevrony} />
          <Tab label="Agriculture machinery" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
       
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1 className={styles.tab31}>Food Technology : Agriculture machinery</h1>
          <div className={styles.bt01}>
            <Button onClick={() => history('/bookmarks')} className={styles.bt0}><MdBookmarkBorder className={styles.oye100}/>Bookmark</Button>
          </div>
          <img className={styles.org} src="/images/111.jpg" alt="/"/>
          <p className={styles.tab4}>What will you learn ?</p>
          <p className={styles.tab5}>WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
            nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
            Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
            diam. WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus diam.</p>
          <p className={styles.tab6}><MdLens className={styles.tab7} />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className={styles.tab8}><MdLens className={styles.tab7} />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className={styles.tab9}><MdLens className={styles.tab7} />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className={styles.tab10}><MdLens className={styles.tab7} />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <div className={styles.bt3}>
            <Button onClick={() => history('/lectures/1')}className={styles.bt4}>Mark as Complete</Button>
            <Button onClick={() => history('/topics')} className={styles.bt5}>Join the Discussion</Button>
         </div>
          
        </TabPanel>
        <App8/>
      </TabPanelContainer>
    </div>
    </div>
  );
}
