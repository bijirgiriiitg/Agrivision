import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { useState, useEffect } from "react";
import {baseURL} from "../../Apis"

function Exam(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  let name = props.name;

  useEffect(() => {
    fetch(`${baseURL}/testseries?exam=${name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
      // eslint-disable-next-line
  },[]);
  useEffect(() => {
    return () => {
      window.location.reload(false);
    }
  }, [name])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <PopularCoursesHeading>
          <h3 style={{ margin: "32px" }}>{props.name}</h3>
          {props.trending && <Trending>Trending</Trending>}
          {/* <ViewAll href="/course/dashboard">View all</ViewAll> */}
        </PopularCoursesHeading>
        {items && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {items.map((item) => {
              let url = "/testseries/" + item.testSeriesId;
              return (
                <ViewLink
                  to={{
                    pathname: url,
                    state: { testSeriesId: item.testSeriesId, name: item.name },
                  }}
                >
                  <div>
                    <StyledCard>
                      <Bg>
                        <Head>
                          <HeadText>
                            <span>1.2k</span> Students
                          </HeadText>
                          <HeadText>
                            <span>30</span> Hrs
                          </HeadText>
                        </Head>
                        <BgTitle>{item.name}</BgTitle>
                      </Bg>
                      <Content>
                        {/* <Topic>
                          <PictureAsPdfOutlinedIcon />
                          12 Chapter Notes
                        </Topic>
                        <Topic>
                          <YouTubeIcon />
                          30+ Lecture Videos
                        </Topic> */}
                        <Topic>
                          <BookmarkBorderIcon />
                          100+ MCQ Questions
                        </Topic>
                        <Topic>
                          <BorderColorIcon />
                          10 Full Tests
                        </Topic>
                      </Content>
                    </StyledCard>
                  </div>
                </ViewLink>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
`;

const StyledCard = styled.div`
  width: 335px;
  height: 300px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem;
`;
const Bg = styled.div`
  width: 100%;
  height: 150px;
  background: url("/images/card-bg.svg") no-repeat center;
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
const BgTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  color: black;
  position: absolute;
  padding: 12px 18px;
  border-radius: 4px 4px 0px 0px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px 10px 45px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;
`;
const Topic = styled.div`
  margin: 15px 0px;
  display: flex;
  align-items: center;
`;

const PopularCoursesHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

export default Exam;
