import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Markdown from "../../Util/Markdown";

const SolutionMain = ({
  isSideBarOpen,
  handleToggleClick,
  solutions,
  sectionArray,
  scrollToQuestion,
  activeSection,
  setActiveSection,
}) => {
  return (
    solutions &&
    sectionArray && (
      <MainCont isSideBarOpen={isSideBarOpen}>
        <Toggle onClick={handleToggleClick}>
          <ArrowBackIosIcon />
        </Toggle>
        <SectionHeader>
          <div className="sections">
            <StyledLabel>Sections :</StyledLabel>
            {sectionArray.map((section, index) => (
              <SectionButton
                active={activeSection === section.name} //TODO
                onClick={() => {
                  setActiveSection(section.name);
                  scrollToQuestion(section.startIndex);
                }}
                key={index}
              >
                <span className="laptop">{section.name}</span>
                <span className="phone">{section.name[0]}</span>
              </SectionButton>
            ))}
          </div>
          <div className="language">
            <StyledLabel htmlFor="language">View in :</StyledLabel>
            <StyledSelect id="language" name="language">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </StyledSelect>
          </div>
        </SectionHeader>
        <SolutionContent solutions={solutions} />
      </MainCont>
    )
  );
};

const SolutionContent = ({ solutions }) => {
  return (
    <Wrapper>
      {solutions &&
        solutions.map((currentQuestion, index) => {
          return (
            <div key={`solution_${index}`} id={`solution_${index}`}>
              <MarkingScheme>
                <StyledLabel>Marking Scheme :</StyledLabel>
                <div>
                  Correct
                  <span className="hide-for-small-screen"> Response</span> :
                  <span>+{currentQuestion.marking}</span>
                </div>
                <div>
                  Incorrect{" "}
                  <span className="hide-for-small-screen"> Response</span>:{" "}
                  <span>-{currentQuestion.negMarking}</span>
                </div>
              </MarkingScheme>
              <QuestionContainer
                className={`solution__question__${currentQuestion.index}`}
                key={index}
              >
                <QuestionHeader>
                  <div className="number">
                    Question <span>{currentQuestion.index + 1}</span>
                  </div>
                  <div className="type">
                    {currentQuestion.questionType === 0
                      ? "Single Choice Type Question"
                      : currentQuestion.questionType === 1
                      ? "Multiple Correct Type Question"
                      : "NAT type question"}
                  </div>
                </QuestionHeader>
                <Question>
                  <div className="ques"><Markdown source={currentQuestion.question}/></div>
                  <div className="options">
                    {currentQuestion.questionType===2? "Your answer: " + (currentQuestion.markedAns? currentQuestion.markedAns:"Not Attempted"):currentQuestion.options.map((data, index) => (
                      <div className="option" key={index}>
                        <input
                          type={currentQuestion.questionType === 0 ? "radio" : "checkbox"}
                          id={`ques_${currentQuestion.index}_option_${index}`}
                          name={`ques_${currentQuestion.index}_answer`}
                          value={`option_${index}`}
                          checked={
                            currentQuestion.markedAns
                              ? currentQuestion.markedAns.includes(index + 1)
                              : false
                          }
                          disabled={true}
                        />
                        {(
                          currentQuestion.markedAns
                            ? currentQuestion.markedAns.includes(index + 1)
                            : false
                        ) ? (
                          <>
                            <label
                              className={
                                currentQuestion.markedAns.sort().join(",") ===
                                currentQuestion.correctAnswer.sort().join(",")
                                  ? "green"
                                  : "chosen"
                              }
                              htmlFor={`ques_${currentQuestion.index}_option_${index}`}
                            >
                             <div><Markdown source={data}/></div>
                            </label>
                            <label
                              className={`${
                                currentQuestion.markedAns.sort().join(",") ===
                                currentQuestion.correctAnswer.sort().join(",")
                                  ? "green"
                                  : "chosen"
                              } chosen__text`}
                            >
                              Your Answer
                            </label>
                          </>
                        ) : (
                          <label
                            htmlFor={`ques_${currentQuestion.index}_option_${index}`}
                          >
                            <div><Markdown source={data}/></div>
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                  <CorrectAnswer>
                    <div className="correct__answer__header">
                      Correct Answer
                    </div>
                    {currentQuestion.questionType === 2?
                      <div className="correct__answer">
                        {currentQuestion.correctAnswer.length===2?
                          `${currentQuestion.correctAnswer[0]} - ${currentQuestion.correctAnswer[1]}`:
                          currentQuestion.correctAnswer.length===4?
                          `${currentQuestion.correctAnswer[0]} - ${currentQuestion.correctAnswer[1]} , ${currentQuestion.correctAnswer[2]} - ${currentQuestion.correctAnswer[3]}`:
                          `${currentQuestion.correctAnswer[0]}`
                        }
                      </div>:
                      currentQuestion.correctAnswer.map((answer,i)=>{
                        return (<div key={i} className="correct__answer">
                          <div><Markdown source={currentQuestion.options[answer - 1]}/></div>
                        </div>);
                      })
                      }
                  </CorrectAnswer>
                  <SolutionReasoning>
                  {(currentQuestion.explanation || currentQuestion.explanationImage) && <div className="reasoning__header">Reasoning</div>}
                    <div className="reasoning__body">
                    {currentQuestion.explanation && <div><Markdown source={currentQuestion.explanation}/></div>}
                    </div>
                    <img src={currentQuestion.explanationImage} alt=""></img>
                  </SolutionReasoning>
                </Question>
              </QuestionContainer>
            </div>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const SectionHeader = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    padding: 12px 8px;
  }
  @media (max-width: 650px) {
    padding: 12px 4px;
  }
  @media (max-width: 400px) {
    padding: 10px 0px;
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  margin-top: 12px;
`;
const QuestionHeader = styled(SectionHeader)`
  border-bottom: 1px solid #1bbc9b;
  color: #1bbc9b;
  .number {
    font-size: 20px;
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
  .type {
    font-size: 16px;
    @media (max-width: 700px) {
      font-size: 14px;
    }
  }
`;
const Question = styled.div`
  width: 100%;
  color: #1bbc9b;
  padding: 12px 16px;
  @media (max-width: 700px) {
    padding: 12px 12px;
  }
  @media (max-width: 650px) {
    padding: 12px 4px;
  }
  @media (max-width: 400px) {
    padding: 12px 0px;
  }
  .ques {
    font-size: 20px;
    font-weight: 500;
    margin: 12px 0px;
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
  .options {
    .option {
      margin: 16px 0px;
      input {
        margin-right: 24px;
      }
      label {
        font-size: 20px;
        font-weight: 500;
        @media (max-width: 700px) {
          font-size: 16px;
        }
      }
      .chosen {
        color: #ff5656 !important;
      }
      .green {
        color: green !important;
      }
      .chosen__text {
        margin-left: 1rem;
        margin-right: auto;
        font-size: 1rem;
      }
    }
  }
`;
const CorrectAnswer = styled.div`
  margin: 0.5rem 0;
  .correct__answer__header {
    display: flex;
    flex-direction: row;
  }
  .correct__answer__header: after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
    margin-left: 10px;
  }

  .correct__answer {
    font-size: 1.5rem;
  }
`;

const SolutionReasoning = styled.div`
  color: #000000;
  margin: 0.5rem 0;
  .reasoning__header {
    margin: 0.5rem 0;
    color: #000000;
  }
  .reasoning__body {
    margin: 0.5rem 0;
  }
`;
const MainCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: ${(props) => (props.isSideBarOpen.byClick ? "1/2" : "1/3")};
  grid-column: ${(props) => (props.isSideBarOpen.bySize ? "" : "1/3")};
  overflow-y: auto;
  overflow-x: hidden;
`;
const Toggle = styled.div`
  position: absolute;
  top: 70px;
  right: 0px;
  width: 30px;
  height: 36px;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1bbc9b;
  border: 2px solid #1bbc9b;
  border-right: none;
  /* transform: translateX(100%); */
  svg {
    margin-left: 12px;
  }
`;

const SectionButton = styled.button`
  padding: 6px 16px;
  font-size: 16px;
  background-color: #e5f8ff;
  border: 2px solid ${(props) => (props.active ? "#1bbc9b" : "#e5f8ff")};
  border-radius: 4px;
  color: #1bbc9b;
  font-weight: 500;
  cursor: pointer;
  margin: 0px 16px;
  .laptop {
    display: inline-block;
  }
  .phone {
    display: none;
  }
  @media (max-width: 750px) {
    margin: 0px 8px;
  }
  @media (max-width: 700px) {
    margin: 0px 4px;
    padding: 6px 12px;
  }
  @media (max-width: 650px) {
    margin: 0px 4px;
    padding: 6px 24px;
    .laptop {
      display: none;
    }
    .phone {
      display: inline-block;
    }
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    padding: 6px 16px;
  }
  @media (max-width: 450px) {
    padding: 6px 10px;
  }
  @media (max-width: 400px) {
    padding: 2px 8px;
    font-size: 12px;
    margin: 0px 2px;
  }
`;
const StyledLabel = styled.label`
  color: #1bbc9b;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
const StyledSelect = styled.select`
  padding: 8px 16px;
  background-color: #e5f8ff;
  border: 2px solid #e5f8ff;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin-left: 8px;
  color: #1bbc9b;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    padding: 8px 12px;
  }
  @media (max-width: 450px) {
    padding: 8px 8px;
  }
  @media (max-width: 400px) {
    padding: 4px 6px;
    font-size: 12px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
  }

  option {
    text-transform: uppercase;
    outline: none;
    border: none;
  }
`;
const MarkingScheme = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  @media (max-width: 700px) {
    padding: 12px 8px;
  }
  @media (max-width: 650px) {
    padding: 12px 4px;
  }
  @media (max-width: 400px) {
    padding: 12px 0px;
  }

  div {
    margin: 0px 8px;
    color: #1bbc9b;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 700px) {
      margin: 0px 4px;
    }
    @media (max-width: 650px) {
      font-size: 14px;
      .hide-for-small-screen {
        display: none;
      }
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
    span {
      margin-left: 8px;
      @media (max-width: 700px) {
        margin-left: 4px;
      }
    }
  }
`;
export default SolutionMain;
