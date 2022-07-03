import React from "react";
import styled from "styled-components";
import device from "../../Util/MediaQuery";
import SideCards from "./SideCards";
import { Link } from "react-router-dom";

const Card3 = () => {
  const article = [
    {
      _id: "1",
      heading: "BLOG ABOUT FOOD AND AGRICULTURE",
      author: "RK Ageswamy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas risus nisi, et luctus lorem finibus nec. Suspendisse at velit lobortis, pretium mauris at, aliquet lorem. Vivamus auctor a dolor vitae tempus. Maecenas tempus at ante eget sollicitudin. Nulla in magna non eros gravida fringilla.",
    },
    {
      _id: "2",
      heading: "BLOG ABOUT FOOD AND TECH",
      author: "RK Ageswamy",
      content:
        "liquam vulputate nisi sed ex tempor pharetra sit amet non nulla. Quisque sit amet ex finibus, facilisis metus et, lobortis lacus. Sed vel sem non lorem ultrices sodales eu at enim. Aliquam sit amet tincidunt justo. Duis tempor, diam et sodales finibus, erat quam malesuada mauris, eget tristique leo magna condimentum ante ",
    },
    {
      _id: "3",
      heading: "BLOG ABOUT FOOD AND TECH",
      author: "RK Ageswamy",
      content:
        "Vivamus vel nisi diam. Donec imperdiet lorem erat, et venenatis enim sagittis nec. Integer volutpat ante quis tortor vestibulum, eu vehicula diam ornare. Donec ipsum velit, luctus vel tempor eu, semper vel massa. Aliquam quis metus quis ex gravida aliquet a ut mi. ",
    },
    {
      _id: "4",
      heading: "BLOG ABOUT FOOD AND TECH",
      author: "RK Ageswamy",
      content:
        "Donec est lectus, imperdiet at porta a, varius id nisl. Aenean varius ultricies quam sed congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur egestas odio sit amet augue ornare congue. Praesent pulvinar, ex eget eleifend malesuada, metus felis accumsan enim, nec molestie mauris nisi a diam. Nulla tellus purus, sodales eu massa ut, malesuada vestibulum enim ",
    },
  ];
  return (
    <Wrapper>
      <h5>NOVEMBER 2021 ISSUE </h5>
      <Container>
        {/* {article.slice(0, 1).map((article) => (
          <Link to={"/magazine/" + article._id} key={article._id}>
            <div className="container1">
              <div className="image-container">
                <img src="/images/images/MAGAZINE2.png" alt="" />
              </div>
              <div className="text-container">
                <h3>{article.heading}</h3>
                <p>By {article.author} - August 15,2021</p>
              </div>
            </div>
          </Link>
        ))} */}
        <iframe title="November Issue" allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" style={{border: "5px solid lightgray", width: "95%", height: "400px"}} src="https://heyzine.com/flip-book/be1e58983e.html"></iframe>
        <div className="container2">
          <h6>OCTOBER ISSUES</h6>
          <div className="card-container">
            {article.slice(0, 4).map((article) => (
              <Link to={"/magazine/" + article._id} key={article._id}>
                <SideCards
                  heading={article.heading}
                  content={article.content}
                ></SideCards>
              </Link>
            ))}
          </div>
        </div>
        </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  h5 {
    margin-top: 20px;
    font-weight: bold;
  }

  a {
    color: white;
  }
`;
const Container = styled.div`
  margin: 20px 20px;
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  justify-content: space-evenly;

  ${device.mobileL} {
    display: block;
  }

  position: relative;

  .container1 {
    display: flex;
    flex-direction: column;
  }

  .image-container {
    width: 90%;

    border-radius: 8px;
    background: black;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      opacity: 0.4;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: first baseline;
    width: 50%;
    position: absolute;
    bottom: 15%;
    left: 0;
    margin-left: 20px;
    ${device.tablet} {
      top: 50%;
      bottom: 0;
    }
    h3 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      text-align: left;
      color: white;
      ${device.mobileL} {
        font-size: 12px;
        width: 140px;
      }
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      text-align: center;
      color: white;
      ${device.mobileL} {
        font-size: 10px;
        width: 130px;
      }
    }
  }
  .container2 {
    position: relative;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    gap: 15px;
  }
`;

export default Card3;
