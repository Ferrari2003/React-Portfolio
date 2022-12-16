import React from "react";
import './index.css';
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";
import ServiceDetails from "./Components/ServiceDetails";
import BarberDetails from "./Components/BarberDetails";
import CarDetails from "./Components/CarDetails";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/ServiceDetails" element={<ServiceDetails />}></Route>
        <Route path="/BarberDetails" element={<BarberDetails />}></Route>
        <Route path="/CarDetails" element={<CarDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
