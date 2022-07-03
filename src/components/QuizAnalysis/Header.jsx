import styled from "styled-components";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const Header = ({quizname}) => {
  const history = useHistory();
  const handleBack = () => {
    history.push("/testseries");
    // history.goBack();
  };
  return (
    <StyledNav>
      <KeyboardBackspace onClick={handleBack} className="analysis__backBtn" />
      <Title>{quizname} analysis</Title>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  color: white;
  font-size: 20px;
  @media (max-width: 550px) {
    font-size: 16px;
    padding: 16px 16px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
    padding: 16px 12px;
  }
  @media (max-width: 310px) {
    font-size: 14px;
    padding: 10px 10px;
  }

  .analysis__backBtn {
    &:hover {
      cursor: pointer;
    }
  }
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 15px;
`;
export default Header;
