import React from "react";
import {BrowserRouter as AppRouter, Route, Link } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import Servicedetails from "./Servicedetails";
import Services from "./Services";
const  Router = () => {
  return (
    <AppRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/services">Services</Link>
     <hr />
      </nav> 
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route exact  path="/services" component={Services} />
      <Route path="/services/:id" component={Servicedetails} />
    </AppRouter>
  );
};

export default Router;
