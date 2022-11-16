import React from 'react';
import { Link } from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function MainPage() {
    const handleMeditationClick = event => {
        console.log('Meditation Link Clicked');
      };
      const handleExerciseClick = event => {
        console.log('Exercise Link Clicked');
      }
      const handleMusicClick = event => {
        console.log('Muscle Link Clicked');
      }
    return (
        <Container className='font-link' style={{marginTop:100}}>
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
        </Container>      
    )
}
export default MainPage;


