import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function CollegeCard({ college }) {

  return (
    <>
    {college && college.degree.map((deg,i)=>{
        return(<CollegeCardContainer key={i}>
          <CardBody>
            <CollegeInfo>
              <div className="college__photo">
                <img src="/images/college_placeholder_1.png" alt="college_img" />
              </div>
              <div className="college__info">
                <CollegeTitle>{college.name}</CollegeTitle>
                <CollegeLocation>{college.location}</CollegeLocation>
                <CollegeRating>
                  <Rating value={college.ratings[0] / 2} />
                  {college.ratings[0]}/10
                </CollegeRating>
              </div>
              <div className="college__viewDetail">
                <Link to={"/academics/colleges/" + college._id + "?d=" + i}>
                  <StyledButton>View Details</StyledButton>
                </Link>
              </div>
            </CollegeInfo>
            <CourseDetails>

              <span>Degree: {deg.name}</span>
              {/* <span>Course Fees: {college.courseFees}</span> */}
              {/* <span>Duration: {college.Duration}</span> */}
            </CourseDetails>
          </CardBody>
          <Details>
            <div className="collegeCard__btn">
              <RoundButton>
                <img src="/images/placements_1.svg" alt="placement_button" />
              </RoundButton>
              Placement
            </div>
            <div className="collegeCard__btn">
              <RoundButton>
                <img src="/images/CurrencyInr.svg" alt="fees_course_button" />
              </RoundButton>
              Fees & Courses
            </div>
            <div className="collegeCard__btn">
              <RoundButton>
                <img src="/images/cut_off_1.svg" alt="cutOff_button" />
              </RoundButton>
              Cut off
            </div>
            <div className="collegeCard__btn">
              <RoundButton>
                <img src="/images/admission_1.svg" alt="admission_button" />
              </RoundButton>
              Admission
            </div>
            <div className="collegeCard__btn">
              <RoundButton>
                <img src="/images/star_1.svg" alt="review_button" />
              </RoundButton>
              Reviews
            </div>
          </Details>
        </CollegeCardContainer>)})
      }
     </>
    );
}

const CollegeCardContainer = styled.div`
  // height: 284px;
  width: 100%;
  background-color: white;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1.8fr 1fr;
  row-gap: 5px;
  padding: 1em;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const CollegeInfo = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 5.47fr 1.3fr;

  .college__viewDetail {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const CollegeTitle = styled.div`
  font-weight: 600;
  margin: 0.5em;
`;

const CollegeLocation = styled.div`
  font-size: 0.875em;
  margin: 0.5em;
`;

const CollegeRating = styled.div`
  font-size: 0.875em;
  margin: 0.5em;
  .college__starRating {
    margin-right: 1em;
  }
  span > .active__star {
    color: #ffcc03;
  }
`;

const CourseDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 0.875em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  span {
    margin: 0 1.5em;
  }
`;
const Details = styled.div`
  flex-basis: 115px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-top: 1px solid rgba(0, 0, 0, 0.09);
  .collegeCard__btn {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 0.75em;
  }
`;

const RoundButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  color: white;
`;

const StyledButton = styled.button`
  background: linear-gradient(to right, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  color: white;
  padding: 5px 10px;
  margin: 0.25em;
  font-size: fit-width;
  border-radius: 2px;
  border: none;
`;
export default CollegeCard;
