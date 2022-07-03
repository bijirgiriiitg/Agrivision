import React, { useState } from "react";
import styled from "styled-components";
import device from "../../Util/MediaQuery";
import { Link } from "react-router-dom";

//category Number || Section Name
//0 - exam
//1 - trending
//2 - food
const sectionArray = ["exams", "trending", "food", "agriculture", "chemistry"];

const Card1 = ({ articles }) => {
  const [activeSection, setActiveSection] = useState("exams");
  return (
    <Wrapper>
      <div className="header">
        <ul>
          <li
            className={activeSection === "exams" ? "active" : ""}
            onClick={() => setActiveSection("exams")}
          >
            Exams
          </li>
          <li
            className={activeSection === "trending" ? "active" : ""}
            onClick={() => setActiveSection("trending")}
          >
            Trending
          </li>
          <li
            className={activeSection === "food" ? "active" : ""}
            onClick={() => setActiveSection("food")}
          >
            Food Technology & Innovation
          </li>
          <li
            className={activeSection === "agriculture" ? "active" : ""}
            onClick={() => setActiveSection("agriculture")}
          >
            Agriculture & Allied
          </li>
          <li
            className={activeSection === "chemistry" ? "active" : ""}
            onClick={() => setActiveSection("chemistry")}
          >
            Environment
          </li>
        </ul>
      </div>
      <Container>
        {articles.map((article) => {
          if (sectionArray[article.category] === activeSection) {
            return (
              <Link to={"/magazine/" + article._id} key={article._id}>
                <div className="card">
                  <div className="image-container">
                    <img
                      src={
                        article.mainImage ? article.mainImage : "/images/images/MAGAZINE2.png"
                      }
                      alt=""
                    />
                  </div>

                  <div className="text-container">
                    <h4>{article.heading} </h4>
                    <p>{article.description}</p>
                    <p style={{ color: "#384C6C", marginTop: "20px" }}>
                      By {article.author ? article.author.name.join(" ") : "Anonymous"} -{" "}
                      {article.createdAt.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    margin: 20px 30px;
    ${device.tablet} {
      margin: 20px 0px;
    }

    ul {
      width: auto;
      display: flex;
      gap: 70px;
      justify-content: flex-start;
      border-bottom: 2px solid #e2e2e2;
      padding: 0;
      padding-bottom: 1px;
      ${device.laptop} {
        gap: 40px;
      }
      ${device.tablet} {
        gap: 5px;
        flex-direction: column;
        width: auto;
        margin: 0 30px;
      }
    }

    li {
      padding: 4px 6px;
      border-radius: 4px;
      cursor: pointer;
    }
    .active {
      background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
    }
  }
`;
const Container = styled.div`
  margin: 30px 30px;
  // height: auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  overflow-x: auto;
  grid-auto-flow: column;

  ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    // height: auto;
    gap: 10px;
  }
  ${device.mobileL} {
    grid-template-columns: 1fr;
    // height: auto;
    gap: 10px;
  }
  .card {
    height: 370px;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    color: black;
    min-width: 290px;
  }
  .image-container {
    width: 100%;
    border-radius: 8px;
    position: relative;
    background: black;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
      opacity: 0.4;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    overflow-y: auto;
    // align-items: first baseline;
    // justify-content: center;
    h4 {
      font-weight: 600;
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export default Card1;
