
import type { LucideIcon } from 'lucide-react'; // Import type for icon names

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack?: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For project summarizer input
  techStack: string[];
  imageUrl: string; // Local path or placeholder.
  dataAiHint: string; // For generating better placeholder images or searching for real ones
  liveLink?: string;
  repoLink?: string;
}

export interface SkillEntry {
  name: string;
  category: 'Technical' | 'Machine Learning & AI' | 'Soft Skills';
  level: 'high' | 'medium' | 'low'; // Represents experience/prominence
  iconName?: keyof typeof LucideIcons;
  imageUrl?: string;
}

export interface ArticleEntry {
  id: string;
  title: string;
  link: string;
  source: string;
  description: string;
  iconName?: keyof typeof import('lucide-react');
}

export interface YouTubeVideoEntry {
  id: string;
  title: string;
  embedId: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  summary: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
  articles: ArticleEntry[];
  youtubeVideos: YouTubeVideoEntry[];
}

export const portfolioData: PortfolioData = {
  name: "Rahul Ranjan Pandey",
  role: "AI/ML & Data Engineer",
  contact: {
    email: "rahul.ranjan.pandey.4370@gmail.com",
    linkedin: "https://www.linkedin.com/in/rahul-ranjan-pandey-0a13b0116/",
    github: "https://github.com/rahul-pandey-ct",
  },
  hero: {
    title: "Hi, I'm Rahul Ranjan Pandey",
    subtitle: "AI/ML & Data Engineer passionate about developing advanced machine learning models and AI solutions.",
    cta: "Explore My Work",
  },
  summary: "Driven AI/ML & Data Engineer with over 2 years of experience, primarily focused on developing and deploying advanced machine learning models, AI solutions, and generative AI applications on cloud platforms such as AWS and GCP. Skilled in designing scalable data pipelines and robust ETL processes using Hadoop, Hive, Databricks and Spark to support high-impact AI initiatives, ensuring data security, compliance, and tailored, client-specific innovations.",
  education: [
    {
      institution: "SJB Institute of Technology, Bengaluru, India",
      degree: "Bachelor of Engineering in Information Science and Engineering",
      period: "2018 - 2022",
      details: "CGPA: 9.1"
    },
    {
      institution: "Mount Assisi School, India",
      degree: "Higher Secondary (ISE Class XII) & Secondary (ICSE Class X)",
      period: "Secondary: 2015-2016, Higher Secondary: 2017-2018",
      details: "ISE (Class XII) Percentage: 74. ICSE (Class X) Percentage: 87.1"
    }
  ],
  experience: [
    {
      company: "Y MEDIA LABS PVT. LTD. (Now Code and Theory)",
      role: "Software Engineer [AI/ML]",
      period: "August 2022 - Present",
      description: "Developed tailored AI/ML models to address unique client requirements, delivering data-driven solutions that boosted operational efficiency by 35%. Integrated targeted data analytics and streamlined ETL processes using Hadoop, Hive, and Spark, while leveraging AWS and GCP cloud services to optimize data ingestion and enhance model performance, resulting in a 25% reduction in processing time. Collaborated with cross-functional teams to integrate advanced analytics and machine learning insights into robust production systems. SOP Award recipient for exceptional contributions and earned multiple KUDOS for outstanding teamwork and proactive problem-solving.",
      techStack: ["AI/ML", "Python", "ETL", "Hadoop", "Hive", "Spark", "AWS", "GCP", "Data Analytics"]
    },
    {
      company: "Automation Anywhere",
      role: "Software Engineer Intern",
      period: "March 2022 - August 2022",
      description: "Assisted in cloud migration and application testing to support efficient backend processes.",
      techStack: ["Cloud Migration", "Application Testing"]
    }
  ],
  skills: [
    // Technical Skills
    { name: "Python", category: "Technical", level: "high", imageUrl: "/python.png", iconName: "Code2" },
    { name: "SQL", category: "Technical", level: "high", iconName: "Database", imageUrl: "/sql_logo.png" },
    { name: "ETL Pipeline", category: "Technical", level: "high", iconName: "Workflow" },
    { name: "Data Warehousing", category: "Technical", level: "medium", iconName: "Archive" },
    { name: "Hadoop", category: "Technical", level: "medium", iconName: "ServerCog" },
    { name: "Spark", category: "Technical", level: "medium", iconName: "Sparkles", imageUrl: "/Apache_Spark_logo.png" },
    { name: "Hive", category: "Technical", level: "medium", iconName: "DatabaseZap" },
    { name: "Git", category: "Technical", level: "high", iconName: "GitFork", imageUrl: "/git_logo.png" },
    { name: "Agile", category: "Technical", level: "medium", iconName: "IterationCcw", imageUrl: "/agile_logo.png"},

    // Machine Learning & AI
    { name: "Machine Learning", category: "Machine Learning & AI", level: "high", iconName: "BrainCircuit" },
    { name: "Deep Learning", category: "Machine Learning & AI", level: "high", iconName: "Layers3" },
    { name: "GenAI", category: "Machine Learning & AI", level: "high", iconName: "Bot" },
    { name: "LLMs", category: "Machine Learning & AI", level: "high", iconName: "MessageSquareText", imageUrl: "/LLM.png" },
    { name: "AWS", category: "Machine Learning & AI", level: "medium", iconName: "Cloud", imageUrl: "/aws.svg" }, // Updated path to aws.svg if it's directly in public
    { name: "Databricks", category: "Machine Learning & AI", level: "medium", iconName: "Boxes" },
    { name: "GCP", category: "Machine Learning & AI", level: "medium", iconName: "CloudCog", imageUrl: "/GCP_logo.jpg" },
    { name: "PyTorch", category: "Machine Learning & AI", level: "medium", iconName: "Network", imageUrl: "/pytorch_logo.png" },
    { name: "LlamaIndex", category: "Machine Learning & AI", level: "medium", iconName: "LibraryBig" },
    { name: "Langchain", category: "Machine Learning & AI", level: "medium", iconName: "Link2", imageUrl: "/langchain_logo.png" },
    { name: "Data Analytics", category: "Machine Learning & AI", level: "high", iconName: "BarChart3" },
    { name: "Pandas", category: "Machine Learning & AI", level: "medium", iconName: "Table2", imageUrl: "/pandas_logo.svg" }, // Updated path to pandas_logo.svg
    { name: "Numpy", category: "Machine Learning & AI", level: "medium", iconName: "SigmaSquare", imageUrl: "/numpy_logo.png" },
    { name: "Matplotlib", category: "Machine Learning & AI", level: "medium", iconName: "AreaChart" },
    { name: "AI Tools", category: "Machine Learning & AI", level: "medium", iconName: "WandSparkles" },

    // Soft Skills
    { name: "Leadership", category: "Soft Skills", level: "high", iconName: "Users" },
    { name: "Communication", category: "Soft Skills", level: "high", iconName: "MessageCircle" },
    { name: "Teamwork", category: "Soft Skills", level: "high", iconName: "UsersRound" },
    { name: "Critical Thinking", category: "Soft Skills", level: "medium", iconName: "Brain" },
    { name: "Creativity", category: "Soft Skills", level: "medium", iconName: "Lightbulb" },
    { name: "Adaptability", category: "Soft Skills", level: "medium", iconName: "RefreshCcwDot" },
  ],
  projects: [
    {
      id: "project1",
      title: "Agentic GenAI-Powered Knowledge Base & Evaluation Framework",
      description: "Smart RAG-based knowledge assistant with specialized agentic modules and a GenAI evaluation framework.",
      longDescription: "Built a smart RAG-based knowledge assistant that ingests data from Workfront, HubSpot, APIs, and web scraping, followed by ETL and ingestion into a vector DB with TF-IDF boosted retrieval. Developed specialized agentic modules (search agent, relevance agent, processing agent) to improve context retrieval, response accuracy, and overall efficiency of the RAG system. Designed and implemented a GenAI evaluation framework, combining BLEU, ROUGE, and LLM-as-a-judge methods to assess model outputs on correctness, relevance, instruction-following, and QA performance.",
      techStack: ["GenAI", "RAG", "Vector DB", "TF-IDF", "ETL", "Python", "APIs", "Web Scraping", "BLEU", "ROUGE", "LLM-as-a-judge"],
      imageUrl: "agentic.png",
      dataAiHint: "AI knowledge",
    },
    {
      id: "project2",
      title: "AI-Driven Universal Web Scraper for User Insights",
      description: "AI-powered web scraper with an ETL pipeline for scalable data warehousing and user insights.",
      longDescription: "Developed an AI-powered web scraper to extract structured data. Built an ETL pipeline using Databricks (Spark), Hadoop, and Hive for scalable data warehousing and analysis, reducing processing time by 25%. Leveraged PySpark notebooks in Databricks for seamless data transformation and monitoring. Delivered user segmentation and sentiment analysis for actionable insights.",
      techStack: ["AI", "Web Scraping", "ETL", "Databricks", "Spark", "Hadoop", "Hive", "PySpark", "User Segmentation", "Sentiment Analysis"],
      imageUrl: "/scraper.png",
      dataAiHint: "data extraction",
    },
    {
      id: "project3",
      title: "Event Recommendation System with High-Accuracy Personalization",
      description: "Recommendation engine for event suggestions achieving 95% accuracy through advanced ML techniques.",
      longDescription: "Built a recommendation engine for event suggestions based on user interests, achieving an accuracy rate of 95%. Experimented with similarity metrics, clustering, and collaborative filtering techniques, achieving a 15% improvement in personalization accuracy.",
      techStack: ["Recommendation Systems", "Machine Learning", "Python", "Collaborative Filtering", "Clustering", "Similarity Metrics"],
      imageUrl: "recommendation.png",
      dataAiHint: "event algorithm",
    },
    {
      id: "project4",
      title: "Customized LLM for Client-Specific Summarization and Recommendations",
      description: "Custom LLM solution for summarization, email generation, and recommendations from conversation data.",
      longDescription: "Developed a custom LLM solution to provide client-specific summaries, email generation, and resource recommendations based on conversation data. Implemented data cleaning, feature engineering, and context-limiting using LlamaIndex.",
      techStack: ["LLM", "LlamaIndex", "NLP", "Python", "Data Cleaning", "Feature Engineering"],
      imageUrl: "/LLM.png",
      dataAiHint: "AI text",
    },
    {
      id: "project5",
      title: "Real-Time Anomaly Detection Engine for Streaming Data",
      description: "AI-powered system for identifying anomalies in real-time data streams using advanced ML models on GCP.",
      longDescription: "Developed a scalable anomaly detection engine for processing high-velocity streaming data. Leveraged Kafka for data ingestion, Spark Streaming for real-time processing, and a suite of unsupervised machine learning models (e.g., Isolation Forest, Autoencoders) deployed on Google Cloud Platform. The system provides alerts and dashboards for monitoring critical operational metrics, improving system reliability by 20%.",
      techStack: ["GCP", "Kafka", "Spark Streaming", "Python", "Machine Learning", "Anomaly Detection", "Docker", "BigQuery"],
      imageUrl: "/realtime.png",
      dataAiHint: "data stream",
    },
    {
      id: "project6",
      title: "AI-Assisted Code Documentation Generator",
      description: "GenAI tool to automatically generate comprehensive documentation for Python codebases.",
      longDescription: "Created an intelligent tool that leverages Large Language Models (LLMs) to parse Python code and automatically generate docstrings, README sections, and usage examples. Integrated with Git for seamless workflow integration. Utilized fine-tuning techniques on a base LLM to improve code understanding and documentation quality, reducing documentation time for developers by 40%.",
      techStack: ["GenAI", "LLM", "Python", "NLP", "Fine-tuning", "Git", "Streamlit", "Docker"],
      imageUrl: "/docgenerator.png",
      dataAiHint: "AI code",
    }
  ],
  articles: [
    {
      id: "article1",
      title: "A Survey on Evaluation of Large Language Models",
      link: "https://arxiv.org/abs/2307.03109", // Corrected example ArXiv ID
      source: "ArXiv (2307.03109)",
      description: "A comprehensive survey on the methodologies and metrics for evaluating Large Language Models.",
      iconName: "FileText",
    },
    {
      id: "article2",
      title: "Science in the Age of AI",
      link: "https://www.quantamagazine.org/series/science-in-the-age-of-ai/",
      source: "Quanta Magazine",
      description: "An insightful series exploring the impact and future of Artificial Intelligence in scientific discovery.",
      iconName: "Atom",
    },
    {
      id: "article3",
      title: "Foundation Model for Personalized Recommendation",
      link: "https://netflixtechblog.com/foundation-model-for-personalized-recommendation-1a0bd8e02d39",
      source: "Netflix TechBlog",
      description: "Exploring how Netflix leverages foundation models to enhance personalized recommendations.",
      iconName: "Network",
    },
  ],
  youtubeVideos: [
    {
      id: "video1",
      title: "Google Firebase Studio In 23 Minutes",
      embedId: "Rd6F5wHIysM",
      description: "A visual and intuitive explanation of the Google Firebase Studio. Also demonstrates it's features, pro and cons and we can use to develop applications easily.",
    },
    {
      id: "video2",
      title: "Building AI Agents in 2025 for Beginners!",
      embedId: "ZbIVOy_GPyQ",
      description: "A clear explanation of video for begineers to get started with Agentic AI Workflows using N8N.",
    },
  ],
};
