import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

// HeroSection component that displays an animated text and a call-to-action button
export const HeroSection = () => {
  // useState hook to store and update the text being displayed
  const [text, setText] = useState("");
  
  // Full text that will be animated (Ryder Osborn)
  const fullText = "Ryder Osborn";
  
  // useEffect hook to animate the text when the component is mounted
  useEffect(() => {
    let currentIndex = 0; // Index to keep track of how much of the fullText has been displayed
    // Set an interval to progressively display the text
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        // Slice the fullText to show the current portion and update the state
        setText(fullText.slice(0, currentIndex));
        currentIndex++; // Increment the index to show more text
      } else {
        // Clear the interval once the full text has been displayed
        clearInterval(interval);
      }
    }, 100); // 100ms interval for each character to appear

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once after the first render

  return (
    // Main container for the hero section
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container py-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Subtitle */}
          <div className="subtitle">LET'S MEET</div>
          
          <div className="mt-3">
            {/* Display animated text (name) */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary transition-colors">
              {text}<span className="animate-pulse">|</span> {/* Cursor-like animation */}
            </h1>

            {/* Motion component from Framer Motion to animate the subtitle */}
            <motion.h2 
              className="mt-4 text-3xl md:text-4xl font-medium text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Final animation state (visible and in place)
              transition={{ delay: 1.5, duration: 0.5 }} // Delay the animation by 1.5 seconds and duration of 0.5 seconds
            >
              Computer Science Graduate
            </motion.h2>
          </div>

          {/* Download CV button with a motion animation */}
          <motion.div 
            className="mt-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }} // Initial state: invisible
            animate={{ opacity: 1 }} // Final state: visible
            transition={{ delay: 2.0, duration: 0.5 }} // Delay by 2 seconds and duration of 0.5 seconds
          >
            <Button 
              href="/Ryder Osborn Resume 2025.pdf" // Path to the downloadable CV
              download // Specifies that the button will trigger a file download
              variant="primary" // Style variant for the button
              size="lg" // Large button size
            >
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Link that smooth scrolls to the "portfolio" section */}
      <ScrollLink
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-primary transition-colors"
      >
        {/* Downward arrow icon that animates with a slow bounce */}
        <svg
          className="h-8 w-8 animate-bounce-slow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </ScrollLink>
    </section>
  );
};