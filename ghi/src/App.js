import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import Login from './Components/Login';
import Music from './Pages/Music';
import Meditation from './Pages/Meditation';
import Exercise from './Pages/Exercise';
import Journal from './Pages/Journal';
import MainPage from './Components/MainPage';
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
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/exercise/" element={<Exercise />} />
        <Route path="/meditation/" element={<Meditation />} />
        <Route path="/journal/" element={<Journal />} />
        <Route path="/music/" element={<Music />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
