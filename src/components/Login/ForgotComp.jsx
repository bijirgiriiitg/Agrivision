import React,{useState} from 'react'
import {InputField,LoginBtn,Right,Margin,CreateAccount} from "./Common";
import{ baseURL } from "../../Apis"
import styled from "styled-components";
import device from "../Util/MediaQuery";
import Loader from "../../pages/Loader";

const ForgotComp = ({notify,setNum}) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [verification, setverification] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError("")
    };
    const handelforget = () => {
      if (emailRegex.test(email)) {
        setEmailError("");
        forgetFunction();
        setIsLoaded(false);
      } else {
        setEmailError("Invalid email address");
        notify('error',"Error in email")
      }
    }
    const forgetFunction = async()=>{
      const response = await fetch(`${baseURL}/user/forgotPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      });
      const json = await response.json();
      if(json.success){
          setverification(true)
          notify('info',"Reset Link sent")
          setIsLoaded(true);
      }
      else{
          notify('error',"Error in email")
      }
    }
    const resendMail = async()=>{
      const response = await fetch(`${baseURL}/user/resendMail?email=${email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const json = await response.json();
        if(json.success){
          notify("success","Reset Link sent again")
        }
        else{
          notify("info",json.message)
        }
    }

    return (
      <>
      {!isLoaded && <Loader/>}
      {!verification?
      <Right>
        <h2>Password Reset</h2>
        <Margin>
          <InputField>
            <label htmlFor='email'>Email</label>
            {emailError.length > 0 && (<span style={{color: "red",fontSize: "12px",marginLeft: "10px",}}>{emailError}</span>)}
            <input type='email' name='email' value={email} onChange={handleEmailChange} onPaste={handleEmailChange} id='email'/>
          </InputField>
          <LoginBtn onClick={handelforget}>Send reset link</LoginBtn>
          <CreateAccount>
          Want to login?{" "}
          <span className='a-hyper' style={{ color: "#0e6656",fontWeight: 500,cursor: "pointer",}}onClick={() => setNum(0)}>Login</span>
        </CreateAccount>
        </Margin>
    </Right>:
        <Container>
          <Margin>
          <H1>Please check your mail and click, <span style={{color: "#16AC91 ",fontWeight: 600,cursor: "pointer"}}>Verify</span></H1>
          <H2>Email sent to <div style={{color: "#16AC91 ",fontWeight: 700,cursor: "pointer"}}>{email}</div></H2>
          <CreateAccount>
              Didn’t receive mail?{" "}
              <span onClick={resendMail} className='a-hyper'style={{color: "#16AC91 ",fontWeight: 500,cursor: "pointer",}}>Resend</span>
          </CreateAccount>
          </Margin>
    </Container>
    }
    </>
    )
}


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


export default ForgotComp
