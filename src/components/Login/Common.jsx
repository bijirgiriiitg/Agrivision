import styled from "styled-components";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";

//lines with text
export const LineText = ({ text, bg, color }) => {
  return (
    <Cont>
      <Line />
      <Text>{text}</Text>
    </Cont>
  );
};
const Cont = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  margin: 24px auto;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
`;
const Text = styled.div`
  background-color: white;
  color: black;
  padding: 0px 8px;
  font-size: 16px;
  font-weight: 400;
  width: fit-content;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
`;

// input field
export const Input = ({ field, text }) => {
  return (
    <InputField>
      <label htmlFor={field}>{text}</label>
      <input type={field} name={field} id={field} />
    </InputField>
  );
};
export const InputField = styled.div`
  width: 100%;
  margin: 24px 0px;

  label {
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid black;
    outline: none;
    padding: 8px;
    margin: 4px 0px;
  }
`;

//signin button
export const SignInWithButton = styled.button`
  width: 100%;
  background-color: white;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  padding: 4px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-right: 4px;
  }
`;

//layout
export const Layout = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  ${device.laptop} {
    display: flex;
    justify-content: center;
  }
`;

//login Button
export const LoginBtn = styled.button`
  margin: 32px 0px;
  width: 100%;
  outline: none;
  border: none;
  background-color: #0e6656;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  :hover {
    background-color: #0e6656;
    box-shadow: 0px 0px 8px #13846f;
  }
`;

//Right
export const Right = styled.div`
  width: 100%;
  padding: 10px 64px;

  margin: 0 auto;
  ${device.tablet} {
    padding: 10px 32px;
  }
  h2 {
    margin: 32px 0px;
    font-size: 32px;
  }
`;
//left
export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 800px;
  ${device.laptop} {
    display: none;
  }
`;

//margined layout
export const Margin = styled.div`
  width: 70%;
  margin: auto;
  ${device.tablet} {
    width: 95%;
  }
  ${device.mobileL} {
    width: 100%;
  }
`;

//create

export const CreateAccount = styled(Margin)`
  font-size: 16px;
  text-align: center;
  a {
    color: #0e6656;
    margin-left: 4px;
  }
`;
