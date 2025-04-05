import CircleIcon from '@mui/icons-material/Circle';
import WorkIcon from '@mui/icons-material/Work';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code'; 
import { AnimatePresence, motion } from 'framer-motion';

import React, { useState, useRef, createRef } from 'react';

import { useInView } from 'react-intersection-observer';
import { config } from '../config';



interface TimelineItemContentProps {
  job: typeof config.workExperience[0];
  index: number;
  setActiveIndex: (index: number) => void;
}


const TimelineItemContent: React.FC<Omit<TimelineItemContentProps, 'setActiveIndex'>> = ({ job, index }) => {
  
  
  

  
  
  
  
  

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    
    <motion.div initial="hidden" animate="visible" variants={itemVariants} style={{ width: '100%' }}>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        {job.company}
      </Typography>
      <Typography variant="subtitle1" color="#2196F3" sx={{ mb: 1 }}>
        {job.position} | {job.date}
      </Typography>
      
      <Box sx={{ mt: 1.5, pl: 0 }}> 
        {job.description.map((item, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
            <CircleIcon sx={{ fontSize: '0.5rem', color: 'text.secondary', mr: 1.5, mt: '6px' }} /> 
            <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

const WorkExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  
  const itemRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  if (itemRefs.current.length !== config.workExperience.length) {
    
    itemRefs.current = Array(config.workExperience.length).fill(null).map((_, i) => itemRefs.current[i] || createRef<HTMLDivElement>());
  }

  
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    const ref = itemRefs.current[index];
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', 
        inline: 'nearest'
      });
    }
  };


  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Box id="work-experience" sx={{ py: 8 }} ref={sectionRef}> 
      <motion.div
        initial="hidden"
        animate={sectionInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        
        <Box sx={{ maxWidth: 'lg', mx: 'auto', px: { xs: 2, md: 3 } }}> 

          
          <Typography variant="h4" component="h2" align="left" gutterBottom sx={{ mb: 6 }}>
            Work Experience
          </Typography>

          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>

            
            <Box sx={{ flex: { md: 6 }, width: '100%' }}> 
              <Timeline
                position="right"
                sx={{
                  p: 0,
                  [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
                }}
              >
                {config.workExperience.map((job, index) => (
                  <TimelineItem
                    key={job.company + index}
                    ref={itemRefs.current[index]} 
                    onClick={() => handleItemClick(index)} 
                    sx={{ 
                      backgroundColor: activeIndex === index ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                      borderRadius: 2, 
                      cursor: 'pointer', 
                      transition: 'background-color 0.3s ease-in-out', 
                      my: 1, 
                      p: 1, 
                      [`&.${timelineItemClasses.root}`]: { 
                        minHeight: 'auto', 
                      },
                      [`& .${timelineItemClasses.missingOppositeContent}:before`]: { 
                         flex: 0,
                         padding: 0,
                      },
                    }}
                  >
                    <TimelineSeparator>
                      <TimelineDot color={activeIndex === index ? "secondary" : "primary"} variant="outlined">
                        <WorkIcon />
                      </TimelineDot>
                      {index < config.workExperience.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, m: 0 }}> 
                      
                      <motion.div
                        animate={{ scale: activeIndex === index ? 1.02 : 1 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        
                        <TimelineItemContent job={job} index={index} />
                      </motion.div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Box>

            
            <Box sx={{
              flex: { md: 5 }, 
              width: '100%',
              position: 'sticky',
              top: '100px', 
              alignSelf: 'flex-start',
              height: 'fit-content' 
            }}>
              <Typography variant="h5" component="h3" gutterBottom align="left" sx={{ mb: 2 }}>
                Tech Stack
              </Typography>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={techStackVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: 2 
                  }}>
                    {config.workExperience[activeIndex]?.techStack.map((tech) => (
                      <Paper
                        key={tech.name}
                        elevation={0} 
                        sx={{
                          p: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          bgcolor: 'transparent', 
                          border: (theme) => `1px solid ${theme.palette.grey[800]}`, 
                          height: '100%',
                        }}
                      >
                        
                        
                        {tech.icon && typeof tech.icon !== 'string' ? (
                          React.createElement(tech.icon, { sx: { fontSize: '24px', mr: 0.5 } }) 
                        ) : (
                          <CodeIcon sx={{ fontSize: '24px', mr: 0.5, opacity: 0.5 }} /> 
                        )}
                        <Typography variant="body2" sx={{ color: 'white' }}>{tech.name}</Typography> 
                      </Paper>
                    ))}
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>

          </Box> 
        </Box> 
      </motion.div>
    </Box>
  );
};

export default WorkExperience;
