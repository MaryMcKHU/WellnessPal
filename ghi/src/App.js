import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import MotivationalQuote from './Pages/MotivationalQuote';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import Login from './Components/Login';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
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
      <Container className='font-link' style={{marginTop:100}}>
        <h2 style={{color:'white', fontSize:28, paddingBottom:20, fontWeight:'bold'}}>Our goal is to help you improve your <br /> health and wellness.</h2>
        <h3 style={{color:'white', fontSize:25, paddingBottom:10}}>What can we help with today?</h3>
        <Button variant="light" style={{marginBottom:10, fontSize:18, width:400, textAlign:'left', borderRadius:30, padding:12}}>
          <SelfImprovementIcon style={{color:'purple'}}/> Meditations
        </Button><br />
        <Button variant="light" style={{marginBottom:10, fontSize:18, width:400, textAlign:'left', borderRadius:30, padding:12}}>
          <FitnessCenterIcon style={{color:'orange'}}/> Exercises
        </Button>
      </Container>
      <MotivationalQuote/>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}     
        
      </Routes>
      <Footer />
      </BrowserRouter>
      
      </>
  );
}

export default App;
