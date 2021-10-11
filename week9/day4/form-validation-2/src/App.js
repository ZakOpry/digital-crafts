
import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Garage from "./Components/Garage";
import Account from "./Components/Account";
import { DashboardDiv, FormDiv, MainContainer, SideandForm } from "./Styled-components/AppStyle";
import ErrorPage from "./Components/ErrorPage";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {useState} from "react"
import "./App.css"



function App() {
  const[viewSidebar, setViewSidebar] = useState(true)
  return (
    <Router>
      <Switch>
    <MainContainer>
     <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
     <SideandForm>
      <Sidebar viewSidebar={viewSidebar}/>

      <Route path="/login">
      <FormDiv>
      <Login />
      </FormDiv>
      </Route>
     
      
      <Route exact path="/">
      <Home/>
      </Route>
      
      
      <Route path="/dashboard">
      <Dashboard/>
      </Route>
      
      
      <Route path="/account">
        <Account/>
        </Route>
      <Route path="/garage">
        <Garage/>
        </Route>
      <Route path="*">
        <Redirect to="/errorpage" />
        </Route>
        <Route path = "/errorpage" >
      <ErrorPage/>
      </Route>
      </SideandForm>
    </MainContainer>
    </Switch>
    </Router>
  );
}

export default App;