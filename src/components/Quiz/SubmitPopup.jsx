import React from "react";
import styled from "styled-components";
import { baseURL } from "../../Apis";
import { submitQuiz } from "./helpers.js";
import Loader from "../../pages/Loader";

function SubmitPopup(props) {

  return (
    <>
    {props.loader && <Loader/>}
    <Wrapper>
      <div className="popup-box">
        <div className="box">
          <span
            className="close-icon"
            onClick={() => props.setSubmitActive((prev) => !prev)}
          >
            x
          </span>
          <div> Do you really want to submit the test? </div>
          <div className="quizPopup__btns">
            <SubmitButton
              onClick={() =>
                submitQuiz(props.quizId, baseURL, props.quizType, props.history,props.setloader)
              }
            >
              Yes
            </SubmitButton>

            <SubmitButton onClick={() => props.setSubmitActive((prev) => !prev)}>
              Cancel
            </SubmitButton>
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .popup-box {
    z-index: 1;
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
  .box {
    position: relative;
    width: 70%;
    margin: 0 auto;
    height: auto;
    max-height: 85vh;
    margin-top: calc(100vh - 85vh - 10px);
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
  }
  .close-icon {
    content: "x";
    cursor: pointer;
    position: fixed;
    right: calc(15% - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
  .quizPopup__btns {
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
  }
`;

export default SubmitPopup;

const SubmitButton = styled.button`
  width: 100px;
  border-radius: 0px;
  padding: 16px 0px;
  background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 32px;
  cursor: pointer;
  border-radius: 10px;
`;
