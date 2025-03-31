import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define a type for the theme, allowing only 'light' or 'dark'
type Theme = 'light' | 'dark';

// Define the shape of the ThemeContext data
interface ThemeContextType {
  theme: Theme; // Current theme (light or dark)
  toggleTheme: () => void; // Function to toggle between themes
}

// Create the ThemeContext with an initial value of `undefined`
// This ensures we properly handle cases where the context is not provided
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component that manages the theme state and provides it to the app
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize theme state by checking localStorage or system preferences
  const [theme, setTheme] = useState<Theme>(() => {
    // Retrieve the saved theme from localStorage (if it exists)
    const savedTheme = localStorage.getItem('theme');
    // Check if the user has a system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Use saved theme if available; otherwise, default to system preference or 'light'
    return (savedTheme as Theme) || (prefersDark ? 'dark' : 'light');
  });

  // Effect to update the document (HTML tag) and localStorage when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark'); // Add 'dark' class for Tailwind's dark mode
    } else {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class for light mode
    }

    // Persist the theme preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Provide the theme state and toggle function to the entire app
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context in any component
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  // Throw an error if useTheme is used outside of a ThemeProvider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
