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
        <Box 
          component="img" 
          src={ChillDudeSvg} 
          alt="Decorative illustration" 
          sx={{ 
            maxWidth: { xs: '80%', sm: '50%' }, // Responsive max width
            height: 'auto', 
            marginBottom: { xs: '-5rem', sm: '-7rem' }, // Responsive bottom margin
            marginTop: { xs: '-8rem', sm: '-13rem' } // Responsive top margin
          }} 
        /> 
      </Box>
      <AboutMe />
      <Projects /> 
      <Footer />
    </>
  );
}

export default App;
