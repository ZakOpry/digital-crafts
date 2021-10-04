import React, { useEffect, useState } from "react";
import { HeaderContainer} from "../Styled-components/HeaderStyle";

// import React from "react";
// import { HeaderContainer } from "../Styled-components/HeaderStyle";
import { HeaderOne } from "../Styled-components/HeaderStyle";
export default function Header(props) {
  
const viewSidebar = props.viewSidebar
const setViewSidebar = props.setViewSidebar

  return (
    // <HeaderContainer>
    <HeaderContainer>
      <HeaderOne>Header</HeaderOne>
      <button onClick={()=> setViewSidebar(!viewSidebar)}>Sidebar</button>
   
     </HeaderContainer>
    // </HeaderContainer>
  );
}