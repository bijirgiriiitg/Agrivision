import styled from "styled-components";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../Util/useWindowDimensions";
import CancelIcon from "@material-ui/icons/Cancel";

const SolutionSide = ({
  username,
  isSideBarOpen,
  setIsSideBarOpen,
  handleToggleClick,
  solutions,
  scrollToQuestion,
  updateSection,
}) => {
  const [translate, setTranslate] = useState("100%");
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1050) {
      setIsSideBarOpen({ ...isSideBarOpen, bySize: false, byClick: false });
    } else {
      setIsSideBarOpen({ ...isSideBarOpen, bySize: true });
    }
    // eslint-disable-next-line
  }, [width]);

  useEffect(() => {
    if (isSideBarOpen.byClick) {
      setTranslate("0%");
    } else {
      setTranslate("100%");
    }
  }, [isSideBarOpen]);

  // functionality for status count
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [notVisitedCount, setNotVisitedCount] = useState(0);

  const updateStatusCount = () => {
    let correctCount = 0;
    let incorrectCount = 0;
    let notVisitedCount = 0;

    solutions.forEach((element) => {
      switch (element.status) {
        case 0:
          notVisitedCount++;
          break;
        case 1:
          correctCount++;
          break;
        case -1:
          incorrectCount++;
          break;
        default:
          return;
      }
    });
    setCorrectCount(correctCount);
    setIncorrectCount(incorrectCount);
    setNotVisitedCount(notVisitedCount);
  };

  useEffect(() => {
    if (solutions) {
      updateStatusCount();
    }
    // eslint-disable-next-line
  }, [solutions]);

  //functionality for navigation questions via sidebar
  return (
    <>
      <Wrapper isSideBarOpen={isSideBarOpen} translate={translate}>
        <Name>
          <img src="/images/checkout-placeholder.svg" alt="avatar" />
          <p>{username.join(" ")}</p>
          <div className="cross" onClick={handleToggleClick}>
            <CancelIcon />
          </div>
        </Name>
        <Stats>
          <StatCount count={correctCount} text="Correct" type={1} />
          <StatCount count={incorrectCount} text="Incorrect" type={-1} />
          <StatCount count={notVisitedCount} text="Not Visited" type={0} />
        </Stats>
        <QuestionCountContainer>
          {solutions &&
            solutions.map((ques) => (
              <QuestionCount
                count={ques.index + 1}
                key={ques.index}
                type={ques.status}
                scrollToQuestion={scrollToQuestion}
                updateSection={updateSection}
              />
            ))}
        </QuestionCountContainer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  height: 100%;
  display: ${(props) =>
    props.isSideBarOpen.byClick && props.isSideBarOpen.bySize ? "flex" : "none"};
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  min-width: 350px;
  background-color: white;
  ${(props) => {
    if (!props.isSideBarOpen.bySize) {
      return `display:flex;max-width:450px;position:absolute; top:0;right:0;transform:translateX(${props.translate});`;
    }
  }}
`;

const StatCount = ({ count, type, text }) => {
  return (
    <StatCountStyles type={type}>
      <span>{count}</span>
      <p>{text}</p>
    </StatCountStyles>
  );
};
const StatCountStyles = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  span {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    ${(props) => ColorForCount(props.type)};
  }
  p {
    color: black;
  }
`;
const ColorForCount = (type) => {
  switch (type) {
    case 1:
      return `background-color:#24A35A;color:white;border:2px solid #24A35A;`;
    case 0:
      return `background-color:white;color:black;border:2px solid black;`;
    case -1:
      return `background-color:#FF5656;color:white;border:2px solid #FF5656;`;
    default:
      return `background-color:white;color:black;border:2px solid black;`;
  }
};
const Stats = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 12px;
  width: 100%;
  padding: 4px 32px;
  div {
    &:nth-child(1),
    &:nth-child(3) {
      grid-column: 1/2;
    }
    &:nth-child(2),
    &:nth-child(4) {
      grid-column: 2/3;
    }
    &:nth-child(5) {
      grid-column: 1/3;
    }
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  width: 100%;
  margin: 12px auto;
  justify-content: start;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 12px;
  }
  p {
    font-size: 20px;
    font-weight: 600;
  }
  //temporary
  .cross {
    color: #1bbc9b;
    margin-left: auto;
    cursor: pointer;
    svg {
      transform: scale(1.5);
    }
  }
`;
const QuestionCountContainer = styled.div`
  padding: 0px 16px 0px 24px;
  max-height: 310px;
  width: 100%;
  margin: 12px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 40px);
  gap: 12px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #16a086;
    border-radius: 12px;
  }
`;
const QuestionCount = ({ type, count, scrollToQuestion, updateSection }) => {
  return (
    <QuestionCountStyle
      type={type}
      onClick={() => {
        scrollToQuestion(count - 1);
        updateSection(count - 1);
      }}
    >
      {count}
    </QuestionCountStyle>
  );
};
const QuestionCountStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) => ColorForCount(props.type)};
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export default SolutionSide;
