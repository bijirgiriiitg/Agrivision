import styled from "styled-components";
import React from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useHistory } from "react-router-dom";
const Notes = () => {
  // Bookmark button
  const history = useHistory()
  const [isActive,setIsActive] = React.useState(false);
  const handleClick = () => {
    //  toggle
    setIsActive(current => !current);
  };
  return (
    <div style={{width:'70%'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
        <Heading>Food Technology : Agriculture machinery</Heading>
        <form onClick={handleClick}>
        <Button2 style={{backgroundColor: isActive ? '#0B6E4F' : '', color: isActive ? '#FFFFFF' : ''}} onClick={() => history('/bookmarks')}><BookmarkBorderIcon></BookmarkBorderIcon></Button2>
        </form>
        </div>
        <Text>
          ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          What is Lorem Ipsum?ktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <SubHeading>Why do we use it?</SubHeading>
        <Text>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Text>
        <SubHeading>Where does it come from?</SubHeading>
        <Text>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes fr humour and the like).
        </Text>
        <Text>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes fr humour and the like).
        </Text>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
        <Button1 onClick={() => history('/notes/1')}>Mark as complete</Button1>
        <Button2 onClick={() => history('/topics')}>Join the discussion</Button2>
        </div>
        
    </div>

  );
};

const Heading = styled.div`
  font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 24px;
color: #0B6E4F;
margin:4vw 0px 0px 0px;
padding: 0px 0px 0px 3.33vw;

@media screen and (max-width: 500px) {
  font-size: 20px;
  }
@media screen and (max-width: 300px) {
  font-size: 16px;
  }
`;

const Text = styled.div`
  font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: #5F5F5F;
margin:2vw 0px 0px 0px;
padding: 0px 0px 0px 3.33vw;

@media screen and (max-width: 500px) {
  font-size: 12px;
  }
@media screen and (max-width: 300px) {
  font-size: 10px;
  }
`;

const SubHeading = styled.div`
  font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0B6E4F;
margin:1vw 0px 0px 0px;
padding: 0px 0px 0px 3.33vw;

@media screen and (max-width: 500px) {
  font-size: 14px;
  }
@media screen and (max-width: 300px) {
  font-size: 12px;
  }
`;

const Button1 = styled.button`
  width: 11.5vw;
  background-color: #0B6E4F;
  color: #FFFFFF;
  font-family: 'Roboto';
  text-align:center;
  font-weight: 600;
  font-size: 15px;
  border-radius: 8px;
  margin: 3.5vw 0.66vw 0px 5vw;
  padding: 0.33vw 0.66vw 0.33vw 0.7vw;

  @media screen and (max-width: 900px) {
  font-size: 13px;
  width: 13vw;
  }
  @media screen and (max-width: 500px) {
  font-size: 12px;
  width: 15vw;
  }
  @media screen and (max-width: 300px) {
  font-size: 10px;
  font-weight: 400;
  width: 20vw;
  }
`; 

const Button2 = styled.button`
  width: 11.5vw;
  background-color: #FFFFFF;
  color: #0B6E4F;
  border: 1.98056px solid #0B6E4F;
  font-family: 'Roboto';
  text-align:center;
  font-weight: 600;
  font-size: 15px;
  border-radius: 8px;
  margin: 3.5vw 0.66vw 0px 5vw;
  padding: 0.33vw 0.66vw 0.33vw 0.7vw;

  @media screen and (max-width: 900px) {
  font-size: 13px;
  width: 13vw;
  }
  @media screen and (max-width: 500px) {
  font-size: 12px;
  width: 15vw;
  }
  @media screen and (max-width: 300px) {
  font-size: 10px;
  font-weight: 400;
  width: 20vw;
  }
`; 

export default Notes;
