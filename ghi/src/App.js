import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import MotivationalQuote from './Components/MotivationalQuote';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Login from './Components/Login';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Music from './Pages/Music';
import Meditation from './Pages/Meditation';
import Exercise from './Pages/Exercise';
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
        <Route path="/meditation/" element={<Meditation />}/>
        <Route path="/music/" element={<Music />}/>
      </Routes>
      {/* <Container className='font-link' style={{marginTop:100}}>
        <h2 style={{color:'white', fontSize:28, paddingBottom:20, fontWeight:'bold'}}>
          Our goal is to help you improve<br />
          your  health and wellness.
        </h2>
        <h3 style={{color:'white', fontSize:25, paddingBottom:10}}>
          What can we help with today?
        </h3>
        <Link onClick={handleMeditationClick} to="/meditation/">
          <Button variant="light" style={{marginBottom:10, fontSize:18, width:400, textAlign:'left', borderRadius:30, padding:12}}>
            <SelfImprovementIcon style={{color:'purple'}}/> Meditations
          </Button>
        </Link><br />
        <Link onClick={handleExerciseClick} to="/exercise/">
          <Button variant="light" style={{marginBottom:10, fontSize:18, width:400, textAlign:'left', borderRadius:30, padding:12}}>
            <FitnessCenterIcon style={{color:'orange'}}/> Exercises
          </Button>
        </Link><br/>
        <Link onClick={handleMusicClick} to="/music/">
          <Button variant="light" style={{marginBottom:10, fontSize:18, width:400, textAlign:'left', borderRadius:30, padding:12}}>
            <MusicNoteIcon style={{color:'blue'}}/> Calming Music
          </Button>
        </Link>
        </Container>       */}
      <MotivationalQuote />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
