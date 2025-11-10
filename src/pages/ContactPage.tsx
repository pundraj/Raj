import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle, Github, Linkedin, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('LBPBiDNJ5ReS-dEgo');
  }, []);

  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    
    if (!form.current) return;

    emailjs.sendForm(
      'service_ru33flv', // Add your EmailJS service ID here
      'template_dix0l5v', // Add your EmailJS template ID here
      form.current
    )
      .then(() => {
        setIsSubmitted(true);
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pundraj420@gmail.com',
      href: 'mailto:pundraj420@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-7249671503',
      href: 'tel:+917249671503',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View Profile',
      href: 'https://github.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Raj Pund',
      href: 'https://linkedin.com',
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
                <MessageSquare className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#0a0a0a] dark:text-[#fafaf8]">Get in Touch</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] dark:text-[#fafaf8] text-center">
              Let's Build Something Meaningful
            </h1>

            <p className="text-xl text-[#525252] dark:text-[#a3a3a3] max-w-3xl mx-auto leading-relaxed text-center">
              Open to opportunities, collaborations, and interesting conversations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full px-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-amber-500 dark:focus:border-amber-500 outline-none transition-colors text-slate-900 dark:text-white"
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:text-amber-500 transition-all">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full px-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-amber-500 dark:focus:border-amber-500 outline-none transition-colors text-slate-900 dark:text-white"
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:text-amber-500 transition-all">
                    Email Address
                  </label>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full px-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-amber-500 dark:focus:border-amber-500 outline-none transition-colors text-slate-900 dark:text-white"
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:text-amber-500 transition-all">
                    Subject
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    rows={6}
                    className="peer w-full px-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-amber-500 dark:focus:border-amber-500 outline-none transition-colors text-slate-900 dark:text-white resize-none"
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:text-amber-500 transition-all">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : isError
                      ? 'bg-red-500 text-white'
                      : 'bg-amber-500 hover:bg-amber-600 text-white'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isError ? (
                    <>
                      <Mail className="w-5 h-5" />
                      Failed to Send
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Info Card */}
              <div className="p-8 bg-gradient-to-br from-amber-500/10 to-blue-500/10 border border-amber-500/20 rounded-2xl space-y-4">
                <h3 className="text-slate-900 dark:text-white">
                  Available for Opportunities
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I'm currently open to full-time positions, freelance projects, and collaborative opportunities in Data Science, Machine Learning, and Full Stack Development.
                </p>
                <div className="flex items-center gap-2 text-amber-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Actively seeking new opportunities</span>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-slate-900 dark:text-white">
                  Connect With Me
                </h3>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-amber-500 dark:hover:border-amber-500 transition-all group"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      <method.icon className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-slate-500 dark:text-slate-400">
                        {method.title}
                      </div>
                      <div className="text-slate-900 dark:text-white">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response Time */}
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white mb-1">
                      Quick Response
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      I typically respond within 24 hours during business days
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
