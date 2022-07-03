import React from "react";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import HeaderCard from "./HeaderCard";
import Rating from "./Rating";
import "./Button.css";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import Popup from "./Popup";
import { baseURL } from "../../Apis";
import Loader from "../../pages/Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = ({active,Id,name,description,rating,price,notify,refral}) => {
  const [isPopup, setisPopup] = useState(false);
  const [refData, setrefData] = useState(null);
  const [loader, setloader] = useState(false);
  const [refralToPass, setrefralToPass] = useState(refral)
  const [coupenType, SetCoupenType] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [discountType,setdiscountType] = useState(0);
  let url =
      active === 2
        ? `/free-trial/course/${Id}`
        : active === 3
        ? `/free-trial/testseries/${Id}`
        : `/free-trial/package/${Id}`;
  const handelRedeem = () => {
    setloader(true);
    fetch(
      `${baseURL}/coupens/usereflinkforgenuser?item=${
        active === 2 ? 0 : active === 3 ? 1 : 2
      }&itemId=${Id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setdiscountType(result.discount?result.discount.discountType:0);
          setdiscount(result.discount?result.discount.discount:0);
          setloader(false);
          if (result.isCoupen) {
            setrefralToPass({
              coupenId:result.coupenId,
              generator:result.userId,
              case: 0
            })
            notify("success",`Successfully applied ${ result.discount.discountType === 0 ? `${result.discount.discount?result.discount.discount:0}%` : `${result.discount.discount?result.discount.discount:0}/-` } discount ` );
            setdiscount(result.discount.discount?result.discount.discount:0)
          }
          else{
            notify("info",result.message)
          }
        },
        (error) => {
          console.log(error)
        }
      );
  };

  const handelRefer = () => {
    setloader(true);
    fetch(
      `${baseURL}/coupens/generatereflink?item=${
        active === 2 ? 0 : active === 3 ? 1 : 2
      }&itemId=${Id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setloader(false);
          if (result.isCoupen) {
            setisPopup(true);
            setrefData(result.referralData);
            SetCoupenType(result.referralData.coupenType);
          }
        },
        (error) => {
          setloader(false);
          console.log(error);
        }
      );
          
  };
  return (
    <>
      {loader && <Loader></Loader>}
      {isPopup && refData && (
        <Popup coupen = {coupenType} refData={refData} setisPopup={setisPopup} />
      )}
      {name && (
        <div className="head-wrapper">
          <div className="headColumnDivider">
            <div className="headColOne">
              <div className="test">
                <p className="path">
                  
                </p>
                <h1>{name}</h1>
                <p>{description}</p>
                <Rating style={{ padding: 5 }} value={rating} />
              </div>
              <div id="headBottom">
                <ViewLink to={{pathname: url,state: {name: name, Id: Id}}}>
                  <button className="headBtn">START FREE TRIAL</button>
                </ViewLink>
              </div>
              <div id="headBottom">
                <button className="headBtn2" onClick={handelRefer}>
                  Refer & Earn
                </button>
              </div>
              <div id="headBottom">
                <button className="headBtn2" onClick={handelRedeem}>
                  Redeem
                </button>
              </div>
            </div>
            <div className="headColTwo">
              <HeaderCard
                refral={refralToPass}
                active={active}
                Id={Id}
                price={discountType===0?Math.round(price - (discount * price) / 100):(price -discount)}
                notify={notify}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ViewLink = styled(Link)`
`;

export default Head;
