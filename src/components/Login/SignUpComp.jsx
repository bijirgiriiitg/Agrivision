import styled from "styled-components";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import{ baseURL } from "../../Apis"
import {
  LineText,
  InputField,
  LoginBtn,
  SignInWithButton,
  Right,
  Margin,
  CreateAccount,
} from "./Common";
import { useState } from "react";
import axios from "axios";
import Loader from "../../pages/Loader"
import device from "../Util/MediaQuery";

axios.defaults.baseURL = `${baseURL}`;

// eslint-disable-next-line no-useless-escape
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUpComp = ({ setNum, notify, dismiss }) => {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setloader] = useState(false)
  const [verification, setverification] = useState(false)

  function responseGoogle(response) {
    console.log(response);
  }

  async function googleSuccess(response) {
    setloader(true)
    axios
      .post("/user/oauth/google", {
        access_token: response.accessToken,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setloader(false)
        history.push("/");
        notify("success", "Account created successfully");
      });
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter' || event.key === 'NumpadEnter'){
      if(firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0){
        handleSignup(event);
      }
    }
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstName === "") {
      dismiss();
      return notify("error", "First name is required");
    }
    if (lastName === "") {
      dismiss();
      return notify("error", "Last name is required");
    }
    if (email === "") {
      dismiss();
      return notify("error", "Email is required");
    }
    if (!emailRegex.test(email)) {
      dismiss();
      return notify("error", "Invalid email");
    }
    if (password === "") {
      dismiss();
      return notify("error", "Password is required");
    }
    if (password.length < 6) {
      setPasswordError("Invalid Password");
      return notify("error", "Password must be at least 6 characters");
    }
    setloader(true)
    axios
      .post("/user/register", {
        name: [firstName, lastName],
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          dismiss();
          setloader(false)
          setverification(true)
          notify("info", "Verification mail sent!");
        }
      })
      .catch((err) => {
        console.log(err);
        dismiss();
        setloader(false)
        if (err.response.status === 400) {
          return notify("error", err.response.data.message);
        }
        notify("error", "Something went wrong");
      });
  };

  const resendMail = async()=>{
    setloader(true)
    const response = await fetch(`${baseURL}/user/resendMail?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      setloader(false)
      if(json.success){
        notify("success","Reset Link sent again")
      }
      else{
        notify("info",json.message)
      }
}

  return (
    <>
     {!verification?
    <Right>
      {loader && <Loader/>}
      <h2>Sign Up</h2>
      <Margin>
        <GoogleLogin
          clientId="1027658372624-el9ipnh6s60hjprjm0k2f8tog3qvjeco.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={googleSuccess}
          onFailure={responseGoogle}
          render={(renderProps) => (
            <SignInWithButton onClick={renderProps.onClick}disabled={renderProps.disabled}>
              <img src="/images/icons/google.svg" alt="Google" />
              SignUp with Google
            </SignInWithButton>
          )}
        />
        <LineText text="OR" />
      </Margin>
      <Margin>
        <SInputField>
          <label htmlFor="firstName">First Name</label>
          <input type="text"name="firstName"value={firstName}onChange={(e) => {setFirstName(e.target.value);}}id="firstName"/>
        </SInputField>
        <SInputField>
          <label htmlFor="lastName">Last Name</label>
          <input type="text"name="lastName"value={lastName}onChange={(e) => {setLastName(e.target.value);}}id="lastName"/>
        </SInputField>
        <SInputField>
          <label htmlFor="email">Email</label>
          {emailError.length > 0 && (
            <span style={{color: "red",fontSize: "12px",marginLeft: "10px"}}>{emailError}</span>
          )}
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              let emailText = e.target.value;
              if (emailRegex.test(emailText) === false) {
                setEmailError("Invalid Email Address");
              } else {
                setEmailError("");
              }
            }}
            id="email"
          />
        </SInputField>
        <SInputField>
          <label htmlFor="password">Password</label>
          {passwordError.length > 0 && (
            <span style={{color: "red",fontSize: "12px",marginLeft: "10px",}}>
              {passwordError}
            </span>
          )}
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            id="password"
          />
        </SInputField>
        <SInputField>
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            type="password"
            onChange={(e) => {
              if (e.target.value !== password) {
                setPasswordError("Passwords do not match");
              } else {
                setPasswordError("");
              }
            }}
            onKeyPress={handleKeyPress}
            id="ConfirmPassword"
          />
        </SInputField>
        <SignInButton onClick={handleSignup}>Sign Up</SignInButton>
      </Margin>
      <CreateAccount>
        Already have an account?{" "}
        <span className="a-hyper"style={{color: "#0e6656",fontWeight: 500,cursor: "pointer",}}onClick={() => setNum(0)}>
          Login
        </span>
      </CreateAccount>
    </Right>:
    <Container>
      {loader && <Loader/>}
    <Margin>
      <H1>Please check your mail and click, <span style={{color: "#16AC91 ",fontWeight: 600,cursor: "pointer"}}>Verify</span></H1>
      <H2>Email sent to <div style={{color: "#16AC91 ",fontWeight: 700,cursor: "pointer",}}>{email}</div></H2>
      <CreateAccount>
          Didn’t receive mail?{" "}
          <span onClick={resendMail} className='a-hyper'style={{color: "#16AC91 ",fontWeight: 500,cursor: "pointer",}}>Resend?</span>
      </CreateAccount>
      </Margin>
    </Container>
    }
    </>
  );
};

const SInputField = styled(InputField)`
  margin: 4px 0px;
`;
const SignInButton = styled(LoginBtn)`
  margin: 24px 0px;
`;

const Container = styled(Right)`
    padding-top:10rem;
`;

const H1 = styled.h1`
    text-align:center;
    padding-top:1.5rem;
    font-weight:200;
    margin: 1.5rem 0;
`;

const H2 = styled.div`
    text-align:center;
    font-size: 2rem;
    padding: 2rem 0rem;
    font-weight:200;
    ${device.tablet}{
        font-size: 1rem;
        
      }
    
`;
export default SignUpComp;
