import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { config } from '../config'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4, 
        px: 2,
        mt: 'auto', 
        bgcolor: 'background.paper', 
        
        textAlign: 'center',
      }}
    >
      
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 'bold',
          fontFamily: "'Dancing Script', cursive", 
          fontSize: '1.8rem', 
          letterSpacing: '0.05em',
          mb: 1 
        }}
      >
        {config.name}
      </Typography>

      
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
        <IconButton
          aria-label="LinkedIn"
          href={config.links.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit" 
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          href={config.links.github}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="Email"
          href={config.links.email} 
          color="inherit"
        >
          <EmailIcon />
        </IconButton>
      </Stack>

      
      <Link href={config.links.email} color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
         {config.links.email.replace('mailto:', '')} 
      </Link>


      
      <Typography variant="caption" color="text.secondary">
        © {currentYear} {config.name}. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
