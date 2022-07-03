import React from "react";
import styled from "styled-components";
import { BsPencilSquare } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { FiYoutube } from "react-icons/fi";
import { VscFilePdf } from "react-icons/vsc";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { BiRupee } from "react-icons/bi";
//import { Link } from "react-router-dom";
//import { baseURL } from "../../../Apis";
// import Loader from "../../../pages/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// const notify = (type, message) => {
//   toast[type](message, {
//     position: "top-right",
//     autoClose: 8000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// };

const Hover = ({ item, i }) => {
  // const [disabled, setdisabled] = useState(false);
  // const [loader, setloader] = useState(false);
  //   const addtocart = async (Id) => {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     if (user) {
  //       let data = {};
  //       active === 2
  //         ? (data = { courseId: Id })
  //         : active === 3
  //         ? (data = { testSeriesId: Id })
  //         : (data = { packageId: Id });
  //       setloader(true);

  //       const response = await fetch(`${baseURL}/user/cart/${user._id}`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       const json = await response.json();
  //       console.log(json);
  //       setloader(false);
  //       if (json.success) {
  //         notify("success", "Added Successfully");
  //         setdisabled(true);
  //       } else {
  //         notify("info", "Already in cart");
  //       }
  //     } else {
  //       notify("info", "Please Login first");
  //     }
  //   };

  return (
    <>
      <ToastContainer />
      {/* {loader && <Loader />} */}

      <Hov className="hov1" style={i === 1 ? {
        marginLeft: "315px",
        marginTop: "-230px",
      } : {
        marginLeft: "-315px",
        marginTop: "-230px",
      }} >
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
              {item.fullLengthTestCount} Full Tests
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
                  marginLeft: "40px",
                }}
              />
              {item.sectionalTestCount} Sectional Tests
            </Topic>
            <Topic
              style={{
                color: "#17A388",
                fontSize: "10px",
                marginLeft: "-12px",
              }}
            >
              <BookmarkBorderIcon
                style={{
                  width: "20px",
                }}
              />
              {item.previousTestCount} Previous Year Papers
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
                  marginLeft: "15px",
                  marginRight: "4px",
                }}
              />
              {item.modelTestCount} Model Papers
            </Topic>
          </Content>
          <h4 style={{ color: "black", fontSize: "12px", lineHeight: "20px" }}>
            {item.name}
          </h4>
          {/* {item.highlights.map((course, i) => {
            return (
              <h4
                key={i}
                style={{ color: "black", fontSize: "12px", lineHeight: "20px" }}
              >
                <GoPrimitiveDot /> {course}
              </h4>
            );
          })} */}
          <h4
            style={{ color: "black", fontSize: "12px", lineHeight: "20px" }}
          >
            {item.description?
            <>
            <GoPrimitiveDot /> 
            {item.description} 
            </>:
            <></>
          }
          </h4>
          <div style={{ display: "flex", padding: "15px" }} >
            <Price>
              <BiRupee />
              {item.price}
            </Price>
            <Price1>
              <strike>
                <BiRupee />
                3999
              </strike>
            </Price1>

          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
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
              // onClick={() => {
              //   addtocart(active === 2 ? item.courseId : item.packageId);
              // }}
              // disabled={disabled}
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
                {/* <Link
                  to={{
                    
                  }}
                  style={{
                    color: "white",
                  }}
                >
                  Get Package
                </Link> */}
                Get Package
              </h4>
            </button>
          </div>
        </Sidebox1>
        <Hook style={i === 1 ? {
          webkitTransform: "rotate(0deg)",
          position: "absolute",
          marginLeft: "3px",
          marginTop: "10px",
        } : {
          webkitTransform: "rotate(180deg)",
          position: "absolute",
          marginLeft: "315px",
          marginTop: "10px",
        }} >
          <svg
            width="20"
            height="20"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 13.0613L42 0.718384V28.2527L0 13.0613Z" fill="white" />
          </svg>
        </Hook>
      </Hov>
    </>
  );
};

const Content = styled.div`
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

const Hov = styled.div`
display: flex;
flex-direction:column;
position: absolute;
filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
z-index: 2;
display: none;
`;

const Price = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 24px;
  color: #1bbc9b;
  margin-left: 15%;
  margin-right: 5px;
`;

const Price1 = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #1bbc9b;
  margin-top: 0px;
  color: black;
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
`;
const Hook = styled.div``;


export default Hover;
