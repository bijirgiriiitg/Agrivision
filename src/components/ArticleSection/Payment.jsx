import React, { useEffect } from "react";
import styled from "styled-components";
import { paymentHandler } from "../PaymentPg/PaymentHandler";
import { Button } from "../global/Global";

function Payment1(props) {
  useEffect(() => {
    props.setDisplayNext(false);
    props.setDisplayBack(true);
    props.setEnableNext(false);
    props.setEnableBack(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handlePayment = ()=>{
    const data = props.ArticleData
    data.profession = props.profes
    paymentHandler(props.ArticleType,null,null,null,null,null,data)
  }

  return (
    <Main>
      <h4 > You have to Pay: <i className="fas fa-rupee-sign" style={{fontSize:"21px"}}></i> {props.ArticleType}</h4>{" "}
      <StyledButton onClick={handlePayment}>Pay</StyledButton>
    </Main>
  );
}
export default Payment1;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  color: white;
  width: 100px;
  // margin: 10px;
  margin: 0 auto;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const Main = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;