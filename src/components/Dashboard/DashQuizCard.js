import React from "react";
//import './DashBoard.css';
import Loader from "../../pages/Loader"
import styled from "styled-components";
import { Link } from "react-router-dom";

const DashQuizCard= ({test}) => {
  
    return (
      <>
        {test?
          <DashStyledCard>
            <DashCardHead>
               <h1>{test.name}</h1>
            </DashCardHead>
            <DashCardContent>
              <DashContHead>
                <h3 >Quizzes:  {test.totalQuizzes}</h3>
                <ViewLink to={{pathname: `/testseries/${test._id}`}}>
                <DashPriceTag>Take Test <i className="fas fa-chevron-right"></i></DashPriceTag>
                </ViewLink>
              </DashContHead>
            </DashCardContent>
        </DashStyledCard>:
        <Loader/>
      }
      </>
    );
};

const ViewLink = styled(Link)`
text-decoration: none;
`;

const DashStyledCard = styled.div`
  height: 160px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 0px 0px 5px 5px;
  overflow: hidden;
  margin: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 760px) {
    width: 290px;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`

const DashCardHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 75px;
  background: url("https://www.teahub.io/photos/full/200-2006588_aesthetic-yellow-and-orange-background.jpg")
    no-repeat center;
  color: white;
  position: relative;
`

const DashContHead = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 11px 9.23px;
  
  h3 {
    font-size: 1.3rem;
  }
`

const DashCardContent = styled.div`
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 400px;

  overflow-y: auto;
  align-items: center;
  flex-grow: 1;
`
const DashPriceTag = styled.span`
  font-weight: 500;
  color: #17a388;
`

export default DashQuizCard;