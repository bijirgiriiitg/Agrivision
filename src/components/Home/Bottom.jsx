import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "../global/Global";
import device from "../Util/MediaQuery";
const data = [
  {
    text: "Exam Categories",
    count: 50,
  },
  {
    text: "Daily Live Classes",
    count: 100,
  },
  {
    text: "Video Lessons",
    count: 50,
  },
  {
    text: "Test Series",
    count: 22,
  },
];

const Bottom = () => {
  return (
    <BottomWrapper>
      <BottomContainer>
        <div>
          <Header>Start learning with AgriVision4U</Header>
          <Link to="/learning">
            <Button1>Start Learning</Button1>
          </Link>
        </div>
        <DataItems>
          {data.map((item, index) => (
            <StyledDataItem key={index}>
              <p>{item.text}</p>
              <span>
                {item.count}
                <span className="plus">+</span>
              </span>
            </StyledDataItem>
          ))}
        </DataItems>
      </BottomContainer>
    </BottomWrapper>
  );
};
const BottomWrapper = styled.section`
  background: linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  );
`;
const BottomContainer = styled(Container)`
  min-height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${device.laptopL} {
    justify-content: center;
    flex-direction: column;
  }
  ${device.laptop} {
    flex-direction: column;
    justify-content: center;
  }
`;
const DataItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  margin: 2rem 0;
  ${device.laptop} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;
const Header = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  width: 19rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${device.laptopL} {
    text-align: center;
  }
  ${device.laptop} {
    margin-bottom: 1rem;
  }
`;
const StyledDataItem = styled.div`
  padding: 4px 12px;
  color: white;
  text-align: center;
  p {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }
  span {
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
  }
  .plus {
    font-weight: 400;
  }
  ${device.laptop} {
    :not(:last-child) {
      border-bottom: 1px solid white;
      margin-bottom: 1rem;
    }
  }
`;
const Button1 = styled(Button)`
  ${device.laptopL} {
    margin: auto;
  }
`;

export default Bottom;
