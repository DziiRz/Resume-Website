import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  download?: boolean;
  href?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  download,
  href,
  ...props
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
  };

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "none",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
  };

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={buttonClasses}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        {children}
      </motion.a>
    );
  }

  // Otherwise render a button
  return (
    <motion.button
      className={buttonClasses}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      {...props}
    >
      {children}
    </motion.button>
  );
};
