import Input from "../global/Input";
import styled from "styled-components";

const chapters = [
  {
    title: "Foundations",
    total: 1000,
    completed: 600,
    topics: [
      "Intro to negative numbers",
      "Subtracting -ve",
      "Number opposites",
      "Multiply positive numbers",
      "Number opposites",
      "Why a negative times a negative makes sense",
      "Adding number",
      "Dividing positive and negative numbers",
      "Adding & subtracting",
    ],
  },
  {
    title: "Foundations",
    total: 1000,
    completed: 600,
    topics: [
      "Intro to negative numbers",
      "Subtracting -ve",
      "Number opposites",
      "Multiply positive numbers",
      "Number opposites",
      "Why a negative times a negative makes sense",
      "Adding number",
      "Dividing positive and negative numbers",
      "Adding & subtracting",
    ],
  },
  {
    title: "Foundations",
    total: 1000,
    completed: 600,
    topics: [
      "Intro to negative numbers",
      "Subtracting -ve",
      "Number opposites",
      "Multiply positive numbers",
      "Number opposites",
      "Why a negative times a negative makes sense",
      "Adding number",
      "Dividing positive and negative numbers",
      "Adding & subtracting",
    ],
  },
];

const Foundation = () => {
  return (
    <>
      <Wrapper>
        {chapters.map((chapter, index) => (
          <FoundationContainer key={index}>
            <Heading>
              <h3>{chapter.title}</h3>
              <Input complete={chapter.completed} total={chapter.total} />
            </Heading>
            <Topics>
              {chapter.topics.map((topic, index) => (
                <Topic topic={topic} key={index} />
              ))}
            </Topics>
          </FoundationContainer>
        ))}
      </Wrapper>
    </>
  );
};

const Topic = ({ topic }) => {
  return <StyledTopic>{topic}</StyledTopic>;
};

export const Wrapper = styled.div`
  overflow-y: scroll;
  height: inherit;
  width: 100%;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #16a086;
    border-radius: 12px;
  }
`;

const FoundationContainer = styled.div`
  /* max-width: 990px; */
  width: 95%;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem 2rem;
  margin: 1rem auto;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d1dbe5;
  padding-bottom: 0.5rem;
  margin-bottom: 8px;
  p {
    text-align: right;
  }
`;

const Topics = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledTopic = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default Foundation;
