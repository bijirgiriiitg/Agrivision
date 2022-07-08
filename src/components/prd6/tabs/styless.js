import styled from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;

`;

export const StylizedTab = styled.button`
  color: green;
  width: 100%;
  font-weight: bold;
  height: 50px;
  padding: 10px 0px;
  font-size: 1rem;
  background-color: rgb(213, 237, 229);
  border: none;
  border-radius: 2%;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 0.7rem;
  width: 100%;
  height: 100%;
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65
};
export const TabSlider = styled.div`
  transition: 0.2ss;
  
`;