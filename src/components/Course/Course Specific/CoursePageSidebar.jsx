import styled from "styled-components";
import { Wrapper } from "../Foundation";
import SideClose from "./SideClose";
import {FiFilter} from "react-icons/fi";
import useWindowDimensions from "../../Util/useWindowDimensions";
import { useState} from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";

const Sidebar = ({ items, name, courseId, progress }) => {
  const { width } = useWindowDimensions();
  const [sidebar,setSidebar] = useState(false);
  function showSidebar () {
    setSidebar(!sidebar);
} 
  return (
    items && (
      <>
        {width<900 && (
          <>
          <Filter>
          <MenuBars>
            <Link to = "#" >
            <FiFilter onClick={showSidebar} color="#1bbc9b" />
            </Link>
          </MenuBars>
        </Filter>
        <MenuActive style={sidebar?{
              backgroundColor: "#e8f3ff",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifySelf: "center",
              position: "fixed",
              top: "0",
              left: "0",
              transition: "350ms",
              zIndex:"999",
              overflow:"scroll"
        }:{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifySelf: "center",
              position: "fixed",
              top: "0",
              left: "-100%",
              transition: "550ms",
              zIndex:"999",
              overflow:"scroll"
        }} >
          <MenuItems>
            <Toggle>
              <MenuBars>
              <Link to="#" >
                  <AiOutlineClose onClick={showSidebar} color="#1bbc9b" />
              </Link>
              </MenuBars>
            </Toggle>
          <SideClose items={items} name={name} courseId={courseId} progress={progress} />
        </MenuItems>
          </MenuActive>
          </>
        )}
        { width>=900 && 
      (<SidebarContainer>
        <SideClose items={items} name={name} courseId={courseId} progress={progress} />
      </SidebarContainer> )}
      </>
    )
  );
};


// };

const Filter = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`

const MenuItems = styled.ul`
    margin-right: 20px;
    width: 100%;
`

const Toggle = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
const MenuBars = styled.div`
    margin-left: 0.5rem;
    font-size: 1.3rem;
    background: none;

`
const MenuActive = styled.nav``;

const SidebarContainer = styled(Wrapper)`
  height: 100%;
  /* min-width: 364px; */
  width: 20vw;
  height: 80vh;
  background: #e8f3ff;
  padding: 32px 32px 0px;
`;

export default Sidebar;

// import styled from "styled-components";
// import SearchIcon from "@material-ui/icons/Search";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import { Wrapper } from "./Foundation";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const baseURL = "https://agri-api-test.herokuapp.com/v1/course/61443483fde15875b4add58b?queryParam=0";

// const Sidebar = (props) => {
//   const [closed, setIsClosed] = useState(true);
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState(null);

//   useEffect(() =>
//     fetch(baseURL)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result.data.chapters);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//       );
//     //   if (error) {
//     //     return <div>Error: {error.message}</div>;
//     //   } else if (!isLoaded) {
//     //     return <div>Loading...</div>;
//     //   } else {
//          return (
//     <>
//       <SidebarContainer>
//         <SidebarHeading>
//           <SidebarHeadingContainer>Course Summary</SidebarHeadingContainer>
//         </SidebarHeading>
//         {/* items&& (
//             {items.map(item=> {
//               return (
//                 <ViewLink to="">
//                 <div style={{margin:"12px"}}>
//                   {item.name}
//                 </div>
//                 <Range type="range" min="0" max="100" value={( item.name.completed * 100) / item.name.total } />
//                 </ViewLink>
//               )
//             })
//             }
//         ) */}
//         <div style={{margin:"12px"}}>
//                   Hamburger
//         </div>
//         <Range type="range" min="0" max="100" value={(25 * 100) / 50} />
//         <div style={{margin:"12px"}}>
//                   Graph
//         </div>
//         <div style={{margin:"12px"}}>
//                   Kaziranga
//         </div>
//         <div style={{margin:"12px"}}>
//                   thermodynamics
//         </div>
//         <div style={{margin:"12px"}}>
//                   sidebar
//         </div>
//       </SidebarContainer>
//     </>
//   );
// };
// // };

// const Range = styled.input`
//   pointer-events: none;
//   width: 100%;
//   &::-webkit-slider-thumb {
//     opacity: 0;
//   }
// `;
// const ColoredSpan = styled.span`
//   color: #1bbc9b;
// `;
// const StyledP = styled.p`
//   span {
//     font-weight: 600;
//   }
// `;
// const InputWrapper = styled.div`
//   max-width: 300px;
//   width: 100%;
// `;

// const SidebarContainer = styled(Wrapper)`
//   height: 100%;
//   /* min-width: 364px; */
//   width: 20vw;
//   height: 80vh;
//   background: #e8f3ff;
//   padding: 32px 32px 0px;
// `;

// const SidebarHeading = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 32px;
// `;

// const SidebarHeadingContainer = styled.p`
//   font-size: 20px;
//   line-height: 30px;
// `;

// const SidebarContent = styled.div`
//   margin-top: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const SidebarLine = styled.div`
//   width: 100%;
//   height: 0.1px;
//   background-color: black;
//   margin-top: 20px;
// `;

// const Dropdown = styled.div`
//   margin-left: 10px;
//   margin-top: 8px;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 24px;
//   color: #7a8188;
// `;

// const ViewAll = styled.a`
//   text-decoration: none;
//   color: #16a086;
//   font-size: 12px;
//   line-height: 18px;
//   text-align: right;
//   margin-right: 34px;
//   width: 100%;
// `;

// const ViewP = styled.p`
//   display: flex;
//   align-items: center;
//   margin-top: 8px;
// `;

// const ViewLink = styled(Link)`
//   text-decoration: none;
//   color: #7a8188;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 24px;
// `;

// export default Sidebar;
