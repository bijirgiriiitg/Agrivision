import styled from "styled-components";

export const Container = styled.div`
  width: 92%;
  max-width: 90rem;
  margin: 0 auto;
`;

export const Button = styled.button`
  display: block;
  background: ${(props) =>
    props.primary ? "linear-gradient(#1bbc9b, #16a086)" : "white"};
  color: ${(props) => (props.primary ? "white" : "#1BBC9B")};
  border: none;
  border-radius: 8px;
  padding: 8px 24px;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
