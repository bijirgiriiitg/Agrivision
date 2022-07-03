import React from "react";
import styled from "styled-components";

function WeakConcepts({ weakConceptsData }) {
  return (
    <WeakConceptContainer>
      <Header>
        <div className="number">Weak Concepts</div>
      </Header>
      <Concept>
        {weakConceptsData.map((data, index) => (
          <div key={`weak-c_${index}`}>
            <Topic>{data.topicName}</Topic>
            {/* {data.concepts.map((concept) => (
              <Description>{concept}</Description>
            ))} */}
          </div>
        ))}
      </Concept>
    </WeakConceptContainer>
  );
}

export default WeakConcepts;

const WeakConceptContainer = styled.div`
  width: 100%;
  overflow: auto;
  font-size: 3vh;
`;

const Header = styled.div`
  border-bottom: 1px solid #1bbc9b;
  color: #1bbc9b;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  // @media (max-width: 700px) {
  //   padding: 12px 8px;
  // }
  // @media (max-width: 650px) {
  //   padding: 12px 4px;
  // }
  // @media (max-width: 400px) {
  //   padding: 10px 0px;
  // }
`;

const Concept = styled.div`
  width: 100%;
  padding: 12px 16px;
  overflow-y: auto;
`;

const Topic = styled.div`
  width: 100%;
  padding: 10px 16px;
  &:first-letter {
    text-transform: uppercase;
  }
`;

// const Description = styled.div`
//   width: 100%;
//   padding: 6px 16px;
//   font-size: 13px;
// `;
