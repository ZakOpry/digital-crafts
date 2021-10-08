import React from 'react'
import "./MiddlePageStyles.css"
import {IoMdGrid} from "react-icons/io"
import {BiMoviePlay} from "react-icons/bi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {MdOutlinePersonPin} from "react-icons/md"
export default function MiddlePage() {
    return (
        <div className="middlePageDiv">
           <div className="postDiv">
            <IoMdGrid/>
           <p>POSTS</p>
           </div>
            <div className="reelsDiv">
            <BiMoviePlay/>
           <p>REELS</p>
            </div>
            <div className="igtvDiv">
            <AiOutlineFundProjectionScreen/>
           <p>IGTV</p>
           </div>
           <div className="taggedDiv">
           <MdOutlinePersonPin/>
           <p>TAGGED</p> 
           </div>
        </div>
    )
}
