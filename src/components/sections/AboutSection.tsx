import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// AboutSection component displaying personal information, stats, services, and job areas
export const AboutSection = () => {
  // Stats describing personal traits
  const stats = [
    { value: 'Results-Oriented', label: 'Driven, Motivated, Committed' },
    { value: 'Detail-Oriented', label: 'Effiecient, Organized, Proactive' },
    { value: 'Team-Oriented', label: 'Collaborative, Supportive, Adaptable' },
  ];

  // Job areas and descriptions the person is looking to work in
  const jobAreas = [
    { title: 'Cyber Security', description: 'Security analysis, vulnerability testing, and threat mitigation' },
    { title: 'Software Engineering', description: 'Full-stack development with focus on robust, scalable solutions' },
    { title: 'IT Support', description: 'System administration, technical troubleshooting, and user support' },
    { title: 'Database Administration', description: 'Database design, optimization, and management' },
  ];

  // Services offered in specific job areas with images
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      categories: ['React', 'NextJS', 'TailwindCSS'],
      description: 'Building responsive, accessible, and performant web applications with modern frameworks and best practices.',
      imageUrl: '/img/services/frontend.png',
    },
    {
      id: 2,
      title: 'Backend Development',
      categories: ['Node.js', 'Express', 'Database Management', 'APIs'],
      description: 'Building robust server-side applications and APIs, managing databases, and ensuring seamless integration with frontend systems for optimal performance.',
      imageUrl: '/img/services/backend.png',
    },
    {
      id: 3,
      title: 'Cyber Security',
      categories: ['Threat Protection', 'Network Security', 'Data Encryption'],
      description: 'Protecting digital assets and data through robust security measures, safeguarding against cyber threats and breaches.',
      imageUrl: '/img/services/cybersecurity.png',
    },
    {
      id: 4,
      title: 'IT Support',
      categories: ['Troubleshooting', 'Hardware Setup', 'Software Maintenance'],
      description: 'Providing comprehensive IT support, from troubleshooting technical issues to setting up hardware and maintaining software systems.',
      imageUrl: '/img/services/it-support.png',
    },
  ];

  // Refs and scroll progress for animations during scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Apply transformation during scroll for dynamic effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);  // Vertical movement effect
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6]); // Opacity change effect

  // Animation variants for individual stats cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },  // Initial state: hidden and slightly shifted down
    visible: {
      opacity: 1, y: 0,  // Final state: fully visible and in place
      transition: {
        duration: 0.6, // Duration of transition
        ease: "easeOut"  // Easing function for smooth animation
      }
    }
  };

  // Animation variants for the container of stats
  const containerVariants = {
    hidden: { opacity: 0 },  // Initial state: invisible
    visible: {
      opacity: 1,  // Final state: visible
      transition: {
        staggerChildren: 0.2  // Delay for each child animation (stat card)
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
      {/* Main container with scroll-based animation */}
      <motion.div
        className="container"
        style={{ y, opacity }} // Apply dynamic scroll animations
      >
        {/* Section title */}
        <div className="subtitle">About Me</div>
        <h2 className="section-title">Turning complex problems into elegant solutions</h2>

        {/* Stats Section */}
        <motion.div
          className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}  // Animation for stats container
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}  // Trigger when 30% of element is in view
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-background/50 backdrop-blur-md border border-white/10 p-6 text-center shadow-xl"
              variants={cardVariants}  // Animation for individual stat card
              whileHover={{
                scale: 1.03,  // Slight scaling on hover
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"  // Add shadow effect on hover
              }}
            >
              {/* Stat value animation */}
              <motion.div
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0, scale: 0.5 }}  // Start from small and invisible
                whileInView={{ opacity: 1, scale: 1 }}  // Animate to full size and visible
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1 + 0.3  // Staggered delay based on index
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description section about the individual */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}  // Start from invisible and shifted down
          whileInView={{ opacity: 1, y: 0 }}  // Animate to visible and original position
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed text-foreground">
            I am a motivated and adaptable individual with a solid background in IT, cybersecurity, and software
            development bringing a versatile skill set that applies across various industries. Known for my strong
            communication abilities, I thrive on building and nurturing relationships with stakeholders to ensure
            smooth collaboration and alignment with shared goals. My strong time management skills and proactive
            problem-solving have consistently delivered results, particularly in high-pressure environments, while
            maintaining strict safety and compliance standards.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground">
            With hands-on experience in assessments and audits, I have a proven ability to identify risks, implement 
            effective mitigation strategies, and uphold workplace health and safety principles. Driven by a strong work 
            ethic and a commitment to continuous learning, I am passionate about solving complex challenges and contributing 
            to dynamic teams. I am eager to apply my technical expertise and relationship-building strengths to drive success in IT, 
            cybersecurity, software development and beyond.
          </p>
        </motion.div>

        {/* Job areas section with services offered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Jobs Areas Looking to Work In</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="flex flex-col overflow-hidden rounded-xl bg-background/50 backdrop-blur-md border border-white/10 shadow-xl"
                initial={{ opacity: 0, y: 30 }}  // Start from hidden and shifted down
                whileInView={{ opacity: 1, y: 0 }}  // Animate to visible and in place
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -10,  // Move the card up slightly on hover
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",  // Add shadow effect on hover
                  transition: { duration: 0.2 }
                }}
              >
                <div className="overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                  <div className="mt-1 flex gap-2">
                    {service.categories.map((category) => (
                      <span
                        key={category}
                        className="text-xs text-muted"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm text-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
