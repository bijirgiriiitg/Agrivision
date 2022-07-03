import React, { useState } from "react";
import styled from "styled-components";
import device from "../../Util/MediaQuery";
import SideCards from "./SideCards";
import { Link } from "react-router-dom";

const Card2 = ({ articles, popularArticles }) => {
  const [activeSection, setActiveSection] = useState("featured");
  const latestArticles = articles
    ? articles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : null;

  return (
    <Container>
      <div className="wrapper1">
        <div className="header">
          <ul>
            <li
              className={activeSection === "featured" ? "active" : ""}
              onClick={() => setActiveSection("featured")}
            >
              Featured
            </li>
            <li
              className={activeSection === "latest" ? "active" : ""}
              onClick={() => setActiveSection("latest")}
            >
              Latest Agriculture Schemes
            </li>
            <li
              className={activeSection === "spotlight" ? "active" : ""}
              onClick={() => setActiveSection("spotlight")}
            >
              Spotlight
            </li>
          </ul>
        </div>
        <div className="container1">
          {articles.map((article) => {
            if (article.isSpotlight && activeSection === "spotlight") {
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
                      <p>
                        {article.description
                          ? article.description.slice(0, 250) + "..."
                          : ""}
                      </p>
                      <p style={{ color: "#384C6C", marginTop: "20px" }}>
                        By {article.author ? article.author.name.join(" ") : "Anonymous"}{" "}
                        - {article.createdAt.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            } else if (article.isFeatured && activeSection === "featured") {
              return (
                <Link to={"/magazine/" + article._id} key={article._id}>
                  <div className="card">
                    <div className="image-container">
                      <img
                        src={
                          article.mainImage ? article.mainImage : "/images/images/m2.jpeg"
                        }
                        alt=""
                      />
                    </div>

                    <div className="text-container">
                      <h4>{article.heading} </h4>
                      <p>
                        {article.description
                          ? article.description.slice(0, 250) + "..."
                          : ""}
                      </p>
                      <p style={{ color: "#384C6C", marginTop: "20px" }}>
                        By {article.author ? article.author.name.join(" ") : "Anonymous"}{" "}
                        - {article.createdAt.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            } else {
              return null;
            }
          })}
          {activeSection === "latest" &&
            latestArticles.slice(0, Math.min(5, latestArticles.length)).map((article) => (
              <Link to={"/magazine/" + article._id} key={article._id}>
                <div className="card">
                  <div className="image-container">
                    <img
                      src={
                        article.mainImage ? article.mainImage : "/images/images/m2.jpeg"
                      }
                      alt=""
                    />
                  </div>

                  <div className="text-container">
                    <h4>{article.heading} </h4>
                    <p>
                      {article.description
                        ? article.description.slice(0, 250) + "..."
                        : ""}
                    </p>
                    <p style={{ color: "#384C6C", marginTop: "20px" }}>
                      By {article.author ? article.author.name.join(" ") : "Anonymous"} -{" "}
                      {article.createdAt.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="wrapper2">
        <div className="heading">
          <h4>Popular</h4>
          <div></div>
        </div>
        <div className="container2">
          {popularArticles.slice(0, Math.min(articles.length, 3)).map((article) => (
            <Link to={"/magazine/" + article._id} key={article._id}>
              <SideCards
                heading={article.heading}
                content={article.description}
              ></SideCards>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 30px;
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  a {
    color: black;
  }

  ${device.mobileL} {
    display: block;
  }
  .wrapper1 {
    height: 100%;
    ul {
      width: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border: 2px solid #e2e2e2;
      padding: 0px;
      ${device.mobileL} {
        grid-template-columns: 1fr;
      }
    }

    li {
      padding: 4px 6px;
      text-align: center;
      cursor: pointer;
    }
    .active {
      background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
    }
  }

  .container1 {
    height: auto;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: auto;
    grid-auto-flow: column;
    position: relative;
    ${device.tablet} {
      grid-template-columns: 1fr;
      height: auto;
      gap: 10px;
    }
  }

  .image-container {
    width: 100%;
    border-radius: 8px;
    position: relative;
    background: black;

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 8px;
      opacity: 0.4;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    // align-items: first baseline;
    // justify-content: center;
    overflow-y: auto;
    h4 {
      font-weight: 600;
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
  .card {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    height: 408px;
    // height: auto;
    min-width: 400px;

    ${device.mobileL} {
      min-width: 290px;
    }
  }
  .wrapper2 {
    height: 100%;
    .heading {
      margin: 0;
      padding: 10px;
      display: flex;
      h4 {
        font-size: 22px;
        font-size: 20px;
        font-weight: bold;
      }
      div {
        margin-left: 10px;
        width: 100%;
        border-bottom: 6px solid #1bbc9b;
      }
    }
  }

  .container2 {
    display: grid;
    height: auto;
    // align-items: first baseline;
    // justify-content: center;
    gap: 15px;
    ${device.tablet} {
      height: 95vh;
    }
    ${device.mobileL} {
      height: auto;
    }
  }
`;

export default Card2;
