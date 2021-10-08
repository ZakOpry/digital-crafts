import { AppContainer } from "./AppStyles";
import Header from "./Components/Header";
import "./App.css"
import UpperPage from "./Components/UpperPage";
import MiddlePage from "./Components/MiddlePage";
import LowerPage from "./Components/LowerPage";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <AppContainer>
     <Header/>
     <UpperPage/> 
     <MiddlePage/>
     <LowerPage/>
     <Footer/>
    </AppContainer>
  );
}

export default App;
