import { useState, useEffect } from "react";
import styled from "styled-components";
import RankTable from "../RankTable";
import ComparisonGraph from "./ComparisonGraph";
import ComparisonConcepts from "./ComparisonConcepts";
import Loader from "../../../pages/Loader";
// import data from "./comparison-data";
import { baseURL } from "../../../Apis";

function Comparison({ quizId }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/quiz/${quizId}/analysis?queryParam=3`, {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      data && (
        <Wrapper>
          <RowOne>
            <ComparisonGraphContainer>
              <ComparisonGraph
                userScore={data.userAnalysisByTopic}
                topperScore={data.topperAnalysisByTopic}
              />
            </ComparisonGraphContainer>
            <TablePageContainer>
              <RankTable rank={data.sortedRank} />
            </TablePageContainer>
          </RowOne>
          <RowTwo>
            <ConceptsContainer>
              <ComparisonConcepts
                userScore={data.userAnalysisByTopic}
                topperScore={data.topperAnalysisByTopic}
              />
            </ConceptsContainer>
          </RowTwo>
        </Wrapper>
      )
    );
  }
}

export default Comparison;

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

const ComparisonGraphContainer = styled.div`
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

const TablePageContainer = styled.div`
  // width: 40%;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 0;
  margin: 10px;
  overflow-y: auto;
  @media (max-width: 35em) {
    flex: 1;
    min-height: 0;
  }
`;

const ConceptsContainer = styled.div`
  flex-grow: 1;
  margin: 10px;
`;
