import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MusicPlayer } from './MusicPlayer';
import logo from '../logo3.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafaf8]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-lg shadow-lg border-b border-[#d4af37]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <img 
              src={logo}
              alt="Logo"
              className="object-contain hover:opacity-90 transition-opacity"
              style={{ width: '96px', height: 'auto' }}
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group text-[#737373] dark:text-[#a3a3a3] hover:text-[#0a0a0a] dark:hover:text-[#fafaf8] transition-colors"
              >
                {link.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#d4af37]"
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            {/* Music Player - Desktop */}
            <MusicPlayer />

            {/* Theme is fixed to dark; toggle removed */}
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            {/* Music Player - Mobile */}
            <MusicPlayer />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#0a0a0a] dark:text-[#fafaf8]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#fafaf8] dark:bg-[#0a0a0a] border-t border-[#d4af37]/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-[#737373] dark:text-[#a3a3a3] hover:text-[#d4af37] transition-colors ${
                    location.pathname === link.path ? 'text-[#d4af37]' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
