import styled from "styled-components";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import Loader from "../../pages/Loader"
import { useState } from "react";
import { baseURL } from "../../Apis";

const Test = (props) => {
  const [loader, setloader] = useState(false)

  const handelRemove = async()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    setloader(true)
    const response = await fetch(`${baseURL}/user/cart/${user._id}`, {
            method: "Delete",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({testSeriesId: props.item.testSeriesId})
          });
          const json = await response.json();
          console.log(json)
          const newCart = props.bucket2.filter((i) => {
            return i.testSeriesId !== props.item.testSeriesId;
          });
          props.setbucket2(newCart) 
          props.settotal(props.total-props.item.price)
          props.settotalItems(props.totalItems-1)  
          setloader(false)
          props.notify("success","Removed Successfuly")  
  }

  return (
    <StyledCheckOut>
      {loader &&<Loader/>}
      <Img src="/images/checkout-placeholder.svg" alt="Title" />
      <Content>
        <h4 className="title">{props.item.name}</h4>
        <p>
          {props.item.description}
        </p>
      </Content>
      <LiButtons>
        <p onClick={handelRemove}>Remove</p>
      </LiButtons>
      <PriceTag>
        &#x20B9;
        <span>{props.item.price}</span>
        <LocalOfferOutlinedIcon />
      </PriceTag>
    </StyledCheckOut>
  );
};



const StyledCheckOut = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  max-width: 710px;
  max-height: 120px;
  padding: 4px 8px;
  margin-bottom: 22px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 475px) {
    grid-template-columns: 1fr 2fr;
    max-height: none;
    box-shadow: 0px 0px 4px 4px hsl(0deg 0% 0% / 10%);
  }
`;
const Img = styled.img`
  width: 150px;
  height: 120px;
  object-fit: cover;
  @media screen and (max-width: 620px) {
    width: 100px;
    height: 80px;
  }
`;
const Content = styled.div`
  padding: 4px 12px;
  height: 120px;
  @media screen and (max-width: 620px) {
    height: 100px;
  }
  h4 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 8px;
    @media screen and (max-width: 620px) {
      font-size: 20px;
      margin-bottom: 4px;
    }
    @media screen and (max-width: 520px) {
      font-size: 18px;
      margin-bottom: 2px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 300;
    height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 620px) {
      font-size: 15px;
    }
    @media screen and (max-width: 520px) {
      font-size: 12px;
      height: 40px;
    }
  }
`;
const LiButtons = styled.div`
  color: #17a388;
  align-self: end;
  p {
    text-align: right;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 8px;
    cursor: pointer;
    @media screen and (max-width: 620px) {
      font-size: 12px;
      margin-bottom: 12px;
      margin-top: 8px;
    }
    @media screen and (max-width: 520px) {
      margin-bottom: 8px;
      margin-top: 4px;
    }
    @media screen and (max-width: 475px) {
      text-align: left;
    }
  }
`;
const PriceTag = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 24px;
  font-weight: 700;
  color: #17a388;
  line-height: 28px;
  font-family: "Courier New", Courier, monospace;
  @media screen and (max-width: 520px) {
    font-size: 20px;
    line-height: 28px;
  }
  span {
    font-family: "Poppins", "Roboto", sans-serif;
    line-height: 28px;
    font-weight: 400;
  }
`;

export default Test;
