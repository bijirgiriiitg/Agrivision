import { useState, useEffect } from "react";
import styled from "styled-components";
import SolutionMain from "./SolutionMain";
import SolutionSide from "./SolutionSide";
import Loader from "../../../pages/Loader";
import { solutionArray, sectionArray, scrollToQuestion } from "./helpers";
import { baseURL } from "../../../Apis";

// import data from "./solution-data";

const Solution = ({ quizId }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState({
    byClick: true,
    bySize: false,
  });
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [allSolutions, setAllSolutions] = useState(null);
  const [sections, setSections] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [username, setusername] = useState(null)
  const handleToggleClick = () => {
    setIsSideBarOpen({ ...isSideBarOpen, byClick: !isSideBarOpen.byClick });
  };

  const updateSection = (questionIndex) => {
    if (sections) {
      const section = sections.filter((section) => {
        return (
          section.startIndex <= questionIndex &&
          section.startIndex + section.quesCount > questionIndex
        );
      });
      setActiveSection(section[0].name);
    }
  };

  useEffect(() => {
    if (data) {
      const allSols = solutionArray(data);
      setAllSolutions(allSols);
      const allSections = sectionArray(data);
      setSections(allSections);
      if (allSections) {
        setActiveSection(allSections[0].name);
      }
    }
    // eslint-disable-next-line
  }, [data]);
  useEffect(() => {
    fetch(`${baseURL}/quiz/${quizId}/analysis?queryParam=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        
        (result) => {
          setusername(result.data.userName)
          setData(result.data.quiz);
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
      allSolutions && (
        <Wrapper>
          {solutionArray && (
            <Container>
              <SolutionMain
                isSideBarOpen={isSideBarOpen}
                handleToggleClick={handleToggleClick}
                solutions={allSolutions}
                sectionArray={sections}
                scrollToQuestion={scrollToQuestion}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <SolutionSide
                username={username}
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
                handleToggleClick={handleToggleClick}
                solutions={allSolutions}
                scrollToQuestion={scrollToQuestion}
                updateSection={updateSection}
              />
            </Container>
          )}
        </Wrapper>
      )
    );
  }
};

const Container = styled.div`
  // height: calc(100% - 62px);
  height: 80vh;
  width: 100%;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
`;
export default Solution;
