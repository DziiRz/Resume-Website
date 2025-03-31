import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Define the interface for component props
interface PageTransitionProps {
  children: ReactNode; // Accepts any valid React node (e.g., JSX elements, strings, etc.)
}

// PageTransition component to animate page changes
export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      // Initial state: Component starts fully transparent
      initial={{ opacity: 0 }}
      
      // Animation: Component fades in when it mounts
      animate={{ opacity: 1 }}
      
      // Exit animation: Component fades out when it unmounts
      exit={{ opacity: 0 }}
      
      // Transition settings: Smooth fade in/out over 0.5 seconds
      transition={{ duration: 0.5 }}
    >
      {children} {/* Render child components inside the animated wrapper */}
    </motion.div>
  );
};
