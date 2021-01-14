import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './App.scss';

import LoginPage from "./pages/loginPage/loginPage.jsx"
import TaskPage from "./pages/taskPage/taskPage.jsx"

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/tasks">
              <TaskPage/>
            </Route>
            <Route path="/">
              <Redirect to ="/login"/>
            </Route>
          </Switch>
        </Router>        
    </div>
  );
}

export default App;
