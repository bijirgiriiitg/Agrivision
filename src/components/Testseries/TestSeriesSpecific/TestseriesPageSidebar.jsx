import styled from "styled-components";
import { Wrapper } from "../../Course/Foundation";


const Sidebar = ({ items, name, testSeriesId, progress }) => {
  return (
    items && (
      <>
        <SidebarContainer>
          <SidebarHeading>

            <SidebarHeadingContainer>
              Testseries Summary
            </SidebarHeadingContainer>
          </SidebarHeading>

          <div style={{ margin: "4px", color: "black" }}>{name}</div>
          <hr />
        </SidebarContainer>
      </>
    )
  );
};


const SidebarContainer = styled(Wrapper)`
  height: 100%;
  /* min-width: 364px; */
  width: 20vw;
  height: 80vh;
  background: #e8f3ff;
  padding: 32px 32px 0px;
`;

const SidebarHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const SidebarHeadingContainer = styled.p`
  font-size: 20px;
  line-height: 30px;
`;

export default Sidebar;

