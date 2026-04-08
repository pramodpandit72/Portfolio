import projectManagementImg from '../assets/project_management.png';
import trackifyImg from '../assets/trackify.png';
import frontendTrainingImg from '../assets/Frontend_devlopment.png';
import privacySecurityImg from '../assets/NPTEL_Privacy_and_security.png';
import bitsBytesImg from '../assets/Bits_and_bytes_of_computer_network.png';
import hardwareOsImg from '../assets/Introduction_to_hardware_andOperating_system.png';
import networkCommImg from '../assets/Fundamentals_of_Network_Communication.png';
import pythonCseImg from '../assets/Python CSE pathsala.png';

export const personalInfo = {
  name: "Pramod Pandit",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "pramodpandit724@gmail.com",
  phone: "+91-9102369979",
  location: "Punjab, India",
  university: "Lovely Professional University",
  degree: "B.Tech - Computer Science & Engineering",
  about: `I'm a passionate Full Stack Developer and 3rd year BTech CSE student at Lovely Professional University. 
  I specialize in building robust, scalable web applications using the MERN stack and modern frameworks. 
  With 450+ problems solved on LeetCode and a strong foundation in Data Structures & Algorithms, 
  I bring both problem-solving prowess and development expertise to every project I undertake.`,
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/pramodpandit/",
  github: "https://github.com/pramodpandit72",
  email: "mailto:pramod2pandit@gmail.com",
  leetcode: "https://leetcode.com/u/PramodPandit/",
  gfg: "https://www.geeksforgeeks.org/profile/pramodpandit",
  hackerrank: "https://www.hackerrank.com/profile/nwdpramod1230591",
};

export const skills = {
  languages: [
    { name: "Python", icon: "SiPython" },
    { name: "C++", icon: "SiCplusplus" },
    { name: "Java", icon: "SiOpenjdk" },
    { name: "JavaScript", icon: "SiJavascript" },
  ],
  frameworks: [
    { name: "React", icon: "SiReact" },
    { name: "Express", icon: "SiExpress" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML5", icon: "SiHtml5" },
  ],
  tools: [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "Docker", icon: "SiDocker" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Figma", icon: "SiFigma" },
  ],
  technical: [
    "Data Structures & Algorithms",
    "Problem Solving",
    "Backend Development",
    "RESTful APIs",
  ],
  soft: [
    "Teamwork",
    "Adaptability",
    "Detail-oriented",
    "Punctual",
    "Organized",
  ],
};

export const projects = [
  {
    title: "Project Management Platform",
    period: "Since January 2026",
    description: [
      "Building a full-stack Project Management Platform supporting multi-workspace collaboration, role-based access control, and hierarchical team structures for enterprise-level project organization.",
      "Designing and implementing real-time analytics dashboards featuring task completion metrics, priority distribution charts, and overdue task tracking to provide actionable insights for project managers.",
      "Architecting a scalable RESTful API with modular routing, secure authentication, event-driven background processing, and automated email notifications for seamless team collaboration.",
    ],
    tech: ["HTML", "Tailwind CSS", "React", "Express", "PostgreSQL"],
    github: "https://github.com/pramodpandit72/project-management",
    live: "https://project-management-three-psi.vercel.app/",
    featured: true,
    image: projectManagementImg,
  },
  {
    title: "Virtual Personal Trainer",
    period: "November 2025",
    description: [
      "Developed a fitness-focused web platform that introduces users to Train Well, offering dedicated pages for trainers, exercises, reviews, and job opportunities in the field of fitness.",
      "Designed an interactive trainer section where users can connect with professionals specializing in bodybuilding, strength training, and cardio based on their fitness goals.",
      "Built a structured Exercise Library allowing users to explore detailed workout categories, while the Jobs section enables experienced individuals to apply for trainer roles directly through the platform.",
    ],
    tech: ["HTML", "Tailwind CSS", "React", "Express", "MongoDB"],
    github: "https://github.com/pramodpandit72/Trackify",
    live: "https://trackify-two-beta.vercel.app/",
    featured: true,
    image: trackifyImg,
  },
];

export const certificates = [
  {
    title: "Privacy and Security in Online Social Media",
    provider: "NPTEL",
    date: "April 2025",
    image: privacySecurityImg,
    link: "https://github.com/pramodpandit72/Certifications-Certificate/blob/main/Privacy%20and%20Security%20in%20Online%20Social%20Media.pdf",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Coursera",
    date: "September 2024",
    image: bitsBytesImg,
    link: "https://github.com/pramodpandit72/Certifications-Certificate/blob/main/The%20Bits%20and%20Bytes%20of%20Computer%20Networking.pdf",
  },
  {
    title: "Introduction to Hardware and Operating System",
    provider: "Coursera",
    date: "September 2024",
    image: hardwareOsImg,
    link: "https://github.com/pramodpandit72/Certifications-Certificate/blob/main/Introduction%20to%20Hardware%20and%20Operating%20System.pdf",
  },
  {
    title: "Fundamentals of Network Communication",
    provider: "Coursera",
    date: "September 2024",
    image: networkCommImg,
    link: "https://github.com/pramodpandit72/Certifications-Certificate/blob/main/Fundamentals%20of%20Network%20Communication.pdf",
  },
  {
    title: "Basic Python towards ML/AI",
    provider: "CSE Pathshala",
    date: "March 2024",
    image: pythonCseImg,
    link: "https://github.com/pramodpandit72/Certifications-Certificate/blob/main/Python%20CSE%20pathsala.png",
  },
  {
    title: "Frontend Development",
    provider: "Board Infinity",
    date: "July 2025",
    image: frontendTrainingImg,
    link: "https://github.com/pramodpandit72/Certifications-Certificate/blob/main/Summer%20Training.pdf",
  },
];

export const achievements = [
  {
    title: "LeetCode",
    stat: "450+",
    description: "Problems Solved",
    link: "https://leetcode.com/u/PramodPandit/",
    color: "#FFA116",
  },
  {
    title: "GeeksforGeeks",
    stat: "100+",
    description: "Problems Solved",
    link: "https://www.geeksforgeeks.org/profile/pramodpandit",
    color: "#2F8D46",
  },
  {
    title: "HackerRank",
    stat: "5★",
    description: "Problem Solving Badge",
    link: "https://www.hackerrank.com/profile/nwdpramod1230591",
    color: "#00EA64",
  },
];

export const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.16",
    period: "August 2023 – Present (2027)",
    current: true,
  },
  {
    institution: "Baldeo High School",
    location: "Bihar, India",
    degree: "Intermediate",
    score: "Percentage: 70%",
    period: "March 2021",
    current: false,
  },
  {
    institution: "Dayal Public School",
    location: "Bihar, India",
    degree: "Matriculation",
    score: "Percentage: 89%",
    period: "March 2019",
    current: false,
  },
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];
