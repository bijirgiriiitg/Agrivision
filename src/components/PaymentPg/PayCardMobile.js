import styled from "styled-components";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const PayCardMobile = (props) => {
  return (
    <CheckOut>
      {props.data && <ViewLink to={{pathname: `/package/${props.data.packageId}`, state: { courseId: props.data.courseId, name: props.title }}}>
        <Img src={props.data.image ? props.data.image : "/images/checkout-placeholder.svg"} alt="Title" />
      </ViewLink>}
      
      <Content>
        <h4 className="title">{props.title}</h4>
        <div><Rating value={props.data.rating} /> {props.data.userEnrolled} students</div>
        <PriceTag>
        &#x20B9;
        <span>{props.data.price}</span>
      </PriceTag>
      </Content>
    </CheckOut>
  );
};

const CheckOut = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  max-width: 710px;
  max-height: 120px;
  padding: 4px 8px;
  margin-bottom: 2.5rem;
`;
const Img = styled.img`
  width: 150px;
  height: 90px;
  object-fit: cover;
  
`;
const Content = styled.div`
  padding: 4px 12px;
  height: 120px;
  h4 {
    font-size: 15px;
    line-height: 13px;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 2px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
   display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const PriceTag = styled.div`
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  font-weight: 700;
  color: #17a388;
  line-height: 28px;
  font-family: "Courier New", Courier, monospace;
  span {
    font-family: "Poppins", "Roboto", sans-serif;
    line-height: 28px;
    font-weight: 400;
  }
`;

const ViewLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
   &:hover {
    color: green;
  }
`;

export default PayCardMobile;
