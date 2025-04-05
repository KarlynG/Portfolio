import React, { useState } from 'react'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { config } from '../config'; 

const AboutMe: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false); 

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box
      id="about-me"
      ref={ref}
      sx={{
        py: 10, 
        px: 2,
        background: 'linear-gradient(135deg, #212121 30%, #000000 90%)', 
        color: 'white', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        style={{ maxWidth: '800px', width: '100%' }} 
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Hi, I'm Karlyn. Nice to meet you.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
          
          Coding began as a simple hobby for me, but quickly transformed into something much more meaningful. Today, I channel my
           passion for problem-solving into crafting elegant solutions 
          across the full stack, from responsive React interfaces to robust .NET microservices. 
          Always eager to learn, adapt, and push boundaries 
          in this ever-evolving field.
        </Typography>
        
        <Button
          variant="outlined"
          size="large" 
          endIcon={isHovering ? <LinkedInIcon /> : null} 
          href={config.links.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          sx={{
            minWidth: '160px', 
            color: 'white',
            borderColor: 'white',
            
            '&:hover': {
              bgcolor: 'white',
              color: '#212121',
              borderColor: 'white',
            },
            
             '& .MuiButton-endIcon': {
               display: 'inline-flex',
               alignItems: 'center',
               marginLeft: '1px' 
             }
          }}
        >
          {isHovering ? 'Linked' : "Let's Connect"} 
        </Button>
      </motion.div>
    </Box>
  );
}; 

export default AboutMe;
