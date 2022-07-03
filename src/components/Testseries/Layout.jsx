import styled from "styled-components";
// import Foundation from "../Course/Foundation";
import ContentlayOut from "./ContentLayOut";
import CourseCaraousel from "../Course/CourseCaraousel";

function Layout() {
  return (
      <CourseContentWrapper>
            <CourseCaraousel query="testseries"/>
                <ContentlayOut />
        </CourseContentWrapper>
  );
};
const CourseContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`


export default Layout;
