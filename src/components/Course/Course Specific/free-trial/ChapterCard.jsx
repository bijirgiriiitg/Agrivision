import React from "react";
import styled from "styled-components";
const lock = "/images/LockSimple.svg";

function ChapterCard({ progress, chapter }) {
  let freeTopics=chapter.freeTrialTopics.length;
  
  return (
    <>
      {chapter && (
        
        <CardWrapper>
          <CardHeader className="card__header">
            <ChapterName>
            {chapter.isFreeTrial ?
            <></>
            :
            <>
            <Img src={lock} alt="locked"/>
            </>}
              <span>{chapter.name}</span>
            </ChapterName>
            <ChapterProgress>
              <span className="progressBar__value">
                {chapter.completedSubtopics + "/" + chapter.totalSubTopics}
              </span>
              <Range
                type="range"
                min="0"
                max="100"
                value={(chapter.completedSubtopics/chapter.totalSubTopics)*100}
                onChange={()=>{}}
              />
            </ChapterProgress>
          </CardHeader>
          <CardContent>
            <ul className="twoColsVerticalScroll">
              {chapter.topics.map((topic,i) => {
                return (
                  i<freeTopics?
                  <>
                  <li key={i}>{topic.name}</li>
                  </>
                  :
                  <>
                    <li style={{opacity: "50%"}}>
                      {topic.name}
                    </li>
                  </>
                )
              })}

            </ul>
          </CardContent>
        </CardWrapper>
      )}
    </>
  );
}

export default ChapterCard;

const Img = styled.img`
  margin: 0px 8px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 95.5%;
  height: auto;
  background-color: white;
  border-radius: 5px;
  margin: 30px;
  cursor:pointer;
`;

const CardHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #1bbc9b;
`;

const ChapterName = styled.div`
  items-align: center;
  margin: 1rem;
  flex-grow: 1;
  font-family: Poppins;
  font-style: Regular;
  font-size: 24px;
`;

const ChapterProgress = styled.div`
  margin: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .progressBar__value {
    margin-left: auto;
    margin-right: 1.5rem;
  }
`;

const Range = styled.input`
  pointer-events: none;
  width: 60%;
  margin-left: auto;
  margin-right: 10px;
  &::-webkit-slider-thumb {
    opacity: 0;
  }
`;

const CardContent = styled.div`
  padding: 25px;
  flex-grow: 1;
  width: 100%;
  height: 200px;
  overflow-y: auto;

  ul {
    padding: 0;
    margin: 0;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 50%;
    -moz-column-width: 50%;
    column-width: 50%;
    font-family: Poppins;
  }
  @media screen and (max-width: 600px) {
    ul {
      column-count: 1;
    }
  }
  li {
    padding: 10px;
    &:hover {
      color: green;
    }
  }
`;

