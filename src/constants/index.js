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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    nikelandingpage,
    tictactoe,
    weatherapp,
    nextjobs,
    fitfusion
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
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "Back-End Developer",
      icon: backend,
    },
    {
      title: "Next JS Developer",
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
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Next JS",
      icon: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png'
    }
  ];
  
  const experiences = [
    /*{
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
    {
      title: "Full Stack Developer Internship",
      company_name: "Next24 Technologies",
      icon: 'https://media.licdn.com/dms/image/C560BAQG6BSo6-LKsyQ/company-logo_200_200/0/1679772461239?e=2147483647&v=beta&t=pUyflhb4QyKHfhd8XXNv-xj4QcpauDohqU_S0FUdg8M',
      iconBg: "#ffffff",
      date: "Mar 2024 - May 2024",
      points: [
        "Developed full stack web applications using NextJS,MongoDB,ExpressJS and NodeJS",
        "Implemented Responsive Web designs and cross-browser compatibility",
      ]
    }
  ];
  
  const projects = [
    {
      name: "Nike Landing Page",
      description:
      "A Dynamic Nike Landing Page crafted using React, Vite and Tailwind CSS, featuring responsive design, seamless navigation and engaging User Experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient"
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nikelandingpage,
      source_code_link: "https://github.com/LVSSandeepKumar/Nike-LandingPage",
    },
    {
      name: "Tic Tac Toe Game",
      description:
      "An interactive TicTacToe game developed with React, showcasing real time updates, sleek UI, responsive and engaging gameplay experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        }
      ],
      image: tictactoe,
      source_code_link: "https://github.com/LVSSandeepKumar/TicTacToe",
    },
    {
      name: "Weather App",
      description:
      "A responsive weather application built with React and Open Weather API, offering real-time forecasts, intuitive design and seamless User Experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rest-api",
          color: "green-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/LVSSandeepKumar/weather-app",
    },
    {
      name: "Next Jobs",
      description:"A full-stack job board app built with Next.js, Prisma, and PostgreSQL, enabling seamless job posting, application, and user management features.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient"
        }
      ],
      image: nextjobs,
      source_code_link: "https://github.com/LVSSandeepKumar/nextjs-job-board-clone",
    },
    {
      name: "Fit-Fusion AI",
      description:"Fit-Fusion AI, an innovative application generating personalized workout and diet plans using advanced AI algorithms for optimal fitness",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Gemini AI",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient"
        }
      ],
      image: fitfusion,
      source_code_link: "https://github.com/LVSSandeepKumar/Fit-Fusion-AI",
    },
  ];
  
  export { services, technologies, experiences, projects };