import React from 'react'
import Cars from "../garage/Cars"
import Motorcycles from "../garage/Motorcycles"
import "../../App.css"

export default function Garage() {
    return (
        <div className="box">
            <h1>Garage</h1>
            <Cars/>
            <Motorcycles/>
        </div>
    )
}
