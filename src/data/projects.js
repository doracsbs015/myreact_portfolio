const projects = [
  {
    title: "FinSight - Finanace Dashboard",
    description: `FinSight is an advanced finance dashboard designed to help users analyze key performance indicators such as profit, sales, and growth. 
It visualizes data using dynamic charts and provides predictive insights using Regression.js to forecast next year's sales. 
The project includes a smart chatbot named FinBird that answers user queries related to financial metrics. 
It is built with React, TypeScript, Material UI, Node.js, and Recharts, ensuring a smooth and interactive user experience. 
The backend is deployed on Render and the frontend on Vercel. 
FinSight is compatible with any dataset that follows similar financial structures, making it highly versatile for analysis.`,
    tech: ["React", "TypeScript", "Material UI", "Node.js", "Recharts","ML- regression.js"],
    github: "https://github.com/doracsbs015/finsight_frontend.git",
    live: "https://finsight-iota.vercel.app/",
    image: "project1.png"
  },
  {
    title: "Dory Bites - Food Ordering Platform",
    description: `Dory Bites is a full-featured food ordering application built with the MERN stack. 
It allows users to browse menu items, add them to the cart, and place orders seamlessly. 
The application integrates Stripe for secure payment processing. 
An admin dashboard provides functionalities to manage orders, track sales, and maintain inventory efficiently. 
The project demonstrates the ability to handle real-world e-commerce workflows and database management. 
Dory Bites is designed to provide both customers and administrators with a smooth, interactive experience.`,
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    github: "https://github.com/yourusername/dory-bites",
    
    image: "project2.jpg"
  },
  {
    title: "TRAWBS - Compatibility Checker Game",
    description: `TRAWBS is a two-player web game focused on determining personality compatibility. 
Players answer a series of questions, and the application analyzes their responses to calculate compatibility scores. 
It is built using React and integrated with Google Analytics to track user engagement. 
The project demonstrates real-time interaction, data analysis, and a fun approach to personality assessment. 
TRAWBS offers a gamified experience while providing meaningful insights into user compatibility. 
It emphasizes responsive design and interactive feedback to enhance engagement.`,
    tech: ["React", "Google Analytics"],
    github: "https://github.com/doracsbs015/TrawbsGame.git",
    live: "https://trawbsgame.vercel.app/",
    image: "project3.png"
  },
  {
    title: "Expense Tracker",
    description: `Expense Tracker is a console-based application that helps users manage and categorize their expenses efficiently. 
Users can create accounts, add, and view expenses by category. 
Administrators have the ability to manage users and monitor overall financial summaries. 
The project is implemented using Java and SQL, demonstrating database handling and object-oriented programming concepts. 
It provides practical experience in managing data input, processing, and reporting via console commands. 
Expense Tracker serves as a simple but functional financial management tool for everyday use.`,
    tech: ["Java", "SQL"],
    github: "",
    
    image: "project4.jpg"
  }
];

export default projects;
