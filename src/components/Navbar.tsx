import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; 
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Email as EmailIcon } from '@mui/icons-material'; 
import { config } from '../config'; 

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static" 
      elevation={0} 
      sx={{
        backgroundColor: 'transparent', 
        
        
      }}
    >
      
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}> 
          
          <Typography
            variant="h6"
          component="div"
          sx={{
            
            fontWeight: 'bold',
            fontFamily: "'Dancing Script', cursive", 
            fontSize: '1.8rem', 
            letterSpacing: '0.05em',
          }}
        >
          {config.name}
        </Typography>

        
        <Box sx={{ display: 'flex', gap: 1 }}> 
          
          <Box sx={{ bgcolor: 'primary.main', borderRadius: '50%', display: 'flex', p: 0.5 }}>
            <IconButton
              component={Link}
              href={config.links.linkedIn}
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: 'primary.contrastText', p: 0.5 }} 
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon fontSize="small"/>
            </IconButton>
          </Box>

          
          <Box sx={{ bgcolor: 'primary.main', borderRadius: '50%', display: 'flex', p: 0.5 }}>
            <IconButton
              component={Link}
              href={config.links.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'primary.contrastText', p: 0.5 }}
              aria-label="GitHub Profile"
            >
              <GitHubIcon fontSize="small"/>
            </IconButton>
          </Box>

          
          <Box sx={{ bgcolor: 'primary.main', borderRadius: '50%', display: 'flex', p: 0.5 }}>
            <IconButton
              component={Link}
              href={config.links.email}
              sx={{ color: 'primary.contrastText', p: 0.5 }}
              aria-label="Send Email"
            >
              <EmailIcon fontSize="small"/>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
};

export default Navbar;
