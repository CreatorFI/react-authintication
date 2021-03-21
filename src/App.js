import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Ride from './components/Ride/Ride';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>Name: {loggedInUser.name === undefined ?loggedInUser.email: loggedInUser.name }</h1>
    <Router>
    <Navbar></Navbar>
      <Switch>
      <PrivateRoute path="/destination">
        <Destination></Destination>
        <Ride></Ride>
      </PrivateRoute>
      <Route path="/signIn">
        <SignIn></SignIn>
      </Route>
      <Route path="/signup">
        <SignUp></SignUp>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}


export default App;
