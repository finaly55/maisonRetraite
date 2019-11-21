import React from 'react';
import './App.css';
import SignIn from './views/administration/login/SignIn';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./views/public/home/home";
import PlanManagement from "./views/administration/planManagement/planManagement";
import MemberManagement from "./views/administration/memberManagement/memberManagement";
import Header from "./communs/header/header";

//components

function App() {
  return (
      <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/administration" component={Header}/>
          <Route path="/administration/plan" exact component={PlanManagement}/>
          <Route path="/administration/members" exact component={MemberManagement}/>
          <Route path="/login" exact component={SignIn}/>
      </Router>
  );
}

export default App;
