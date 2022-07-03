import React from "react";
import styled from "styled-components";
import device from "../../Util/MediaQuery";

const SideCards = (props) => {
  return (
    <SideContainer>
      <div className="sidecard">
        <img src="/images/images/m4.jpeg" alt="" />
      </div>
      <div className="sidecontent">
        <h6>{props.heading}</h6>
        <p>
          {props.content
            ? props.content.slice(0, Math.min(50, props.content.length))
            : null}
          ..
        </p>
      </div>
    </SideContainer>
  );
};

const SideContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  ${device.tablet} {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    margin-top: 5px;
    img {
      padding: 5px;
    }
  }
  a {
    color: black;
  }
  .sidecard {
    height: 80px;
    ${device.laptop} {
      width: 100%;
    }
    border-radius: 15px;
    position: relative;
    // background: black;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      opacity: 0.9;
    }
  }

  .sidecontent {
    margin-left: 10px;
    text-align: left;
    color: black;
    h6 {
      font-weight: bold;
      font-size: 16px;
      margin-top: 5px;
    }
    p {
      font-weight: normal;
      font-size: 14px;
      margin-top: 20px;
      ${device.laptop} {
        margin-top: 5px;
      }
    }
  }
`;

export default SideCards;
