import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainSide = styled.div`

display: flex;

align-items: center;
flex-direction: column;
background-color: #80ced6;
width: 220px;
height: 100vh;
margin: 0;



`

export const SideImg = styled.img`
border-radius: 100%;
width: 30%;
margin-right: 15px;

`

export const Welcome = styled.div`
display: flex;
margin-bottom: 20px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 10px;

`

export const Name = styled.div`
width: 20%;

`

export const UserButton = styled.button`
`

export const SideBarLink = styled(Link)` 
text-decoration: none;
text-align: center;
padding: 10px;
font-size: 25px;
color: white;
width: 100%;
`









