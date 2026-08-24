import projectSPortalSc1 from '../../assets/project-screenshots/project-sportal-sc-1.png';
import projectSPortalSc2 from '../../assets/project-screenshots/project-sportal-sc-2.png';
import projectSPortalSc3 from '../../assets/project-screenshots/project-sportal-sc-3.png';
import projectSPortalSc4 from '../../assets/project-screenshots/project-sportal-sc-4.png';
import projectSPortalSc5 from '../../assets/project-screenshots/project-sportal-sc-5.png';
import projectSPortalSc6 from '../../assets/project-screenshots/project-sportal-sc-6.png';

import projectArithmetixSc1 from '../../assets/project-screenshots/project-arithmetix-sc-1.png';
import projectArithmetixSc2 from '../../assets/project-screenshots/project-arithmetix-sc-2.png';
import projectArithmetixSc3 from '../../assets/project-screenshots/project-arithmetix-sc-3.png';
import projectArithmetixSc4 from '../../assets/project-screenshots/project-arithmetix-sc-4.png';
import projectArithmetixSc5 from '../../assets/project-screenshots/project-arithmetix-sc-5.png';

import projectMyBibleJourneySc1 from '../../assets/project-screenshots/project-mybiblejourney-sc-1.png';
import projectMyBibleJourneySc2 from '../../assets/project-screenshots/project-mybiblejourney-sc-2.png';

import projectBlsSc1 from '../../assets/project-screenshots/project-bls-sc-1.png';
import projectBlsSc2 from '../../assets/project-screenshots/project-bls-sc-2.png';
import projectBlsSc3 from '../../assets/project-screenshots/project-bls-sc-3.png';
import projectBlsSc4 from '../../assets/project-screenshots/project-bls-sc-4.png';

import projectMatildaSc1 from '../../assets/project-screenshots/project-matildaltd-sc-1.png';
import projectMatildaSc2 from '../../assets/project-screenshots/project-matildaltd-sc-2.png';
import projectMatildaSc3 from '../../assets/project-screenshots/project-matildaltd-sc-3.png';
import projectMatildaSc4 from '../../assets/project-screenshots/project-matildaltd-sc-4.png';
import projectMatildaSc5 from '../../assets/project-screenshots/project-matildaltd-sc-5.png';

import projectOnePercentSc1 from '../../assets/project-screenshots/project-onepercent-sc-1.png';
import projectOnePercentSc2 from '../../assets/project-screenshots/project-onepercent-sc-2.png';
import projectOnePercentSc3 from '../../assets/project-screenshots/project-onepercent-sc-3.png';

const projectsData = [
  {
    title: "SPortal",
    secondTitle: "Internal tools and SharePoint webparts",
    featured: true,
    year: "2023",
    role: "Frontend Developer",
    timeframe: "Multi-sprint delivery",
    teamSize: "Team of 2",
    context: "Internal communications tooling",
    challenge: "Staff were finding updates across fragmented internal systems and outdated SharePoint patterns.",
    approach: "Mapped the most repeated internal content tasks first, then broke them into reusable interface patterns for dashboards, calendars, and profile surfaces.",
    solutionWhy: "SPFx and React made sense here because the tools had to live naturally inside an existing Microsoft/SharePoint environment while staying maintainable across repeated internal use cases.",
    outcome: "Created clearer tooling and a more consistent internal information flow.",
    takeaway: "This project reinforced how much value comes from designing reusable UI patterns early instead of treating each internal page as a one-off build.",
    techStack: [
      "SPFx",
      "React",
      "TypeScript",
      "Jest",
      "SharePoint",
    ],
    description:
      "Reusable tooling for dashboards, calendars, profiles, and communication surfaces built for real internal use.",
    imageUrl: projectSPortalSc1,
    screenshots: [projectSPortalSc1, projectSPortalSc2, projectSPortalSc3, projectSPortalSc4, projectSPortalSc5, projectSPortalSc6],
    demoLink: "https://toniu.github.io/SPortal",
    codeLink: "https://github.com/toniu/SPortal",
    bgColors: ["#0a919a", "#6ab5ba"],
  },
  {
    title: "Bree's Little Stars",
    secondTitle: "Nursery and childcare website",
    featured: true,
    year: "2025",
    role: "Web Developer",
    timeframe: "4-week client build",
    teamSize: "Solo build",
    context: "Children's nursery and family services",
    challenge: "Parents needed a quicker, clearer way to understand services and trust the nursery.",
    approach: "Focused first on the parent journey: service clarity, reassurance signals, and simpler enquiry paths that reduced friction for first-time visitors.",
    solutionWhy: "WordPress with Elementor was the right fit because the client needed a site that was quick to launch, easy to update independently, and practical within a service-business budget.",
    outcome: "Built a warmer, more reassuring site that improved clarity and support for enquiries.",
    takeaway: "I learned that trust-building content structure matters as much as visuals for service websites, especially when the audience is making a high-trust decision.",
    techStack: ["WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript"],
    description:
      "A nursery website designed to feel clearer, more supportive, and easier for parents to understand.",
    imageUrl: projectBlsSc1,
    screenshots: [projectBlsSc1, projectBlsSc2, projectBlsSc3, projectBlsSc4],
    demoLink: "https://www.breeslittlestars.co.uk/",
    codeLink: "",
    bgColors: ["#027bbf", "#097cdb"],
  },
  {
    title: "Matilda Limited",
    secondTitle: "Healthcare training provider website",
    featured: true,
    year: "2025",
    role: "Web Developer",
    timeframe: "3-week client build",
    teamSize: "Solo build",
    context: "Healthcare training and education",
    challenge: "The site needed a more credible and easier-to-scan structure for training information.",
    approach: "Prioritised information hierarchy first, then simplified page structure so visitors could understand services, training options, and contact paths with less scanning effort.",
    solutionWhy: "A WordPress build kept the editing workflow accessible for the client while still allowing enough control over layout, trust signals, and training-content presentation.",
    outcome: "Delivered a more polished experience that improved trust and made enquiry paths easier to follow.",
    takeaway: "This build sharpened my instinct for structuring dense service information around clarity first, instead of trying to solve credibility only through design styling.",
    techStack: ["WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript"],
    description:
      "A healthcare training website created to communicate services clearly and support trust-building.",
    imageUrl: projectMatildaSc1,
    screenshots: [projectMatildaSc1, projectMatildaSc2, projectMatildaSc3, projectMatildaSc4, projectMatildaSc5],
    demoLink: "https://matildahealthtraining.com/",
    codeLink: "",
    bgColors: ["#0f535c", "#1f8b8f"],
  },
  {
    title: "arithmetix.",
    secondTitle: "A-Level maths learning platform",
    year: "2023",
    role: "Full-stack Developer",
    context: "Education and revision platform",
    challenge: "Students needed a cleaner revision flow that felt structured and easier to follow.",
    outcome: "Built a more guided study experience with clearer progression and stronger engagement.",
    techStack: [
      "VueJS",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "PostgreSQL",
    ],
    description:
      "A revision platform covering resources, quizzes, and study flow in a clearer, more focused layout.",
    imageUrl: projectArithmetixSc1,
    screenshots: [projectArithmetixSc1, projectArithmetixSc2, projectArithmetixSc3, projectArithmetixSc4, projectArithmetixSc5],
    demoLink: "",
    codeLink: "https://github.com/toniu/arithmetix",
    bgColors: ["#60a4fb", "#7eb3f7"],
  },
  {
    title: "mybiblejourney",
    secondTitle: "E-book launch website",
    year: "2024",
    role: "Frontend Developer",
    context: "Launch campaign and digital presence",
    challenge: "The launch needed a sharper story and a clearer path from interest to action.",
    outcome: "Delivered a cleaner landing page with stronger messaging and a more direct conversion path.",
    techStack: ["React", "JavaScript", "TailwindCSS", "Canva"],
    description:
      "A simple, conversion-focused launch experience designed to make the offer feel clear and easy to act on.",
    imageUrl: projectMyBibleJourneySc1,
    screenshots: [projectMyBibleJourneySc1, projectMyBibleJourneySc2],
    demoLink: "https://toniu.github.io/mybiblejourney",
    codeLink: "https://github.com/toniu/mybiblejourney",
    bgColors: ["#12132b", "#212245"],
  },
  {
    title: "ONE%",
    secondTitle: "Scala game-show program",
    year: "2026",
    role: "Frontend Developer",
    context: "Interactive web experience",
    challenge: "The concept needed better engagement flow and a more polished browser experience.",
    outcome: "Built a responsive game with stronger front-end polish and a better play loop.",
    techStack: ['Scala', 'Slinky', 'React', 'Webpack', 'GitHub Actions'],
    description: "A browser-based game inspired by The 1% Club, built to feel responsive, playful, and easy to use.",
    imageUrl: projectOnePercentSc1,
    screenshots: [projectOnePercentSc1, projectOnePercentSc2, projectOnePercentSc3],
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
{
  title: "ANREER Investments",
  secondTitle: "Business and investment website",
  techStack: ["WordPress", "Elementor", "PHP", "HTML", "CSS"],
  description:
    "A business-facing website focused on clarity, credibility, and communicating investment services in a straightforward way.",
  imageUrl: imgAnreer,
  demoLink: "",
  codeLink: "",
  bgColors: ["#06242f", "#0f4a61"],
},
{
  title: "toniarts",
  secondTitle: "Creative arts showcase website",
  techStack: ["React", "TailwindCSS", "JavaScript"],
  description:
    "A visual showcase website for drawings and creative work, built for cleaner browsing and stronger presentation of artwork categories.",
  imageUrl: imgToniArts,
  demoLink: "",
  codeLink: "",
  bgColors: ["#241f1c", "#4a3b32"],
},
{
  title: "Wayfinding Kaia",
  secondTitle: "Coaching and guidance website",
  techStack: ["WordPress", "Elementor", "PHP", "HTML", "CSS"],
  description:
    "A service-led website designed to present coaching offers clearly, improve trust signals, and simplify contact flow.",
  imageUrl: imgKaia,
  demoLink: "",
  codeLink: "",
  bgColors: ["#1a202c", "#39435b"],
},
*/
export default projectsData;
