import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Artic1 from "../pages/Artic1";
import Home from "../pages/Home";

const layout = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<Artic1/>} path="/artic1"/>
        </Routes>
      </Router>
    </>
)
};

export default layout;
