import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import MainPage from "./Components/MainPage";
import MotivationalQuote from './Pages/MotivationalQuote';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import Login from './Components/Login';
import "./index.css";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <>
    <BrowserRouter>
      <Nav />
      <MotivationalQuote />
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}     
        
      </Routes>
      <Footer />
      </BrowserRouter>
      
      </>
  );
}

export default App;
