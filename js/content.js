window.PORTFOLIO_DATA = {
  meta: {
    title: "Jitendra Kushwah — Senior Software Engineer | Backend, Mobile & Full-Stack",
    description:
      "Senior Software Engineer with ~5 years of experience building production APIs, React Native mobile apps, and scalable MERN / Next.js web applications at WebiWork Technologies.",
  },
  site: {
    title: "Jitendra Kushwah",
  },
  tracks: {
    all: {
      id: "all",
      badge: "Full-Stack • Backend • React Native",
      title: "Senior Software Engineer",
      subtitle: "Backend, Mobile & Full-Stack Web Architecture",
      tagline:
        "Software Engineer with ~5 years of progressive experience at WebiWork Technologies designing resilient RESTful APIs, high-performance cross-platform mobile apps, and scalable web applications across Node.js, Express, NestJS, React Native, and Next.js.",
      highlight: "5 Years Experience • WebiWork Technologies • Indore, India",
      resumePdf: "resume.pdf",
      resumeLabel: "Download Resume",
      skillsCategory: [
        {
          name: "Backend & APIs",
          skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Socket.io (WebSockets)", "MVC Architecture"],
        },
        {
          name: "Databases & Queues",
          skills: ["MongoDB (Mongoose)", "PostgreSQL", "MySQL", "Redis (Caching)", "BullMQ (Background Jobs)", "Prisma", "TypeORM"],
        },
        {
          name: "Mobile & Frontend",
          skills: ["React Native (iOS/Android)", "React.js", "Next.js (SSR/SSG)", "TypeScript", "Redux Toolkit", "MMKV", "Track Player"],
        },
        {
          name: "Cloud & Integrations",
          skills: ["AWS S3 (Presigned URLs)", "Stripe Payments & Webhooks", "Razorpay", "JWT & RBAC", "Notifee", "Postman", "Git"],
        },
      ],
    },
    backend: {
      id: "backend",
      badge: "Specialization: Backend Engineering & Cloud APIs",
      title: "Senior Backend Developer",
      subtitle: "Node.js • Express • NestJS • Redis • BullMQ • Cloud APIs",
      tagline:
        "Backend Software Engineer with ~5 years of progressive experience at WebiWork Technologies designing, building, and deploying production RESTful APIs, background worker queues with BullMQ/Redis, and database architectures across MongoDB, PostgreSQL, and MySQL.",
      highlight: "Node.js • NestJS • Redis Caching • BullMQ Queues • AWS S3 • Stripe",
      resumePdf: "backend_developer_resume.pdf",
      resumeLabel: "Download Backend Resume (PDF)",
      skillsCategory: [
        {
          name: "Runtimes & Frameworks",
          skills: ["Node.js", "Express.js", "NestJS", "TypeScript", "JavaScript (ES6+)", "RESTful APIs", "Socket.io"],
        },
        {
          name: "Databases & ORMs",
          skills: ["MongoDB (Mongoose)", "PostgreSQL", "MySQL", "Prisma", "TypeORM", "Database Indexing & Aggregations"],
        },
        {
          name: "Queues & Caching",
          skills: ["Redis (Caching & In-Memory)", "BullMQ (Worker Queues)", "Job Deduplication", "Cron Schedulers"],
        },
        {
          name: "Security, Cloud & Payments",
          skills: ["JWT Authentication", "RBAC Guards", "AWS S3 Presigned URLs", "Stripe Connect & Webhooks", "Razorpay", "Bcrypt", "Zod/Joi"],
        },
      ],
    },
    mobile: {
      id: "mobile",
      badge: "Specialization: Cross-Platform Mobile Applications",
      title: "Senior React Native Developer",
      subtitle: "React Native • iOS & Android • Media Streaming • Offline Storage",
      tagline:
        "Mobile Application Developer with ~5 years of experience at WebiWork Technologies building, optimizing, and releasing production cross-platform iOS and Android apps using React Native, TypeScript, background audio playback, offline caching, and native bridging.",
      highlight: "React Native (v0.71–0.85) • Track Player • MMKV • Notifee • Redux Toolkit",
      resumePdf: "react_native_developer_resume.pdf",
      resumeLabel: "Download React Native Resume (PDF)",
      skillsCategory: [
        {
          name: "Mobile Core",
          skills: ["React Native (v0.71–0.85)", "React 18/19", "TypeScript", "iOS & Android", "Bare Workflow", "React Navigation"],
        },
        {
          name: "Media & Native Features",
          skills: ["react-native-track-player (Background Audio)", "react-native-video", "Swift & Kotlin Native Bridge", "Camera Permissions"],
        },
        {
          name: "Storage & Background",
          skills: ["react-native-mmkv (High-Speed)", "AsyncStorage", "@notifee/react-native (Foreground Services)", "FCM Push Notifications"],
        },
        {
          name: "State, Payments & Tools",
          skills: ["Redux Toolkit", "Context API", "@stripe/stripe-react-native", "i18next Localization", "Xcode", "Android Studio", "Gradle"],
        },
      ],
    },
    mern: {
      id: "mern",
      badge: "Specialization: Full-Stack MERN & Next.js Architecture",
      title: "Senior MERN Stack Developer",
      subtitle: "MongoDB • Express • React.js • Node.js • Next.js (SSR/SSG)",
      tagline:
        "Full-Stack Software Engineer with ~5 years of progressive experience at WebiWork Technologies designing, building, and deploying responsive web applications across the MERN stack and Next.js with high-throughput REST APIs, normalized MongoDB schemas, and real-time WebSockets.",
      highlight: "MongoDB • Express • React • Node.js • Next.js (SSR/SSG) • Redux Toolkit",
      resumePdf: "mern_stack_developer_resume.pdf",
      resumeLabel: "Download MERN Stack Resume (PDF)",
      skillsCategory: [
        {
          name: "Core MERN & Next.js",
          skills: ["MongoDB (Mongoose)", "Express.js", "React.js", "Node.js", "Next.js (App & Pages Router, SSR, SSG)", "TypeScript"],
        },
        {
          name: "Frontend Architecture",
          skills: ["React 18/19", "Next.js", "Redux Toolkit", "Zustand", "HTML5 & Modern CSS3", "Tailwind CSS", "Responsive Design"],
        },
        {
          name: "Backend, Queues & APIs",
          skills: ["Express REST APIs", "NestJS", "BullMQ Queues", "Redis Caching", "Socket.io WebSockets", "PDFTron WebViewer"],
        },
        {
          name: "Cloud, Auth & Payments",
          skills: ["AWS S3", "JWT Auth & Refresh Tokens", "RBAC", "Stripe Charges & Webhooks", "Razorpay", "Zod", "Axios Interceptors"],
        },
      ],
    },
  },
  nav: [
    { label: "Overview", href: "#top" },
    { label: "Specializations", href: "#specializations" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      id: "suhavi",
      title: "Suhavi Audiobooks & Digital Publishing Platform",
      category: ["backend", "mobile", "mern", "all"],
      featured: true,
      tagline: "Audiobook streaming, eBook reader app & multi-portal publishing ecosystem",
      description:
        "Comprehensive digital publishing platform serving readers, authors, publishers, and admins. Features background audio streaming with lock-screen controls, offline chapter downloads, presigned AWS S3 streaming endpoints, and browser-based eBook proofing via PDFTron.",
      highlights: [
        "Backend: Node.js/Express APIs with AWS S3 presigned URLs for secure chunked audio streaming.",
        "Mobile: React Native app with react-native-track-player background service and @notifee offline chapter downloads.",
        "Web: 5 Next.js portals with PDFTron WebViewer for in-browser eBook proofing and author submissions.",
        "Performance: Redis caching for book catalogs and react-native-mmkv for sub-second offline mobile startup.",
      ],
      tags: ["React Native", "Node.js", "Next.js", "AWS S3", "Track Player", "Redis", "MMKV", "Redux Toolkit"],
    },
    {
      id: "aimqtest",
      title: "AimQTest — Asynchronous Exam Evaluation & PDF Engine",
      category: ["backend", "mern", "all"],
      featured: true,
      tagline: "EdTech psychometric testing platform with BullMQ background report generator",
      description:
        "Cognitive examination platform that evaluates complex student psychological assessments and generates multi-page performance PDF reports asynchronously without blocking the Node.js API server.",
      highlights: [
        "Decoupled report generation via BullMQ worker queue and Redis, dropping API latency from 8s to <150ms.",
        "Implemented Redis job deduplication to prevent duplicate PDF generations when users double-click submit.",
        "Designed MongoDB schemas to store answers across 10+ test categories and calculate psychological metrics.",
        "Integrated Razorpay payment gateway for exam enrollments and Excel batch exports for school admins.",
      ],
      tags: ["Node.js", "Express", "MongoDB", "BullMQ", "Redis", "AWS S3", "Razorpay", "Next.js"],
    },
    {
      id: "littlebigshed",
      title: "LittleBigShed (LBS) — P2P Equipment Rental Marketplace",
      category: ["backend", "mobile", "mern", "all"],
      featured: true,
      tagline: "Peer-to-peer equipment rental platform with Stripe Connect and real-time chat",
      description:
        "New Zealand equipment sharing marketplace connecting tool owners and borrowers. Includes calendar availability scheduling, two-phase Stripe pre-authorizations for security deposits, real-time Socket.io chat, and cross-platform mobile apps.",
      highlights: [
        "Architected NestJS backend with MySQL and TypeORM managing equipment catalogs and booking requests.",
        "Integrated Stripe Connect for payment intents, security deposit holds, and automated lender payouts.",
        "Implemented real-time messaging using Socket.io WebSockets with message history persistence.",
        "Built React Native bare workflow mobile app with Stripe PaymentSheet and camera photo uploads to S3.",
      ],
      tags: ["NestJS", "React Native", "MySQL", "TypeORM", "Stripe Connect", "Socket.io", "AWS S3"],
    },
    {
      id: "autospa",
      title: "AutoSpa — Multi-Tenant Dealership Inspection SaaS",
      category: ["backend", "mobile", "all"],
      featured: false,
      tagline: "B2B SaaS and mobile inspection tool for automotive dealership service centers",
      description:
        "Multi-tenant service center platform enabling technicians to record intake damage photos, check off vehicle service items, and automatically generate branded inspection reports for vehicle owners.",
      highlights: [
        "Engineered NestJS backend in PostgreSQL with Role-Based Access Control (RBAC) guards for Admin, Manager, and Technician roles.",
        "Built BullMQ worker queues for automated vehicle inspection report generation and S3 photo processing.",
        "Developed React Native mobile app with camera permissions, offline checklist caching via AsyncStorage, and FCM alerts.",
        "Integrated Stripe subscription billing with webhooks for recurring monthly SaaS subscriptions.",
      ],
      tags: ["NestJS", "React Native", "PostgreSQL", "BullMQ", "Stripe Billing", "RBAC", "AWS S3"],
    },
    {
      id: "easytask",
      title: "EasyTask — Voice-Enabled Gig Marketplace",
      category: ["mobile", "all"],
      featured: false,
      tagline: "On-demand task marketplace with native speech-to-text bridge in Swift and Kotlin",
      description:
        "Field contractor marketplace enabling service workers to post and bid on tasks using voice dictation. Built native platform bridge modules connecting Apple and Android speech recognition engines directly to React Native.",
      highlights: [
        "Authored custom native bridge modules in Swift (iOS) and Kotlin (Android) using NativeEventEmitter for continuous voice dictation.",
        "Integrated real-time task bidding and direct customer messaging using Socket.io and Firebase push notifications.",
        "Constructed fluid UI with bottom-sheet modals, animated step transitions, and form validation using Redux Toolkit.",
      ],
      tags: ["React Native", "Swift (iOS)", "Kotlin (Android)", "Native Modules", "Socket.io", "FCM", "Redux Toolkit"],
    },
    {
      id: "sharellama",
      title: "ShareLlama — Modern Equipment Sharing Platform",
      category: ["backend", "mern", "all"],
      featured: false,
      tagline: "Location-aware gear rental platform with digital agreement verification",
      description:
        "Equipment sharing platform featuring distance-based search to display available rental tools closest to user coordinates, digital rental agreement signing, and Stripe payments.",
      highlights: [
        "Built Express.js REST APIs with Prisma and PostgreSQL, adding coordinate distance calculations for local search.",
        "Integrated Stripe Connect for automated payouts and digital agreement contract workflows.",
        "Developed responsive Next.js frontend with Tailwind CSS and strict Zod request schema validation.",
      ],
      tags: ["Express.js", "Next.js", "PostgreSQL", "Prisma", "Stripe Connect", "Zod", "Tailwind CSS"],
    },
    {
      id: "easysprint",
      title: "EasySprint — Agile Activity & Timesheet Tracking",
      category: ["backend", "mern", "all"],
      featured: false,
      tagline: "Enterprise time-tracking and developer activity platform with async message queues",
      description:
        "Project management and timesheet application modeled in NestJS and MongoDB (Mongoose), using asynchronous message queues to ingest high-frequency user telemetry and timesheet logs without impacting API responsiveness.",
      highlights: [
        "Modeled normalized MongoDB schemas with Mongoose for organizations, projects, timesheets, and tasks.",
        "Integrated background message queues to process activity logging asynchronously.",
        "Built React web dashboards for real-time task progress and timesheet approvals.",
      ],
      tags: ["NestJS", "Node.js", "MongoDB", "Mongoose", "React.js", "Background Queues"],
    },
    {
      id: "shopify_ecommerce",
      title: "Shopify E-Commerce Mobile App & Admin Portal",
      category: ["mobile", "mern", "all"],
      featured: false,
      tagline: "Headless mobile shopping application with persistent offline cart and live support",
      description:
        "Mobile shopping application and web administration portal featuring persistent cart state with AsyncStorage and Redux Toolkit, product catalog carousels, and live support chat via Socket.io.",
      highlights: [
        "Built mobile shopping cart with AsyncStorage persistence so customer carts survive app restarts.",
        "Engineered Express backend APIs with PostgreSQL, JWT login, and Joi schema validation.",
        "Implemented room-based customer live chat using Socket.io WebSockets.",
      ],
      tags: ["React Native", "Express.js", "PostgreSQL", "AsyncStorage", "Redux Toolkit", "Socket.io"],
    },
  ],
  experience: [
    {
      period: "January 2022 – Present (~5 Years Total)",
      company: "WebiWork Technologies Pvt. Ltd.",
      location: "Indore, MP, India",
      role: "Senior Developer (Progressive Growth from Associate Developer)",
      overview:
        "Promoted progressively from Associate Developer to Developer and Senior Developer. Spearheaded backend architecture, cross-platform mobile apps, and full-stack MERN engineering across international client platforms.",
      roles: [
        {
          title: "Senior Developer",
          period: "Late 2024 – Present",
          focus: "Architecture ownership, core streaming APIs, background queues, and cross-platform mobile delivery.",
          bullets: [
            "Architected the Suhavi digital publishing ecosystem: Node.js audio streaming APIs with AWS S3 presigned URLs, React Native mobile app with react-native-track-player, and Next.js author portals.",
            "Built asynchronous evaluation pipeline for AimQTest using BullMQ and Redis, dropping exam submission latency from 8s to <150ms.",
            "Engineered multi-tenant NestJS backend with PostgreSQL and RBAC guards for AutoSpa dealership SaaS.",
            "Mentored junior engineers, conducted architectural code reviews, and enforced modular coding standards.",
          ],
        },
        {
          title: "Developer",
          period: "Early 2023 – Late 2024",
          focus: "Marketplace REST APIs, Stripe payment flows, and real-time WebSocket communication.",
          bullets: [
            "Built production backend and mobile app for LittleBigShed (P2P equipment rentals) using NestJS, MySQL, TypeORM, and React Native.",
            "Integrated Stripe Connect payments, handling two-phase authorizations for security deposit holds and webhook listeners.",
            "Implemented real-time buyer-seller messaging using Socket.io WebSockets with message persistence.",
            "Developed automated background cron scheduler services to track rental durations and dispatch notifications.",
          ],
        },
        {
          title: "Associate Developer",
          period: "January 2022 – Early 2023",
          focus: "Foundational REST APIs, database schemas, and e-commerce mobile screens.",
          bullets: [
            "Built REST endpoints and MongoDB Mongoose schemas for EasySprint agile project and timesheet tracking.",
            "Developed mobile e-commerce screens in React Native with persistent cart state via AsyncStorage and Redux Toolkit.",
            "Implemented customer support live chat using Socket.io WebSockets and room-based event broadcasting.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Software Engineering",
      institution: "Sri Aurobindo Institute of Technology",
      location: "Indore, MP, India",
      period: "2015 – 2019",
      notes: "Comprehensive coursework in Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, and Software Architecture.",
    },
  ],
  contact: {
    heading: "Let's Connect",
    lead: "Open to Senior Backend, React Native, and Full-Stack MERN opportunities. Feel free to reach out via email, phone, or LinkedIn.",
    name: "Jitendra Kushwah",
    location: "Indore, MP, India",
    email: "jitendrakushwahsingh@gmail.com",
    phone: "+91 9009355417",
    linkedin: "https://linkedin.com/in/singhjitendrakushwah",
    github: "https://github.com/singhjitendrakushwah",
    resumes: [
      { label: "Backend Developer Resume (PDF)", filename: "backend_developer_resume.pdf" },
      { label: "React Native Developer Resume (PDF)", filename: "react_native_developer_resume.pdf" },
      { label: "MERN Stack Developer Resume (PDF)", filename: "mern_stack_developer_resume.pdf" },
    ],
  },
  footer: {
    copy: "© 2026 Jitendra Kushwah. Built with performance, accessibility, and clean architecture.",
  },
};
