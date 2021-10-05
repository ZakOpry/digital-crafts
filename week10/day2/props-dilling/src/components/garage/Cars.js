import React from 'react'
import Exotics from "../garage/Exotics"
import MuscleCars from "../garage/MuscleCars"
import "../../App.css"
export default function () {
    return (
        <div className="box">
            <h1>Cars</h1>
            <Exotics/>
            <MuscleCars/>
        </div>
    )
}
