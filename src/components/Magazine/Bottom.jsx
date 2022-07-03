import React from "react";
import styled from "styled-components";
import device from "../Util/MediaQuery";
import { Link } from "react-router-dom";

const Bottom = (props) => {
  return (
    <Container>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
      <Link to={props.link}>
        <button>{props.info}</button>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  background: linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  );
  color: white;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  button {
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    width: auto;
    height: 40px;
    border: none;
    background: white;
    border-radius: 4.05533px;
    color: #1bbc9b;
    font-weight: 600;
    font-size: 20px;
    ${device.tablet} {
        width: auto;
    height: 30px;
        font-size: 12px;
    }
  }
  h2 {
    text-align: center;
    margin: 0 auto;
    ${device.tablet} {
        font-size: 20px;
    }
    }
    p {
      font-weight: 200;
      text-align: center;
      margin: 0 auto;
       ${device.tablet} {
        font-size: 14px;
    }
    }
  }
`;

export default Bottom;
