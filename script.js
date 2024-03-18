const name = document.querySelector("#name");
const update = document.querySelector("#new");
const details = document.querySelector("#details");
const detailsContainer = document.querySelector("#detailsContainer");
const projectDetails = document.querySelector("#unitDetails");

const words = [
    // Streamling this data search by creating a webscraper to scour for projects
    // include an admin privilledge for user to add own ideas
  "Mobile Gaming",
  "Network Programming",
  "Advanced Java",
  "Linear Programming",
  "ICT Project Management",
  "Principles of Marketing",
  "Distributed Systems",
  "Expert Systems"
];

const getWord = () => {
  const raw = words[Math.floor(Math.random() * Math.floor(words.length))];
  const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
  return stylish;
}

const updateWords = () => {
  name.value = getWord();
  hideDetails();
}

const projectDetailsMap = {
  // "To-Do List App": "A task management application to help users organize their daily activities and improve productivity.",
  // "E-book Reader": "An application for reading digital books with features like bookmarking, highlighting, and adjustable fonts.",
  // "Chat Application": "Real-time messaging platform that allows users to communicate with each other through text messages.",
  // "Recipe Sharing Platform": "A community-driven platform where users can share and discover new recipes.",
  // "Social Network for Pets": "Connect with other pet owners, share cute pictures, and find pet-friendly events in your area.",
  // "Music Streaming App": "Listen to a vast collection of music, create playlists, and discover new artists and genres.",
  // "Digital Library": "Access a digital repository of books, articles, and multimedia resources for learning and entertainment.",
  // "Personal Portfolio Website": "Create a digital portfolio to showcase your skills, projects, and achievements.",
  // "Smart Shopping List": "An intelligent shopping list that helps users plan their purchases and manage their budget.",
  // "Pet Adoption Platform": "Find and adopt adorable pets in need of a loving home through a user-friendly online platform.",
  // "Language Learning App": "Learn new languages through interactive lessons, quizzes, and immersive exercises.",
  // "Expense Tracker": "Keep track of your expenses, set budgets, and get insights into your spending habits.",
  // "Budget Planner": "Plan and manage your finances effectively with features like budgeting, expense tracking, and financial analysis.",
  // "Feedback Collection System": "Collect valuable feedback from users, customers, or employees to improve products or services.",
  // "Job Portal": "Connect job seekers with employers, allowing them to search for jobs and submit applications online.",
  // "Task Management System": "Organize and prioritize tasks, collaborate with team members, and track project progress.",
  // "Weather App": "Get real-time weather updates, forecasts, and radar information for your location and other places.",
  // "Online Learning Platform": "Offer a variety of courses and educational materials online, making learning accessible to a global audience.",
  // "Smart Home Security System": "Enhance home security with smart features like surveillance cameras, motion sensors, and remote monitoring.",
  // "Smart Parking System": "Efficiently manage parking spaces using sensors and technology to streamline parking for drivers.",
  // "Smart Irrigation System": "Optimize water usage for agriculture by incorporating smart sensors and automation.",
  // "Digital Art Gallery": "Showcase digital artwork from various artists, providing a platform for creativity and expression.",
  // "Personal Finance Assistant": "Assist users in managing their personal finances, providing insights and recommendations.",
  // "Virtual Reality Experience": "Immerse users in a virtual world with interactive and engaging experiences using virtual reality technology.",
  // "Collaborative Whiteboard App": "Facilitate teamwork and collaboration by providing a virtual whiteboard for brainstorming and planning.",
  // "Augmented Reality Navigation App": "Navigate the real world with augmented reality overlays, providing helpful information and directions.",
  // "AI-powered Chatbot": "Create an intelligent chatbot that can answer questions, provide assistance, and engage in conversations with users.",
  // "Issue Tracking System": "Manage and track issues, bugs, and tasks in software development projects.",
  // "Content Management System": "Build and manage digital content, making it easy to publish, organize, and update information online.",
  // "Stock Portfolio Tracker": "Track and analyze stock investments, monitor portfolio performance, and receive market insights.",
  // "Dating App": "Connect people based on shared interests, preferences, and geographical proximity.",
  // "Gaming Platform": "Provide a platform for gamers to discover, play, and connect with others who share their gaming interests.",
  // "Travel Itinerary Generator": "Plan and organize travel itineraries, suggesting activities, accommodations, and transportation options.",
  // "Health and Fitness App": "Monitor health metrics, track fitness activities, and provide personalized workout and nutrition plans.",
  // "Event Management System": "Organize and manage events, from planning and promotion to ticketing and attendee management.",
  // "Employee Attendance System": "Automate the tracking of employee attendance, providing accurate and efficient record-keeping.",
  // "Blog Platform": "Create a platform for individuals to publish and share blog posts on various topics.",
  // "Online Marketplace": "Facilitate buying and selling of goods and services online through a secure and user-friendly platform.",
  // "Inventory Management System": "Track and manage inventory levels, streamline order processing, and optimize supply chain operations.",
  // "Real Estate Management System": "Manage properties, listings, and transactions in the real estate industry through a comprehensive system.",
  // "Car Rental Service": "Provide an online platform for users to rent cars, choose rental options, and make reservations.",
  // "Appointment Scheduling App": "Allow users to schedule appointments, meetings, and events with ease.",
  // "Video Streaming Service": "Offer a platform for users to stream and enjoy a wide range of video content.",
  // "Cryptocurrency Tracker": "Track real-time prices, trends, and market information for various cryptocurrencies.",
  // "Restaurant Ordering System": "Enable users to browse menus, place orders, and make reservations for restaurants.",
  // "Virtual Classroom": "Facilitate online learning and collaboration between teachers and students through virtual classrooms.",
  // "Job Candidate Tracker": "Streamline the recruitment process by tracking job applicants, interviews, and candidate evaluations.",
  // "Home Automation System": "Automate and control home appliances, lighting, and security systems for convenience and energy efficiency.",
  // "Expense Sharing App": "Simplify the process of sharing expenses among friends, roommates, or colleagues.",
  // "Travel Expense Tracker": "Track and manage travel expenses, providing insights into spending during trips.",
  // "Community Forum": "Create an online community where users can discuss and share ideas on various topics.",
  // "Language Translation App": "Translate text or speech between different languages, aiding communication across language barriers.",
  // "Crowdfunding Platform": "Enable individuals or businesses to raise funds for projects or causes through a crowdfunding campaign.",
  // "Fitness Challenge App": "Encourage users to participate in fitness challenges, set goals, and track their progress.",
  // "Smart City Waste Management": "Implement smart solutions to optimize waste collection and management in urban areas.",
  // "Remote Team Collaboration Tool": "Facilitate collaboration and communication among remote team members, enhancing productivity.",
  // "Personal Blog": "Create a space for individuals to express themselves, share thoughts, and connect with a wider audience.",
  // "Portfolio Website": "Build a digital portfolio showcasing skills, projects, and achievements for personal or professional purposes.",
  // "Weather App": "Get real-time weather updates, forecasts, and radar information for your location and other places.",
  // "To-Do List App": "Organize tasks, set priorities, and manage time efficiently with a user-friendly to-do list application.",
  // "Recipe Book": "Create a digital recipe book to store and organize favorite recipes, making cooking and meal planning easier.",
  // "Random Quote Generator": "Generate and display random quotes to inspire and motivate users.",
  // "Tip Calculator": "Calculate tips and split bills easily with a user-friendly tip calculator.",
  // "Number Guessing Game": "Entertain users with a fun number guessing game, challenging them to guess a randomly generated number.",
  // "Simple Calculator": "Perform basic arithmetic calculations with a simple and easy-to-use calculator application.",
  // "Color Palette Generator": "Generate color palettes based on user preferences or input, aiding in design and creativity.",
  // "Word Counter Tool": "Count words, characters, and sentences in a text document with a word counter tool.",
  // "Book Library App": "Organize and manage a digital library of books, keeping track of reading progress and favorite titles.",
  // "Meme Generator": "Create and customize memes with a meme generator tool, adding humor to social media posts.",
  // "Flashcard Quiz App": "Learn and review information through flashcard quizzes, enhancing memory and retention.",
  // "Currency Converter": "Convert currencies quickly and accurately, providing real-time exchange rates.",
  // "Digital Clock": "Display the current time with a digital clock application, offering various customization options.",
  // "Responsive Landing Page": "Build a landing page with responsive design, ensuring a seamless user experience across devices.",
  // "Memory Matching Game": "Challenge memory skills with a classic memory matching game, featuring various themes and difficulty levels.",
  // "Interactive Quiz Game": "Create an engaging quiz game with interactive questions and diverse topics.",
  // "Contact Form for a Website": "Integrate a contact form into a website, allowing users to send messages and inquiries.",
  // "Simple Paint App": "Unleash creativity with a simple paint application, featuring basic drawing and editing tools.",
  // "Personal Finance Tracker": "Track income, expenses, and savings to manage personal finances effectively.",
  // "Movie Recommendation App": "Receive personalized movie recommendations based on user preferences and viewing history.",
  // "Recipe Search App": "Search and discover new recipes based on ingredients, cuisine, or dietary preferences."
};


const showDetails = () => {
  detailsContainer.classList.remove("hidden");
  const projectName = name.value;
  projectDetails.textContent = projectDetailsMap[projectName] || "Additional details about the project can go here.";
}

const hideDetails = () => {
  detailsContainer.classList.add("hidden");
}

update.addEventListener("click", function (event) {
  updateWords();
});

details.addEventListener("click", function (event) {
  showDetails();
});

updateWords();  // Initialize on page load

const projectHintsMap = {
  "Mobile Gaming": [
    "User Interface", "Asset initialization", "Animation - Forms of Animation", 
    "Audio"
  ],
  "Network Programming":[
    "IP","Sockets","Network Softwares","Socket Programming",
    "Procedure Calls","Message Passing"
  ],
  "Advanced Java":[
    "OOP","GUI","Perfomance Optimization","Security"
  ],
  "Linear Programming":[
    "Linear Solution","Graphical Solution","Simplex Solutions",
    "Convex Sets"
  ],
  "ICT Project Management":[
    "SDLC - The complete lifecycle"
  ],
  "Principles of Marketing":[
    "The Marketing Mix","The Evolution of Marketing",
    "Customer Relationship Marketing"
  ],
  "Distributed Systems":[
    "Transparency","Performance","Scalability","Reliability",
    "Flexibility","Security","Heteroginity","Communication"
  ],
  "Expert Systems":[
    "Knowledge Base","Knowledge Representation","Reasoning/Inferencing","Implementation Technique",
    "Chaining/Techniques", "Neural Nets", "Knowledge Engineering"
  ]
};

const showHints = () => {
  const projectName = name.value;
  const hints = projectHintsMap[projectName] || ["No hints available for this project."];

  alert("Hints:\n\n" + hints.join("\n"));
}

hints.addEventListener("click", function (event) {
  showHints();
}); 