import styled from "styled-components";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Subjects from "./SubItems";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Sarthak = () => {

  const classes = useStyles();
  // Active Button State
  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const toggle = (newActive) => {
    if (active===newActive) return 0;
    else return newActive;
  }

  // Active Sub Button State
  const [activeSub, setActiveSub] = React.useState('');
  const SetSubView = (activeSub) => {
    setActiveSub(activeSub);
  }
  
  return (
    <div>
        <SideNavBar>
        {Subjects.map((subject) => 
            <div key={subject.id}>
            <Button1  className={(active===subject.id ? `${classes.activeButton1}` : '')} onClick={() => SetView(toggle(subject.id))}>{subject.subjectName} {(active===subject.id ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}</Button1>
            <Line></Line>
            {
              active===subject.id ?
              <div>
              {subject.subItems.map((subitem) => 
                <Button2 key={subitem.id} className={(activeSub===subitem.id ? `${classes.activeButton2}` : '')} onClick={() => SetSubView(subitem.id)}><Icon>{subitem.icon}</Icon><Subtitle>{subitem.title}</Subtitle> {subitem.subtitle}</Button2>
              )}
              </div> :
              ''
            }
            </div>
          )}
        </SideNavBar>
    </div>

  );
};
const SideNavBar = styled.div`
  width: 15vw;
  height: 100%;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #E9F0EF;
  border-radius: 12px;
  position: relative;
  margin: 4vw 2.66vw 0px 2vw;
  @media screen and (max-width: 900px) {
    width: 20vw;
    }
 
  @media screen and (max-width: 500px) {
    width: 20vw;
    }
`;

const Line = styled.div`
  position: absolute;
  width: 10vw;
  height: 0px;
  left:1.5vw;
  border: 0.5px solid #D8D8D8;
  @media screen and (max-width: 900px) {
    width: 18vw;
    }
  @media screen and (max-width: 500px) {
    width: 18vw;
    }
`;

const Button1 = styled.button`
  width: 11.5vw;
  color: #5F5F5F;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 400;
  font-size: 14px;
  border-radius: 8px;
  margin: 0.66vw 0.66vw 0px 1vw;
  padding: 0.33vw 0.66vw 0.33vw 0.7vw;

  @media screen and (max-width: 900px) {
    width: 18vw;
    margin: 1vw 0.66vw 0px 2vw;
    font-size: 12px;
    }
  @media screen and (max-width: 500px) {
    width: 18vw;
    margin: 1vw 0.66vw 0px 2vw;
    font-size: 12px;
    }
  @media screen and (max-width: 300px) {
    width: 19vw;
    margin: 0.66vw 0vw 0px 0vw;
    padding: 0.33vw 0vw 0.33vw 0.5vw;
    font-size: 8px;
    }
`; 

const Button2 = styled.button`
  width: 13vw;
  background-color: #FFFFFF;
  color: #717171;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 700;
  font-size: 10px;
  border-radius: 6px;
  margin: 0.66vw 0.66vw 0px 1.2vw;
  padding: 0.1vw 0.3vw 0.1vw 0.5vw;
  display: flex;
  flex-direction: 'row';
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 18vw;
    font-size: 0px;
    }
  @media screen and (max-width: 500px) {
    width: 19vw;
    font-size: 0px;
    }
  @media screen and (max-width: 300px) {
    font-size: 0px;
  }
`; 

const Subtitle = styled.div`
  color: #5F5F5F;
  font-family: 'Roboto';
  font-weight: 700;
  width: 5vw;
  margin: 0vw 0.3vw 0 1vw;
  font-size: 11px;
  @media screen and (max-width: 900px) {
    font-size: 10px;
    }
  @media screen and (max-width: 500px) {
    font-size: 9px;
    width: 8vw;
    }
  @media screen and (max-width: 300px) {
    font-size: 6px;
    margin: 0;
  }
`;

const Icon =styled.div`
  @media screen and (max-width: 900px) {
    transform: scale(0.75);
    }
@media screen and (max-width: 500px) {
    transform: scale(0.75);
  }
  @media screen and (max-width: 300px) {
    transform: scale(0.5);
  }
`;

const useStyles = makeStyles(() => ({
  activeButton1: {
    color: '#0B6E4F !important',
    fontWeight: '600 !important',
  },
  activeButton2: {
    fontWeight: '600 !important',
    borderLeft: '0.5vw solid green !important'
  },
}));


 



export default Sarthak;
