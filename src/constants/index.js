import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    flutter,
    tailwind,
    nodejs,
    git,  
    figma,
    karamchari,
    sanga,
    smart,
    visita,
    cashflow,
    xband,
    kisan,
    expensetracker,
    next,
    firebase,
    apex,  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "UX/UI Design",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Next",
      icon: next,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name:"Figma",
      icon:figma
    }
  ];
  
  const experiences = [
    {
      title: "Oracle Apex Intern",
      company_name: "Maathra Technology & Consultancy Pvt Ltd",
      icon: apex,
      iconBg: "#383E56",
      date: "July 2024 - August 2024",
      points: [
        "Developed enterprise-level management software utilizing Oracle APEX and JavaScript DayPilot Scheduler, creating a robust and user-friendly scheduling system.",
      ],
    },
    {
      title: "Web  Developer Intern",
      company_name: "IHRD",
      icon: karamchari,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies for the Karmachari Job Portal, which is owned by the Government of Kerala.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android Developer Intern",
      company_name: "IHRD",
      icon: sanga,
      iconBg: "#E6DEDD",
      date: "Marh 2023 - April 2023",
      points: [
        "Contributing to the development and maintenance of mobile applications using Flutter for Sangameswara Ayurvedic Medicity Iranjalakuda, with a focus on enhancing the overall patient experience.",
        "Collaborating closely with cross-functional teams, including designers, product managers, and fellow developers, to deliver exceptional mobile applications.",
        "Implementing responsive design principles and ensuring seamless compatibility across multiple Android devices.",
        "Actively participating in code reviews and providing valuable feedback to fellow developers to improve the quality of the mobile app.",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "XTend",
      description:
        "Developed a health band that monitors heart rate, detects falls, tracks location, and sends real-time alerts to caregivers through a mobile app to enhance the safety of elderly patients.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "hardware",
          color: "pink-text-gradient",
        },
      ],
      image: xband,
      source_code_link: "https://github.com/Venture-Xs/xTend-app",
    },
    {
      name: "Visita",
      description:
        "Visita Host is a travel app designed to help tourists find affordable and cheap accommodation options for their travel, thereby reducing their overall travel budget.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: visita,
      source_code_link: "https://github.com/AnishPillai2002/Visita_Host",
    },
    {
      name: "Expense Tracker",
      description:
        " Developed a comprehensive web application to track daily expenses, utilizing Spring Boot to implement full CRUD (Create, Read, Update, Delete) operations",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: expensetracker,
      source_code_link: "https://github.com/AnishPillai2002/ExpenseTracker",
    },
    {
      name: "CashFlow",
      description:
        "The CashFlow app is a financial management tool that helps you track your income and expenses. You can easily monitor your cash flow.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "hive",
          color: "green-text-gradient",
        },
      ],
      image: cashflow,
      source_code_link: "https://github.com/AnishPillai2002/CashFlow",
    },
    {
      name: "Fasal",
      description:
        "Fasal is a comprehensive app that empowers farmers with agricultural and financial knowledge, enabling informed decision-making, resource management, and financial security.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "open-ai",
          color: "pink-text-gradient",
        },
      ],
      image: kisan,
      source_code_link: "https://github.com/Venture-Xs/Fasal_App",
    },
    {
      name: "SmartBrief",
      description:
        "SmartBrief is a web app that uses OpenAI to summarize articles. Simply paste the URL of a webpage, and it will generate a summary for you.",
      tags: [
        {
          name: "react-js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
        {
          name: "open-ai",
          color: "pink-text-gradient",
        }
      ],
      image:smart,
      source_code_link: "https://github.com/AnishPillai2002/SmartBrief/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };