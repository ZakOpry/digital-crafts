import React from 'react'
import { InstagramLogo, PicDiv, SearchBar, SearchBarDiv } from './HeaderComponentsStyles'
import {GrHomeRounded} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import {ImCompass2} from 'react-icons/im'
import {BsHeart} from 'react-icons/bs'
import { IconContext } from 'react-icons'
import './HeaderComponents.css'

export default function HeaderComponents() {
    
    return (
        
        <PicDiv>
            <InstagramLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"/>
            <SearchBar type="search" placeholder="Search"></SearchBar>
            <div className="iconDiv">
            <IconContext.Provider value={{ className: "headerIcons"}}>
            <GrHomeRounded/> 
            <FiSend/>   
            <ImCompass2/>
            <BsHeart/>
            </IconContext.Provider>
            <img className="headerProfilePic" src="https://pbs.twimg.com/profile_images/1111371592641187841/b9SaYGLt.png"/>
            </div>
        
            


        </PicDiv>
       
        
    )
}
