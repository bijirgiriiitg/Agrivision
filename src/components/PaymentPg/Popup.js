import React, { useState } from "react";
import styled from "styled-components";
import { Button } from './Button';
import device from "../Util/MediaQuery";
import { Link } from "react-router-dom";

const Popup = ({ coupen,refData,setisPopup }) => {
  const [text, settext] = useState("Click To Copy")
  const handelCopy = ()=>{
    let link = `${window.location.href}&coupon=${refData.coupenId}&from=${refData.userId}`;
    //let text = `Hi! I just invited you to checkout Agrivision4u.\n\nUse the following link to get an exclusive ${refData.receiverDiscount}% discount on courses, test series and packages.\n\n`
    navigator.clipboard.writeText(link);
    settext("Copied!!")
  }
  console.log(refData)
  return (
    <PopupContainer>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={()=>setisPopup(false)}>
            x
          </span>
          <H2>Your Referral link generated!!</H2>
          <h4>Copy the Referral link below and share it with your friends!</h4>
          <div className="butt">
            <Button className='btns' buttonStyle='btn--primary'  buttonSize='btn--large'onClick={handelCopy}>{text}</Button>
          </div>
          {coupen ===1 ?(
            <>
          <p className="refComp">Referrals completed : {refData.refsCompleted}</p> <p className="refRem">Referrals remaining: {refData.refsReqired - refData.refsCompleted}</p>
          <br></br><br></br>
          <h5>Instructions: </h5>
          <ul className="instructions">
            <li><h6>You need to complete <b>{refData.refsReqired}  successful referrals</b> to avail this offer.</h6></li>
            <li><h6>When someone buys this item using your referral link, they will get <b>{refData.receiverDiscount.discountType===0? refData.receiverDiscount.discount +` percent discount` : refData.receiverDiscount.discount +`/- Rs discount`}</b>.</h6></li>
            <li><h6>After completing <b>{refData.refsReqired} successful referrals</b> you can click on the Redeem option to get <b>{refData.generatorDiscount.discountType===0? refData.generatorDiscount.discount +` percent discount` : refData.generatorDiscount.discount +`/- Rs discount`}</b> on this purchase.</h6></li>
            <li><h6>A referral counts successful only when the referred person buys this item through your referral link.</h6></li>
          </ul>
          </>)
          : coupen ===2? (
            <>
            {/* <p className="refComp">Referrals completed : {refData.refsCompleted}</p> <p className="refRem">Referrals remaining: {refData.refsReqired - refData.refsCompleted}</p> */}
          <br></br><br></br>
          <h5>Instructions: </h5>
          <ul className="instructions">
            {/* <li><h6>You need to complete <b>{refData.refsReqired}  successful referrals</b> to avail this offer.</h6></li> */}
            <li><h6>Go to your <Link to={"./profile"} >Profile</Link> and update your contact number with the mobile number associated with your bank account.</h6></li>
            <li><h6>When someone buys this item using your referral link, they will get <b>{refData.receiverDiscount.discountType===0? refData.receiverDiscount.discount +` percent discount` : refData.receiverDiscount.discount +`/- Rs discount`}</b>.</h6></li>
            <li><h6>After completing a successful referral, you will get <b>{refData.generatorDiscount.discountType===0? refData.generatorDiscount.discount +` percent cashback` : refData.generatorDiscount.discount +`/- Rs cashback`}</b></h6></li>
            <li><h6>A referral is successful only when the referred person buys item through your referral link.</h6></li>
          </ul>
          </>
          ) : <></>
          
          
          }
        </div>
      </div>
    </PopupContainer>
  );
};

const PopupContainer = styled.div`
  .popup-box {
    z-index: 1000;
    text-align:center;
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    ${device.tablet}{
        width:90%
        padding: 2px;
      }
  }
  .box {
    position: relative;
    width: 45%;
    margin: 0 auto;
    height: auto;
    max-height: 85vh;
    margin-top: calc(100vh - 85vh - 10px);
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
  }
  .close-icon {
    content: "x";
    cursor: pointer;
    position: fixed;
    right: calc(27% - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
  .butt{
    position: relative;
    margin: 1.5rem auto;
      width:50%
  }

  h5 {
    text-align: left;
    padding-left: 13px;
    padding-bottom: 4px;
  }

  .refComp {
    float: left;
    padding-left: 13px;
  }

  .refRem {
    float: right;
    padding-right: 28px;
  }

  ul{
    text-align: left;
  }

  li {
    display: list-item;
    list-style-type: disc;
  }

`;

const H2 = styled.h2`
    margin:1.5rem;
`;

export default Popup;
