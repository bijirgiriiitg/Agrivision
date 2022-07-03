import { useState, useEffect } from "react";
import styled from "styled-components";

function ComparisonConcepts({ userScore, topperScore }) {
  const [weakConceptsData, setWeakConceptsData] = useState(null);
  const [strengthConceptsData, setStrengthConceptsData] = useState(null);

  useEffect(() => {
    let weakConcepts = [],
      strengthConcepts = [];

    userScore.forEach((obj, index) => {
      if (obj.score >= topperScore[index].score) {
        strengthConcepts = [...strengthConcepts, obj.topicName];
      } else {
        weakConcepts = [...weakConcepts, obj.topicName];
      }
    });
    setWeakConceptsData(weakConcepts);
    setStrengthConceptsData(strengthConcepts);
  }, [userScore, topperScore]);

  return (
    weakConceptsData &&
    strengthConceptsData && (
      <ConceptContainer>
        <Header>
          <div className="comparison__number">Comparitive strengths</div>
        </Header>
        <Concept>
          {strengthConceptsData.map((topic, index) => (
            <div key={`strong-c_${index}`}>
              <Topic>{topic}</Topic>
            </div>
          ))}
        </Concept>
        <Header1>
          <div className="comparison__number1">Comparitive Weakness</div>
        </Header1>
        <Concept>
          {weakConceptsData.map((topic, index) => (
            <div key={`weak-c_${index}`}>
              <Topic>{topic}</Topic>
            </div>
          ))}
        </Concept>
      </ConceptContainer>
    )
  );
}

export default ComparisonConcepts;

const ConceptContainer = styled.div`
  width: 100%;
  overflow: auto;
  font-size: 3vh;
`;

const Header = styled.div`
  border-bottom: 1px solid #1bbc9b;
  color: #1bbc9b;
  font-family: Inter;
  font-style: normal;
  padding-left: 2%;
  font-weight: 600;
  font-size: 22px;
  .comparison__number {
    @media screen and (min-width: 200px) and (max-width: 300px) {
      padding-top: 25%;
    }
  }
`;

const Header1 = styled.div`
  border-bottom: 1px solid #fe5252;
  color: #fe5252;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  padding-left: 2%;
  .comparison__number1 {
    color: #fe5252;
  }
`;

const Concept = styled.div`
  width: 100%;
  padding: 12px 16px;
  overflow-y: auto;
`;

const Topic = styled.div`
  width: 100%;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 18px;
  &:first-letter {
    text-transform: uppercase;
  }
`;

// const Description = styled.div`
//   width: 100%;
//   padding: 0.3%;
//   padding-left: 1.2%;
//   font-size: 13px;
//   font-weight: 500;
// `;
