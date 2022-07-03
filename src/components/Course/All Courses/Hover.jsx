import React, { useState } from "react";
import styled from "styled-components";
import { BsPencilSquare } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { FiYoutube } from "react-icons/fi";
import { VscFilePdf } from "react-icons/vsc";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Link } from "react-router-dom";
import { baseURL } from "../../../Apis";
import Loader from "../../../pages/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const notify = (type, message) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const Hover = ({ item, active, val }) => {
  const [disabled, setdisabled] = useState(false);
  const [loader, setloader] = useState(false);
  const [loader2, setloader2] = useState(false);

  const handelSub = async (id) => {
    setloader2(true);
    const response = await fetch(`${baseURL}/user/profile`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            });
            const json = await response.json();
            const cId = id?id:0
            if(json.data.packages.indexOf(cId)!==-1){
              window.location.href = `/package/${id}`;
            }
            else{
                window.open('https://forms.gle/cPVfwwSqngLkJm8WA', '_blank');
            }
            setloader2(false);
};

  const addtocart = async (Id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      let data = {};
      active === 2
        ? (data = { courseId: Id })
        : active === 3
        ? (data = { testSeriesId: Id })
        : (data = { packageId: Id });
      setloader(true);

      const response = await fetch(`${baseURL}/user/cart/${user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      setloader(false);
      if (json.success) {
        notify("success", "Added Successfully");
        setdisabled(true);
      } else {
        notify("info", "Already in cart");
      }
    } else {
      notify("info", "Please Login first");
    }
  };

  return (
    <>
      <ToastContainer />
      {loader && <Loader />}

      <Hov1 className="hov1">
        <Sidebox1>
          <h3 style={{ color: "black" }}>{item.name}</h3>
          <h4 style={{ color: "black", fontSize: "10px" }}>
            Updated on 25th April
          </h4>
          <Content>
            <Topic
              style={{
                color: "#17A388",
                fontSize: "10px",
                marginRight: "30px",
                marginLeft: "-12px",
              }}
            >
              <VscFilePdf
                size={16}
                style={{
                  width: "20px",
                  marginRight: "2px",
                }}
              />
              {/* {item.chapters.length ? item.chapters.length : 0} Chapter Notes*/}
              10 Chatper Notes
            </Topic>
            <Topic
              style={{
                color: "#17A388",
                fontSize: "10px",
              }}
            >
              <FiYoutube
                size={15}
                style={{
                  width: "20px",
                  marginRight: "2px",
                }}
              />
              {item.videosNumber}+ Lecture Videos
            </Topic>
            <Topic
              style={{
                color: "#17A388",
                fontSize: "10px",
                marginRight: "30px",
                marginLeft: "-12px",
              }}
            >
              <BookmarkBorderIcon
                style={{
                  width: "20px",
                  marginRight: "2px",
                }}
              />
              100+ MCQ Questions
            </Topic>
            <Topic
              style={{
                color: "#17A388",
                fontSize: "10px",
              }}
            >
              <BsPencilSquare
                style={{
                  height: "20px",
                  width: "15px",
                  marginLeft: "-15px",
                  marginRight: "4px",
                }}
              />
              {item.testNumber ? item.testNumber : 0} Full Tests
            </Topic>
          </Content>
          <h4 style={{ color: "black", fontSize: "12px", lineHeight: "20px" }}>
            {item.description}
          </h4>
          {item.highlights.map((course, i) => {
            return (
              <h4
                key={i}
                style={{ color: "black", fontSize: "12px", lineHeight: "20px" }}
              >
                <GoPrimitiveDot /> {course}
              </h4>
            );
          })}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            
              {active===2?
              <>
              <button
              style={{
                backgroundColor: "#17A388",
                width: "120px",
                height: "40px",
                borderRadius: "10px",
                margin: "5px 5px",
              }}
            >
              <h4
              style={{
                color: "white",
                fontSize: "15px",
                margin: "auto",
              }}
              onClick={() => {
                addtocart(item.courseId);
              }}
              disabled={disabled}
            >
              Add to Cart
            </h4>
            </button>
            <button
            style={{
              backgroundColor: "#17A388",
              width: "120px",
              height: "40px",
              borderRadius: "10px",
              margin: "5px 5px",
            }}
          >
            <h4
              style={{
                color: "white",
                fontSize: "15px",
                margin: "auto",
              }}
            >
              <Link
                to={{
                  pathname: `/course/${item.courseId}`,
                  state: { },
                }}
                style={{
                  color: "white",
                }}
              >
                Get Course
              </Link>
            </h4>
          </button>
          </>
            :
            item.type!==val?
            <>
            <button
              style={{
                backgroundColor: "#17A388",
                width: "120px",
                height: "40px",
                borderRadius: "10px",
                margin: "5px 5px",
              }}
            >
            <h4
                style={{
                  color: "white",
                  fontSize: "15px",
                  margin: "auto",
                }}
                onClick={() => {
                  addtocart(item.packageId);
                }}
                disabled={disabled}
              >
                Add to Cart
              </h4>
              </button>
              <button
              style={{
                backgroundColor: "#17A388",
                width: "120px",
                height: "40px",
                borderRadius: "10px",
                margin: "5px 5px",
              }}
            >
              <h4
                style={{
                  color: "white",
                  fontSize: "15px",
                  margin: "auto",
                }}
              >
                <Link
                  to={{
                    pathname: `/package/${item.packageId}`,
                    state: { },
                  }}
                  style={{
                    color: "white",
                  }}
                >
                  Get Package
                </Link>
              </h4>
            </button>
            </>
              :
              <>
              <button
              style={{
                backgroundColor: "#17A388",
                width: "120px",
                height: "40px",
                borderRadius: "10px",
                margin: "5px 5px",
              }}
            >
              <h4
                style={{
                  color: "white",
                  fontSize: "15px",
                  margin: "auto",
                }}
              >
                <div
                  onClick={() => {handelSub(item.packageId)}}
                  style={{
                    color: "white",
                  }}
                >
                  Get Package
                </div>
              </h4>
            </button></>
              }    
          </div>
          {loader2 && <Loader />}
        </Sidebox1>
        <Hook1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 13.0613L42 0.718384V28.2527L0 13.0613Z" fill="white" />
          </svg>
        </Hook1>
      </Hov1>
    </>
  );
};

const Content = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 10px 10px 10px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;
`;

const Topic = styled.div`
  display: flex;
  align-items: center;
`;

const Hov1 = styled.div`
display: flex;
flex-direction:column;
position: absolute;
margin-left: -315px;
margin-top: -230px;
filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
z-index: 2;
display: none;
@media only screen and (max-width: 1261px) {
  margin-left: -318px;
  margin-top: -420px;
}
`;

const Sidebox1 = styled.div`
padding: 15px;
position: absolute;
width: 300px;
/* border: 2px solid red; */
margin-left: 18px;
margin-top: -205px;
background-color: white;
filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
border-radius: 4px;
@media only screen and (max-width: 1261px) {
  margin-left: 330px;
  margin-top: 383px;
}
`;

const Hook1 = styled.div`
-webkit-transform: rotate(180deg);
    position: absolute;
    margin-left: 315px;
    margin-top: 10px;
  @media only screen and (max-width: 1261px) {
    -webkit-transform: rotate(90deg);
    position: absolute;
    margin-left: 460px;
    margin-top: 362px;
  }
`;

export default Hover;
