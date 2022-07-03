// import Bottom from "../components/Home/Bottom";
import Cards from "../components/Home/Cards";
import Reviews from "../components/Home/Reviews";
import Carousel1 from "../components/Home/Carousel2";
import Top from "../components/Home/Top";
import Work from "../components/Home/Work";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import { baseURL } from "../Apis";
import { BiSend } from "react-icons/bi"
import styled from "styled-components";
import axios from "axios";
import Loader from "./Loader";
import GoogleOneTapLogin from 'react-google-one-tap-login';
const Keydown = "/images/icons/Keydown.svg";
const ChatBot = "/images/icons/ChatBot.svg";
const ChatBotTop = "/images/icons/ChatBotTop.svg";
const ChatBotNameLogo = "/images/icons/ChatBotNameLogo.svg";

const Home=()=> {
  const [bot, setBot] = useState(false);
  const [isLoader, setisLoader] = useState(false)

const Results = () => (
      <Maincontainer>
        
        <Wrapper id="message-box">
              <div style={{display:"flex"}}>
                <Imgmessage src={ChatBotNameLogo} alt="Chat-Bot"/>
                <P style={{marginTop: "80px"}}><span>Hi, How can I help you?</span></P>
              </div>
        </Wrapper>
        
        <Imgback src={ChatBotTop} alt="Chat-Bot"/>
        <Imglogo src={ChatBotNameLogo} alt="Chat-Bot"/>
        <Pname>Agri-Assist4U</Pname>
        <Pdesc>Hello, there!</Pdesc>
        
        <Inputcontainer>
        <input
            style={{
              height: "24px",
              borderRadius: "8px",
              fontSize: "14px",
              border: "2px solid #1BBC9B",
              outline: "none"
            }}
            name="message"
            type="text" 
            id="message"
            autoComplete="off"
            placeholder="Press 'Enter' to send a message"
          />
          <BiSend onClick={handleMark} size={30} style={{marginLeft:"20px", color:"#1BBC9B"}}/>  
        </Inputcontainer>
      </Maincontainer>)

useEffect(() => {
  const listener = event => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      handleMark();
    }
  };
  document.addEventListener("keydown", listener);
  return () => {
    document.removeEventListener("keydown", listener);
  };
});

const findResponse = async (input)=>{
  const response = await fetch(
    `${baseURL}/chatbot/get-response`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({data: input})
    }
  );
  const json = await response.json();
  if(json.success){
    return json.data;
  }
}

const handleMark = async () => {
  var input = document.getElementById("message").value;
  if(input!==""){
    document.getElementById("message").value="";
    let responseHTML=`
    <p style="
        color: white;
        font-family:  Helvetica;
        font-size: 14px;
        font-weight: normal;
        text-align: right;
        word-break: break-word;
        display: -webkit-box;
        line-height: 16px; /* fallback */
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        ">
        <span style="
            line-height: 0.5cm;
            display: inline-block;
            background: linear-gradient(86.94deg, #1BBC9B 0%, #1BBC9B 0.01%, #16A086 100%);
            padding: 7px;
            border-radius: 8px;
            border-bottom-right-radius: 0px;
            max-width: 20ch;
            margin-right: 10px;
            text-align: left;
            animation: floatup .5s forwards;
    ">${input}</span></p>`
    document.getElementById("message-box").innerHTML += responseHTML;
    let response = await findResponse(input);
    let responseText = response[0];
    let responselink = response[1];   
    let responseHtml;
        if (responselink[0] === "/"){
          responseHtml = `
          <div style="display: flex">
                <img style="width: 30px" src=${ChatBotNameLogo} alt="Chat-Bot"/>
                <p style="
                  color: black;
                  font-family: Helvetica;
                  font-weight: normal;
                  font-size: 14px;
                  text-align: left;
                ">
                <span style="
                  line-height: 0.5cm;
                  display: inline-block;
                  background-color: rgba(227, 242, 237, 1);
                  padding: 7px;
                  border-radius: 8px;
                  border-bottom-left-radius: 0px;
                  max-width: 80%;
                  margin-left: 3px;
                  animation: floatup .5s forwards
                "
                >${responseText}<br><a href="${responselink}">here</a></span></p>
              </div>`;
        }
        else{
          responseHtml = `
              <div style="display: flex">
                <img style="width: 30px" src=${ChatBotNameLogo} alt="Chat-Bot"/>
                <p style="
                  color: black;
                  font-family: Helvetica;
                  font-weight: normal;
                  font-size: 14px;
                  text-align: left;
                ">
                <span style="
                  line-height: 0.5cm;
                  display: inline-block;
                  background-color: rgba(227, 242, 237, 1);
                  padding: 7px;
                  border-radius: 8px;
                  border-bottom-left-radius: 0px;
                  max-width: 80%;
                  margin-left: 3px;
                  animation: floatup .5s forwards
                "
                >${responseText}</span></p>
              </div>`;
        }
    document.getElementById("message-box").innerHTML += responseHtml;
}
}

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
  const history = useHistory()
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  const decodedJwt = parseJwt(localStorage.getItem("token"));
  if (localStorage.getItem("token") && decodedJwt.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  useEffect(() => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const param = urlParams.get("confirm");
    
    if (param) {
      const fun = async () => {
        const response = await fetch(
          `${baseURL}/user/confirmEmail?confirm=${param}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
          if(json.success){
            localStorage.setItem("token", json.data.token);
            const n = JSON.stringify(json.data.user)
            localStorage.setItem("user", n);
            history.push("/")
            window.location.reload();
            notify("success", "Email verified. Welcome to AgriVision4u");
          }
          else{
            notify("info", json.message);
          }

      };
      fun();
    }
    // eslint-disable-next-line
  }, []);

  axios.defaults.baseURL = `${baseURL}`;

  const handelOneTap = async(response)=>{
    setisLoader(true)
    console.log(response)
    axios
      .post("/user/oneTapLogin", {
        email_verified: response.email_verified,
        name: [response.given_name,response.family_name],
        email:response.email
      })
      .then((res) => {
        setisLoader(false)
        if(res.data.success){
          localStorage.setItem("token",res.data.authToken);
          const n = JSON.stringify(res.data.user)
          localStorage.setItem("user",n);
          window.location.reload()
        }
      }).catch((err)=>{
        setisLoader(false)
        console.log(err)
        notify("info","Invalid account")
      })
  }
  return (
    <>
    {isLoader && <Loader/>}
      <ToastContainer />
      {!localStorage.getItem('token') && <GoogleOneTapLogin 
        onError={(error) => console.log(error)} 
        onSuccess={(response) => handelOneTap(response)} 
        googleAccountConfigs={{ client_id:'1027658372624-el9ipnh6s60hjprjm0k2f8tog3qvjeco.apps.googleusercontent.com'}} 
      />}
      <Navbar />
      <Top />
      <Cards />
      <Work />
      <Carousel1/>
      <Reviews />
      {/* <Bottom /> */}
      <Footer />
      <ChatbotContainer>
          {bot===true? 
          <>
          <Results/>
          </>
          :
          <>
          </>}
          <Button onClick={()=>setBot(!bot)}>
            <Imgbot src={bot ? `${Keydown}`: `${ChatBot}`} alt="Chat-Bot"/>
          </Button>
          
      </ChatbotContainer>
    </>
  );
}

const ChatbotContainer = styled.div`
    position: fixed;
    right: 2%;
    bottom: 10%;
`

const Wrapper = styled.div`
  position:absolute;
  top:0%;
  width:348px;
  height:485px;
  margin-top:10px;
  flex-grow: 1;
  overflow: auto;
  border-radius: 8px;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 3px;
    border-radius:8px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(86.94deg, #1BBC9B 0%, #1BBC9B 0.01%, #16A086 100%);
    
  }
  
  ::-webkit-scrollbar-thumb:hover {
    opacity:50%;
  }
`;

const Maincontainer = styled.div`
    position: absolute;
    height: 550px;
    width: 350px;
    background: white;
    z-index: 99;
    right: 69px;
    bottom: -52px;
    border: 1px solid #1BBC9B;
    border-radius: 8px;
    animation: floatup .5s forwards;
`
const Inputcontainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 348px;
    height: 50px;
    position:  fixed;
    bottom: 0%;
    background: #E3F2ED;
    border-radius: 0px 0px 8px 8px;
`

const P = styled.p`
    color: black;
    font-family: Helvetica;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    margin-top: 80px;
    & span{
      line-height: 0.5cm;
      display: inline-block;
      background-color: rgba(227, 242, 237, 1);
      padding: 7px;
      border-radius: 8px;
      border-bottom-left-radius: 0px;
      max-width: 80%;
      margin-left: 3px;
      animation: floatup .5s forwards
    }
    @keyframes floatup{
      from{
          transform: translateY(14px);
          opacity: .0;
      }
      to{
        transform: translateY(0px);
        opacity: 1;
      }
    }
`

const Pname = styled.p`
    position: absolute; 
    left: 45%;
    top: 3%;
`

const Pdesc = styled.p`
    position: absolute; 
    left: 45%;
    top: 7%;
`

const Button = styled.button`
  animation: floatupsbot 1s infinite;
  &:hover{
    animation: none;
  }

@keyframes floatupsbot{
      0%{
          transform: scale(1);
          opacity: 1;
      }
      50%{
        transform: scale(1.05);
        opacity: 0.9;
      }
      100%{
          transform: scale(1);
          opacity: 1;
      }
    }
`

const Imgbot = styled.img`
    position: absolute; 
    width: 60px;
    right: 0%;
    @keyframes floatdownbot{
      from{
          transform: translateY(-2px);
      }
      to{
          transform: translateY(0px);
      }
    }
    @keyframes floatupbot{
      from{
          transform: translateY(0px);
      }
      to{
        transform: translateY(-2px);
      }
    }
`

const Imgback = styled.img`
    position: absolute; 
    width: 348px;
    border-radius: 8px;
`

const Imglogo = styled.img`
    position: absolute; 
    width: 60px;
    left: 25%;
    top: 2%;
`

const Imgmessage = styled.img`
    width: 30px;
    bottom: 10px;
    margin-top: 80px;
`
export default Home;
