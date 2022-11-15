import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import MainPage from "./Components/MainPage";
import MotivationalQuote from './Pages/MotivationalQuote.js';
import "./index.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;
