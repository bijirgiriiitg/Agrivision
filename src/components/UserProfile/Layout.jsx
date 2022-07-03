import React from "react";
import styled from "styled-components";
import UserDetails from "./UserDetails";

function Layout() {
  return (
    <StyledLayout>
      <UserDetails />
    </StyledLayout>
  );
}

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
    height: 85vh;
  margin-top: 50px;
  //   display: grid;
  //   grid-template-columns: 1fr 3.5fr 1fr;
  //   column-gap: 14px;
  //   overflow: hidden;
  font-family: Poppins;
  @media screen and (max-width: 960px) {
    // grid-template-columns: 0fr 2fr 1fr;
  }
`;
