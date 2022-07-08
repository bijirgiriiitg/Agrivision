import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const SidebarNav = styled.nav`
  background:  #E9F0EF;
  width: 250px;
  margin-left: 2%;
  height: 100%;
  width:26%;
  margin-top:2%;
  display: flex;
  border-radius: 1%;
  justify-content: center;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 80%;
  margin:5px;
`;

const Sidebar = () => {
  const [sidebar] = useState(true);
  return (
    <>
      <IconContext.Provider value={{ color: 'green' }}>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
