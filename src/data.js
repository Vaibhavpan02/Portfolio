import { nanoid } from 'nanoid';

const projects = [
  // {
  //   id: nanoid(),
  //   title: 'Postline',
  //   img: '/imgs/projects/postline.webp',
  //   desc: 'Social Media App where users can interact with each other through posts ',
  //   technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
  //   github: '',
  //   live: '',
  // },
  // {
  //   id: nanoid(),
  //   title: 'CodeTales',
  //   img: '/imgs/projects/codetales.webp',
  //   desc: 'A blogging Web Application where one can publish and read blogs 📖',
  //   technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
  //   github: '',
  //   live: '',
  // // },
  // // {
  // //   id: nanoid(),
  // //   title: 'FoodHunt',
  // //   img: '/imgs/projects/foodhunt.webp',
  // //   desc: "A food delivery App built using Reactjs and Powered by Swiggy's API",
  // //   technologies: ['React.js', 'TailwindCSS', 'Redux'],
  // //   github: '',
  // //   live: '',
  // // },
  // },
  {
    id: nanoid(),
    title: 'Codequiz',
    img: '/imgs/projects/codequiz.png',
    desc: 'An interactive quiz application to test your knowledge of programming languages.',
    technologies: ['React.js', 'TypeScript', 'MantineUI'],
    github: 'https://github.com/Vaibhavpan02/Code-quiz1',
    live: 'https://code-quiz1.vercel.app/',
  },
  // {
  //   id: nanoid(),
  //   title: 'Notice Generator',
  //   img: 'https://shrtco.de/1eXuKm',
  //   desc: 'App that helps placement coordinators generate placement notice',
  //   technologies: ['React.js', 'TypeScript', 'MantineUI'],
  //   github: '',
  //   live: '',
  // },

  {
    id: nanoid(),
    title: 'Notes App',
    img: '/imgs/projects/notes.webp',
    desc: 'A notes app where one can add quick notes on the go. Data is saved locally.',
    technologies: ['React.js'],
    github: 'https://github.com/Vaibhavpan02/NotesApp',
    live: 'https://notes-app-123.vercel.app/',
  },
  // {
  //   id: nanoid(),
  //   title: 'Weather App',
  //   img: '/imgs/projects/weather.webp',
  //   desc: 'A weather app that tells weather details based on search query (city, state, etc)',
  //   technologies: ['React.js'],
  //   github: '',
  //   live: '',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Triangle Quiz',
  //   img: '/imgs/projects/triangle.webp',
  //   desc: 'How much  do  you know  about triangles 🔺? Test your skills.',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   github: '',
  //   live: '',
  // },
  {
    id: nanoid(),
    title: 'URL Shortener',
    img: '/imgs/projects/url.webp',
    desc: 'An app that helps to shorten URL with ease.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Vaibhavpan02/Url_Shortener',
    live: 'https://url-shortener-q22h.vercel.app/',
  },
  // {
  //   id: nanoid(),
  //   title: 'Landing Pages',
  //   img: '/imgs/projects/landing-pages.webp',
  //   desc: 'Collection of all landing pages using HTML & CSS',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   github: '',
  //   live: '',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Mini JS Projects',
  //   img: '/imgs/projects/mini-js.webp',
  //   desc: 'Collection of mini Projects made using JavaScript',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   github: '',
  //   live: '',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Zigbee',
  //   img: '/imgs/projects/zigbee.webp',
  //   desc: 'A website for student developers club, MCA, OUTR.',
  //   technologies: ['nextjs', 'typescript', 'ChakraUI'],
  //   github: null,
  //   live: '',
  // },
];

const skills = [
  {
    icon: 'html',
    title: 'HTML',
  },
  {
    icon: 'css',
    title: 'CSS',
  },
  {
    icon: 'javascript',
    title: 'JavaScript',
  },
  {
    icon: 'typescript',
    title: 'TypeScript',
  },
  {
    icon: 'react',
    title: 'React.js',
  },
  {
    icon: 'redux',
    title: 'Redux',
  },
  {
    icon: 'tailwindcss',
    title: 'TailwindCSS',
  },
  {
    icon: 'bootstrap',
    title: 'Bootstrap',
  },
  {
    icon: 'firebase',
    title: 'Firebase',
  },
  {
    icon: 'nodejs',
    title: 'Node.js',
  },
  {
    icon: 'expressjs',
    title: 'Express.js',
  },
  {
    icon: 'mongodb',
    title: 'MongoDB',
  },
  {
    icon: 'sass',
    title: 'Sass',
  },
  {
    icon: 'git',
    title: 'Git',
  },
  {
    icon: 'figma',
    title: 'Figma',
  },
  {
    icon: 'github',
    title: 'Github',
  },
  {
    icon: 'babel',
    title: 'Babel',
  },
  {
    icon: 'webpack',
    title: 'Webpack',
  },
];

export const data = { projects, skills };
