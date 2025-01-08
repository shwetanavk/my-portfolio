import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGit,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLink,
  FaAngular,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaGitlab,
  FaJira,
  FaFigma,
  FaJava,
  FaJsSquare,
} from "react-icons/fa";
import { SiBuildkite, SiMysql, SiTailwindcss } from "react-icons/si";

export const skills = {
  title: "My Skills",
  description: "I have expertise in the following technologies and tools:",
  skillList: [
    { icon: <FaAngular />, name: "Angular" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGitlab />, name: "GitLab" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJira />, name: "Jira" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiBuildkite />, name: "Build Tools" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiMysql />, name: "MySQL" },
  ],
};

export const emailDetails = {
  "Service ID": "service_e740xhf", //Service ID
  "Template ID": "template_5tfqgdn", //Template ID
  "Public Key": "vKGHvdihyaz825iLq", //Public Key
};

export const phoneRegex = /^(\+\d{1,3}[-\s]?)?(\d{3}[-\s]?\d{3}[-\s]?\d{4})$/;

export const user = {
  firstName: "Shweta",
  lastName: "Navkar",
  fullName: "Shweta Navkar",
  designation: "Front-end Developer",
  email: "Shweta.navkar07@gmail.com",
  phone: "+91-7987023434",
  yearsOfExperience: "4",
  address: "Hyderabad",
  bio: "I transform ideas into responsive and interactive web applications that enhance user experiences.",
  stats: [
    { num: 4, text: "Years of Experience" },
    { num: 4, text: "Project Completed" },
    { num: skills.skillList.length, text: "Technology mastered" },
  ],
  resumeURL: "Resume.pdf",
  hireme: "",
  socialsLinks: [
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/shweta-navkar/",
      title: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      path: "https://github.com/shwetanavk",
      title: "GitHub",
    },
    {
      icon: <FaEnvelope />,
      path: "mailto:shweta.navkar07@gmail.com",
      title: "Email",
    },
    {
      icon: <FaLink />,
      path: "http://leetcode.com/shwetanavkar/",
      title: "Leetcode",
    },
  ],
};

export const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Pig Game",
    description:
      "The Pig Game is a two-player dice game. Players take turns rolling a dice to accumulate points, and the first player to reach 100 points wins. It's a simple yet engaging browser-based game to demonstrate basic web development and DOM manipulation skills.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/project-image/piggame.png",
    live: "https://shwetanavk.github.io/Pig-Game/",
    github: "https://github.com/shwetanavk/Pig-Game",
  },
  {
    num: "02",
    category: "Frontend",
    title: "HireSphere",
    description:
      "A fully responsive Job Portal web application. The app supports CRUD operations (Create, Read, Update, Delete) for job listings.",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "JSON Server" }],
    image: "/project-image/hiresphere.png",
    live: "https://hiresphere-ufi2.onrender.com/",
    github: "https://github.com/shwetanavk/HireSphere",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Port A1",
    description: "A landing page for portfolio website.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/project-image/porta1.png",
    live: "https://shwetanavk.github.io/PortA1/",
    github: "https://github.com/shwetanavk/PortA1",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Omni Banklit",
    description: "A landing page for bank website.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/project-image/omnibanklit.png",
    live: "https://shwetanavk.github.io/Omni-Banklit/",
    github: "https://github.com/shwetanavk/Omni-Banklit",
  },
];

export const experience = {
  icon: "",
  title: "My Experience",
  description: `I have total of ${user.yearsOfExperience} years of experience in IT.`,
  items: [
    {
      company: "Accenture",
      position: "App/Cloud Support Analyst",
      duration: "Sep 2024 - PRESENT",
    },
    {
      company: "IBM",
      position: "Application Developer",
      duration: "JAN 2021 - Aug 2024",
    },
  ],
};

export const eduction = {
  icon: "",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Technocrats Institute of Technology - Bhopal",
      degree: "Bachelor of Engineering",
      duration: "Jan 2016 - Aug 2020",
    },
  ],
};

export const about = {
  title: "About me",
  description:
    "If you're looking for someone who combines technical expertise, problem-solving abilities, and a strong sense of ownership, I'm confident I’d be a valuable addition to your team.",
  info: [
    {
      fieldName: "Name",
      fieldValue: user.fullName,
    },
    {
      fieldName: "Email",
      fieldValue: user.email,
    },
    {
      fieldName: "Phone",
      fieldValue: user.phone,
    },
    {
      fieldName: "Experience",
      fieldValue: `${user.yearsOfExperience} + Years`,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

export const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: user.phone },
  { icon: <FaEnvelope />, title: "Email", description: user.email },
  { icon: <FaMapMarkerAlt />, title: "Address", description: user.address },
];

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "work",
    path: "/work",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

// export const services = [
//   {
//     num: "01",
//     title: "Web Devlopment",
//     description: "Lorem ipsum dolor sit amet",
//     href: "",
//   },
//   {
//     num: "02",
//     title: "UI/UX Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem enim commodi pariatur ",
//     href: "",
//   },
//   {
//     num: "03",
//     title: "Logo Design",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem enim commodi pariatur ",
//     href: "",
//   },
//   {
//     num: "04",
//     title: "SED",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem enim commodi pariatur ",
//     href: "",
//   },
// ];
