import { Row, Col } from "reactstrap";
import styled from "styled-components";
const Main = ({ activeSection, showPayment }) => {
  return (
    <SectionHead>
      <div className="sections">
        <h3 className="heading1"> ARTICLE SUBMISSION</h3>
        <Row>
          <Col style={{textAlign:"center"}}>
            <span className="section_buttons">
              <SectionButton active={activeSection === 0}>
                <span className="laptop">1</span>
                <span className="phone">1</span>
              </SectionButton>
            </span>
            <div>
              <label htmlFor="text" id="head_label">
                Submission Guidelines
              </label>
            </div>
          </Col>
          <Col style={{textAlign:"center"}}>
            <span className="section_buttons">
              <SectionButton active={activeSection === 1}>
                <span className="laptop">2</span>
                <span className="phone">2</span>
              </SectionButton>
            </span>
            <div>
              <label htmlFor="text" id="head_label">
              Enter Data
              </label>
            </div>
          </Col>
          <Col style={{textAlign:"center"}}>
            <span className="section_buttons">
              <SectionButton active={activeSection === 2}>
                <span className="laptop"> 3</span>
                <span className="phone">3</span>
              </SectionButton>
            </span>

            <div>
              <label htmlFor="text" id="head_label">
                Upload Submission
              </label>
            </div>
          </Col>

          {showPayment && (
            <Col style={{textAlign:"center"}}>
              <span className="section_buttons">
                <SectionButton active={activeSection === 3}>
                  <span className="laptop">4</span>
                  <span className="phone">4</span>
                </SectionButton>
              </span>
              <div>
                <label htmlFor="text" id="head_label">
                  Payment
                </label>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </SectionHead>
  );
};

const SectionHead = styled.div`
  .section_buttons {
    padding: 5%;
  }
  width: 52%;
  margin: 0 auto;


  @media (max-width: 600px) {
    width: 90%;
    padding-left: 10%;
    padding-top: 2%;

    .heading1 {
      font-weight: bold;
      padding: 3%;
      text-align: center;
      font-family: Poppins;
      font-size: 25px;
    }
  }

  @media (min-width: 450px) {
    .heading1 {
      font-weight: bold;
      padding: 5%;
      text-align: center;
      font-family: Poppins;
      font-size: 32px;
    }
  }

  .subt1 {
    font-size: 5px;
  }
`;

const SectionButton = styled.button`
  padding: 3px 12px;
  font-size: 16px;
  background-color: ${(props) => (props.active ? "#1bbc9b" : "white")};
  border: 2px solid ${(props) => (props.active ? "#1bbc9b" : "#1bbc9b")};
  border-radius: 4px;
  color: ${(props) => (props.active ? "white" : "#1bbc9b")};
  font-weight: 500;
  cursor: pointer;
  border-radius: 120%;
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
