// import styled from "styled-components";
// import { useHistory,useLocation } from "react-router-dom";

import Loader from "./Loader"
import{ baseURL } from "../Apis"

import {
  LineText,
  InputField,
  LoginBtn,
  Right,
  Margin,
} from "../components/Login/Common";
import { useState} from "react";


const Register = (props) => {
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [givenGate, setGivenGate] = useState("");
  const [GATE, setGate] = useState(true);

  const [error, setError] = useState("");
  const [loader, setloader] = useState(false)

  const quizID = props.match.params.id;



  const RegisterLocal = async () => {
    setloader(true);
        const response = await fetch(
            `${baseURL}/quiz/${quizID}/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify({ contact: phone, college: college, currentYear: year, givenGate: GATE }),
            }
          );
          const json = await response.json();
          if (json.success) {
            alert(json.message);
            window.location.href = "/testseries";
          }
          else{
            alert(json.message);
          }

      setloader(false);
    }
      

  const handleKeyPress = (event) => {
    if(event.key === 'Enter' || event.key === 'NumpadEnter'){
      if(phone.length > 9){
        if(college.length>0){
            if(year.length>0){
                if(givenGate.length>0){
                    setError("");
                    RegisterLocal();
                }
                else{
                    setError("Please select have you Given GATE");
                }
            }
            else{
                setError("Please enter your studying year");
            }
        }
        else{
            setError("Please enter your college name")
        }
      }
      else{
          setError("Please enter mobile number");
      }
    }
  }

  const handleRegister = () => {
    if(phone.length > 9){
        if(college.length>0){
            if(year.length>0){
                if(givenGate.length>0){
                    setError("");
                    RegisterLocal();
                }
                else{
                    setError("Please select have you Given GATE");
                }
            }
            else{
                setError("Please enter your studying year");
            }
        }
        else{
            setError("Please enter your college name")
        }
      }
      else{
          setError("Please enter mobile number");
      }
  }




  return (
    <Right>
      {loader && <Loader/>}
      <h2>Register</h2>
      <Margin>
        <LineText text='Register for the quiz' />
      </Margin>
      <Margin>
        <InputField>
          <label htmlFor='phone'>Mobile number</label>
          
          <input
            type='text'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyPress={handleKeyPress}
            id='phone'
          />
        </InputField>
        <InputField>
          <label htmlFor='college'>College name</label>
          <input
            type='text'
            name='college'
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            onKeyPress={handleKeyPress}
            id='college'
          />
        </InputField>
        <InputField>
        <label htmlFor='year'>Year</label>
          <input
            type='text'
            name='year'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            onKeyPress={handleKeyPress}
            id='year'
          />
        </InputField>
        <InputField>
          <label style={{marginRight: "20px"}} htmlFor='givenGate'>Have you taken GATE before: </label>

            <select style={{border:"2px solid black", borderRadius:"8px"}} value={givenGate} 
            onChange={(e) => 
                {
                    setGate(e.target.value==="true")
                    setGivenGate(e.target.value);
                }
            } 
            onKeyPress={handleKeyPress}> 
                  <option value="true" >Yes</option>
                  <option value="false">No</option>
            </select>
        </InputField>

        {error.length > 0 && (
            <span
              style={{
                color: "red",
                fontSize: "18px",
                marginLeft: "5px",
              }}
            >
              {error}
            </span>
          )}

        <LoginBtn onClick={handleRegister}>Register</LoginBtn>
      </Margin>
    </Right>
  );
};

// const Control = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   .checkbox {
//     input {
//       margin-right: 4px;
//     }
//   }
// `;

export default Register;
