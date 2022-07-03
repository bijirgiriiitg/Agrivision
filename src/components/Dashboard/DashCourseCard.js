import styled from "styled-components";
import PictureAsPdfOutlinedIcon from "@material-ui/icons/PictureAsPdfOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

const style = {
  borderRadius: 20,
  height: 6,
  backgroundColor: "grey",
  width: 275,
 };

const DashCourseCard = ({ course }) => {

    return (
      <>
        {course && (
          <div>
            <StyledCard>
              <Bg>
                <Head>
                  <HeadText>
                    <span>1.2k</span> Students
                  </HeadText>
                  <HeadText>
                    <span>{course.duration}</span> Hrs
                  </HeadText>
                </Head>
                <BgTitle>{course.name}</BgTitle>
              </Bg>
              <Content>
                <Topic>
                  <PictureAsPdfOutlinedIcon />
                  {course.totalChapters} Chapter Notes
                </Topic>
                <Topic>
                  <YouTubeIcon />
                  30+ Video Lectures
                </Topic>
                <Topic>
                  <BookmarkBorderIcon />
                  100+ MCQ Questions
                </Topic>
                <Topic>
                  <BorderColorIcon />
                  10 Full Tests
                </Topic>
                <DashCourseCardBottom>
                  <p>Progress</p>
                  <div className="flexDiv">
                  <LinearProgress variant="determinate" style={style} value={((course.completedSubTopics && course.totalSubTopics)? course.completedSubTopics/course.totalSubTopics:0)*100} />
                    <span>{(((course.completedSubTopics && course.totalSubTopics)? course.completedSubTopics/course.totalSubTopics:0)*100).toFixed(0)}%</span>
                  </div>
                  <div className="txt-alg-center">
                    <ViewLink to={{pathname: `/course/${course._id}`}}>
                      <button>View Courses</button>
                    </ViewLink>
                  </div>
                </DashCourseCardBottom>
              </Content>
            </StyledCard>
          </div>
        )}
      </>
    );
 }
const StyledCard = styled.div`
  width: 335px;

  border-radius: 7px;
  overflow: hidden;

  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;


`;
const Bg = styled.div`
  width: 100%;
  height: 150px;
  background: url("/images/card-bg.svg") no-repeat center;
  color: white;
  position: relative;
`;
const ViewLink = styled(Link)`
  text-decoration: none;
`;
const Head = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const HeadText = styled.div`
  padding: 0.6rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
`;
const BgTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  color: black;
  position: absolute;
  padding: 12px 23px;
  border-radius: 4px 4px 0px 0px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px 10px 45px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;

`;
const Topic = styled.div`
  margin: 15px 0px;
  display: flex;
  align-items: center;
`;

const DashCourseCardBottom = styled.div`
  margin-top: 0.8rem;
  width: 100%;
  grid-column: 1/3;
  button {
    background-color: white;
    border: none;
    color: #1bbc9b;
    margin-top: 9px;
    font-size: 17px;
  }

  .flexDiv {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .txt-alg-center {
    text-align: center;
  }
  

`
export default DashCourseCard;
