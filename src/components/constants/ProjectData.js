import imgToni from '../../assets/project-toni.png';
import img1 from '../../assets/project-arithmetix.png';
import img2 from '../../assets/project-fsimulation.png';
import img3 from '../../assets/project-mybiblejourney.png';
import img4 from '../../assets/project-toniarts.png';
import img5 from '../../assets/project-badminton.png';
import img6 from '../../assets/project-sportal.png';
import img7 from '../../assets/project-pyaux.png';
import img8 from '../../assets/project-onepercent.png';

const projectsData = [
    {
      title: 'toni.',
      secondTitle: 'Portfolio website',
      techStack: ['React', 'TailwindCSS'],
      description: 'The website that you are already in! It is the official portfolio website of Neka Toni-Uebari. It includes an introduction of myself and the technologies and projects I can present.',
      imageUrl: imgToni,
      demoLink: 'https://toniu.github.io/toni-portfolio',
      codeLink: 'https://github.com/toniu/toni-portfolio',
      bgColors: ['#000000', '#19334d']
    },
    {
      title: 'arithmetix.',
      secondTitle: 'A-Level Maths e-Learning platform',
      techStack: ['VueJS', 'TailwindCSS', 'Webpack', 'Jest','NodeJS', 'Express', 'PostgreSQL'],
      description: 'An e-learning website to help A-level Maths students in preparation for their exams. This includes provided resources of quizzes, notes and exam papers based on the syllabus of the exam boards: AQA, OCR and Edexcel.',
      imageUrl: img1,
      demoLink: '',
      codeLink: 'https://github.com/toniu/arithmetix',
      bgColors: ['#29303b', '#1761bd']
    },
    {
      title: 'FSimulation',
      secondTitle: 'Java console football simulation',
      techStack: ['Java'],
      description: 'A Java football simulation project which includes the simulation of leagues and matches between teams based on their FIFA ratings (attack, defence, midfield, and OVR rating).',
      imageUrl: img2,
      demoLink: '',
      codeLink: 'https://github.com/toniu/FSimulation',
      bgColors: ['#2e5675', '#49573a']
    },
    {
      title: 'mybiblejourney',
      secondTitle: 'E-book release website',
      techStack: ['React','JavaScript','TailwindCSS'],
      description: 'A website which directs to the official release of my e-book of visual Bible study notes of each book of the Bible. It includes details about the project as well as external links to charities. ',
      imageUrl: img3,
      demoLink: 'https://toniu.github.io/mybiblejourney',
      codeLink: 'https://github.com/toniu/mybiblejourney',
      bgColors: ['#12132b', '#212245']
    },
    {
      title: 'toniarts.',
      secondTitle: 'Visual gallery website',
      techStack: ['React','JavaScript','TailwindCSS'],
      description: 'A visually appealing website which shows a gallery of my drawings exploring the beauty of the black diaspora. From family, to sports, to fashion, to music, to film and other forms of our creativity.',
      imageUrl: img4,
      demoLink: 'https://toniu.github.io/toniarts',
      codeLink: 'https://github.com/toniu/toniarts',
      bgColors: ['#292316', '#544932']
    },
    {
      title: 'BPMS2018',
      secondTitle: 'Badminton Player Management System',
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
      bgColors: ['#166f75', '#837474']
    },
    {
      title: 'pyaux',
      secondTitle: 'Python Spotify playlist analyser',
      techStack: ['Python','OAuth2'],
      description: `Python project which fetches and analyses a user's spotify playlist information using the python Spotify API and calculates the rating based on artist diversity, genre cohesion, popularity, playlist length. It also gives track recommendations based on the user's playlist preferences.`,
      imageUrl: img7,
      demoLink: '',
      codeLink: 'https://github.com/toniu/pyaux',
      bgColors: ['#010500', '#001c06']
    },
    {
      title: 'ONE%',
      secondTitle: 'Scala game-show program',
      techStack: ['Scala'],
      description: `A Scala game-show program inspired by the ITV game-show, The 1% club. The game structure involves 100 players (the user called ‘You’ and 99 other ‘CPU’ players) who attempt to answer a question to stay in the game each round. The game ends when there is only one player left`,
      imageUrl: img8,
      demoLink: '',
      codeLink: 'https://github.com/toniu/ONEpercent',
      bgColors: ['#1d2b00', '#171a12']
    }
  ];

export default projectsData;