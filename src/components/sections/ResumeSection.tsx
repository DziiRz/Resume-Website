import { motion } from 'framer-motion';

export const ResumeSection = () => {
  const educationEntries = [
    {
      period: 'July 2021 - June 2024',
      title: 'Bachelor of Computer Science - Major in Cyber Security',
      institution: 'University of Wollongong',
      description: 'Relevant coursework in Cyber Security, Ethical Hacking, Advanced Programming and Project Management.',
    },
    {
      period: 'February 2020 - July 2020',
      title: 'Certificate III in Information Technology',
      institution: 'TAFE NSW Wollongong West Campus',
      description: '',
    }
  ];

  const workEntries = [
    {
      period: 'August 2019 - Current',
      title: 'Sales Assistant',
      company: 'BWS Dapto',
      description: '',
      responsibilities: [
        'Engaged with customers by sharing product knowledge and enthusiasm, creating memorable experiences that fostered customer loyalty.',
        'Meticulously analysed sales data to elucidate trends and areas for improvement, helping to refine product offerings and enhance sales strategies. Promoted BWS loyalty programs by informing customers of benefits and product offerings, encouraging repeat business, and enhancing customer satisfaction.',
        'Addressed customer complaints with empathy and professionalism, effectively resolving issues in a timely manner which ensured a positive shopping experience and maintained customer loyalty.',
        'Ensured optimal stock levels on shelves, providing customers with a wide selection of choices and preventing stock shortages.',
        'Maintained a safe, clean, and organised store environment, ensuring a positive shopping experience for both customers and team members.',
        'Upheld responsible service of alcohol guidelines, consistently adhering to legal and store-specific policies to ensure customer safety and compliance.'
      ]
    },
    {
      period: 'February 2017 - December 2018',
      title: 'Car Detailer',
      company: 'Dwyers Mazda Wollongong',
      description: '',
      responsibilities: [
        'Detailed and cleaned vehicles to exceptional standards, ensuring a polished, showroom-ready appearance.',
        'Applied fabric and paint protection with precision, enhancing vehicle durability and customer satisfaction.',
        'Drove business performance through execution of local and national marketing initiatives (promotions).',
        'Safely manoeuvred vehicles within the dealership and workshop, prioritising safety and efficiency.',
        'Complied with Workplace Health and Safety (WHS) regulations, maintaining a safe work environment.',
        'Adapted to various tasks as needed, demonstrating flexibility and a proactive work ethic.',
        'Collaborated effectively with team members, contributing to a cohesive and efficient work environment.',
        'Excelled in fast-paced settings, handling multiple tasks while maintaining attention to detail and quality.',
        'Demonstrated a strong commitment to customer satisfaction, ensuring each service exceeded client expectations.'
      ]
    }
  ];

  const technicalSkills = [
    {
      category: 'Programming Languages',
      skills: [
        'Developed and maintained software applications using Java, JavaScript, Python, and C++, enhancing functionality and user experience.',
        'Implemented SQL queries to efficiently retrieve, update, and analyse data across large databases.',
        'Optimised front-end components with HTML, CSS, and JavaScript, improving page load times and responsiveness.',
        'Debugged and refactored code across multiple languages, ensuring reliability and performance.'
      ]
    },
    {
      category: 'Developer Tools',
      skills: [
        'Utilised Visual Studio Code, IntelliJ, and Android Studio to create, test, and deploy software solutions.',
        'Managed code versions and collaborated on projects using GitHub, ensuring seamless team integration and code accuracy.',
        'Configured MySQL databases for backend storage solutions, enabling secure and scalable data management.',
        'Streamlined workflows through effective use of developer tools, resulting in increased productivity and reduced errors.'
      ]
    }
  ];

  const tools = [
    { name: 'Java', icon: '/img/icons/java.png' },
    { name: 'Python', icon: '/img/icons/python.png' },
    { name: 'JavaScript', icon: '/img/icons/javascript.png' },
    { name: 'C++', icon: '/img/icons/C++.png' },
    { name: 'HTML', icon: '/img/icons/html.png' },
    { name: 'CSS', icon: '/img/icons/css.png' },
    { name: 'GitHub', icon: '/img/icons/github.png' },
    { name: 'VS Code', icon: '/img/icons/vscode.png' }
  ];

  const programmingSkills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 70 },
    { name: "JavaScript", level: 80 },
    { name: "C++", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "SQL", level: 70 }
  ];

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container">
        <div className="subtitle">Resume</div>
        <h2 className="section-title">Education and Professional Experience</h2>

        <p className="mb-16 text-lg leading-relaxed text-foreground">
          With a background in computer science and a focus on cyber security, I bring technical expertise and
          problem-solving skills to every project. My education and professional experience have equipped me with
          the knowledge to build secure, efficient, and user-friendly digital solutions.
        </p>

        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-foreground">EDUCATION</h3>
          <div className="space-y-12">
            {educationEntries.map((entry, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-4 md:grid-cols-5"
              >
                <div className="md:col-span-1">
                  <div className="text-sm text-muted">{entry.period}</div>
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-xl font-semibold text-primary">{entry.title}</h4>
                  <div className="mt-1 text-sm text-muted">
                    <span className="text-foreground">{entry.institution}</span>
                  </div>
                  {entry.description && (
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{entry.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-foreground">PROFESSIONAL EXPERIENCE</h3>
          <div className="space-y-16">
            {workEntries.map((entry, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-4 md:grid-cols-5"
              >
                <div className="md:col-span-1">
                  <div className="text-sm text-muted">{entry.period}</div>
                </div>
                <div className="md:col-span-4">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <h4 className="text-xl font-semibold text-primary">{entry.title} | {entry.company}</h4>
                  </div>
                  {entry.description && (
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{entry.description}</p>
                  )}
                  {entry.responsibilities && (
                    <ul className="mt-3 list-disc pl-5 space-y-2">
                      {entry.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm leading-relaxed text-foreground">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-2xl font-bold text-foreground">MY TOOLS & SKILLS</h3>

          {/* Programming Skills with bars */}
          <div className="mb-12 space-y-6">
            <h4 className="text-xl font-semibold text-primary">PROGRAMMING SKILLS</h4>
            <div className="space-y-5">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className="h-2 rounded-full bg-primary"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={skill.level}
                      variants={skillBarVariants}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills section */}
          <div className="mb-12 space-y-8">
            <h4 className="text-xl font-semibold text-primary">TECHNICAL SKILLS</h4>
            {technicalSkills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h5 className="text-lg font-semibold text-foreground">{skillGroup.category}</h5>
                <ul className="list-disc pl-5 space-y-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-8">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-8 w-8"
                  />
                </div>
                <span className="mt-2 text-xs font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
