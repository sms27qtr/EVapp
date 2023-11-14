import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Benefits from './Components/Benefits/Benefits';
import Statistics from './Components/Statistics/Statistics';
import Resources from './Components/Resources/Resources';
import Solutions from './Components/Solutions/Solutions';
import Contact from './Components/Contact/Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/benefits" element={<Benefits />} />
        <Route exact path="/statistics" element={<Statistics />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/solutions" element={<Solutions />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
