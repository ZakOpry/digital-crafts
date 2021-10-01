import {useState} from "react"
import Signup from "./Components/Signup";
import DB from "./Components/DB";
import "./App.css"

function App() {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [DOB, setDOB] = useState("")
const [address, setAddress] = useState("")
const [city, setCity] = useState("")
const [state, setState] = useState("")
const [zipcode, setZipcode] = useState("")
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [credentials, setCredentials] = useState([])




  return (
    <div className="App">
     <Signup firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} DOB={DOB} setDOB={setDOB} address={address}
     setAddress={setAddress} city={city} setCity={setCity} state={state} setState={setState} zipcode={zipcode} setZipcode={setZipcode} username={username} 
     setUsername={setUsername} email={email} setEmail={setEmail} credentials={credentials} setCredentials={setCredentials}/>
     <DB credentials={credentials}/>
    </div>
  );
}

export default App;
