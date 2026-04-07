const projects = [
  {
    title: "Noolaga Thozhan - Digital Library with Real-Time Chat",
    description: `Full-stack digital library platform with JWT-based role authentication for users and librarians. 
Includes automated per-minute fine calculation using node-cron, a reservation queue with auto book assignment, 
and category-based recommendations from user borrow history. Features reader discovery with real-time chat 
using Socket.io and MongoDB, plus an admin panel for book management, approvals, and transaction tracking.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/doracsbs015/Book-Q",
    live: "https://book-q-psi.vercel.app/",
    image: "bookq.png"
  },

  {
    title: "Kind & Cruel - Social Initiative Platform",
    description: `MERN stack positivity-sharing platform where QR-coded physical cards direct users to categorized quotes. 
Includes anonymous feedback, email subscriptions via Nodemailer, and an admin dashboard for managing quotes, 
subscribers, and feedback. Google Analytics integration tracks user engagement and interactions.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Nodemailer", "Google Analytics"],
    github: "https://github.com/doracsbs015/KIND-AND-CRUEL",
    live: "https://kindandcruel.vercel.app/",
    image: "knc.png"
  },

  {
    title: "SkinSights - AI Skincare Ingredients Analyzer",
    description: `AI-powered skincare platform using Hugging Face APIs to determine skin type via an interactive quiz. 
Supports ingredient analysis through text or OCR with Tesseract.js, generating safety scores and insights. 
Includes personalized product recommendations, analysis history, and an admin panel to manage products and data.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Hugging Face API", "Tesseract.js"],
    github: "https://github.com/doracsbs015/Skinsights",
    live: "https://skinsights.vercel.app/",
    image: "ss.png"
  },

  {
    title: "FinSight - Finance Dashboard",
    description: `Interactive finance dashboard visualizing profit, sales, and growth metrics with dynamic charts. 
Uses Regression.js to forecast next year's sales and includes a chatbot (FinBird) for answering finance queries.`,
    tech: ["React", "TypeScript", "Material UI", "Node.js", "Recharts", "Regression.js"],
    github: "https://github.com/doracsbs015/finsight_frontend.git",
    live: "https://finsight-iota.vercel.app/",
    image: "fin.png"
  },

  {
    title: "TRAWBS - Compatibility Checker Game",
    description: `Two-player web game that evaluates personality compatibility through question-based analysis. 
Built with React and integrated with Google Analytics to track engagement and provide an interactive gamified experience.`,
    tech: ["React", "Google Analytics"],
    github: "https://github.com/doracsbs015/TrawbsGame.git",
    live: "https://trawbsgame.vercel.app/",
    image: "trawbs.png"
  },

  {
    title: "Expense Tracker",
    description: `Console-based financial management tool allowing users to add and categorize expenses. 
Built using Java and SQL, demonstrating database handling and object-oriented programming.`,
    tech: ["Java", "SQL"],
    github: "",
    image: "exp.png"
  }
];

export default projects;