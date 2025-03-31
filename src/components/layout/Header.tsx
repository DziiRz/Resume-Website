import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeToggle } from '../ui/ThemeToggle';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'portfolio', 'about', 'resume'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'About Me', to: 'about' },
    { name: 'Resume', to: 'resume' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center w-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="flex items-center">
            <motion.svg
              className="h-5 w-5 text-primary transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              whileHover={{
                rotate: 90,
                scale: 1.2,
                transition: { duration: 0.3 }
              }}
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden space-x-6 md:flex"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {menuLinks.map((link, index) => (
            <motion.div
              key={link.name}
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <ScrollLink
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer text-xs text-foreground transition-all duration-300 ease-in-out hover:text-primary"
                activeClass="text-primary font-semibold"
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </ScrollLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right Side Actions */}
        <motion.div
          className="flex items-center space-x-3 w-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Social Media Icons */}
          <div className="flex items-center space-x-2">
            <a 
              href="https://www.linkedin.com/in/ryder-osborn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8"
            >
              <img 
                src="/img/icons/linkedin.png" 
                alt="LinkedIn" 
                className="w-full h-full"
              />
            </a>
            <a 
              href="https://github.com/DziiRz?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5"
            >
              <img 
                src="/img/icons/github.png" 
                alt="GitHub" 
                className="w-full h-full"
              />
            </a>
          </div>

          {/* Get in Touch Button */}
          <motion.a
            href="mailto:ryderosborn@hotmail.com?subject=You're%20Hired!"
            className="btn btn-primary text-xs py-1.5 px-3 whitespace-nowrap transition-all duration-300 ease-in-out"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="text-foreground transition-colors duration-300 hover:text-primary md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu with smooth transition */}
      <motion.div
        className="container overflow-hidden md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col space-y-4 py-4">
          {menuLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ScrollLink
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block cursor-pointer text-foreground transition-all duration-300 ease-in-out hover:text-primary"
                activeClass="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            </motion.div>
          ))}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ThemeToggle />
            <span className="text-sm text-foreground transition-colors">Toggle theme</span>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};
