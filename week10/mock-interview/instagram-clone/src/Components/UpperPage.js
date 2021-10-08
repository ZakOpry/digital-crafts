import React from 'react'
import './UpperPageStyles.css'

export default function UpperPage() {
    return (
        <div className="upperPageDiv">
         <div className="mainPicDiv">
          <img className="mainPic" src="https://pbs.twimg.com/profile_images/1111371592641187841/b9SaYGLt.png"/>
         </div>
         <div className="profileInfoDiv">
          <div className="nameAndFollowDiv">
            <h1>georgestrait</h1>
            <button className="followButton">Follow</button>
          </div>
          <div className="followersInfoDiv">
          <p>642 posts</p>
          <p className="followers">1.2m followers</p>
          <p className="following">63 following</p>
         </div>
          <div>
            <h3>George Strait</h3>
            <p>The Official Instagram of George Strait.</p>
            <p>#HonkytonktimeMachine Out Now!</p>
            <p>linktr.ee/georgestrait</p>
          </div>
         


         </div>



        </div>
    )
}
