import React,{useState,useEffect} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../Apis";
import styled from "styled-components";

const MyCalendar = () => {
  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

    const [rem, setrem] = useState([]);
    const [value, onChange] = useState(new Date());
    const [showbox, setshowbox] = useState(false)
    const [remvalue, setremvalue] = useState("")
    
      useEffect(() => {
        const fun =  async (e) => {
          const response = await fetch(`${baseURL}/user/getReminder`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
              });
              const json = await response.json();
              setrem(json.data)
          }
          fun()
      }, [])

      const handelAdd = async()=>{
        if(showbox){
          if(remvalue.length!==0){
              const response = await fetch(`${baseURL}/user/addReminder`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({task: remvalue, date: `${dateFor()}`})
                  });
                  const json = await response.json();
                  console.log(json)
              setshowbox(false)
              setrem(rem.concat({task: remvalue, date: `${dateFor()}`}))
              notify("success","Added!!")
            }else{
              notify("error","Please write something")
            }
        }
        else{
          setshowbox(true)
        }
      }

      function appendLeadingZeroes(n){
        if(n <= 9){
          return "0" + n;
        }
        return n
      }
      const dateFor = ()=>{
          return (value.getFullYear() + "-" + appendLeadingZeroes(value.getMonth() + 1) + "-" + appendLeadingZeroes(value.getDate()))
      }
    return (

      <DashCalender>
          <ToastContainer />
        <div className="calendertxt">
          <h1>Calendar</h1>
        </div>
        <DashCalenderBorder>
          <Calendar className="calendar" onChange={onChange} value={value}></Calendar>

          <DashReminder>
            <DashReminderHead>
              <p>Reminders:</p>
              <span onClick={handelAdd}><Fab><AddIcon/></Fab></span>
            </DashReminderHead>
            {showbox && <div className="form"><input className="form__input" autoComplete="off" placeholder=" " value={remvalue} onChange={e => setremvalue(e.target.value)}/><label htmlFor="email" className="form__label">Add Task </label></div>}
            <ol>
              <li>{rem.map((t) => {
                    return <div key={t._id}>{t.date.substr(0,10)=== dateFor()?t.task:""}</div>
                })}
                </li>
            </ol>
          </DashReminder>
        </DashCalenderBorder>
      </DashCalender>
    )
}

const DashCalender = styled.div`
  flex-basis: 0;
  min-width: 0;
  flex-grow: 1;


  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    width: auto;
  }
`

const DashCalenderBorder = styled.div`
  padding: 1rem;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  border-radius: 3px;
  height: 90%;

  .calendar {
    margin-left: 0%;
    margin: 0%;
    margin-right: 0%;
    width: 100%;
    text-decoration: none !important;
    border: none;
  }
`

const DashReminder = styled.div`
  background-color: #ecf2f1;
  margin: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
  height: 100px;
  overflow: auto;

  .form {
    position: relative;
    width: 20rem;
    height: 3rem;
  }
  .form__input {
    width: 100%;
    height: 100%;
    border: 2px solid #e1e5ee;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    color: black;
    outline: none;
    padding: 1rem;
    margin-bottom: 14px;
    background: white;
  }
  
  .form__input:hover {
    border-color: #adffff;
  }
  
  .form__input:focus {
    border-color: #18ffff;
  }
  
  .form__label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5rem;
    color: rgba(0, 0, 0, 0.658);
    cursor: text;
    -webkit-transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: white;
    border-radius: 50%;
  }
  
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }
  
  @media screen and (max-width: 760px) {
    margin: 0%;
  } 
`

const DashReminderHead = styled.div`
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;

  button {
    top: 7px;
    background-color: #ecf2f1;
    border: black;
    width: 36px;
    height: 19px;
  }

  p {
    font-weight: 500;
    line-height: 40px;
  }
`



export default MyCalendar

