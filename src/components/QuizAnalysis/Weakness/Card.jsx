import styled from "styled-components";

const Card = ({
  totalIncorrect,
  maxSkippedTopic,
  maxIncorrectTopic,
  additionalTopics,
}) => {
  return (
    <StyledCard>
      <Head>
        <HeadText>
          <span>{totalIncorrect} Incorrect answers</span>
        </HeadText>
      </Head>
      <Content>
        <Weakness>
          <WeaknessArea>
            <span>You did not attempt most questions from</span>
          </WeaknessArea>
          <WeaknessTopic>
            <span>{maxSkippedTopic}</span>
          </WeaknessTopic>
        </Weakness>

        <Weakness>
          <WeaknessArea>
            <span>You attempted most questions incorrect from</span>
          </WeaknessArea>
          <WeaknessTopic>
            <span>{maxIncorrectTopic}</span>
          </WeaknessTopic>
        </Weakness>

        <Weakness>
          <WeaknessArea>
            <span>Additional topics you need to work on</span>
          </WeaknessArea>
          <WeaknessTopic>
            <span>{additionalTopics}</span>
          </WeaknessTopic>
        </Weakness>
      </Content>
    </StyledCard>
  );
};
const StyledCard = styled.div`
  width: 100%;
  // height: 100%;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  overflow: auto;
  background-color: white;
  height: 100%;
`;
const Head = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
`;
const HeadText = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;

  color: #fe5252;
`;
const Weakness = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5 10;
`;

const WeaknessArea = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;

const WeaknessTopic = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
  margin-right: 20px;
  color: #fe5252;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 10px 45px;
  font-size: 12px;
  font-weight: 400;
`;
export default Card;
