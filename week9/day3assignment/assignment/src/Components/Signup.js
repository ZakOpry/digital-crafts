import React from 'react'
import "./Signup.css"
 function Signup(props) {


    return (
        <div className="Maindiv">
            <h1>Signup</h1>
            <input onChange={(e)=> props.setFirstName(e.target.value)}type="text" name="firstName" placeholder="First Name"></input>
            <input onChange={(e)=> props.setLastName(e.target.value)}type="text" name="lastName" placeholder="Last Name"></input>
            <input onChange={(e)=> props.setDOB(e.target.value)}type="date" name="dateOfBirth" placeholder="Date of Birth"></input>
            <input onChange={(e)=> props.setAddress(e.target.value)}type="text" name="address" placeholder="Address"></input>
            <input onChange={(e)=> props.setCity(e.target.value)}type="text" name="city" placeholder="City"></input>
            <input onChange={(e)=> props.setState(e.target.value)}type="text" name="state" placeholder="State"></input>
            <input onChange={(e)=> props.setZipcode(e.target.value)}type="text" name="zipcode" placeholder="Zipcode"></input>
            <input onChange={(e)=> props.setUsername(e.target.value)}type="text" name="username" placeholder="Username"></input>
            <input onChange={(e)=> props.setEmail(e.target.value)}type="text" name="email" placeholder="Email"></input>
            <button onClick={()=> props.setCredentials([...props.credentials, "First name: " + props.firstName , "Last Name: " + props.lastName,
            "Date of Birth: " + props.DOB, "Address: " + props.address, 
            "City: " + props.city, "State: " + props.state, "Zipcode: " + props.zipcode, 
            "Username: " + props.username, "Email: " + props.email])}>Signup</button>
        </div>
    )
}
export default Signup