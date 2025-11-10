import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FileText, Database, BarChart3, Brain } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Raj Portfolio',
      description: 'Modern portfolio website built with React, TypeScript, and Vite featuring interactive particle effects, smooth animations, and responsive design.',
      category: 'Web Development',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Motion'],
      impact: 'Personal portfolio showcasing projects and skills with modern design',
      details: 'Built a modern portfolio website using React and TypeScript with Vite for fast development. Features include interactive particle background with WebGL, smooth page transitions using Framer Motion, responsive design with Tailwind CSS, and optimized performance.',
      link: 'https://github.com/pundraj/Raj',
      github: 'https://github.com/pundraj/Raj',
    },
    {
      title: 'AgroSphere',
      description: 'Crop yield prediction system using multiple ML algorithms including Linear Regression, Random Forest, XGBoost, SVM, and Neural Networks.',
      category: 'Machine Learning · Data Science',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Neural Networks', 'Jupyter'],
      impact: 'Helps farmers predict crop yields for better planning and resource allocation',
      details: 'Developed a comprehensive crop yield prediction system comparing multiple ML algorithms. Implemented Linear Regression, Random Forest, XGBoost, SVM, and Neural Network models. Performed feature engineering, hyperparameter tuning, and model evaluation to identify the best performing algorithm for accurate yield predictions.',
      link: 'https://github.com/pundraj/AgroSphere',
      github: 'https://github.com/pundraj/AgroSphere',
    },
    {
      title: 'Renewable Energy Dashboard',
      description: 'Interactive dashboard for analyzing and visualizing renewable energy data and trends using modern web technologies.',
      category: 'Data Visualization · Web',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Data Visualization'],
      impact: 'Provides insights into renewable energy trends and consumption patterns',
      details: 'Created an interactive dashboard to visualize renewable energy data. Implemented responsive design with HTML5 and CSS3, dynamic data visualization, and real-time updates. Features include trend analysis, comparative metrics, and interactive charts for better understanding of renewable energy patterns.',
      link: 'https://github.com/pundraj/RENEWABLE-ENERGY-',
      github: 'https://github.com/pundraj/RENEWABLE-ENERGY-',
    },
    {
      title: 'AI-Powered Resume Analyzer',
      description: 'AI-driven resume optimization tool using Python and Google Gemini API to parse resumes, compare with job descriptions, and deliver ATS-friendly improvement suggestions.',
      category: 'AI · Data Science',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Python', 'Google Gemini API', 'Streamlit', 'PDF Parsing'],
      impact: 'Helps job seekers optimize resumes for ATS systems and improve match scores',
      details: 'Built an AI-driven resume optimization tool that parses resumes, compares them with job descriptions, and delivers ATS-friendly, keyword-rich improvement suggestions. Integrated PDF parsing, regex-based section detection, and real-time Streamlit dashboard for match scoring, leading to skill gap analysis and formatting recommendations.',
      link: 'https://github.com/pundraj/Ai-project',
      github: 'https://github.com/pundraj/Ai-project',
    },
    {
      title: 'AQI Analyzer',
      description: 'Air Quality Index analysis tool for monitoring and predicting air pollution levels using data science techniques.',
      category: 'Data Science · Analytics',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Python', 'Jupyter', 'Pandas', 'Data Analysis'],
      impact: 'Provides air quality insights for health and environmental awareness',
      details: 'Developed an Air Quality Index analyzer using data science techniques. Implemented data collection, cleaning, and analysis pipelines. Created visualizations for AQI trends, predictions, and geographical patterns. Helps identify pollution hotspots and trends for better environmental decision-making.',
      link: 'https://github.com/pundraj/AQI-analyzer',
      github: 'https://github.com/pundraj/AQI-analyzer',
    },
    {
      title: 'Diabetic Predictor',
      description: 'Machine learning system for diabetes prediction using multiple regression models including Logistic Regression, Decision Trees, and Random Forest.',
      category: 'Machine Learning · Healthcare',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Python', 'Scikit-learn', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'Pandas'],
      impact: 'Assists in early diabetes detection through predictive analytics',
      details: 'Built a comprehensive diabetes prediction system comparing multiple regression models. Implemented Logistic Regression, Decision Trees, and Random Forest classifiers. Performed extensive feature engineering, model evaluation using accuracy, precision, recall, and F1-score metrics. Created data preprocessing pipelines for handling missing values and feature scaling. Developed comparative analysis to identify the best performing model for accurate diabetes prediction.',
      link: 'https://github.com/pundraj/diabetic-predictor',
      github: 'https://github.com/pundraj/diabetic-predictor',
    },
    {
      title: 'Farmer\'s Market Dashboard',
      description: 'Interactive Excel dashboard to track and analyze real-time farmer\'s market data with advanced analytics and visualization.',
      category: 'Data Visualization · Analytics',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Advanced Excel', 'Power Query', 'PivotTables', 'Data Analysis'],
      impact: 'Enables stakeholders to make data-driven decisions on crop prices and market trends',
      details: 'Designed and developed an interactive dashboard to track and analyze real-time farmer\'s market data by leveraging Advanced Excel features (PivotTables, Power Query, and advanced formulas). Implemented data cleaning, transformation, and validation techniques to ensure accurate and consistent reporting. Built dynamic visualizations to monitor trends in crop prices, sales volume, and seasonal demand.',
      link: 'https://github.com/pundraj/excel-project',
      github: 'https://github.com/pundraj/excel-project',
    },
    {
      title: 'College Event Calendar',
      description: 'Web-based calendar system for managing and tracking college events, activities, and schedules.',
      category: 'Web Development',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      impact: 'Helps students and faculty stay organized with upcoming events',
      details: 'Created a college event calendar system with HTML, CSS, and JavaScript. Features include event scheduling, filtering by category, responsive design for mobile and desktop, and an intuitive user interface for easy navigation and event discovery.',
      link: 'https://github.com/pundraj/collage-event-calander',
      github: 'https://github.com/pundraj/collage-event-calander',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-[#f5f5f0] dark:from-[#0a0a0a] dark:to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 md:p-12 shadow-lg border border-[#d4af37]/10 space-y-6"
          >
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
                <Brain className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#0a0a0a] dark:text-[#fafaf8]">Selected Work</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] dark:text-[#fafaf8] text-center">
              Building <span className="gold-text-gradient">Solutions</span> That Matter
            </h1>

            <p className="text-xl text-[#525252] dark:text-[#a3a3a3] max-w-3xl mx-auto leading-relaxed text-center">
              Intelligent systems designed to solve real-world challenges through technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Vertical Layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12 bg-white dark:bg-[#1a1a1a] rounded-3xl border-2 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all shadow-lg hover:shadow-2xl ${!isEven ? 'lg:direction-rtl' : ''}`}
              >
                {/* Content Side */}
                <div className={`space-y-6 ${!isEven ? 'lg:direction-ltr lg:text-right' : ''}`}>
                  {/* Category Badge */}
                  <div className={`flex items-center gap-2 ${!isEven ? 'lg:justify-end' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
                      <project.icon className="w-4 h-4 text-[#d4af37]" />
                      <span className="text-sm text-[#0a0a0a] dark:text-[#fafaf8] font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] dark:text-[#fafaf8]">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-[#525252] dark:text-[#a3a3a3] leading-relaxed">
                    {project.details}
                  </p>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${!isEven ? 'lg:justify-end' : ''}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-white dark:bg-[#1a1a1a] text-[#0a0a0a] dark:text-[#fafaf8] rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="p-4 bg-[#d4af37]/5 border-l-4 border-[#d4af37] rounded">
                    <p className="text-[#525252] dark:text-[#a3a3a3] italic">
                      <span className="font-semibold text-[#d4af37]">Impact:</span> {project.impact}
                    </p>
                  </div>

                  {/* Links */}
                  <div className={`flex gap-4 ${!isEven ? 'lg:justify-end' : ''}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] dark:bg-[#fafaf8] text-[#fafaf8] dark:text-[#0a0a0a] rounded-lg hover:bg-[#d4af37] dark:hover:bg-[#d4af37] hover:text-[#0a0a0a] dark:hover:text-[#0a0a0a] transition-all font-medium"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    )}
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/10">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#d4af37]/10 rounded-full blur-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-3xl -z-10" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#d4af37]/20"
            >
            <div className="relative aspect-video">
              <ImageWithFallback
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-[#d4af37]/20"
              >
                <span className="text-[#0a0a0a] dark:text-[#fafaf8]">×</span>
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <div className="text-[#d4af37] mb-2">
                  {projects[selectedProject].category}
                </div>
                <h2 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-4">
                  {projects[selectedProject].title}
                </h2>
                <p className="text-[#737373] dark:text-[#a3a3a3]">
                  {projects[selectedProject].details}
                </p>
              </div>

              <div>
                <h3 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#f5f5f0] dark:bg-[#0a0a0a] text-[#737373] dark:text-[#a3a3a3] rounded-lg border border-[#d4af37]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl">
                <h4 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-2">Impact</h4>
                <p className="text-[#737373] dark:text-[#a3a3a3]">
                  {projects[selectedProject].impact}
                </p>
              </div>

              <div className="flex gap-4">
                {projects[selectedProject].link && (
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 gold-gradient hover:shadow-xl text-[#0a0a0a] rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/30"
                  >
                    <Github className="w-5 h-5" />
                    View Project
                  </a>
                )}
                <button className="flex-1 py-3 border-2 border-[#d4af37]/30 text-[#0a0a0a] dark:text-[#fafaf8] hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
