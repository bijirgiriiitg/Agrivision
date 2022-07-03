import React from "react";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import { BiRupee } from "react-icons/bi";
import Rating from "../../PaymentPg/Rating";


const Card = ({ item, x , y}) => {

  //const [card,setCard] = useState(false);

  function HandleHover(i,l){
    if(l>16){
      document.querySelector(`#card1-${i}-${x}-${y}`).style.display = 'block';
    }
  }
  function HandleHover1(i){
    document.querySelector(`#card1-${i}-${x}-${y}`).style.display = 'none';
  }
  return (
    <div>
      <Bg
        style={{
          background: `url(${item.image?item.image:"/images/card-bg.svg"}) no-repeat center`,
          backgroundSize:"cover",
          color: "white",
          position: "relative",
        }}
      >
        <Head>
          <HeadText>
            <span>1.2k</span> Students
          </HeadText>
          <HeadText>
            <span>{item.duration ? item.duration : 0}</span> Hrs
          </HeadText>
        </Head>
      </Bg>
      <BgTitle>{item.name}</BgTitle>
      <Content1>
        {item.subject.map((course,i) => {
          return (
            <>
            <div key={i}>
              <CardDetails  id={`card-${i}-${x}-${y}`}    className="CardDetails" onMouseEnter={()=>HandleHover(i,course.length)}
              onMouseLeave={()=>HandleHover1(i)}
              >
                <GoPrimitiveDot />
                {course.length <= 16 ? course  : `${course.substring(0,13)}...` }
              </CardDetails>
                <Block id={`card1-${i}-${x}-${y}`} style={{display:"none"}} >
                <H6>  {course}  </H6>
                </Block> 
            </div>
                </>
          );
        })}
      </Content1>
      <Content>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Rate>
            <Rating value={item.rating ? item.rating : 0} />
            <h4
              style={{
                fontSize: "13px",
                marginLeft: "10px",
                marginTop: "7px",
                color: "black",
              }}
            >
              {item.rating ? item.rating : 0}
            </h4>
          </Rate>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Price>
              <BiRupee />
              {item.price}
            </Price>
            <Price1>
              <strike>
                <BiRupee />
                {item.originalPrice ? item.originalPrice : 3999}
              </strike>
            </Price1>
          </div>
        </div>
      </Content>
    </div>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 150px;
  color: white;
  position: relative;
`;

const Block = styled.div`
position: absolute;
`
const H6 = styled.h6`
  font-size: 15px;
  margin-left: 15px;
  background-color: #17A388;
border-radius: 4px;
  color: white;
  padding: 5px;
`

const Head = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const HeadText = styled.div`
  padding: 0.6rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
`;
const BgTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  background-color: white;
  color: black;
  padding: 13px 5px 10px 10px;
  border-radius: 4px 4px 0px 0px;
`;

const Price = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 24px;
  color: #1bbc9b;
  margin-left: 10px;
  margin-top: 5px;
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
  margin-top: 5px;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;

  color: #1bbc9b;
  margin-left: 15px;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  padding-right: 70px;
  font-size: 15px;
  line-height: 24px;
  color: #1bbc9b;
  margin-left: 15px;
`;

const Content1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 10px 10px 10px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;

`

const Content = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 10px 10px 10px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;
`;

export default Card;
