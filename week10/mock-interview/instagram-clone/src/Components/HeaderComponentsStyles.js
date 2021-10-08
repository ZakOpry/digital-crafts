import styled from "styled-components";

export const PicDiv = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
`

export const InstagramLogo = styled.img`
height: 75%;
margin-left: 240px;
@media screen and (max-width: 1070px){
    margin-left: auto;
}
`

// export const SearchBarDiv = styled.div`
// background-color: red;
// height: 100%;
// width: 100px;
// `

export const SearchBar = styled.input`
text-align: center;
border: solid 1px ;
border-color: rgb(219,219,219);
height: 54%;
width: 213px;
border-radius: 5px;
margin-left: 258px;
background-color: rgb(250,250,250);

@media screen and (max-width: 1070px){
    margin-left: auto;

}
@media screen and (max-width: 550px){
    width: auto;
}

`