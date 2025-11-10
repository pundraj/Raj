import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CVViewer } from '../components/CVViewer';
import DecryptedText from '../components/DecryptedText';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import port3Image from '../port3.png';

export default function HomePage() {
  const words = ['Data Analyst', 'AI Enthusiast', 'Problem Solver'];
  const [isCVOpen, setIsCVOpen] = useState(false);
  
  return (
    <>
      <Helmet>
        <title>Raj Pund — Home</title>
        <meta name="description" content="Raj Pund — Data Science professional building data-driven solutions, interactive dashboards, and AI-powered applications." />
        <meta property="og:title" content="Raj Pund — Data Scientist | Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Raj Pund — Data Science professional building data-driven solutions and AI-powered applications." />
      </Helmet>
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#0a0a0a] dark:text-[#fafaf8]">Available for opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-[#0a0a0a] dark:text-[#fafaf8] mb-6">
                Hi, I'm{' '}
                <DecryptedText
                  text="Raj Pund"
                  animateOn="hover"
                  revealDirection="center"
                  speed={40}
                  maxIterations={10}
                  className="gold-text-gradient"
                  encryptedClassName="encrypted"
                />
              </h1>
              <p className="text-[#737373] dark:text-[#a3a3a3] max-w-3xl mx-auto">
                <DecryptedText
                  text="Data Science professional specializing in building data-driven solutions, interactive dashboards, and AI-powered applications"
                  animateOn="view"
                  revealDirection="center"
                  speed={30}
                  maxIterations={15}
                  className="revealed"
                  encryptedClassName="encrypted"
                />
              </p>
            </motion.div>

            {/* Rotating Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 text-lg"
            >
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className="px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#0a0a0a] dark:text-[#fafaf8] font-medium"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 gold-gradient hover:shadow-xl text-[#0a0a0a] rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-[#d4af37]/30"
                >
                  Hire Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                onClick={() => setIsCVOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#d4af37]/30 text-[#0a0a0a] dark:text-[#fafaf8] hover:border-[#d4af37] dark:hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-xl transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                View Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator removed as requested */}
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative order-2 md:order-1 flex items-center justify-center"
            >
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/20 bg-white dark:bg-[#1a1a1a] p-2 flex items-center justify-center">
                <ImageWithFallback
                  src={port3Image}
                  alt="Raj Pund"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#0a0a0a] dark:text-[#fafaf8]">About Me</span>
              </div>

              <h2 className="text-[#0a0a0a] dark:text-[#fafaf8] text-4xl md:text-5xl font-bold">
                Blending <span className="gold-text-gradient">Innovation</span> & Technology
              </h2>

              <div className="space-y-4 text-[#737373] dark:text-[#a3a3a3] text-lg leading-relaxed">
                <p>
                  I'm a Data Science professional and Computer Science student passionate about building data-driven solutions and intelligent systems. Skilled in designing metrics-driven data solutions, developing interactive dashboards, and deploying machine learning models.
                </p>
                <p>
                  My expertise spans across data visualization with Power BI and Tableau, building AI-powered applications with Python and Streamlit, and implementing robust data validation protocols. I'm also experienced in full-stack development with HTML5, CSS3, JavaScript, and databases.
                </p>
                <p>
                  I believe in crafting solutions that transform raw data into actionable insights, enabling data-driven decision-making for businesses and organizations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 px-6 bg-[#f5f5f0] dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '100+', label: 'LeetCode Problems Solved', delay: 0.1 },
              { number: '3+', label: 'Projects Delivered', delay: 0.2 },
              { number: '10+', label: 'Technologies Mastered', delay: 0.3 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                className="text-center p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm hover:shadow-xl hover:border-[#d4af37]/20 border border-transparent transition-all"
              >
                <div className="gold-text-gradient mb-2">{stat.number}</div>
                <div className="text-[#737373] dark:text-[#a3a3a3]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-[#0a0a0a] dark:text-[#fafaf8]">
              <DecryptedText
                text="Transforming Ideas into Reality"
                animateOn="view"
                revealDirection="start"
                speed={50}
                maxIterations={12}
                className="revealed"
                encryptedClassName="encrypted"
              />
            </h2>
            <p className="text-[#737373] dark:text-[#a3a3a3] max-w-2xl mx-auto">
              From AI-powered resume analyzers to data visualization dashboards and algorithm simulators
            </p>
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-4 gold-gradient hover:shadow-xl text-[#0a0a0a] rounded-xl transition-all flex items-center gap-2 mx-auto shadow-lg shadow-[#d4af37]/30"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CV Viewer */}
      <CVViewer isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
  </div>
  </>
  );
}
