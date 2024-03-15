import img1 from '../../assets/project-arithmetix.png';
import img2 from '../../assets/project-fsimulation.png';
import img3 from '../../assets/project-mybiblejourney.png';
import img4 from '../../assets/project-toniarts.png';
import img5 from '../../assets/project-badminton.png';
import img6 from '../../assets/project-sportal.png';
import img7 from '../../assets/project-pyaux.png';

const projectsData = [
    {
      title: 'arithmetix',
      secondTitle: 'A-Level Maths e-Learning platform',
      techStack: ['VueJS', 'TailwindCSS', 'Webpack', 'Jest','NodeJS', 'Express', 'PostgreSQL'],
      description: 'An e-learning website to help A-level Maths students in preparation for their exams. This includes provided resources of quizzes, notes and exam papers based on the syllabus of the exam boards: AQA, OCR and Edexcel.',
      imageUrl: img1,
      demoLink: '',
      codeLink: 'https://github.com/toniu/arithmetix',
      bgColors: ['#ffffff', '#d4f3ff']
    },
    {
      title: 'FSimulation',
      secondTitle: 'Java console football simulation',
      techStack: ['Java'],
      description: 'A Java football simulation project which includes the simulation of leagues and matches between teams based on their FIFA ratings (attack, defence, midfield, and OVR rating).',
      imageUrl: img2,
      demoLink: '',
      codeLink: 'https://github.com/toniu/FSimulation',
      bgColors: ['#7a8a6e', '#b4bd8a']
    },
    {
      title: 'mybiblejourney',
      secondTitle: 'E-book release website',
      techStack: ['React','JavaScript','TailwindCSS'],
      description: 'A website which directs to the e-book release of visual Bible study notes of each book of the Bible',
      imageUrl: img3,
      demoLink: 'https://toniu.github.io/mybiblejourney',
      codeLink: 'https://github.com/toniu/mybiblejourney',
      bgColors: ['#12132b', '#212245']
    },
    {
      title: 'toniarts.',
      secondTitle: 'Visual gallery website',
      techStack: ['React','JavaScript','TailwindCSS'],
      description: 'A visually appealing website which shows a gallery of my drawings exploring the beauty and depth of black diaspora.',
      imageUrl: img4,
      demoLink: 'https://toniu.github.io/toniarts',
      codeLink: 'https://github.com/toniu/toniarts',
      bgColors: ['#292316', '#544932']
    },
    {
      title: 'BPMS2018',
      secondTitle: 'Netbeans Badminton Player Management System',
      techStack: ['Java','NetBeans','MySQL'],
      description: 'Java Netbeans project for a badminton player management system of a club of badminton players. This includes the login of badminton players, management of players, scheduling of fixtures and results and the ranking of players.',
      imageUrl: img5,
      demoLink: '',
      codeLink: 'https://github.com/toniu/BPMS2018',
      bgColors: ['#0d4032', '#0d5441']
    },
    {
      title: 'SPortal',
      secondTitle: 'React TS SharePoint webparts',
      techStack: ['SPFx','React','TypeScript','Jest','Gulp','SharePoint Lists'],
      description: 'SPFx TypeScript project of implemented Sharepoint webparts for Sharepoint website specifically for receiving and delivering information to other parties. This includes dashboard, profile, polls, group management and calendar',
      imageUrl: img6,
      demoLink: '',
      codeLink: 'https://github.com/toniu/SPortal',
      bgColors: ['#e0e0e0', '#b0d4cf']
    },
    {
      title: 'pyaux',
      secondTitle: 'Python Spotify playlist analyser',
      techStack: ['Python'],
      description: `Python project which fetches and analyses a user's spotify playlist information using the python Spotify API and calculates the rating based on artist diversity, genre cohesion, popularity, playlist length. It also gives track recommendations based on the user's playlist preferences.`,
      imageUrl: img7,
      demoLink: '',
      codeLink: 'https://github.com/toniu/pyaux',
      bgColors: ['#010500', '#001c06']
    }
  ];

export default projectsData;