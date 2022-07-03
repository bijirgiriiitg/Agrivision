import styled from "styled-components";
import CalculateIcon from '@mui/icons-material/Calculate';
import Calc from "./Calc";
import { useState } from "react";

function formatTime(s) {
  let min = ((s / 60) | 0).toString().padStart(2, "0");
  let sec = (s % 60).toString().padStart(2, "0");
  return min + ":" + sec;
}

const Header = (props) => {
  
  const [isCalc, setisCalc] = useState(false)
  return (
    <StyledNav>
      <Title>{props.examName}</Title>
      {isCalc && <Calc setisCalc={setisCalc}/>}
      <Time>
      {(props.calculator && props.timeLeft) && <CalculateIcon fontSize="large" style={{cursor:"pointer"}} onClick={()=>{setisCalc(true)}}/>}
        {props.timeLeft ? (
          <span className="time-left">Time left: {formatTime(props.timeLeft)}</span>
        ) : null}
      </Time>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  color: white;
  font-size: 20px;
  @media (max-width: 550px) {
    font-size: 16px;
    padding: 16px 16px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
    padding: 16px 12px;
  }
  @media (max-width: 310px) {
    font-size: 14px;
    padding: 10px 10px;
  }
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: 600;
`;
const Time = styled.div`
  span {
    margin-left: 4px;
    font-weight: 700;
  }
  .time-left {
    font-weight: 500;
    // @media (max-width: 430px) {
    //   display: none;
    // }
  }
`;
export default Header;
