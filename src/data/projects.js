import infibotBg     from '../assets/Infibot_Background.jpg'
import uraBg         from '../assets/URA_Background.jpg'
import ngsBg         from '../assets/NGS_Background.jpg'
import pdsBg         from '../assets/PDS_Background.jpg'
import bigIntegerBg  from '../assets/BigInteger_Background.png'
import databaseBg    from '../assets/DatabaseProject_Background.png'
import sonyBg        from '../assets/Sony_Background.png'

import ngsLogo       from '../assets/NGS_Logo.webp'
import ogilvyLogo    from '../assets/Ogilvy_Logo.webp'
import uraLogo       from '../assets/ura-logo-white.png'
import sutdLogo      from '../assets/sutd-white.png'

import Chatbot  from '../assets/AI-Chatbot.jpg'
import GymApp   from '../assets/Not Ready.png'
import Internship from '../assets/Not Ready (1).png'
import Video    from '../assets/0518.mp4'
import Volunteer    from '../assets/CHN_4704.jpg'


export const projects = [
  {
    id: 1,
    year: "2026",
    title: "Infineon Technical Assistant Chatbot",
    company: "Infineon",
    tag: "RAG • NLP • LLM",
    description:
      "Partnered with Infineon to build a Retrieval-Augmented Generation chatbot that assists developers navigating technical documentation. The assistant understands product-specific queries and returns precise, grounded answers from proprietary datasheets.",
    link: null,
    videoLink: 'https://youtu.be/SaB0Q3WbYrI',
    bgImage: infibotBg,
    logo: null,
  },
  {
    id: 2,
    year: "2025",
    title: "URA Prompt to 3D Massing Tool",
    company: "URA",
    tag: "Generative AI • Urban Planning • 3D",
    description:
      "Partnered with the Urban Redevelopment Authority to develop a web app that generates 3D urban massing on a defined basemap. Enabled urban designers to communicate concepts and iterate site strategies up to 30× faster using Gen AI.",
    link: null,
    videoLink: 'https://youtu.be/ANQfiOy-CIw',
    bgImage: uraBg,
    logo: uraLogo,
  },
  {
    id: 3,
    year: "2024",
    title: "NGS StArt AI Web App",
    company: "National Gallery SG",
    tag: "React • Ruby on Rails • Gemini AI",
    description:
      "Partnered with the National Gallery of Singapore to digitise their StArt Programme. Built a full-stack app with React and Ruby on Rails, integrating Google Gemini AI to interpret journal entries and provide guided artistic reflection prompts.",
    link: "https://mdammarportfolio.wordpress.com/start-ai-web-app/",
    bgImage: ngsBg,
    logo: ngsLogo,
  },
  {
    id: 4,
    year: "2025",
    title: "BigInteger Software Verification",
    company: "Academic",
    tag: "JUnit • Fuzzing • Blackbox & Whitebox Testing",
    description:
      "Designed comprehensive test cases and achieved multiple code coverage criteria for a BigInteger library. Applied Equivalence Partitioning, fuzz testing, and mutation testing techniques using JUnit to surface edge-case bugs.",
    link: "https://mdammarportfolio.wordpress.com/fuzzing-testing/",
    bgImage: bigIntegerBg,
    logo: sutdLogo,
  },
  {
    id: 5,
    year: "2025",
    title: "Hotel & Resort Database Design",
    company: "Academic",
    tag: "SQL • Database Design • ERD",
    description:
      "Designed and implemented the central database for a hotel booking, reservation, and billing system. Developed a conceptual EER model, relational schema with normalisation, and a complete T-SQL database script with all necessary tables and constraints.",
    link: "https://mdammarportfolio.wordpress.com/database-design-implementation/",
    bgImage: databaseBg,
    logo: sutdLogo,
  },
  {
    id: 6,
    year: "2024",
    title: "Guid-e — Airport Trolley Redesign",
    company: "Ogilvy",
    tag: "Product Design • UX • Figma • Flutter",
    description:
      "Partnered with Ogilvy to redesign the conventional airport trolley. Integrated a Crowd SLAM navigation algorithm, computer vision, and Arduino electronics for real-time 3D mapping and user detection with a seamless Figma-designed Flutter interface.",
    link: "https://mdammarportfolio.wordpress.com",
    bgImage: pdsBg,
    logo: ogilvyLogo,
  },
  {
    id: 7,
    year: "2024",
    title: "Sony's Angels",
    company: "Sony",
    tag: "AI Design • RAG • Data Analytics",
    description:
      "Identified design improvement opportunities for Sony using generative AI and Retrieval-Augmented Generation (RAG). Analysed data scraped from online reviews, social media platforms, and Google Search Interest to surface actionable design insights.",
    link: "https://mdammarportfolio.wordpress.com/blog/",
    bgImage: sonyBg,
    logo: sutdLogo,
  },
];

export const personaCards = [
  {
    id: 1,
    title: "AI Enthusiast",
    image: Chatbot,
    description:
      "Passionate about building AI-powered products that solve real-world problems. From RAG pipelines to generative urban tools.",
    emoji: "🤖",
  },
  {
    id: 2,
    title: "Apps Developed",
    image: GymApp,
    description:
      "By identifying pain points in everyday tasks, I design and develop user-centered apps that improve productivity.",
    emoji: "📱",
  },
  {
    id: 3,
    title: "Internship",
    image: Internship,
    description:
      "Completed an internship at LBBW, building Power BI dashboards and automating data pipelines with FreshService and Microsoft Intune APIs.",
    emoji: "💼",
  },
  {
    id: 4,
    title: "Content Creation",
    video: Video,
    description:
      "I enjoy the creative process of editing videos and images.",
    emoji: "🎬",
  },
  {
    id: 5,
    title: "Volunteering",
    image: Volunteer,
    description:
      "Regular volunteer at community events and tech outreach programmes, giving back through design and digital skills.",
    emoji: "🤝",
  },
];

export const skills = [
  "Systems Thinking",
  "Technical",
  "Thought Leader",
  "Simplicity",
  "Hard Work",
  "Team Captain",
];
