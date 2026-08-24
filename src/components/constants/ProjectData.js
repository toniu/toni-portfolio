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
    featured: true,
    year: "2024",
    role: "Frontend Developer",
    context: "Internal communications tooling",
    challenge: "Staff were navigating fragmented internal communications and outdated SharePoint patterns that made key updates harder to find and use.",
    outcome: "Delivered reusable webparts and clearer information flows that made internal resources easier to access, scan, and trust.",
    techStack: [
      "SPFx",
      "React",
      "TypeScript",
      "Jest",
      "Gulp",
      "SharePoint Lists",
    ],
    description:
      "SharePoint tooling for dashboards, calendars, profiles, and engagement features — designed for real internal use rather than generic content blocks.",
    imageUrl: img6,
    demoLink: "https://toniu.github.io/SPortal",
    codeLink: "https://github.com/toniu/SPortal",
    bgColors: ["#0a919a", "#6ab5ba"],
  },
  {
    title: "arithmetix.",
    secondTitle: "A-Level Maths e-learning platform",
    featured: true,
    year: "2023",
    role: "Full-stack Developer",
    context: "Education and revision platform",
    challenge: "Students needed a revision experience that felt structured and purposeful, not like a long page of unfiltered notes.",
    outcome: "Built a cleaner study journey with stronger flow, better revision structure, and more confidence in the learning path.",
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
      "A revision platform for A-Level Maths students, covering exam resources, quizzes, and board-aligned study flow in a clearer format.",
    imageUrl: img1,
    demoLink: "",
    codeLink: "https://github.com/toniu/arithmetix",
    bgColors: ["#60a4fb", "#7eb3f7"],
  },
  {
    title: "mybiblejourney",
    secondTitle: "E-book launch and information website",
    featured: true,
    year: "2022",
    role: "Frontend Developer",
    context: "Launch campaign and digital presence",
    challenge: "The launch needed a clearer story and a more direct route from interest to action, without overwhelming visitors with too much content.",
    outcome: "Created a sharper landing experience that focused the message, improved readability, and made the conversion path easier to follow.",
    techStack: ["React", "JavaScript", "TailwindCSS","Canva"],
    description:
      "A conversion-focused launch website for an e-book, designed to make the offer clear, readable, and easy to act on.",
    imageUrl: img3,
    demoLink: "https://toniu.github.io/mybiblejourney",
    codeLink: "https://github.com/toniu/mybiblejourney",
    bgColors: ["#12132b", "#212245"],
  },
  {
    title: "Bree's Little Stars",
    secondTitle: "Nursery and Childcare website",
    year: "2022",
    role: "Web Developer",
    context: "Children's nursery and family services",
    challenge: "The nursery needed a site that reassured parents quickly and explained services without clutter or uncertainty.",
    outcome: "Delivered a clearer, warmer website that improved trust and made service information easier to understand.",
    techStack: ["WordPress", "Elementor","PHP", "HTML", "CSS", "JavaScript","Google Analytics"],
    description:
      "A WordPress nursery site built around trust, clarity, and parent confidence — with service messaging designed to reduce friction.",
    imageUrl: img13,
    demoLink: "https://www.breeslittlestars.co.uk/",
    codeLink: "",
    bgColors: ["#027bbf", "#097cdb"],
  },
  {
    title: "Matilda Limited",
    secondTitle: "Healthcare training provider website",
    year: "2022",
    role: "Web Developer",
    context: "Healthcare training and education",
    challenge: "The provider needed a more professional digital presence that made course information and trust signals easier to understand.",
    outcome: "Built a more structured, credible site that improved clarity and supported stronger enquiry journeys.",
    techStack: ["WordPress", "Elementor","PHP", "HTML", "CSS", "JavaScript", "MailChimp","Google Analytics"],
    description:
      "A healthcare training website designed to communicate services clearly, strengthen credibility, and guide users to the right next step.",
    imageUrl: img10,
    demoLink: "https://matildahealthtraining.com/",
    codeLink: "",
    bgColors: ["#0f535c", "#1f8b8f"],
  },
  {
    title: "ONE%",
    secondTitle: "Scala game-show program",
    year: "2024",
    role: "Developer",
    context: "Interactive web experience",
    challenge: "A game-show concept needed a responsive, engaging interface with clear progression and smooth interactive flow.",
    outcome: "Built a scalable browser game with strong front-end polish and a playful, repeatable gameplay loop.",
    techStack: ['Scala','Slinky','React','Webpack','GitHub Actions','Cloudflare Pages'],
    description: `A browser-based quiz game inspired by ITV's The 1% Club, built with Scala.js and React to deliver a polished and responsive gameplay experience.`,
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
