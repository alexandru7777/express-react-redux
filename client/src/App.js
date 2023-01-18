import React from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";


function App() {

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/auth" element={<Auth />} exact />
      </Routes>
     
    </Container>    
    
    </BrowserRouter>

  );
}

export default App;
