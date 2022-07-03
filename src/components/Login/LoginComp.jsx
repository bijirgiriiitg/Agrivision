import styled from "styled-components";
import { Link, useHistory,useLocation } from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Loader from "../../pages/Loader"
import{ baseURL } from "../../Apis"

import {
  LineText,
  InputField,
  SignInWithButton,
  LoginBtn,
  Right,
  Margin,
  CreateAccount,
} from "./Common";
import { useState} from "react";

axios.defaults.baseURL = `${baseURL}`;

const LoginComp = (props) => {
  let history = useHistory();
  let location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loader, setloader] = useState(false)

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function responseGoogle(response) {

  }

  async function googleSuccess(response) {
    let redto = location.state?location.state.from:"/";
    console.log(response)
    setloader(true)
    axios
      .post("/user/oauth/google", {
        access_token: response.accessToken,
      })
      .then((res) => {
        
        localStorage.setItem("token", res.data.token);
        const n = JSON.stringify(res.data.user)
        localStorage.setItem("user",n);
        try {
          // dispatch({ type: "USER", user: res.data.user });
        } catch (err) {
          console.log(err);
        }
        setloader(false)
        history.push(redto)
        props.notify("success", "Login Successfuly");
      });
  }

  async function signinLocal() {
    if (emailError.length > 0 || email.length === 0) {
      return props.notify("error", emailError);
    }
    let redto = location.state?location.state.from:"/";
    setloader(true)
    axios
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.data.token);
          const n = JSON.stringify(res.data.data.user)
          localStorage.setItem("user",n);
          try {
            // dispatch({ type: "USER", user: res.data.data.user });
          } catch (err) {
            console.log(err);
          }
          setloader(false)
            history.push(redto)
          props.notify("success", "Login Successfuly");
        } else {
          setloader(false)
          props.notify("info", res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setloader(false)
        props.notify("error", "Something Went wrong");
        setError("Something Went wrong");
      });
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter' || event.key === 'NumpadEnter'){
      if(email.length > 0 && password.length > 0){
        signinLocal();
      }
    }
  }

 const handleEmail = (e) => {
   setEmail(e.target.value);
   let emailText = e.target.value;
   if (!emailRegex.test(emailText) && emailText !== "") {
     setEmailError("Invalid email address");
   } else {
     setEmailError("");
   }
 };


  const handelForget = ()=>{
    props.setNum(3)
  }

  return (
    <Right>
      {loader && <Loader/>}
      <h2>Login</h2>
      <Margin>
        <GoogleLogin
          clientId='1027658372624-el9ipnh6s60hjprjm0k2f8tog3qvjeco.apps.googleusercontent.com'
          buttonText='Continue with Google'
          onSuccess={googleSuccess}
          onFailure={responseGoogle}
          render={(renderProps) => (
            <SignInWithButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img src='/images/icons/google.svg' alt='Google' />
              SignIn with Google
            </SignInWithButton>
          )}
        />
        {/* <SignInWithButton>
          <img src="/images/icons/linkedIn.svg" alt="LinkedIn" />
          SignIn with LinkdIn
        </SignInWithButton> */}
        <LineText text='or Sign in with Email' />
      </Margin>
      <Margin>
        <InputField>
          <label htmlFor='email'>Email</label>
          {emailError.length > 0 && (
            <span
              style={{
                color: "red",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              {emailError}
            </span>
          )}
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
            onPaste={handleEmail}
            id='email'
          />
        </InputField>
        <InputField>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            id='password'
          />
        </InputField>
        <Control>
          <div className='checkbox'>
            <input type='checkbox' name='remeber-me' id='remeber-me' />
            <label htmlFor='remeber-me'>Remember me</label>
          </div>

          <Link to="/login"><span onClick={handelForget}>Forgot password ?</span></Link>

        </Control>
        {error.length > 0 && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
            }}
          >
            {error}
          </span>
        )}
        <LoginBtn onClick={signinLocal}>Login</LoginBtn>
      </Margin>
      <CreateAccount>
        Not Registered yet?{" "}
        <span
          className='a-hyper'
          style={{
            color: "#0e6656",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => props.setNum(1)}
        >
          Create Account
        </span>
      </CreateAccount>
    </Right>
  );
};

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .checkbox {
    input {
      margin-right: 4px;
    }
  }
`;

export default LoginComp;
