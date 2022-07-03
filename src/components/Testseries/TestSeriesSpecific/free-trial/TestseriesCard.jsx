import React, { useState } from "react";
import styled from "styled-components";
import device from "../../../Util/MediaQuery";
import { Link } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const lock = "/images/LockSimple.svg"

const TestCard = ({ quiz }) => {
  const [modal, setModal] = useState(false);
  const handleModal = (e) => {
      setModal(!modal)
  
  };
  const handleBack = (e) => {
    setModal(false);
  };

  const handelStart = (milis)=>{
    var date = new Date(milis)
    return date.toLocaleString()
  }
  return (
    quiz.isFreeTrial?
    <>
      <Container onClick={handleModal}>
        <div className="detail-1">
          <div className="detail">
            <h4>{quiz.name}</h4>
            {<p>Syllabus {!modal?<ExpandMoreIcon onClick={handleModal} fontSize={"small"}/>:<ExpandLessIcon onClick={handleModal} fontSize={"small"}/>}</p>}
          </div>
        </div>
        <div className="detail-2">
          <h4>
            {quiz.category === 0
              ? "Previous Years Test"
              : quiz.category === 1
              ? "Sectional Test"
              : "Full Length Test"}
          </h4>
          {(quiz.quizStartDate<Date.now())? <p>Live Now</p>:<p><b>Start Time: </b>{handelStart(quiz.quizStartDate)}</p>}
        </div>
        {modal && (
          <Modal>
            <div className="content">
              <p>
                <b> Syllabus:</b>
                <p>{quiz.syllabus.join(", ")}</p>
              </p>
            </div>
            <div className="button">
              {quiz.quizStartDate<Date.now()?<ViewLink to={`/quiz/${quiz._id}`}>
              <button disabled={false}>
                Start Test
              </button>
              </ViewLink>:
              <button disabled={true}>
                Starting Soon
              </button>}
                <ExpandLessIcon fontSize={"large"} onClick={handleBack}></ExpandLessIcon>
            </div>
          </Modal>
        )}
      </Container>
    </>
    :
    <>
      <Container style={{opacity: "50%"}}>
        <div className="detail-1">
          <div className="detail">
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <Img src={lock} alt="lock" />
              <h4>{quiz.name}</h4>
            </div>
            {<p>Syllabus <ExpandMoreIcon /></p>}
          </div>
        </div>
        <div className="detail-2">
          <h4>
            {quiz.category === 0
              ? "Previous Years Test"
              : quiz.category === 1
              ? "Sectional Test"
              : "Full Length Test"}
          </h4>
          {(quiz.quizStartDate<Date.now())? <p>Live Now</p>:<p><b>Start Time: </b>{handelStart(quiz.quizStartDate)}</p>}
        </div>
      </Container>
    </>
  );
};

const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
`;

const Img = styled.img`
 margin: 0px 8px 0px 8px;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 95px;
  margin-bottom: 2rem;
  align-items: baseline;
  grid-area: 2 / 1 / 3 / 3;

  ${device.tablet} {
    grid-area: 3 / 1 / 4 / 2;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    p {
      margin-top: 5px;
      margin-bottom: 0;
      text-align: justify;
      ${device.mobileL} {
        width: 200px;
        text-align: initial;
        font-size: 13px;
      }
    }
  }
  .button {
    display: flex;
    gap: 10px;
    margin-top:20px;
    ${device.mobileM} {
      flex-direction: column;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    padding: 15px 24px;
    width: auto;
    height: 40px;
    background: linear-gradient(
      86.94deg,
      #1bbc9b 0%,
      #1bbc9b 0.01%,
      #16a086 100%
    );
    border-radius: 9px;
    border: 3px solid #1bbc9b;
    color:black;
    :hover {
      background: #1bbc9b;
    }
    :disabled,
    [disabled]{
      background: #7a9892;
      color: #666666;
      border: 3px solid #7a9892;
    }
  }
  .backbtn {
    background: #e8f3ff;
  }
`;

const Container = styled.div`
  max-width: 794px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  box-shadow: 0px 3px 12px 0px #0000001f;
  border-radius: 8px;
  cursor: pointer;
  padding: 29px 24px 20px 30px;
  margin: 16px auto;

  h4 {
    ${device.tablet} {
      margin-bottom: 0;
    }
  }
  .detail-1 {
    display: flex;
    width: 400px;
  }
  .avatar {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: first baseline;
    h4 {
      // padding: 2rem 1.5rem 1.5rem 1.5rem;
      font-size: 20px;
      font-weight: 900;
      ${device.mobileM} {
        font-size: 15px;
      }
    }

    p {
      font-size: 13px;
      font-weight: 400;
      color: #1bbc9b;
      // margin-left:1rem;
      margin-top: 18px;
      ${device.tablet} {
        margin-bottom: 0;
      }
      ${device.mobileL} {
        font-size: 12px;
      }
    }
  }
  .mt-4 {
    margin-top: 20px;
    ${device.tablet} {
      margin-top: 0 !important;
    }
  }
  .detail-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 280px;
    align-items: end;
    h4 {
      color: #1bbc9b;
      font-size: 20px;
      font-weight: 600;
      ${device.mobileM} {
        font-size: 15px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #4a4a4a;
      ${device.tablet} {
        margin-bottom: 0;
      }
      ${device.mobileL} {
        font-size: 12px;
      }
    }
  }
  ${device.laptop} {
    width: 650px;
  }
  ${device.tablet} {
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    height: auto;
    width: 90vw;
    margin: 15px;
    .avatar {
      margin-top: 36px;
    }
    .detail-2 {
      margin-left: 100px;
      align-items: first baseline;
    }
  }
`;


export default TestCard;
