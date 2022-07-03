import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
//functionality demo
import Overview from "./Overview/Overview";
import Solution from "./Solution/Solution";
import Weakness from "./Weakness/Weakness";
import Comparison from "./Comparison/Comparison";

const Layout = ({ quizId }) => {
  const [quizname, setquizname] = useState(null)
  const [activeSection, setActiveSection] = useState({
    overview: true,
    solution: false,
    weakness: false,
    comparison: false,
  });
  return (
    
     <Wrapper>
      <Header quizname={quizname?quizname:" "}/>
      <Container>
        <Main activeSection={activeSection} setActiveSection={setActiveSection} />

        <Tabs>
          {activeSection.overview ? <Overview quizId={quizId} setquizname={setquizname}/> : null}
          {activeSection.solution ? <Solution quizId={quizId} /> : null}
          {activeSection.weakness ? <Weakness quizId={quizId} /> : null}
          {activeSection.comparison ? <Comparison quizId={quizId} /> : null}
        </Tabs>
      </Container>
    </Wrapper>
   
  );
};

const Container = styled.div`
  height: calc(100% - 62px);
  width: 100%;
  // display: grid;
  // grid-template-columns: 2.5fr 1fr;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Tabs = styled.div`
  width: 100%;
  // height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  min-height: 0;
`;
export default Layout;
