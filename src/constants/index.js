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
    mongodb,
    git,
    
    figma,
    docker,
    karamchari,
    sanga,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    clean,
    visita,
    cashflow,
    threejs,
    next,
    firebase,
    sanity,
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "UX/UI design",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Firebase",
      icon: firebase,
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
      name: "Sanity",
      icon: sanity,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Karmacharikerala",
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
      title: "Android Developer",
      company_name: "Sangameswara Ayurvedic Medicity",
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
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
        {
          name: "dart",
          color: "pink-text-gradient",
        },
      ],
      image: visita,
      source_code_link: "https://github.com/AnishPillai2002/Visita_Host",
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
      name: "Clean Coast",
      description:
        "The Clean Coast web app is a user-friendly and interactive platform designed to promote and facilitate coastal cleanup initiatives.",
      tags: [
        {
          name: "react-js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:clean,
      source_code_link: "https://github.com/AnishPillai2002/Homepage-Clean-Coast",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };