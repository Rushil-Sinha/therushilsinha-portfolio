import POS from "../assets/projects/POS.png";
import Stock from "../assets/projects/Stock.png";
import Portfolio from "../assets/projects/Portfolio.png";
import Ecommerce from "../assets/projects/Ecommerce.png";
import Task from "../assets/projects/Task.png";

export const HERO_CONTENT = `Meticulous web developer with a strong passion for responsive website design and a firm believer in the mobile-first approach. With a keen eye for detail and a commitment to writing quality software, I am excited about the opportunity to contribute to products that have a significant impact.`;

export const ABOUT_TEXT = `A dynamic Power Platform developer and UI/UX designer, I specialize in building responsive web and mobile applications using Microsoft PowerApps, Power Automate, and Power BI. With expertise in Canvas and Model-Driven Apps, I craft intuitive interfaces, automate workflows, and integrate AI-driven functionalities. Proficient in JavaScript, C#, and Figma, I create seamless user experiences while optimizing business processes. Whether developing e-commerce platforms, customizing SharePoint integrations, or leading projects, I drive efficiency, innovation, and digital transformation, ensuring high-quality solutions tailored to business needs.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Associate Software Engineer",
    company: "Sysfore Technologies",
    description: `Develop web, mobile, and responsive applications using Microsoft Power Platform, including Canvas and Model-Driven Apps. Automate workflows with Power Automate, create Power BI reports, and integrate AI with AI Builder and Copilots. Implement custom logic using JavaScript/C#, design UI/UX in Figma, gather requirements, create BRDs, and manage project timelines effectively.`,
    technologies: ["PowerApps", "Power Automate", "Figma", "Javascript","C# Plugins"],
  },
  {
    year: "Jul 2023 - Dec 2023",
    role: "Web Technology Associate",
    company: "Grandeur",
    description: `Developed an e-commerce platform using HTML, CSS, JavaScript, and MySQL to enhance online sales. Optimized UX and SEO for better performance and visibility. Managed hosting via FileZilla, handled content updates, and ensured data integrity. Improved website security, responsiveness, and overall user experience for seamless transactions.`,
    technologies: ["HTML", "CSS", "Vanilla JS", "MySQL"],
  },
  {
    year: "Jul 2021 - Nov 2021",
    role: "Software QA Automation",
    company: "Neurosensum",
    description: `Developed and wrote detailed test cases to ensure software quality, conducted both manual and automation testing on the company’s portal using Selenium Java and employed Jenkins and Maven for continuous integration and automation.`,
    technologies: ["Selenium", "Java", "Jenkins", "Maven"],
  },
  {
    year: "Jul 2020 - Dec 2020",
    role: "Digital Marketer",
    company: "Neurosensum",
    description: `Involved in sales and lead generation activities, created, updated, and validated databases. Listed B2B and local business development startups and wrote content for various platforms.`,
    technologies: ["Sales Navigator", "MS Office Suite", "Pipedrive"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: Ecommerce,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: Task,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "POS System",
    image: POS,
    description: 
      "A robust POS (Point of Sale) system for a café, featuring order management, inventory tracking, and sales reporting.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "MERN"]
  },
  {
    title: "Stock Market Sentiment Analysis",
    image: Stock,
    description:
      "A sentiment analysis system for stock market data using Python, SQL, and PySpark to process and classify financial data.",
    technologies: ["Python", "SQL", "PySpark", "Google Colab", "Kaggle"]
  },
];

export const CONTACT = {
  address: "A206 Aravind Chitravathi, Bangalore-560077",
  phoneNo: "+91 8789467790",
  email: "rushilsinha35@gmail.com",
};
