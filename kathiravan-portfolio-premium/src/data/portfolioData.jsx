// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update copy without
// touching component code.
// ---------------------------------------------------------------------------

export const personal = {
  name: 'KATHIRAVAN G',
  shortName: 'KATHIRAVAN',
  title: 'Aspiring Software Engineer | AI & Machine Learning',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'kathiravan.g.2005@gmail.com',
  phone: '+91-7904768744',
  phoneRaw: '917904768744',
  summary:
    'Aspiring Software Engineer and AI & Machine Learning undergraduate with hands-on experience in Java, SQL, HTML, CSS, JavaScript, and Spring Boot. Skilled in developing responsive web applications and full-stack projects. Strong problem-solving abilities with a passion for learning new technologies and contributing to innovative software solutions.',
  resumePath: '/resume/Kathiravan_Resume.pdf',
}

// -----------------------------------------------------------------------
// Social links — only real, provided profile URLs. Nothing invented here.
// If a value is empty, the corresponding icon/link can be hidden or
// pointed at '#' by the component that consumes it.
// -----------------------------------------------------------------------
export const socials = {
  github: 'https://github.com/kathir1313',
  linkedin: 'https://www.linkedin.com/in/kathiravan-g--',
  leetcode: 'https://leetcode.com/u/kathiravang13/',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#project' },
  { label: 'Contact', href: '#contact' },
]

export const education = {
  degree: 'B.Tech in Artificial Intelligence & Machine Learning',
  school: 'SNS College of Technology',
  period: '2022 – 2026',
  cgpa: 'CGPA: 7.7',
}

export const educationHistory = [
  {
    school: 'SNS College of Technology',
    degree: 'B.Tech — Artificial Intelligence & Machine Learning',
    period: '2022 – 2026',
    detail: 'CGPA: 7.7',
  },
  {
    school: 'Govt Higher Sec School',
    degree: 'Higher Secondary Education',
    period: '2021 – 2022',
    detail: 'Percentage: 78.8%',
  },
  {
    school: 'Govt Higher Sec School',
    degree: 'Secondary Education',
    period: '2019 – 2020',
    detail: 'Percentage: 72.6%',
  },
]

export const certifications = [
  { name: 'Java Full Stack Development', org: 'QSpiders', period: 'Jan 2026 – Present' },
  { name: 'Data Structures', org: 'Infosys Springboard', period: 'May 2025' },
  { name: 'Workshop on Web Development', org: 'Bannari Amman College of Technology', period: 'Feb 2024' },
]

// -----------------------------------------------------------------------
// About section — word-by-word scroll reveal array (mirrors reference
// portfolio's animation technique).
// -----------------------------------------------------------------------
export const aboutWords = [
  { text: "I'm" },
  {
    text: 'KATHIRAVAN G,',
    className: 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400',
  },
  { text: 'an' }, { text: 'aspiring' }, { text: 'Software' }, { text: 'Engineer' }, { text: 'and' },
  { text: 'Artificial' }, { text: 'Intelligence' }, { text: '&' }, { text: 'Machine' }, { text: 'Learning' },
  { text: 'undergraduate.' }, { text: 'I' }, { text: 'enjoy' }, { text: 'building' }, { text: 'responsive' },
  { text: 'web' }, { text: 'applications,' }, { text: 'full-stack' }, { text: 'projects,' }, { text: 'and' },
  { text: 'intelligent' }, { text: 'systems.' },
  { text: 'I' }, { text: 'have' }, { text: 'hands-on' }, { text: 'experience' }, { text: 'with' },
  { text: 'Java,', className: 'text-white font-medium' },
  { text: 'Spring Boot,', className: 'text-white font-medium' },
  { text: 'React.js,', className: 'text-white font-medium' },
  { text: 'JavaScript,', className: 'text-white font-medium' },
  { text: 'SQL,', className: 'text-white font-medium' },
  { text: 'and' },
  { text: 'MySQL.', className: 'text-white font-medium' },
  { text: 'I' }, { text: 'also' }, { text: 'enjoy' }, { text: 'solving' }, { text: 'programming' },
  { text: 'problems' }, { text: 'and' }, { text: 'continuously' }, { text: 'improving' }, { text: 'my' },
  { text: 'technical' }, { text: 'skills.' },
]

// -----------------------------------------------------------------------
// Skills — grouped for the marquee (About) and the dedicated Skills grid.
// -----------------------------------------------------------------------
export const skillGroups = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  backend: ['Java', 'Spring Boot', 'REST APIs'],
  core: ['Object-Oriented Programming', 'Collections', 'Data Structures'],
  tools: ['Git', 'GitHub', 'Eclipse IDE', 'Visual Studio Code'],
  programming: ['Java', 'SQL'],
  database: ['MySQL'],
}

export const skillCategories = [
  { title: 'Programming', items: skillGroups.programming },
  { title: 'Frontend', items: skillGroups.frontend },
  { title: 'Backend', items: skillGroups.backend },
  { title: 'Database', items: skillGroups.database },
  { title: 'Core Concepts', items: skillGroups.core },
  { title: 'Tools', items: skillGroups.tools },
]

// -----------------------------------------------------------------------
// Services / What I Do
// -----------------------------------------------------------------------
export const servicesData = [
  {
    id: '01',
    title: 'WEB DEVELOPMENT',
    description:
      'Responsive and user-friendly websites built with HTML, CSS, JavaScript and React.js — clean, fast, and accessible across every device.',
    capabilities: [
      'Responsive UI development with HTML5 & CSS3',
      'Interactive interfaces using JavaScript & React.js',
      'Cross-browser, mobile-first layouts',
      'Clean, maintainable component structure',
    ],
    buttonText: 'VIEW PROJECTS',
  },
  {
    id: '02',
    title: 'FULL STACK DEVELOPMENT',
    description:
      'Full-stack applications built with Java, Spring Boot, REST APIs and MySQL — from database design to a working, deployable product.',
    capabilities: [
      'Java & Spring Boot backend architecture',
      'RESTful API design and CRUD operations',
      'MySQL database design with JDBC integration',
      'End-to-end feature delivery',
    ],
  },
  {
    id: '03',
    title: 'AI & MACHINE LEARNING',
    description:
      'Developing intelligent applications and exploring machine learning and deep learning concepts through hands-on, team-based projects.',
    capabilities: [
      'Deep learning based classification systems',
      'Frontend integration for ML prediction pipelines',
      'Data-driven feature exploration',
      'Collaborative model-to-product workflows',
    ],
  },
  {
    id: '04',
    title: 'PROBLEM SOLVING',
    description:
      'Applying object-oriented programming, data structures and logical problem-solving to build efficient, reliable solutions.',
    capabilities: [
      'Object-Oriented Programming (OOP)',
      'Data structures & collections',
      'Algorithmic problem solving',
      'Clean, modular code design',
    ],
  },
]

// -----------------------------------------------------------------------
// Experience
// -----------------------------------------------------------------------
export const experience = [
  {
    role: 'Web Development Intern',
    company: 'AEGIIZ Technologies',
    period: 'Internship',
    points: [
      'Built responsive, user-friendly web applications using HTML, CSS, and JavaScript',
      'Assisted in building responsive web pages and improving UI components',
      'Gained hands-on experience in real-world project development',
    ],
  },
]

// -----------------------------------------------------------------------
// Projects — demo/github left as '#' where a real deployed URL doesn't
// exist yet. GitHub links point to the real profile since per-repo URLs
// were not provided.
// -----------------------------------------------------------------------
export const projects = [
  {
    name: 'LeukoNet – Deep Learning Based Leukemia Classification System',
    title: (
      <>
        LEUKO<span className="font-light italic text-gray-300 lowercase font-serif">net</span>
        <br />
        LEUKEMIA CLASSIFICATION
      </>
    ),
    description:
      'A team-based deep learning project developed for leukemia classification using blood cell images. I developed the frontend interface, created a responsive and user-friendly experience, and collaborated with teammates to integrate the frontend with the backend prediction system and display classification results effectively.',
    tech: ['Deep Learning', 'React.js', 'JavaScript', 'HTML', 'CSS'],
    image: '/projects/leukonet.png',
    demo: '#',
    github: socials.github,
  },
  {
    name: 'Student Management System',
    title: (
      <>
        STUDENT
        <br />
        MANAGEMENT SYSTEM
      </>
    ),
    description:
      'A full-stack Student Management System built with Java and Spring Boot to efficiently manage student records — RESTful APIs for CRUD operations, MySQL integration via JDBC, and a responsive frontend.',
    tech: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'JDBC', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/student-management-system.png',
    demo: '#',
    github: socials.github,
  },
  {
    name: 'Bus Reservation System',
    title: (
      <>
        BUS <span className="font-light italic text-gray-300 lowercase font-serif">console</span>
        <br />
        RESERVATION SYSTEM
      </>
    ),
    description:
      'A console-based bus ticket booking system built with Core Java and OOP principles — bus listing, seat availability validation, and ticket booking logic with clean, modular code using ArrayList collections.',
    tech: ['Core Java', 'OOP', 'Collections', 'ArrayList'],
    image: '/projects/bus-reservation-system.png',
    demo: '#',
    github: socials.github,
  },
]
