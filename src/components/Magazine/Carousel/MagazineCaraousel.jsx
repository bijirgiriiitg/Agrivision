import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import styled from "styled-components";
import device from "../../Util/MediaQuery";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const MagazineCaraousel = ({ popularArticles }) => {
  return (
    <>
      <Container>
        <Carousel breakPoints={breakPoints}>
          {popularArticles
            .slice(0, Math.min(popularArticles.length, 3))
            .map((article) => (
              <Item
                key={article._id}
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/images/carousel3.png)",
                  borderRadius: " 15px",
                  fontWeight: " 400",
                  fontSize: " 25px",
                  color: "white",
                  objectFit: "contain",
                  // backgroundSize: "cover",
                  backgroundPosition: "0% 0%",
                  backgroundSize: "auto 100%",
                }}
              >
                <Link to={"magazine/" + article._id}>
                  <div className="text-container">
                    <h3>{article.heading}</h3>
                    <p>
                      By {article.author ? article.author.name.join(" ") : "Anonymous"} -{" "}
                      {article.createdAt.slice(0, 10)}
                    </p>
                  </div>
                </Link>
              </Item>
            ))}
        </Carousel>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 20px;
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    ${device.tablet} {
      margin-top: 0px;
    }
    h3 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 300;
      font-size: 25px;
      text-align: center;
      color: #ffffff;
    }
    p {
      font-style: normal;
      font-weight: 100;
      font-size: 15px;
      text-align: center;
      color: #ffffff;
    }
  }
  .rec-slider-container {
    border-radius: 15px;
  }

  .rec-arrow {
    display: none;
  }
  .rec-dot {
    box-shadow: 0 0 1px 2px #1bbc9b;
    height: 7px;
    width: 7px;
  }
  .rec-dot_active {
    background-color: #16a086;
  }
  .rec-pagination {
    margin-top: -20px;
    z-index: 10;
  }
`;

export default MagazineCaraousel;
