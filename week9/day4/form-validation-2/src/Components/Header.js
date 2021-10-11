import React, { useEffect, useState } from "react";
import { HeaderContainer} from "../Styled-components/HeaderStyle";
import { useDispatch } from "react-redux";
// import React from "react";
// import { HeaderContainer } from "../Styled-components/HeaderStyle";
import { HeaderOne } from "../Styled-components/HeaderStyle";
export default function Header(props) {
  
const viewSidebar = props.viewSidebar
const setViewSidebar = props.setViewSidebar
const dispatch = useDispatch()
  return (
    // <HeaderContainer>
    <HeaderContainer>
      <HeaderOne>Header</HeaderOne>
      <button onClick={()=> setViewSidebar(!viewSidebar)}>Sidebar</button>
      <button onClick={()=> dispatch({type: "SET_USERNAME",
    payload: ["a", "b", "c"] })}>Set Username</button>
    <button onClick={()=> dispatch({type: "SET_RESTAURANT", payload: ["wendys",
    "BurgerKing", "McDonalds"]})}>Set Restaurants</button>
      
   
     </HeaderContainer>
    // </HeaderContainer>
  );
}