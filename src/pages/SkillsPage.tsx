import { motion } from 'motion/react';
import { 
  Code, 
  Brain, 
  Palette, 
  Database
} from 'lucide-react';

export default function SkillsPage() {
  const skills = [
    {
      category: 'Programming Languages',
      icon: Code,
      items: ['Java', 'C/C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'PL/SQL'],
    },
    {
      category: 'Data Science & ML',
      icon: Brain,
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Power BI', 'Tableau'],
    },
    {
      category: 'Tools & Technologies',
      icon: Database,
      items: ['MySQL', 'Streamlit', 'Flask', 'Figma', 'Canva', 'Advanced Excel'],
    },
    {
      category: 'Skills',
      icon: Palette,
      items: ['Data Visualization', 'API Integration', 'ML Model Deployment', 'Data Analysis'],
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
            className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 md:p-12 shadow-lg border border-[#d4af37]/10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] dark:text-[#fafaf8] mb-6 text-center">
              Technical <span className="gold-text-gradient">Expertise</span>
            </h1>
            <p className="text-xl text-[#525252] dark:text-[#a3a3a3] max-w-3xl mx-auto leading-relaxed text-center">
              A comprehensive toolkit of modern technologies, frameworks, and tools 
              that I use to build innovative and scalable solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm hover:shadow-xl hover:border-[#d4af37]/30 border border-transparent transition-all"
              >
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-4 text-xl font-semibold">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-[#737373] dark:text-[#a3a3a3] flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="py-20 px-6 bg-[#f5f5f0] dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-4">
              Core Competencies
            </h2>
            <p className="text-[#737373] dark:text-[#a3a3a3]">
              Key areas where I excel and continuously grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Full-Stack Development',
                description: 'Building end-to-end applications with modern web technologies and frameworks',
                skills: ['React', 'Node.js', 'REST APIs', 'Database Design']
              },
              {
                title: 'Data Analytics',
                description: 'Transforming raw data into actionable insights through advanced analysis',
                skills: ['Statistical Analysis', 'Data Mining', 'Predictive Modeling', 'ETL Processes']
              },
              {
                title: 'Machine Learning',
                description: 'Developing and deploying ML models for real-world applications',
                skills: ['Supervised Learning', 'Model Training', 'Feature Engineering', 'Model Deployment']
              },
              {
                title: 'Data Visualization',
                description: 'Creating intuitive and interactive dashboards for data storytelling',
                skills: ['Power BI', 'Tableau', 'Custom Charts', 'Interactive Reports']
              },
              {
                title: 'Problem Solving',
                description: 'Strong algorithmic thinking and competitive programming skills',
                skills: ['DSA', 'LeetCode', 'Optimization', 'Code Quality']
              },
              {
                title: 'Project Management',
                description: 'Managing projects from conception to deployment with agile methodologies',
                skills: ['Agile', 'Documentation', 'Version Control', 'CI/CD']
              }
            ].map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-[#d4af37]/30 transition-all"
              >
                <h3 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-3 text-lg font-semibold">
                  {competency.title}
                </h3>
                <p className="text-[#737373] dark:text-[#a3a3a3] mb-4">
                  {competency.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {competency.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-[#d4af37]/10 text-[#0a0a0a] dark:text-[#fafaf8] rounded-full border border-[#d4af37]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
