import React from "react";
import Card from "../Card";

import styled from "styled-components";
function PopularCourses(props) {

 return (
    <div>
      <Popular>
        <PopularCoursesHeading>
          <p>{props.name}</p>
          {props.trending && <Trending>Trending</Trending>}
          <ViewAll href="www.google.com">View all</ViewAll>
        </PopularCoursesHeading>
        <PopularCoursesCardEncloser>
          <Card />
          <Card />
          <Card />
        </PopularCoursesCardEncloser>
      </Popular>
    </div>
  );
}

const Popular = styled.div`
  margin-top: 32px;
  margin-left: 18px;
  font-size: 20px;
  line-height: 30px;
`;

const PopularCoursesHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ViewAll = styled.a`
  text-decoration: none;
  color: #16a086;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  flex-grow: 8;
  margin-right: 34px;
`;

const Trending = styled.div`
  font-size: 12px;
  line-height: 18px;
  margin-left: 16px;
  background: linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  );
  border-radius: 4px;
  width: 69px;
  height: 18px;
  padding: 0px 8px;
`;

const PopularCoursesCardEncloser = styled.div`
  display: flex;
`;

export default PopularCourses;
