import React from 'react'
import './LowerPageImagesStyles.css'

export default function LowerPageImages(props) {
    const pics = props.ima.image
    return (
        <div className="picDiv">
            <img className="gridPic"src={pics}/>
        </div>
    )
}
