import { useState } from "react"
import './App.css';
import StudentContainer from "./Components/StudentContainer";

const data = [
  {name: "Jose"},
  {name: "Britt"},
  {name: "Matt"},
  {name: "Dustin"},
  {name: "Justin"},
  {name: "Kayla"},
  {name: "Deanna"},
  {name: "Cameron"},
  {name: "Tim"},
  {name: "Ron"},
  {name: "Jamie"},
  {name: "Brande"},
  {name: "Jordan"},
  {name: "Xavier"},
  {name: "zak"}
]

function App() {
  // const [students, setStudents] = useState(data)
  // const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <h1>App js</h1>
      <h3>Data Starts Here</h3>
      <StudentContainer />
    </div>
  );
}

export default App;
