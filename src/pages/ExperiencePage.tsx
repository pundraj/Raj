import { motion } from 'motion/react';
import { 
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function ExperiencePage() {
  const timeline = [
    {
      year: 'Present',
      title: 'B.Tech in Computer Science',
      organization: 'Lovely Professional University, Phagwara, Punjab',
      type: 'education',
      icon: GraduationCap,
      description: 'Pursuing Bachelor of Technology in Computer Science',
    },
    {
      year: 'Recent',
      title: 'Data Science Intern',
      organization: 'InternsElite | Remote',
      type: 'experience',
      icon: Briefcase,
      description: 'Designing metrics-driven data solutions, building interactive dashboards with Power BI and Tableau, deploying ML models through APIs, and implementing data validation protocols',
    },
    {
      year: 'Recent',
      title: 'Data Administrator',
      organization: 'Lions Club International | Social Work',
      type: 'experience',
      icon: Briefcase,
      description: 'Managed secure data transactions using full-stack technologies (HTML5, CSS3, JavaScript, databases) and contributed to social work initiatives',
    },
    {
      year: 'June 2023',
      title: 'Higher Secondary Education',
      organization: 'Shri Mahant Ramgiri Baba Jr College, Jalna, Maharashtra',
      type: 'education',
      icon: GraduationCap,
      description: 'Completed Higher Secondary Education',
    },
    {
      year: '2024',
      title: '100+ LeetCode Problems Solved',
      organization: 'Achievement',
      type: 'achievement',
      icon: Award,
      description: 'Demonstrated strong algorithmic thinking and problem-solving skills',
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
              Journey & <span className="gold-text-gradient">Milestones</span>
            </h1>
            <p className="text-xl text-[#525252] dark:text-[#a3a3a3] max-w-3xl mx-auto leading-relaxed text-center">
              Key moments, experiences, and achievements that have shaped my professional path 
              and contributed to my growth as a developer and data scientist
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 gold-gradient" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-20"
                >
                  {/* Icon */}
                  <div className="absolute left-4 -translate-x-1/2 w-8 h-8 bg-white dark:bg-[#1a1a1a] border-2 border-[#d4af37] rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#d4af37]" />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm hover:shadow-xl hover:border-[#d4af37]/30 border border-transparent transition-all">
                    <div className="text-[#d4af37] mb-2 font-semibold">{item.year}</div>
                    <h3 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-1 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <div className="text-[#737373] dark:text-[#a3a3a3] mb-3 font-medium">
                      {item.organization}
                    </div>
                    <p className="text-[#737373] dark:text-[#a3a3a3]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights Section */}
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
              Key Responsibilities & Achievements
            </h2>
            <p className="text-[#737373] dark:text-[#a3a3a3]">
              Notable contributions and impact across different roles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Data Solutions Architecture',
                description: 'Designed and implemented metrics-driven data solutions that improved decision-making processes',
                impact: 'Enhanced data accuracy by 40%'
              },
              {
                title: 'Dashboard Development',
                description: 'Built interactive dashboards using Power BI and Tableau for real-time analytics',
                impact: 'Reduced reporting time by 60%'
              },
              {
                title: 'ML Model Deployment',
                description: 'Deployed machine learning models through APIs for production environments',
                impact: 'Automated 50+ manual processes'
              },
              {
                title: 'Data Validation Protocols',
                description: 'Implemented robust data validation protocols ensuring data quality and integrity',
                impact: 'Improved data reliability by 85%'
              },
              {
                title: 'Full-Stack Development',
                description: 'Managed secure data transactions using HTML5, CSS3, JavaScript, and database technologies',
                impact: 'Processed 10K+ transactions securely'
              },
              {
                title: 'Problem Solving',
                description: 'Solved 100+ LeetCode problems demonstrating strong algorithmic and analytical skills',
                impact: 'Top 15% in competitive coding'
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-[#d4af37]/30 transition-all"
              >
                <h3 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-3 text-lg font-semibold">
                  {highlight.title}
                </h3>
                <p className="text-[#737373] dark:text-[#a3a3a3] mb-4">
                  {highlight.description}
                </p>
                <div className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-sm inline-block border border-[#d4af37]/20">
                  {highlight.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
