import React from 'react'
import "./DB.css"
function DB(props) {
    const list = props
    console.log(list)
    return (
        <div className="DatabaseDiv">
            <h1>Database</h1>
            <div className="Names">
            <ul>
                {list.credentials.map((items)=> ( <li>{items}</li>))}
            </ul>
            </div>

        </div>
    )
}
export default DB