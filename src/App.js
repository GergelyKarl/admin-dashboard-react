import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./userList/UserList";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
