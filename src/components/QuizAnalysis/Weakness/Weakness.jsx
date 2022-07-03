import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import WeakConcepts from "./WeakConcepts";
import WeaknessGraph from "./WeaknessGraph";
import Loader from "../../../pages/Loader";
import { baseURL } from "../../../Apis";

function Weakness({ quizId }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [weakConcepts, setWeakConcepts] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/quiz/${quizId}/analysis?queryParam=2`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data) {
      const weakConceptsArray = data.analysisByTopic.filter(topic => topic.incorrect !==0);
      setWeakConcepts(weakConceptsArray);
    }
  }, [data]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      data && (
        <Wrapper>
          <RowOne>
            <WeaknessGraphContainer>
              <WeaknessGraph data={data.analysisByTopic} />
            </WeaknessGraphContainer>
            <CardContainer>
              <Card
                maxSkippedTopic={data.maxSkippedTopic}
                maxIncorrectTopic={data.maxIncorrectTopic}
                additionalTopics={data.additionalTopics}
                totalIncorrect={data.totalIncorrect}
              />
            </CardContainer>
          </RowOne>
          <RowTwo>
            <WeakConceptsContainer>
              <WeakConcepts weakConceptsData={weakConcepts} />
            </WeakConceptsContainer>
          </RowTwo>
        </Wrapper>
      )
    );
  }
}

export default Weakness;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  @media (max-width: 35em) {
    min-height: 300px;
  }
`;

const RowOne = styled.div`
  display: flex;
  flex: 1.3;
  flex-basis: 0;
  min-height: 0;

  @media (max-width: 35em) {
    flex: 2;
    flex-direction: column;
    min-height: 600px;
  }
`;

const RowTwo = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  flex-basis: 0;
  min-height: 0;
  @media (max-width: 35em) {
    min-height: 300px;
  }
`;

const WeaknessGraphContainer = styled.div`
  // width: 60%;
  flex-grow: 2;
  flex-basis: 0;
  min-width: 0;
  // flex-shrink: 0;
  margin: 10px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  overflow: auto;
  background-color: white;
  overflow-x: hidden;
  @media (max-width: 35em) {
    flex: 1;
    min-height: 0;
  }
`;

const CardContainer = styled.div`
  // width: 40%;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 0;
  margin: 10px;
  @media (max-width: 35em) {
    flex: 1;
    min-height: 0;
  }
`;

const WeakConceptsContainer = styled.div`
  flex-grow: 1;
  margin: 10px;
`;
