import React from "react";
import Rating from "../../PaymentPg/Rating";
import { BiRupee } from "react-icons/bi";
import styled from "styled-components";

const CourseCard = ({ item }) => {
  return (
    <div>
      <Bg
        style={{
          background: `url(${item.image?item.image:"/images/card-bg.svg"}) no-repeat center `,
          width: "100%",
          height: "150px",
          color: "white",
          position: "relative",
        }}
      >
        <Head>
          <HeadText>
            <span>1.2k</span> Students
          </HeadText>
          <HeadText>
            <span>{item.duration ? item.duration : 0}</span> Hrs
          </HeadText>
        </Head>
      </Bg>
      <BgTitle1>{item.name}</BgTitle1>
      <Content1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <CourseRate>
            <Rating value={item.rating ? item.rating : 0} />
            <h4
              style={{
                fontSize: "13px",
                marginLeft: "10px",
                marginTop: "7px",
                color: "black",
              }}
            >
              {item.rating ? item.rating : 0}
            </h4>
          </CourseRate>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <CoursePrice>
              <BiRupee />
              {item.price}
            </CoursePrice>
            <CoursePrice1>
              <strike>
                <BiRupee />
                {item.originalPrice ? item.originalPrice : 3999}
              </strike>
            </CoursePrice1>
          </div>
        </div>
      </Content1>
    </div>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 150px;
  // background: url("/images/card-bg.svg") no-repeat center;
  color: white;
  position: relative;
`;
const Head = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const HeadText = styled.div`
  padding: 0.6rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
`;
const BgTitle1 = styled.div`
  font-size: 20px;
  font-weight: 600;
  // text-align:center;
  background-color: white;
  color: black;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 4px 4px 0px 0px;
`;

const CoursePrice = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 24px;
  color: #1bbc9b;
  margin-left: -10px;
  margin-top: 5px;
`;

const CoursePrice1 = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;

  color: #1bbc9b;
  /* margin-left: -40px; */
  margin-top: 0px;
  color: black;
  margin-top: 5px;
  /* text-decoration: line-through; */
`;
const CourseRate = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  padding-right: 70px;
  font-size: 18px;
  line-height: 24px;
  color: #1bbc9b;
  margin-left: -8px;
`;

const Content1 = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 20px 18px 25px;
  background-color: white;
  font-size: 15px;
  font-weight: 400;
`;

export default CourseCard;
