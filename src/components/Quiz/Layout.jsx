import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Side from "./Side";
import Main from "./Main";
import Loader from "../../pages/Loader";
import { questionArray, sectionArray, submitQuiz } from "./helpers";
import { baseURL } from "../../Apis";
import { useHistory } from "react-router";

const Layout = ({ data, error, isLoaded, quizId, start }) => {

  let history = useHistory();
  const [isSideBarOpen, setIsSideBarOpen] = useState({
    byClick: true,
    bySize: false,
  });
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [allQuestions, setAllQuestions] = useState(null);
  const [sections, setSections] = useState(null);
  const [answer, setAnswer] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [quizState, setQuizState] = useState(0); // 0- not started, 1 - ongoing, 2-ended
  const [loader, setloader] = useState(false)
  const handleToggleClick = () => {
    setIsSideBarOpen({ ...isSideBarOpen, byClick: !isSideBarOpen.byClick });
  };
  useEffect(() => {
    if (data) {
      const allQues = questionArray(data);
      setAllQuestions(allQues);
      setSections(sectionArray(data));
      if (allQues[0]) {
        setCurrentQuestion({
          ...allQues[0],
          status: "not-answered",
        });
      }
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    if (data) {
      if (data.quizType === 1) {
        setQuizState(1);
          const secondsLeft = (((data.totalTime*60000+start) - Date.now()) / 1000) | 0;
          setTimeLeft(secondsLeft);
          if(secondsLeft<1){
            setQuizState(2)
          }
          let interval = setInterval(() => {
            setTimeLeft((seconds) => {
              if (seconds < 1) {
                setQuizState(2);
                submitQuiz(quizId, baseURL, data.quizType, history,setloader);
                clearInterval(interval);
                return 0;
              }
              return seconds - 1;
            });
          }, 1000);
          return () => clearInterval(interval);
      } else {
        if (Date.now() > data.endTime) {
          setQuizState(2);
        } else if (Date.now() > data.startTime) {
          setQuizState(1);
          const secondsLeft = ((data.endTime - Date.now()) / 1000) | 0;
          setTimeLeft(secondsLeft);
          let interval = setInterval(() => {
            setTimeLeft((seconds) => {
              if (seconds < 1) {
                setQuizState(2);
                submitQuiz(quizId, baseURL, data.quizType, history,setloader);
                clearInterval(interval);
                return 0;
              }
              return seconds - 1;
            });
          }, 1000);

          return () => clearInterval(interval);
        } else {
          setQuizState(0);
          const secondsLeft = ((data.startTime - Date.now()) / 1000) | 0;
          setTimeLeft(secondsLeft);
          let interval = setInterval(() => {
            setTimeLeft((seconds) => {
              if (seconds < 1) {
                setQuizState(2);
                clearInterval(interval);
                return 0;
              }
              return seconds - 1;
            });
          }, 1000);

          return () => clearInterval(interval);
        }
      }
    }
    // eslint-disable-next-line
  }, [data, quizState]);

  useEffect(() => {
    if (currentQuestion) {
      setAnswer(currentQuestion.answered);
    }
  }, [currentQuestion]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || !data) {
    return <Loader />;
  } else {

    if (quizState === 0) {
      //Quiz Yet to Start
      return (
        <div>
          <Header examName={data.name} timeLeft={timeLeft} />
          <div>Your Quiz will start shortly</div>
        </div>
      );
    } else if (quizState === 1) {
      return (
        data && (
          <Wrapper>
            <Header examName={data.name} timeLeft={timeLeft} calculator={data.calculator}/>
            {allQuestions && (
              <Container>
                <Main
                  isSideBarOpen={isSideBarOpen}
                  handleToggleClick={handleToggleClick}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  allQuestions={allQuestions}
                  setAllQuestions={setAllQuestions}
                  answer={answer}
                  setAnswer={setAnswer}
                  sectionArray={sections}
                  quizId={quizId}
                />
                <Side
                  isSideBarOpen={isSideBarOpen}
                  setIsSideBarOpen={setIsSideBarOpen}
                  handleToggleClick={handleToggleClick}
                  allQuestions={allQuestions}
                  setCurrentQuestion={setCurrentQuestion}
                  currentQuestion={currentQuestion}
                  setAllQuestions={setAllQuestions}
                  quizId={quizId}
                  quizType={data.quizType}
                  submitQuiz={submitQuiz}
                  loader={loader}
                  setloader={setloader}
                />
              </Container>
            )}
          </Wrapper>
        )
      );
    } else {
      //Quiz Ended
      return (
        <>
          <Header examName={data.name} timeLeft={timeLeft} />
          <div>Test Over. </div>
        </>
      );
    }
  }
};

const Container = styled.div`
  height: calc(100% - 62px);
  width: 100%;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export default Layout;
