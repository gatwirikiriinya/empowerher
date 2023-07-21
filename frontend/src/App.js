import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Loginnew, Registernew } from "./components/auth";

import { Redirect } from "react-router-dom";

const RedirectToIndex = () => {
  useEffect(() => {
    
    window.location.href = "/home.html";
  }, []);

  return null; 
};
const Dashboard = () => {
  useEffect(() => {
    
    window.location.href = "/dashboard.html";
  }, []);

  return null; 
};
const Financialdiscipline = () => {
  useEffect(() => {
    
    window.location.href = "/financial-discipline.html";
  }, []);

  return null; 
};
const Investing = () => {
  useEffect(() => {
    
    window.location.href = "/start-investing.html";
  }, []);

  return null; 
};

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={RedirectToIndex} />
        <Route exact path="/login" component={Loginnew} />
        <Route exact path="/register" component={Registernew} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/financial-discipline" component={Financialdiscipline} />
        <Route exact path="/start-investing" component={Investing} />
      </Switch>
    </>
  );
}

export default App;
