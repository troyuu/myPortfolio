import fightPhImage1 from "@/assets/images/fight-ph-1.png";
import fightPhImage2 from "@/assets/images/fight-ph-2.png";
import autrackImage1 from "@/assets/images/autrack-1.png";
import autrackImage2 from "@/assets/images/autrack-2.png";
import autrackImage3 from "@/assets/images/autrack-3.png";
import telequizbotImage1 from "@/assets/images/telequizbot-1.png";
import telequizbotImage2 from "@/assets/images/telequizbot-2.png";
import adawptImage1 from "@/assets/images/adawpt-1.png";
import adawptImage2 from "@/assets/images/adawpt-2.png";
import adawptImage3 from "@/assets/images/adawpt-3.png";
import munifiImage1 from "@/assets/images/munifi-1.png";
import munifiImage2 from "@/assets/images/munifi-2.png";
import munifiImage3 from "@/assets/images/munifi-3.png";
import munifiImage4 from "@/assets/images/munifi-4.png";
import portfolioImage1 from "@/assets/images/portfolio-1.png";
import portfolioImage2 from "@/assets/images/portfolio-2.png";
import portfolioImage3 from "@/assets/images/portfolio-4.png";

export const SITE = {
  name: "Troy Labajo",
  initials: "TL",
  role: "Full-Stack Developer & Freelancer",
  tagline: "From Sunrise to Moonlight, I Create",
  email: "labajotroy3@gmail.com",
  phone: "+63 968 711 0935",
  location: "Cebu, Philippines",
};

export const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export const ABOUT = {
  avatar: null,
  bio: `Hello, my name is Troy, and I am 24 years old. I am passionate about coding and UI design. Let me tell you a bit about my background. I'm a Full-Stack Developer and Freelancer based in Cebu, Philippines. I graduated with a Bachelor of Science in Information Technology from Cebu Technological University. I started learning front-end and back-end development while building projects for real clients.

As a freelancer, I've worked with diverse clients to deliver high-quality web applications and automation solutions. I dedicate my life to building products through code and creative tools and constantly push myself to take on even more interesting work. The best way to enjoy learning is by doing it daily.`,
  note: "You can see more about my projects on my GitHub.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "MUNIFI",
    description:
      "A full-stack municipal complaint management system where residents file complaints to their municipal hall and track their status in real time. Admins manage the entire complaint lifecycle — from filing and scheduling hearings to resolving cases. Features include a dashboard with analytics, complaint filtering by barangay and status, a hearing calendar, and role-based access for residents and admins.",
    techstack: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Auth.js, Express.js, Sequelize, PostgreSQL, Zod, Turborepo",
    image: [munifiImage1, munifiImage2, munifiImage3, munifiImage4],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "AUTRACK",
    description:
      "A room reservation system built for Cebu Technological University to solve limited classroom availability. Users can view real-time room availability, book open spaces, and manage reservations — helping students and faculty find and secure rooms without scheduling conflicts.",
    techstack: "React, TypeScript, Firebase, Tailwind CSS",
    image: [autrackImage1, autrackImage2, autrackImage3],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "FIGHT",
    description:
      "A Shopify e-commerce store for MMA equipment. Features product catalogs, shopping cart, and secure checkout for martial arts gear and accessories. Note: The live demo uses a custom theme visible via Shopify admin preview — the password-protected storefront may show a different default theme. (Password: Aqt23Tyb3)",
    techstack: "Shopify, CLI",
    image: [fightPhImage1, fightPhImage2],
    github: null,
    demo: "https://fight-ph-dev.myshopify.com/",
  },
  {
    id: 4,
    title: "TELEGRAM QUIZBOT",
    description:
      "An automatic quiz generator for agents. By sending a YouTube link to the Telegram bot, it generates 10 questions and automatically sends them to the agent's Telegram account. Note: No live demo and GitHub repository available due to confidential reasons for the client.",
    techstack: "n8n, Airtable, Telegram Bots",
    image: [telequizbotImage1, telequizbotImage2],
    github: null,
    demo: null,
  },
  {
    id: 5,
    title: "ADAWPT",
    description:
      "A community-driven stray animal rescue platform. Users can report stray animals with location pinning, browse and adopt rescued pets, donate to support rescue operations, and volunteer for events. Features include a multi-step reporting form, donation system with preset and custom amounts, success stories, and real-time stats tracking.",
    techstack: "Django, PostgreSQL, Tailwind CSS, HTML, Docker",
    image: [adawptImage1, adawptImage2, adawptImage3],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "MY PORTFOLIO",
    description:
      "A personal portfolio website showcasing my projects, skills, and services. Features a clean minimalist design with smooth animations, responsive layout, dark/light theme toggle, image carousels for project showcases, a contact form powered by EmailJS, and a skills section with animated progress bars.",
    techstack: "React, Vite, Tailwind CSS, shadcn/ui, EmailJS",
    image: [portfolioImage1, portfolioImage2, portfolioImage3],
    github: "https://github.com/troyuu/myPortfolio",
    demo: "https://troyuu.online",
  },
];

export const TECHNICAL_SKILLS = [
  // Programming Languages
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "Python", level: 85 },
  { name: "HTML & CSS", level: 90 },
  // Frameworks & Libraries
  { name: "React", level: 90 },
  { name: "React Native", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 88 },
  { name: "Django", level: 82 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Sequelize", level: 82 },
  // Databases
  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 80 },
  // Tools & Platforms
  { name: "Docker", level: 78 },
  { name: "shadcn/ui", level: 85 },
  { name: "GitHub / Git", level: 90 },
  { name: "Postman", level: 85 },
  { name: "n8n", level: 82 },
  { name: "Airtable", level: 85 },
  { name: "Shopify", level: 80 },
];

export const CODE_SNIPPET = `const myTechnicalSkills = [
  JavaScript, TypeScript, Python,
  HTML & CSS, React, React Native, Next.js,
  Node.js, Express.js, Django, Tailwind CSS,
  Sequelize, PostgreSQL, MongoDB,
  Docker, shadcn/ui, GitHub, Git, Postman,
  n8n, Airtable, Shopify ];`;

export const SERVICES = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks like React, Next.js, and Express.js — fast, scalable, and tailored to your needs.",
    icon: "Globe",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native, delivering native performance on both iOS and Android from a single codebase.",
    icon: "Smartphone",
  },
  {
    title: "Web Design",
    description:
      "Clean, responsive UI/UX design that looks great on every device. Pixel-perfect layouts crafted with Tailwind CSS and shadcn/ui.",
    icon: "Palette",
  },
  {
    title: "Business Automation",
    description:
      "Streamline your workflows with n8n, Airtable, and custom bots — automate repetitive tasks so you can focus on what matters.",
    icon: "Zap",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Docker containerization, hosting setup, and CI/CD pipelines to get your project live and running smoothly in production.",
    icon: "Server",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Shopify stores and custom online shops — product catalogs, shopping carts, and secure checkout, ready to sell.",
    icon: "ShoppingCart",
  },
];

export const CONTACT = {
  heading: "GET IN TOUCH!",
  intro:
    "Thank you for your interest in my work.",
  body: `Whether you have a business idea you want to bring to life, a web app that needs building, or workflows you want to automate — I'd love to hear about it. I work closely with every client to deliver clean, reliable, and scalable solutions on time.

From startups to established businesses, I've helped clients turn their ideas into real products. If you're looking for a developer who treats your project like his own, let's talk.

Drop me a message below and let's build something great together.`,
  social: "LET'S CONNECT",
};
