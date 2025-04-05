import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download'; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { config, replaceNamePlaceholder } from '../config'; 



const HomePage: React.FC = () => {

  
  const handleScrollToWork = () => {
    const element = document.getElementById('work-experience');
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; 
    let startTime: number | null = null;

    
    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animationStep = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextScrollPosition = easeInOutQuad(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, nextScrollPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animationStep);
      } else {
        window.scrollTo(0, targetPosition); 
      }
    };

    requestAnimationFrame(animationStep);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: 'calc(100vh - 80px)', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        px: 2, 
        width: '100%', 
      }}
    >
      
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
      >
        
        <Typography variant="body2" sx={{ mb: 1, opacity: 0.8, textAlign: 'center' }}>
          Based in {config.location}
        </Typography>

        
        <Typography variant="h3" component={motion.h1} sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          
          <motion.div
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={{
               visible: { transition: { staggerChildren: 0.2 } }, 
               hidden: {}
             }}
             
          >
            
            {["Software", "Engineer"].map((word, i) => (
              <motion.span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }} variants={{ hidden: { opacity: 0, filter: 'blur(8px)' }, visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } } }}>
                {word}
              </motion.span>
            ))}
            <br />
            {["Specializing", "in", "Web", "&", "FullStack"].map((word, i) => (
               <motion.span key={`styled-${i}`} style={{ display: 'inline-block', marginRight: '0.25em' }} variants={{ hidden: { opacity: 0, filter: 'blur(8px)' }, visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } } }}>
                 <Box component="span" sx={{ color: '#2196F3' }}>
                   {word}
                 </Box>
               </motion.span>
            ))}
             <br />
             {["Applications"].map((word, i) => (
              <motion.span key={`last-${i}`} style={{ display: 'inline-block', marginRight: '0.25em' }} variants={{ hidden: { opacity: 0, filter: 'blur(8px)' }, visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } } }}>
                {word}
              </motion.span>
            ))}
          </motion.div>
        </Typography>

        
        <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', opacity: 0.9, textAlign: 'center', color: '#b1d4f0' }}> 
          {replaceNamePlaceholder(config.hero.subtitle)}
        </Typography>

        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center"> 
          
          
          <Button
            
            
            variant="outlined" 
            color="primary"
            size="large"
            
            onClick={handleScrollToWork} 
            sx={{
              fontWeight: 'bold',
              position: 'relative', 
              overflow: 'hidden', 
              '&::before': { 
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%', 
                width: '50%', 
                height: '100%',
                background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)', 
                transform: 'skewX(-25deg)', 
                animation: 'shine 3s infinite 1s', 
              },
              
              '@keyframes shine': {
                '0%': { left: '-100%' }, 
                '60%': { left: '120%' }, 
                '100%': { left: '120%' }, 
              },
            }}
          >
            {config.buttons.work}
          </Button>

          
          <Button
            variant="text" 
            color="secondary" 
            size="large"
            startIcon={<DownloadIcon />} 
            href={config.cvPath}
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ fontWeight: 'bold' }}
          >
            {config.buttons.cv}
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default HomePage;
