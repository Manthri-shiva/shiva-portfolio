// ─────────────────────────────────────────────────────────
// Edit everything in this file to make the site yours.
// No need to touch component code for basic content changes.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Manthri Shiva Shanker Varaprasad',
  displayName: 'Shiva Shanker Varaprasad',
  role: 'AI & ML Engineer | Generative AI Developer',
  tagline:
  'Building practical AI systems with Machine Learning, Generative AI, and intelligent automation.',
  location: 'Hyderabad, Telangana, India',
  email: 'shivashanker0100@gmail.com',
  phone: '+91 70755 56097',
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/Manthri-shiva' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manthri-shiva-shanker-varaprasad',
    },
  ],
}

export const about = {
  heading: 'I build practical AI systems that turn ideas into usable products.',
   paragraphs: [
    "I'm a B.Tech Computer Science (AI & ML) student at St. Peter's Engineering College, focused on Machine Learning, Generative AI, and Large Language Model applications. I enjoy turning what I learn into practical projects and working systems.",
    "Through internships, technical programs, and projects, I've worked across different parts of the AI stack — from NLP data collection and model-related workflows to building AI-powered applications with Python, Streamlit, and modern LLM APIs.",
    "Alongside engineering, I have also worked with entrepreneurship and incubation initiatives, supporting startup programs, hackathons, mentoring activities, and early-stage idea development. I value systems that are practical, understandable, and useful beyond the code itself.",
  ],
  stack: [
    'Python', 'Java', 'C', 'SQL', 'Machine Learning', 'Generative AI',
    'LLMs', 'Prompt Engineering', 'Streamlit', 'Plotly', 'Pandas', 'Git',
  ],
}

export const projects = [
  {
    id: 'nexus-ai',
    title: 'Nexus AI',
    subtitle: 'Personal AI Operating System',
    description:
      'A modular personal AI operating system designed to provide a unified interface for intelligent tasks. Built with FastAPI and a layered architecture, Nexus AI combines authentication, PostgreSQL persistence, multi-LLM support, intelligent task routing, agent orchestration, research and file agents, and a plugin-based architecture for extending its capabilities.',
    tags: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Multi-LLM',
      'AI Agents',
      'Agent Orchestration',
      'Plugin System',
    ],
    highlights: [
      'Intent-based task classification with agent registry, permission-aware routing, and coordinated agent execution',
      'Unified LLM provider architecture supporting OpenAI, Anthropic Claude, and Google Gemini',
      'Extensible backend with JWT authentication, PostgreSQL persistence, structured logging, testing, and plugin infrastructure',
    ],
    link: '',
    repo: 'https://github.com/Manthri-shiva/Nexus-AI',
  },

  {
    id: 'ecogen-ai',
    title: 'EcoGen AI',
    subtitle: 'AI-Powered Sustainability Intelligence Platform',
    description:
      'An AI-powered sustainability platform built with Python and Streamlit that helps users assess environmental impact, calculate carbon footprint, receive personalized AI recommendations, explore future sustainability scenarios through EcoTwin, and follow a personalized 30-Day Green Action Plan — developed as part of the 1M1B Green Internship.',
    tags: [
      'Python',
      'Streamlit',
      'Gemini AI',
      'Machine Learning',
      'Plotly',
      'RAG',
    ],
    highlights: [
      'Personalized sustainability assessment with carbon footprint and sustainability scoring',
      'AI-powered Sustainability Coach, EcoTwin forecasting, and personalized recommendations',
      '30-Day Green Action Plan with progress tracking and environmental impact visualization',
    ],
    link: 'https://ecogen-ai.streamlit.app/',
    repo: 'https://github.com/Manthri-shiva/EcoGen-AI',
  },

  {
    id: 'smart-solar-micro-hub',
    title: 'Smart Solar Micro Hub',
    subtitle: 'Solar Energy Analysis & Sustainability Platform',
    description:
      'A solar analysis platform built with Python and Streamlit that helps users estimate energy consumption, calculate solar panel requirements, analyze cost savings, and understand environmental impact — developed as part of the 1M1B Green Internship alongside a teammate.',
    tags: ['Python', 'Streamlit', 'Plotly', 'HTML/CSS'],
    highlights: [
      'Energy consumption estimation and solar requirement calculations',
      'Cost savings and environmental impact analysis',
      'Interactive data visualizations built with Plotly',
    ],
    link: 'https://smart-solar-micro-app-4332rilsuixyzzzzz.streamlit.app/',
    repo: 'https://github.com/Manthri-shiva/Smart-Solar-Micro-Hub.git',
  },

  {
    id: 'ojas-ai',
    title: 'Ojas AI',
    subtitle: 'Smart Safety & Emergency Response App',
    description:
      'A Flutter-based personal safety application featuring live GPS tracking, automated emergency alerts, and sensor-based monitoring for real-time personal safety management.',
    tags: ['Flutter', 'Dart', 'Sensors Plus', 'Geolocator'],
    highlights: [
      'Live GPS tracking with automated emergency alert workflows',
      'Sensor-based monitoring integrated into a responsive UI',
      'Designed for real-time, real-world safety scenarios',
    ],
    link: '#',
    repo: 'https://github.com/Manthri-shiva/Ojas-AI',
  },
]
export const experience = [
  {
    role: 'Green Intern — Sustainability & Innovation',
    org: '1M1B (1 Million for 1 Billion)',
    period: 'May 2026 — Present',
    points: [
      'Contributing to sustainability-focused technology initiatives and project development',
      'Co-developing Smart Solar Micro Hub for renewable energy and consumption analysis',
      'Applying data analysis and software development to sustainability-focused use cases',
    ],
  },
  {
    role: 'Business Development Associate',
    org: 'InnoTech-Hub',
    period: 'Feb 2026 — Present',
    points: [
      'Contribute to finance and marketing operations across business initiatives',
      'Support financial coordination, budgeting activities, and outreach strategy execution',
    ],
  },
  {
    role: 'Associate',
    org: "SPECIIE — St. Peter's Engineering College Incubation Cell",
    period: 'Jul 2025 — Apr 2026',
    points: [
      'Supported startup incubation through proposal evaluation, ideation, and MVP development activities',
    ],
  },
  {
    role: 'Tech Lead Intern — Summer of AI 2025',
    org: 'VISWAM.AI · Meta · Swecha Telangana · IIIT Hyderabad',
    period: 'May 2025 — Aug 2025',
    points: [
      'Led and mentored teams during AI-focused project development',
      'Contributed to NLP corpus collection and regional-language dataset development',
      'Supported AI model evaluation and data preparation workflows',
    ],
  },
  {
    role: 'Python Programming Intern',
    org: 'CodSoft',
    period: 'Jul 2025 — Aug 2025',
    points: [
      'Developed Python applications applying core software engineering concepts',
      'Applied OOP, debugging, and problem-solving techniques on real assignments',
    ],
  },
]
export const education = {
  degree: 'B.Tech, Computer Science & Engineering (AI & ML)',
  school: "St. Peter's Engineering College",
  period: '2024 — 2028',
  detail: 'CGPA: 8.8 / 10',
}

export const certifications = [
  'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
  'Career Essentials in Generative AI — Microsoft & LinkedIn',
  'Google Cloud — Introduction to LLMs',
  'Google Cloud — Gen AI Beyond the Chatbot',
  'AWS Generative AI and AI Agents with Amazon Bedrock',
  'JPMorgan Chase Software Engineering Job Simulation',
  'Tata GenAI Powered Data Analytics Job Simulation',
  'Claude Code 101',
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
