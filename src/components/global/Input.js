import styled from "styled-components";

const Input = ({ complete, total }) => {
  return (
    <InputWrapper>
      <StyledP>
        <ColoredSpan>{complete}</ColoredSpan>/<span>{total}</span>
      </StyledP>
      <Range type="range" min="0" max="100" value={(complete * 100) / total} />
    </InputWrapper>
  );
};
const Range = styled.input`
  pointer-events: none;
  width: 100%;
  &::-webkit-slider-thumb {
    opacity: 0;
  }
`;
const ColoredSpan = styled.span`
  color: #1bbc9b;
`;
const StyledP = styled.p`
  span {
    font-weight: 600;
  }
`;
const InputWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

export default Input;
