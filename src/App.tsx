import Box from '@mui/material/Box'; 
import HomePage from './components/HomePage'; 
import Navbar from './components/Navbar'; 
import WorkExperience from './components/WorkExperience'; 
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects'; 
import Footer from './components/Footer'; 
import ChillDudeSvg from './assets/images/chill_dude.svg'; 

function App() {
  return (
    <> 
      <Navbar /> 
      <HomePage />
      <WorkExperience />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 6, 
        bgcolor: 'background.default' 
      }}>
        <img src={ChillDudeSvg} alt="Decorative illustration" style={{ maxWidth: '50%', height: 'auto', marginBottom: '-7rem', marginTop: '-13rem' }} /> 
      </Box>
      <AboutMe />
      <Projects /> 
      <Footer />
    </>
  );
}

export default App;
