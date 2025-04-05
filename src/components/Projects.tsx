import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link'; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { config } from '../config';


import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web'; 
import WhatshotIcon from '@mui/icons-material/Whatshot'; 
import CssIcon from '@mui/icons-material/Css';



const iconMap: { [key: string]: React.ElementType } = { 
  react: WebIcon, 
  mantineui: WebIcon, 
  'c#': CodeIcon,
  '.net core': CodeIcon,
  postgresql: StorageIcon,
  firebase: WhatshotIcon,
  typescript: CodeIcon, 
  css: CssIcon,
  
};


const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  
  const placeholderImage = "https://via.placeholder.com/600x400.png?text=Project+Image";

  return (
    <Box
      id="projects" 
      ref={ref}
      sx={{
        py: 8,
        px: 2,
        bgcolor: 'background.default', 
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        style={{ maxWidth: 'lg', margin: 'auto' }} 
      >
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
          Notable Projects
        </Typography>

        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {config.projects.map((project, index) => (
            
            <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)' } }}> 
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }} 
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ position: 'relative', '&:hover .overlay': { opacity: 1 } }}>
                    <CardMedia
                      component="img"
                      height="200" 
                      image={project.image || placeholderImage} 
                      onError={(e) => (e.currentTarget.src = placeholderImage)} 
                    />
                    
                    <Link
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none" 
                      className="overlay" 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.65)', 
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                        cursor: 'pointer',
                        gap: 0.5, 
                      }}
                    >
                      <GitHubIcon sx={{ fontSize: '1.2rem' }} /> 
                      <Typography variant="button" sx={{ fontWeight: 'bold' }}>View Source</Typography>
                    </Link>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ px: 2, pb: 2, flexWrap: 'wrap', gap: 0.5 }}>
                    {project.tags.map((tag) => {
                      const IconComponent = iconMap[tag.toLowerCase()]; 
                      return (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          
                          sx={{
                            bgcolor: 'grey.900', 
                            color: 'white',
                            fontSize: '0.75rem', 
                            px: 1.5, 
                            '& .MuiChip-icon': { 
                              marginLeft: '4px',
                              marginRight: '-4px'
                            }
                          }}
                          
                          icon={IconComponent ? React.createElement(IconComponent, { sx: { fontSize: '16px' } }) : undefined} 
                        />
                      );
                    })}
                  </CardActions>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box> 
      </motion.div>
    </Box>
  );
};

export default Projects;
