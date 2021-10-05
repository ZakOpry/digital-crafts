import Neighborhood from "./components/neighborhood/Neighborhood"
import Dealership from "./components/dealership/Dealership"
import "./App.css"

function App() {
  return (
    <div className="box">
     <h1>props drilling</h1>
     <Neighborhood/>
     <Dealership/>
    </div>
  );
}

export default App;
