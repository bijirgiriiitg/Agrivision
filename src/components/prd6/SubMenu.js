import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: green;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  font-weight:bold;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 5px;
  color: #5F5F5F;
  width:100%;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;

const DropdownLink = styled(Link)`
  background: #fff;
  height: 60px;
  padding-left: 1.2rem;
  display: flex;
  margin: 15px;
  border-radius: 5px;
  align-items: center;
  text-decoration: none;
  color: green;
  font-size: 18px;

  &:hover {
    border-left: 4px solid green;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
          {item.subtitle}
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
              <Subtitle>{item.subtitle}</Subtitle>
            </DropdownLink>
          );
        })}
    </>
  );
};
const Subtitle = styled.div`
  color: #5F5F5F;
  font-family: 'Roboto';
  font-weight: 700;
  width: 70%;
  margin-left:-50%;
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

export default SubMenu;
