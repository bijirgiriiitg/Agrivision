import React,{useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import {InputField,LoginBtn,Right,Margin,CreateAccount} from "./Common";
import{ baseURL } from "../../Apis"

const ForgotComp = ({notify}) => {
      const [password, setpassword] = useState("")
      const handlepass=(e)=>{
          setpassword(e.target.value)
      }
      const history = useHistory()

    const handelforget = async()=>{
      const url = window.location.search
      const urlParams = new URLSearchParams(url);
      const param = urlParams.get('forgot')
      const response = await fetch(`${baseURL}/user/resetPassword?forgot=${param}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({password})
      });
      const json = await response.json();
      if(json.success){
        history.push("/")
        notify('info',"Password changed Successfully, Please login")
      }
      else{
          notify('error',"Error in email")
      }
    }

    return (
        <Right>
      <h2>Password Reset</h2>
      <Margin>
        <InputField>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} onChange={handlepass} id='email'/>
        </InputField>
        <LoginBtn onClick={handelforget}>Change Password</LoginBtn>
        <CreateAccount>
        Already have an account?{" "}
        <span
          className='a-hyper'
          style={{
            color: "#0e6656",
            fontWeight: 500,
            cursor: "pointer",
          }}>
          <Link to='/login'>Login</Link>
        </span>
      </CreateAccount>
          </Margin>
    </Right>
    )
}


export default ForgotComp
