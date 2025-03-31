import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

// Portfolio section component
export const PortfolioSection = () => {
  // Retrieve the current theme (dark or light)
  const { theme } = useTheme();

  // Array of portfolio projects
  const portfolioItems = [
    {
      id: 1,
      title: 'CV Website',
      categories: ['React', 'Javascript', 'Tailwind CSS', 'Framer Motion'],
      description:
        "I developed a modern and responsive personal website to showcase my resume and portfolio. Built using React and JavaScript, leveraging Tailwind CSS for a sleek design. Incorporating Framer Motion to enhance user experience with smooth animations and interactive elements.",
      // Change image based on the current theme
      imageUrl: theme === 'dark' ? '/img/works/Resume-web.png' : '/img/works/Resume-web1.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Coming Soon...',
      categories: ['React', 'Javascript', 'Tailwind CSS', 'Framer Motion'],
      description: '...',
      imageUrl: theme === 'dark' ? '/img/works/street22-dark.png' : '/img/works/street22-light.png',
      //link: '#',
    },
    {
      id: 3,
      title: 'Coming Soon...',
      categories: ['TBA'],
      description: '...',
      imageUrl: theme === 'dark' ? '/img/works/coming-soon-dark.jpg' : '/img/works/coming-soon.png',
      //link: '#',
    },
    {
      id: 4,
      title: 'Coming Soon...',
      categories: ['TBA'],
      description: '...',
      imageUrl: theme === 'dark' ? '/img/works/coming-soon-dark.jpg' : '/img/works/coming-soon.png',
      //link: '#',
    },
  ];

  // Animation settings for the entire portfolio grid (staggered animation effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays the animation of each child element
      }
    }
  };

  // Animation settings for each portfolio item (fade-in and slide-up effect)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // How bouncy the animation is
        damping: 12, // How much the animation slows down
      }
    }
  };

  return (
    // Portfolio section container
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container">
        <div className="subtitle">Portfolio</div>
        <h2 className="section-title transition-colors">Check out my featured projects</h2>

        {/* Portfolio grid with animations */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Map through portfolio items and display them */}
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-background/50 backdrop-blur-md border border-white/10 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              variants={itemVariants}
            >
              {/* Portfolio item link */}
              <a href={item.link} className="block overflow-hidden">
                {/* Image container with hover effect */}
                <div className="overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Portfolio item details */}
                <div className="p-6">
                  <h5 className="text-lg font-semibold text-primary transition-colors">{item.title}</h5>
                  {/* Categories (tags) */}
                  <div className="mt-1 flex flex-wrap gap-2">
                    {item.categories.map((category) => (
                      <span key={category} className="text-xs text-muted transition-colors">
                        {category}
                      </span>
                    ))}
                  </div>
                  {/* Project description */}
                  <p className="mt-3 text-sm text-foreground transition-colors">{item.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
