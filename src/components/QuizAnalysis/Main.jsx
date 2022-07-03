import styled from "styled-components";

const Main = ({ activeSection, setActiveSection }) => {
  const inactive = {
    overview: false,
    solution: false,
    weakness: false,
    comparison: false,
  };

  return (
    <MainCont>
      <SectionHeader>
        <div className="sections">
          <SectionButton
            active={activeSection.overview}
            onClick={() => {
              setActiveSection({
                ...inactive,
                overview: true,
              });
            }}
          >
            <span className="laptop"> Overview</span>
            <span className="phone">Overview</span>
          </SectionButton>

          <SectionButton
            active={activeSection.solution}
            onClick={() => {
              setActiveSection({
                ...inactive,
                solution: true,
              });
            }}
          >
            <span className="laptop">Solution</span>
            <span className="phone">Solution</span>
          </SectionButton>

          <SectionButton
            active={activeSection.weakness}
            onClick={() => {
              setActiveSection({
                ...inactive,
                weakness: true,
              });
            }}
          >
            <span className="laptop"> Weakness</span>
            <span className="phone">Weakness</span>
          </SectionButton>

          <SectionButton
            active={activeSection.comparison}
            onClick={() => {
              setActiveSection({
                ...inactive,
                comparison: true,
              });
            }}
          >
            <span className="laptop">Comparison</span>
            <span className="phone">Comparison</span>
          </SectionButton>
        </div>
      </SectionHeader>
    </MainCont>
  );
};

const SectionHeader = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    padding: 12px 8px;
  }
  @media (max-width: 650px) {
    padding: 12px 4px;
  }
  @media (max-width: 400px) {
    padding: 10px 0px;
  }
`;

const MainCont = styled.div`
  position: relative;
  width: 100%;
  //height: 100%;
  padding: 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: 1/3;
  grid-column: 1/3;
`;

const SectionButton = styled.button`
  padding: 6px 16px;
  font-size: 16px;
  background-color: ${(props) => (props.active ? "#1bbc9b" : "#e5f8ff")};
  border-style: none;
  border-radius: 4px;
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: 500;
  cursor: pointer;
  margin: 0px 16px;
  .laptop {
    display: inline-block;
  }
  .phone {
    display: none;
  }
  @media (max-width: 750px) {
    margin: 0px 8px;
  }
  @media (max-width: 700px) {
    margin: 0px 4px;
    padding: 6px 12px;
  }
  @media (max-width: 650px) {
    margin: 0px 4px;
    padding: 6px 24px;
    .laptop {
      display: none;
    }
    .phone {
      display: inline-block;
    }
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    padding: 6px 16px;
  }
  @media (max-width: 450px) {
    padding: 6px 10px;
  }
  @media (max-width: 400px) {
    padding: 2px 8px;
    font-size: 12px;
    margin: 0px 2px;
  }
`;
export default Main;
