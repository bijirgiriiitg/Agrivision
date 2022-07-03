import styled from "styled-components";
import device from "../Util/MediaQuery";

export const SubHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 500;
  padding: 0;
  ${device.tablet} {
    font-size: 1.5rem;
  }
`;
