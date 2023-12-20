import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navigation from "./navigation/Navigation";
import About from "./about/About";
import Classes from "./classes/Classes";

import { Grid } from "@material-ui/core";
import { Stack } from "@mui/material";

const App = () => (
  <Grid className="app-grid">
    <Stack direction="row" className="app-container">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="classes" element={<Classes />} />
        </Routes>
      </Router>
    </Stack>
  </Grid>
);

export default App;
