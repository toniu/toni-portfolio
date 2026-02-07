import imgToni from "../../assets/project-toni.png";
import img1 from "../../assets/project-arithmetix.png";
// import img2 from '../../assets/project-fsimulation.png';
import img3 from "../../assets/project-mybiblejourney.png";
import img4 from "../../assets/project-toniartsg.png";
// import img5 from '../../assets/project-badminton.png';
import img6 from "../../assets/project-sportal.png";
//import img7 from '../../assets/project-pyaux.png';
//import img8 from '../../assets/project-onepercent.png';
import img9 from "../../assets/project-ccollective.png";
import img10 from "../../assets/project-matildaltd.png";
import img11 from "../../assets/project-wayfindingkaia.png";
import img12 from "../../assets/project-anreer.png";
import img13 from "../../assets/project-bls.png";

const projectsData = [
  {
    title: "toni.",
    secondTitle: "Portfolio website",
    techStack: ["React", "TailwindCSS"],
    description:
      "A personal portfolio website built to showcase my projects, technical skills, and development experience. Designed with a clean UI and responsive layout to present my work clearly to employers.",
    imageUrl: imgToni,
    demoLink: "https://toniu.github.io/toni-portfolio",
    codeLink: "https://github.com/toniu/toni-portfolio",
    bgColors: ["#000000", "#19334d"],
  },
  {
    title: "Bree's Little Stars",
    secondTitle: "Nursery and Childcare website",
    techStack: ["WordPress", "Elementor","PHP", "HTML", "CSS", "JavaScript","Google Analytics"],
    description:
      "A WordPress-based nursery website focused on clarity, trust, and accessibility. Built to clearly communicate the nursery’s values, services, and child-centred approach to parents.",
    imageUrl: img13,
    demoLink: "https://www.breeslittlestars.co.uk/",
    codeLink: "",
    bgColors: ["#027bbf", "#097cdb"],
  },
  {
    title: "Matilda Limited",
    secondTitle: "Healthcare training provider website",
    techStack: ["WordPress", "Elementor","PHP", "HTML", "CSS", "JavaScript", "MailChimp","Google Analytics"],
    description:
      "A professional website for a healthcare training provider, designed to present training services, course information, and key business content in a clear and structured way.",
    imageUrl: img10,
    demoLink: "https://matildahealthtraining.com/",
    codeLink: "",
    bgColors: ["#0f535c", "#1f8b8f"],
  },
  {
    title: "Wayfinding Kaia",
    secondTitle: "Travel and events community platform",
    techStack: ["Squarespace", "Canva"],
    description:
      "A community-focused website promoting travel experiences and social events for young people. Built to support content updates and highlight events, experiences, and community engagement.",
    imageUrl: img11,
    demoLink: "https://www.wayfindingkaia.co.uk/",
    codeLink: "",
    bgColors: ["#4e7d9d", "#4c8ebb"],
  },
  {
    title: "ANREER Investments",
    secondTitle: "Construction investment company website",
    techStack: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    description:
      "A business website developed to present construction and investment services clearly, with a focus on professionalism, structure, and ease of navigation.",
    imageUrl: img12,
    demoLink: "https://www.anreerinvestments.com/",
    codeLink: "",
    bgColors: ["#FFC300", "#f5c700"],
  },
  {
    title: "Christian Collective",
    secondTitle: "Christian community and events website",
    techStack: ["Squarespace", "Figma"],
    description:
      "A centralised platform for a creative Christian community, providing access to blogs, events, and community updates through a clear and user-friendly layout.",
    imageUrl: img9,
    demoLink: "https://www.christiancollective.uk/",
    codeLink: "",
    bgColors: ["#000000", "#717171"],
  },
  {
    title: "mybiblejourney",
    secondTitle: "E-book launch and information website",
    techStack: ["React", "JavaScript", "TailwindCSS","Canva"],
    description:
      "A React-based website created to support the launch of an e-book, presenting project information and directing users to external resources and charitable links.",
    imageUrl: img3,
    demoLink: "https://toniu.github.io/mybiblejourney",
    codeLink: "https://github.com/toniu/mybiblejourney",
    bgColors: ["#12132b", "#212245"],
  },
  {
    title: "toniarts.",
    secondTitle: "Visual gallery website",
    techStack: ["React", "JavaScript", "TailwindCSS","Canva"],
    description:
      "A responsive gallery website showcasing my original artwork, designed to highlight visual storytelling and provide a clean, immersive viewing experience.",
    imageUrl: img4,
    demoLink: "https://toniu.github.io/toniarts",
    codeLink: "https://github.com/toniu/toniarts",
    bgColors: ["#82e4a4", "#66a37b"],
  },
  {
    title: "SPortal",
    secondTitle: "SharePoint webparts and internal tools",
    techStack: [
      "SPFx",
      "React",
      "TypeScript",
      "Jest",
      "Gulp",
      "SharePoint Lists",
    ],
    description:
      "A set of SPFx React webparts built for SharePoint, including dashboards, user profiles, polls, group management, and calendar features for internal communication.",
    imageUrl: img6,
    demoLink: "",
    codeLink: "https://github.com/toniu/SPortal",
    bgColors: ["#0a919a", "#6ab5ba"],
  },
  {
    title: "arithmetix.",
    secondTitle: "A-Level Maths e-learning platform",
    techStack: [
      "VueJS",
      "TailwindCSS",
      "Webpack",
      "Jest",
      "NodeJS",
      "Express",
      "PostgreSQL",
    ],
    description:
      "An e-learning platform designed to support A-Level Maths students with revision resources, quizzes, and exam papers aligned with AQA, OCR, and Edexcel syllabuses.",
    imageUrl: img1,
    demoLink: "",
    codeLink: "https://github.com/toniu/arithmetix",
    bgColors: ["#60a4fb", "#7eb3f7"],
  },
];

/*
{
    //   title: 'pyaux',
    //   secondTitle: 'Python Spotify playlist analyser',
    //   techStack: ['Python','OAuth2'],
    //   description: `Python project which fetches and analyses a user's spotify playlist information using the python Spotify API and calculates the rating based on artist diversity, genre cohesion, popularity, playlist length. It also gives track recommendations based on the user's playlist preferences.`,
    //   imageUrl: img7,
    //   demoLink: '',
    //   codeLink: 'https://github.com/toniu/pyaux',
    //   bgColors: ['#010500', '#001c06']
    // },
    // {
    //   title: 'ONE%',
    //   secondTitle: 'Scala game-show program',
    //   techStack: ['Scala'],
    //   description: `A Scala game-show program inspired by the ITV game-show, The 1% club. The game structure involves 100 players (the user called ‘You’ and 99 other ‘CPU’ players) who attempt to answer a question to stay in the game each round. The game ends when there is only one player left`,
    //   imageUrl: img8,
    //   demoLink: '',
    //   codeLink: 'https://github.com/toniu/ONEpercent',
    //   bgColors: ['#1d2b00', '#171a12']
    // }
        // {
    //   title: 'FSimulation',
    //   secondTitle: 'Java console football simulation',
    //   techStack: ['Java'],
    //   description: 'A Java football simulation project which includes the simulation of leagues and matches between teams based on their FIFA ratings (attack, defence, midfield, and OVR rating).',
    //   imageUrl: img2,
    //   demoLink: '',
    //   codeLink: 'https://github.com/toniu/FSimulation',
    //   bgColors: ['#2e5675', '#49573a']
    // },
    // {
    //   title: 'BPMS2018',
    //   secondTitle: 'Badminton Player Management System',
    //   techStack: ['Java','NetBeans','MySQL'],
    //   description: 'Java Netbeans project for a badminton player management system of a club of badminton players. This includes the login of badminton players, management of players, scheduling of fixtures and results and the ranking of players.',
    //   imageUrl: img5,
    //   demoLink: '',
    //   codeLink: 'https://github.com/toniu/BPMS2018',
    //   bgColors: ['#0d4032', '#0d5441']
    // },

*/


/*

const projectsData = [
  {
    title: "[name]",
    secondTitle: "Portfolio website",
    techStack: ["React", "TailwindCSS"],
    description:
      "The website that you are already in! It is the official portfolio website of [name]. It includes an introduction of myself and the technologies and projects I can present.",

  },
  {
    title: "BLS",
    secondTitle: "Nursery and Childcare",
    techStack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript","Akismet","Google Analytics"],
    description:
      "Nursery website designed to highlight a safe, nurturing, and engaging environment where children learn through play. The site focuses on clarity, warmth, and trust, helping parents quickly understand the nursery’s values, care approach, and child-centred ethos.",

  },
  {
    title: "MTLTD",
    secondTitle: "Healthcare Training Provider",
    techStack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    description:
      "A leading healthcare training provider, delivering mandatory and complex care training led by experienced professionals. With years of hands-on expertise, our trainers ensure engaging and practical learning.",

  },
  {
    title: "WKI",
    secondTitle: "A travel community for young people",
    techStack: ["Squarespace", "Canva"],
    description:
      "A hub for a global, diverse community based in London, creating unforgettable experiences that bring people together through travel, events, and shared moments of discovery.",

  },
  {
    title: "ANRIV",
    secondTitle: "A construction investment company",
    techStack: ["WordPress", "HTML", "CSS", "JavaScript"],
    description:
      "A construction business committed to delivering high-quality construction services from concept to completion.",

  },
  {
    title: "CRC",
    secondTitle: "Christian community for young people",
    techStack: ["Squarespace", "Figma"],
    description:
      "A centralised hub for a community and gathering of creative minded Christians, including latest blogs, events and creatives. Christian Collective aims to develop a comprehensive platform where users can easily discover and access information about Christian events",

  },
  {
    title: "MBEJ",
    secondTitle: "E-book release website",
    techStack: ["React", "JavaScript", "TailwindCSS"],
    description:
      "A website which directs to the official release of my e-book of visual Bible study notes of each book of the Bible. It includes details about the project as well as external links to charities. ",

  },
  {
    title: "ARTTO",
    secondTitle: "Visual gallery website",
    techStack: ["React", "JavaScript", "TailwindCSS"],
    description:
      "A visually appealing website which shows a gallery of my drawings exploring the beauty of the black diaspora. From family, to sports, to fashion, to music, to film and other forms of our creativity.",

  },
  {
    title: "SPROL",
    secondTitle: "React TS SharePoint webparts",
    techStack: [
      "SPFx",
      "React",
      "TypeScript",
      "Jest",
      "Gulp",
      "SharePoint Lists",
    ],
    description:
      "SPFx TypeScript project of implemented Sharepoint webparts for Sharepoint website specifically for receiving and delivering information to other parties. This includes dashboard, profile, polls, group management and calendar",
  },
  {
    title: "ARTX.",
    secondTitle: "A-Level Maths e-Learning platform",
    techStack: [
      "VueJS",
      "TailwindCSS",
      "Webpack",
      "Jest",
      "NodeJS",
      "Express",
      "PostgreSQL",
    ],
    description:
      "An e-learning website to help A-level Maths students in preparation for their exams. This includes provided resources of quizzes, notes and exam papers based on the syllabus of the exam boards: AQA, OCR and Edexcel.",

  },
];


*/
export default projectsData;
