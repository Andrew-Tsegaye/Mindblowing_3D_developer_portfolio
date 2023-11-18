import {
  python,
  jupyter,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  mobile,
  backend,
  creator,
  web,
  adventure,
  flappybird,
  pong,
  addiscoder,
  robox,
  freelancer,
  jsm,
  georg,
  isaac,
  mukerem,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Python Programming',
    icon: web,
  },
  {
    title: 'Algorithms and Models',
    icon: mobile,
  },
  {
    title: 'Full Stack Development',
    icon: backend,
  },
  {
    title: 'Blockchain Development',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Robotics Workshop',
    company_name: 'Robox Robotics And Artificial Intelligence Center',
    icon: robox,
    iconBg: '#E6DEDD',
    date: 'July 2022 - Aug 2022',
    points: [
      'Joined a passionate team to construct an intelligent robot, the Smart Maze Solver, equipped with cutting-edge algorithms for autonomous navigation through intricate mazes.',
      'Crafting efficient code and enhancing software functionality to elevate the performance of robotic systems.',
      'Building and assembling robots as part of hands-on sessions.',
    ],
  },
  {
    title: 'Creative Designer & Developer',
    company_name: 'JavaScript Mastery',
    icon: jsm,
    iconBg: '#E6DEDD',
    date: 'Aug 2022 - July 2023',
    points: [
      'Worked in modern web technologies (React.js, Next.js, GraphQL, Node.js)',
      "Contributed to defining best practices for reusable UI components in the company's design system.",
      'Collaborated with cross-functional teams, including designers and backend engineers, to implement new features and functionality.',
      "Managed the frontend of the company's web platform, ensuring a seamless and user-friendly experience.",
    ],
  },
  {
    title: 'Algorithms & Programming',
    company_name: 'AddisCoder',
    icon: addiscoder,
    iconBg: '#383E56',
    date: 'July 2023 - Aug 2023',
    points: [
      'Attended AddisCoder, a top-tier summer program for high-achieving students in Ethiopia.',
      'Received intensive instruction in Python, algorithm design, and advanced computer science topics.',
      'Participated in hands-on coding labs and problem-solving.',
      'Joined a network of successful AddisCoder alumni.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Freelancer',
    icon: freelancer,
    iconBg: '#383E56',
    date: 'Mar 2021 - Present',
    points: [
      'Designed and developed responsive web and mobile applications with user-friendly interfaces.',
      'Collaborated with clients to define project goals and requirements.',
      'Managed databases and ensured data efficiency.',
      'Conducted testing, debugging, and deployed applications to production environments.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Andrew Tsegaye, a skilled Python and JavaScript programmer, excels in technical collaboration. His enthusiasm and growth potential promise positive contributions to future projects.',
    name: 'Mukerem Ali',
    designation: 'Python Developer',
    company: 'Turing',
    image: mukerem,
  },
  {
    testimonial:
      'Andrew shows promising tenacity, dedication, and problem-solving skills. His eagerness to learn and take initiative positions him for success in software engineering. I anticipate his future achievements.',
    name: 'Isaac Sahle',
    designation: 'Software Engineer',
    company: 'Google',
    image: isaac,
  },
  {
    testimonial:
      "Andrew loves to tinker with AI and web technologies. This prior programming experience aided him in AddisCoder, yet he found challenge in the algorithmic concepts and was not shy to ask questions.",
    name: 'Georg Osang',
    designation: 'Mathematical Scientist',
    company: 'IDEMS',
    image: georg,
  },
];

const projects = [
  {
    name: 'AI Plays Ping Pong',
    description:
      "Developed a reinforcement learning AI agent for Pong, controlling a paddle to block the ball's progress.",
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Reinforcement Learning',
        color: 'green-text-gradient',
      },
      {
        name: 'NEAT',
        color: 'pink-text-gradient',
      },
    ],
    image: pong,
    source_code_link:
      'https://github.com/Andrew-Tsegaye/AI-Playing-Pong-Game',
  },
  {
    name: 'AI Adventure',
    description:
      'Crafted an AI-driven Python Choose-Your-Own-Adventure game, leveraging OpenAI, Astra vector database, and RAG technology.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vector DB',
        color: 'orange-text-gradient',
      },
      {
        name: 'OpenAI',
        color: 'green-text-gradient',
      },
      {
        name: 'RAG',
        color: 'pink-text-gradient',
      },
    ],
    image: adventure,
    source_code_link: 'https://github.com/Andrew-Tsegaye/AI-Choose-Your-Own-Adventure-Game',
  },
  {
    name: 'AI Plays Flappy Bird',
    description:
      'Implemented an AI algorithm using NEAT to play Flappy Bird, showcasing neural network evolution for bird behavior control.',
    tags: [
      {
        name: 'Python',
        color: 'pink-text-gradient',
      },
      {
        name: 'Algorithm',
        color: 'green-text-gradient',
      },
      {
        name: 'NEAT',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pygame',
        color: 'orange-text-gradient',
      },
    ],
    image: flappybird,
    source_code_link: 'https://github.com/Andrew-Tsegaye/AI-Powered-Flappy-Bird',
  },
];

export { services, technologies, experiences, testimonials, projects };
