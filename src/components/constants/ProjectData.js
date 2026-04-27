// import imgToni from "../../assets/project-toni.png";
import img1 from "../../assets/project-arithmetix.png";
// import img2 from '../../assets/project-fsimulation.png';
import img3 from "../../assets/project-mybiblejourney.png";
import img4 from "../../assets/project-toniartsg.png";
// import img5 from '../../assets/project-badminton.png';
import img6 from "../../assets/project-sportal.png";
// import img7 from '../../assets/project-pyaux.png';
import img8 from '../../assets/project-onepercent.png';
// import img9 from "../../assets/project-ccollective.png";
import img10 from "../../assets/project-matildaltd.png";
import img11 from "../../assets/project-wayfindingkaia.png";
import img12 from "../../assets/project-anreer.png";
import img13 from "../../assets/project-bls.png";

const projectsData = [
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
    demoLink: "https://toniu.github.io/SPortal",
    codeLink: "https://github.com/toniu/SPortal",
    bgColors: ["#0a919a", "#6ab5ba"],
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
    title: "ONE%",
    secondTitle: "Scala game-show program",
    techStack: ['Scala','Slinky','React','Webpack','GitHub Actions','Cloudflare Pages'],
    description: `A browser-based game show simulator inspired by ITV's The 1% Club, built with Scala.js, Slinky and React. 100 contestants answer questions of increasing difficulty across 12 rounds - be the last one standing to become the ONE%`,
    imageUrl: img8,
    demoLink: 'https://one-percent-9y5.pages.dev/',
    codeLink: 'https://github.com/toniu/one-percent',
    bgColors: ['#1d2b00', '#171a12']
  }
];

/* Hidden projects kept out of the portfolio rotation.
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
  title: "pyaux",
  secondTitle: "Python Spotify playlist analyser",
  techStack: ["Python", "OAuth2"],
  description:
    "Python project which fetches and analyses a user's Spotify playlist information using the Spotify API and calculates a rating based on artist diversity, genre cohesion, popularity, and playlist length. It also gives track recommendations based on the user's playlist preferences.",
  imageUrl: img7,
  demoLink: "",
  codeLink: "https://github.com/toniu/pyaux",
  bgColors: ["#010500", "#001c06"],
},
{
  title: "FSimulation",
  secondTitle: "Java console football simulation",
  techStack: ["Java"],
  description:
    "A Java football simulation project that models leagues and matches between teams based on FIFA-style attack, defence, midfield, and overall ratings.",
  imageUrl: img2,
  demoLink: "",
  codeLink: "https://github.com/toniu/FSimulation",
  bgColors: ["#2e5675", "#49573a"],
},
{
  title: "BPMS2018",
  secondTitle: "Badminton Player Management System",
  techStack: ["Java", "NetBeans", "MySQL"],
  description:
    "A Java NetBeans project for managing badminton club players, fixtures, results, rankings, and authentication workflows.",
  imageUrl: img5,
  demoLink: "",
  codeLink: "https://github.com/toniu/BPMS2018",
  bgColors: ["#0d4032", "#0d5441"],
},
{
  title: "toni.",
  secondTitle: "Portfolio website",
  techStack: ["React", "TailwindCSS"],
  description:
    "A personal portfolio website built to showcase my projects, technical skills, and development experience with a clean UI and responsive layout.",
  imageUrl: imgToni,
  demoLink: "https://toniu.github.io/toni-portfolio",
  codeLink: "https://github.com/toniu/toni-portfolio",
  bgColors: ["#000000", "#19334d"],
},
*/
export default projectsData;
