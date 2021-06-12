import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './Components/Home';
import { Header, Footer } from './Components/HeaderFooter';

const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route path='/' component={Home} />
    </Switch>

    <Footer />
  </Router>
);

export default App;