import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import DataObjectIcon from '@mui/icons-material/DataObject'; 
import CloudIcon from '@mui/icons-material/Cloud'; 
import TerminalIcon from '@mui/icons-material/Terminal'; 
import MemoryIcon from '@mui/icons-material/Memory'; 
import ApiIcon from '@mui/icons-material/Api'; 
import GitHubIcon from '@mui/icons-material/GitHub'; 
import WebIcon from '@mui/icons-material/Web'; 
import CV from './assets/CV_KAR.pdf'




export const config = {
  name: "Karlyn", 
  location: "Santo Domingo, Dominican Republic", 
  links: {
    linkedIn: "https://www.linkedin.com/in/karlyn-gabriel-garcia-rojas-4446b0246/", 
    github: "https://github.com/karlyng", 
    email: "mailto:karlyn251@hotmail.com", 
  },
  cvPath: CV, 
  hero: {
    title: "Software Engineer Specializing in Web & FullStack Applications",
    subtitle: "Hi, I'm Karlyn. I create solutions across all layers of software engineering.", 
  },
  buttons: {
    work: "See my Work",
    cv: "Download CV",
  },
  
  workExperience: [
    {
      company: "Banco de Reservas",
      position: "Administrative Applications Engineer",
      date: "Jan 2024 - Present",
      description: [
        "Maintain legacy applications",
        "Improve and create micro services",
        "Migrate old applications to a more modern stack",
      ],
      techStack: [ 
        { name: "C#", icon: CodeIcon },
        { name: "JavaScript", icon: JavascriptIcon },
        { name: "TypeScript", icon: CodeIcon }, 
        { name: "SQL Server", icon: StorageIcon },
        { name: ".NET Core", icon: CodeIcon },
        { name: ".NET Framework", icon: CodeIcon },
        { name: "Git", icon: GitHubIcon },
        { name: "jQuery", icon: CodeIcon }, 
      ],
    },
    {
      company: "Solvex Dominican",
      position: "Full Stack Developer",
      date: "August 2020 - Jan 2024",
      description: [
        "Developed API'S and SPA's",
        "Applied different architectures and methodologies as team leader.",
        "Learned and implemented AI services both in cloud and on premise.",
      ],
      techStack: [ 
        { name: "JavaScript", icon: JavascriptIcon },
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "jQuery", icon: CodeIcon }, 
        { name: "C#", icon: CodeIcon },
        { name: ".Net", icon: CodeIcon }, 
        { name: "Entity Framework", icon: DataObjectIcon },
        { name: "SQL Server", icon: StorageIcon },
        { name: "Azure", icon: CloudIcon },
        { name: "DevOps", icon: TerminalIcon },
        { name: "AI", icon: MemoryIcon },
        { name: "React", icon: WebIcon }, 
        { name: "Vue", icon: WebIcon }, 
        { name: "REST APIs", icon: ApiIcon },
      ],
    },
    
  ],
  
  projects: [
    {
      title: "PacaStock",
      description: "PacaStock is a comprehensive system designed for managing inventory, sales, and clients within clothing and wholesale businesses.",
      image: "https://gabriel7729.github.io/my-portafolio/assets/images/projects/pacastock-dashboard.jpg", 
      sourceLink: "https://github.com/KarlynG", 
      tags: ["React", "MantineUI", "C#", ".Net Core", "PostGreSQL"], 
    },
    {
      title: "CoinTracker",
      description: "CoinTracker is a streamlined personal finance application designed to provide users with a clear and intuitive overview of their financial budgets, spending, and transactions.",
      image: "https://gabriel7729.github.io/my-portafolio/assets/images/projects/cointracker-dashboard.png", 
      sourceLink: "https://github.com/KarlynG/CoinTracker",
      tags: ["C#", ".Net Core", "Firebase", "PostgreSQL", "React", "Typescript", "CSS"],
    },
    
  ],
};


export const replaceNamePlaceholder = (text: string): string => {
    return text.replace(/\[Name\]/g, config.name);
}
