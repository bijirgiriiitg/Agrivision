import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import device from "../Util/MediaQuery";
import styled from "styled-components";
import { Button } from "./Global";
import { useHistory } from "react-router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import useWindowDimensions from "../Util/useWindowDimensions";
import { baseURL } from "../../Apis";
const Default = "/images/user.png";
const NotificationLogo = "/images/notification.svg";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setclicked] = useState(false);
  const [cartcount, setcartcount] = useState(0);
  const [info, setInfo] = useState(null);
  const [notification, setNotification] = useState(false);
  const [notifs,setNotifs] = useState(null);
  const history = useHistory();
  
  const handlenotification = () => {
    setNotification(!notification);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      const fun = async (e) => {
        const res3 = await fetch(`${baseURL}/notifications`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        const json3 = await res3.json();
        setNotifs(json3.data);
      }
      fun();
    }
  },[]);

  useEffect(()=>{
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      const fun = async (e) => {
        const res2 = await fetch(`${baseURL}/user/profile`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        const json2 = await res2.json();
        setInfo(json2.data);
      }
      fun();
    }
  },[]);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      const fun = async (e) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await fetch(`${baseURL}/user/cart/${user._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const json = await response.json();
        setcartcount(
          json.data.courseItems.length +
            json.data.testSeriesItems.length +
            json.data.packageItems.length
        );
      };
      fun();
    } else {
      setcartcount(0);
    }

    // eslint-disable-next-line
  }, []);

  const mobileMenuHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width < 768) {
      setIsMobileMenuOpen(false);
      setNotification(false)
    }
    // eslint-disable-next-line
  }, [width]);

  const Result = ({notif}) => (
                    <A href={`https://${notif.link}`} target="_blank">
                        <img style={{margin: "2px 8px"}} src={NotificationLogo} alt="notification"/>
                        <P>
                          {notif.content}
                        </P>
                    </A>
  )

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // eslint-disable-next-line
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (notification) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // eslint-disable-next-line
  }, [notification]);

  const handelpre = () => {
    history.goBack();
  };

  const handelDrop = () => {
    setclicked(!isClicked);
  };

  const handelLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    setIsLoggedIn(false);
  };

  return (
    <StyledHeader course={props.course ? true : false}>
      {notification===true ?
      <>
        <div style={{zIndex: "1", width: "100vw", height:"100vh", position:"absolute"}} onClick={()=>setNotification(false)}></div>
      </>
      :
      <>
      </>
      }
      <StyledNav>
        <Hamburger onClick={mobileMenuHandler}>
          {isMobileMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </Hamburger>
        <Links>
          <StyledLink to="/">
            <Logo
              src={props.course ? "/images/green_logo.svg" : "/images/white_logo.svg"}
              alt="Logo"
            />
          </StyledLink>
          <LinksTo
            isMobileMenuOpen={isMobileMenuOpen}
            course={props.course ? true : false}
          >
            <StyledLink to="/courses">Courses</StyledLink>
            <StyledLink to="/testseries">Test Series</StyledLink>
            <StyledLink to="/academics">Academics</StyledLink>
            <StyledLink to="/magazines">Magazines</StyledLink>
            <StyledLink to="/jobUpdates">Job Updates</StyledLink>
            <StyledLink to="/global">Global</StyledLink>
          </LinksTo>
        </Links>
        <div className="login">
          {isLoggedIn ? (
            <Links>
              <Icon>
                <SearchIcon />
              </Icon>
              {props.course ? (
                <Icon2>
                  <NotifDiv onClick={handlenotification}>
                    <NotificationsIcon />
                  </NotifDiv>
                </Icon2>
              ) : (
                <Icon>
                  <NotifDiv onClick={handlenotification}>
                    <NotificationsIcon />
                  </NotifDiv>
                </Icon>
              )}
              
              {notification===true? 
              <>
                <Maincontainer>
                  <NotifHead>
                    <h5>Notifications</h5>
                  </NotifHead>
                <MainCont>
                {notifs && notifs.map((notif)=> {
                  return (
                    <>
                      <Result notif={notif}/>
                    </>
                  )
                })}
                </MainCont>
                
                </Maincontainer>
              </>
              :
              <>
              </>}
              {props.course ? (
                <Icon2>
                  <Anchor to="/cart">
                    <ShoppingCart />
                    <Count>
                      <p>{cartcount}</p>
                    </Count>
                  </Anchor>
                </Icon2>
              ) : (
                <Icon>
                  <Anchor to="/cart">
                    <ShoppingCart />
                    <Count>
                      <p>{cartcount}</p>
                    </Count>
                  </Anchor>
                </Icon>
              )}

              <Icon>
                <Dropdown>
                  <span onClick={handelDrop}>
                    <ProfileImg
                      className="dropbtn"
                      src={info? info.image ? info.image : Default:Default}
                      alt="Profile image"
                    />
                  </span>
                  <Dropcontent style={{ display: isClicked ? "block" : "none" }}>
                    <DropLink to="/dashboard">Dashboard</DropLink>
                    <DropLink to="/profile">Profile</DropLink>
                    <span onClick={handelLogout}>
                      <DropLink to="/">LogOut</DropLink>
                    </span>
                  </Dropcontent>
                </Dropdown>
              </Icon>
            </Links>
          ) : (
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
          )}
        </div>
      </StyledNav>
      {props.course && (
        <TitleBar>
          <Span onClick={handelpre}>
            <ArrowBackIcon />
          </Span>
          <TitleText>{props.rhead}</TitleText>
        </TitleBar>
      )}
    </StyledHeader>
  );
};

const NotifHead = styled.div`
    padding: 8px 8px 0px; 
    border-bottom: 1px solid #1BBC9B; 
    color: black;
    height: 45px;
    text-align: center;
`

const A = styled.a`
    width: 97.5%;
    margin: 8px 1.5% 0px;
    display: flex; 
    padding: 8px;
    border: 1px solid #1BBC9B;
    color: black;
    box-shadow: 0px 3px 12px 0px #0000001f;
    border-radius: 4px;
    cursor: pointer;
`

const P = styled.p`
    margin: auto 2px; 
    fontSize: 14px; 
    color: black;
    word-break: break-word;
    display: -webkit-box;
    line-height: 16px; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    // -webkit-box-orient: vertical;
`

const MainCont = styled.div`
    width: 346px;
    height: 350px;
    overflow:auto;
    ::-webkit-scrollbar {
      width: 3px;
      border-radius:8px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(86.94deg, #1BBC9B 0%, #1BBC9B 0.01%, #16A086 100%);
      
    }
    
    ::-webkit-scrollbar-thumb:hover {
      opacity:50%;
    }
`

const Maincontainer = styled.div`
    position: absolute;
    height: 400px;
    width: 350px;
    display: flex;
    // text-align:center;
    flex-wrap: nowrap;
    flex-direction:column;
    background: white;
    z-index: 99;
    right: 80px;
    top: 60px;
    border: 1px solid #1BBC9B;
    border-radius: 8px;
    box-shadow: 0px 3px 12px 0px #1BBC9B;
    // box-shadow: 0px 3px 12px 0px #0000001f;
    animation: floatup .5s forwards;
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

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  ${device.laptop} {
    display: flex;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;
const LinksTo = styled.div`
  display: flex;
  align-items: center;
  ${({ course }) => course && `a{&:hover{color:#e0e0e0}}`}
  ${device.laptop} {
    display: none;
    ${({ isMobileMenuOpen, course }) => {
      if (isMobileMenuOpen) {
        let styles = `position:absolute;
            top:70px;
            left:0px;
            height:fit-content;
            padding-bottom:16px;
            display:flex;
            flex-direction:column;
            align-items: flex-start;
            background:  white;
            box-shadow:0px 4px 8px 1px rgb(0 0 0 / 11%);
            a{
              margin: 20px 48px;
              font-size:20px;
              border-bottom:4px solid #1bbc9b;
              border-radius:4px/8px;
              padding:8px 4px
              }`;
        if (course) {
          styles += `
                background :linear-gradient(
                    86.94deg,
                    #1bbc9b 0%,
                    #1bbc9b 0.01%,
                    #16a086 100%
                  );
                  color:white;
                  z-index:20;
                  a{
                    border-bottom:4px solid #fff;
                    &:hover{
                      color:#e0e0e0;
                    }
                  }
                `;
        }
        return styles;
      }
    }};
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  margin-right: 3rem;
  display: flex;
  align-items: center;
  color: inherit;
  transition: all 0.3s ease-in-out;
  ${device.tablet} {
    margin-right: 0rem;
  }
  &:hover {
    color: #1bbc9b;
  }
`;
const StyledHeader = styled.header`
  z-index: 100;
  background: ${(props) =>
    props.course
      ? `linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  )`
      : `white`};
  color: ${(props) => (props.course ? `white` : `black`)};
  padding: 0rem 2rem;
  position: relative;
  box-shadow: ${(props) => !props.course && `0px 4px 8px 1px rgb(0 0 0 / 11%)`};
  ${device.tablet} {
    padding: 0rem 1rem;
  }
  ${device.mobileL} {
    padding: 0rem 0.5rem;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0rem;

  .login {
    position: relative;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  // position: relative;
`;

const Logo = styled.img`
  height: 62px;
`;

const StyledButton = styled(Button)`
  // background: linear-gradient(86.94deg, #1bbc9b 0%, #1bbc9b 0.01%, #16a086 100%);
  background: #0B6E4F;
  color: white;
`;

const TitleBar = styled.div`
  border-top: 1px solid white;
  padding: 1rem 0rem;
  position: sticky;
  top: 0px;
  left: 0px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr;
`;

const TitleText = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Icon = styled.div`
  color: #17a187;
  display: inline-block;
  margin-left: 1rem;
`;

const Icon2 = styled.div`
  color: #ffffff;
  display: inline-block;
  margin-left: 1rem;
`;

const Anchor = styled(Link)`
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const NotifDiv = styled.div`
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const Count = styled.div`
  position: absolute;
  top: 2px;
  right: 53px;
  color: white;
  background-color: #17a187;
  border-radius: 50%;
  width: 16px;
  height: 15px;
  padding-bottom: 16px;
  cursor: pointer;
  p {
    font-size: 12px;
    text-align: center;
    padding-bottom: 1px;
  }
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Span = styled.span`
  display: inline-block;
  margin-right: 3rem;
  display: flex;
  align-items: center;
  color: inherit;
  transition: all 0.3s ease-in-out;
  ${device.tablet} {
    margin-right: 0rem;
  }
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropcontent = styled.div`
  position: absolute;
  right: -12px;
  margin-top: 21px;
  background-color: #eaeaea;
  min-width: 141px;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
  z-index: 1;
  border-radius: 3%;
`;
const DropLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

export default Navbar;
