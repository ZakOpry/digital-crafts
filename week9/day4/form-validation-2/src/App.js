
import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Garage from "./Components/Garage";
import Account from "./Components/Account";
import { FormDiv, MainContainer, SideandForm } from "./Styled-components/AppStyle";
import ErrorPage from "./Components/ErrorPage";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {useState} from "react"



function App() {
  const[viewSidebar, setViewSidebar] = useState(true)
  return (
    <Router>
      <Switch>
    <MainContainer>
     <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
     <SideandForm>
      <Sidebar viewSidebar={viewSidebar}/>
      <FormDiv>
      <Route path="/login">
      <Login />
      </Route>
      </FormDiv>
      </SideandForm>
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
    </MainContainer>
    </Switch>
    </Router>
  );
}

export default App;