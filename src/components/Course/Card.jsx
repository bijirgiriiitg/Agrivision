import styled from "styled-components";
import PictureAsPdfOutlinedIcon from "@material-ui/icons/PictureAsPdfOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const Card = () => {
  return (
    <div>
      <StyledCard>
        <Bg>
          <Head>
            <HeadText>
              <span>1.2k</span> Students
            </HeadText>
            <HeadText>
              <span>30</span> Hrs
            </HeadText>
          </Head>
          <BgTitle>Thermodynamics</BgTitle>
        </Bg>
        <Content>
          <Topic>
            <PictureAsPdfOutlinedIcon />
            12 Chapter Notes
          </Topic>
          <Topic>
            <YouTubeIcon />
            30+ Video Lectures
          </Topic>
          <Topic>
            <BookmarkBorderIcon />
            100+ MCQ Questions
          </Topic>
          <Topic>
            <BorderColorIcon />
            10 Full Tests
          </Topic>
        </Content>
      </StyledCard>
    </div>
  );
};
const StyledCard = styled.div`
  width: 335px;
  height: 300px;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem;
 
  @media screen and (max-width: 432px) {
     width: 227px !important;   
     margin: 3px 11px !important;
     
    }
`;
const Bg = styled.div`
  width: 100%;
  height: 150px;
  background: url("/images/card-bg.svg") no-repeat center;
  color: white;
  position: relative;
`;
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
  text-align:center;
  font-weight: 600;
  background-color: white;
  color: black;
  position: absolute;
  padding: 12px 23px;
  border-radius: 4px 4px 0px 0px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px 10px 45px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;
`;
const Topic = styled.div`
  margin: 15px 0px;
  display: flex;
  align-items: center;
`;
export default Card;
