export const links = {
  linkedin: 'https://www.linkedin.com/in/saif-tamboli/',
  github: 'https://github.com/saiftamboli',
  oldPortfolio: 'https://saiftamboli.github.io/',
  alyson: 'https://alyson.ai/',
  retailmate: 'https://retailmateai.vercel.app',
  resume:
    'https://drive.google.com/file/d/1KR7h4HZjDyoNzI_8RY_J6slvuffs-Xm6/view?usp=sharing',
  email: 'tambolisaif13@gmail.com',
  mobile: '+91-7219242492',
}

export const hero = {
  name: 'Saif Tamboli',
  role: 'Product Analyst | Data-Driven Problem Solver',
  tagline: 'Turning operational chaos into scalable, AI-powered systems.',
  location: 'Pune, MH',
}

export const about = {
  bio: 'I turn messy operational workflows into systems that scale. Right now that means productizing affiliate operations into AI capabilities at Alyson.ai. Before that, equity research at Morningstar: 24K+ reports a year, finding signal in the noise.',
  stats: [
    { value: 2, suffix: '+', label: 'Years Experience' },
    { value: 300, suffix: '+', label: 'Partnerships Scaled' },
    { value: 30, suffix: 'h', label: 'Saved Weekly' },
  ],
}

export const education = {
  degree: 'B.E. Mechanical Engineering',
  school: 'Sinhgad College of Engineering, Savitribai Phule Pune University',
  period: '2019 - 22',
  detail: 'CGPA 9.34/10 · Top 5% of batch',
}

export const recognition = {
  title: 'Spot Award, 2024',
  detail: 'Sustained 100%+ efficiency at 99.4% quality.',
}

export const experience = [
  {
    role: 'Product Analyst',
    company: 'RevCloud',
    period: 'Jan 2026 - Present',
    location: 'Pune, MH',
    bullets: [
      "Partner with PMs and cross-functional teams on Alyson, RevCloud's AI workflow automation platform, translating operational workflows into business requirements, PRDs, and validated features.",
      'Productized 8+ affiliate workflows into AI capabilities using APIs and AI agents, supporting 300+ partnerships while cutting ~30 hours of manual work per week.',
      'Built an AI-powered outreach workflow from scratch with Claude and Lovable, scaling monthly prospecting from ~2,000 to 5,000+.',
      'Optimized affiliate acquisition across email, SMS, native, and social. Traffic quality and conversion analysis in Looker lifted lead acceptance ~15%.',
    ],
  },
  {
    role: 'Data Analyst, Equity Research',
    company: 'Morningstar, Inc.',
    period: 'Mar 2023 - Oct 2024',
    location: 'Navi Mumbai, MH',
    bullets: [
      'Led a process automation initiative for the Korean market, spotting a recurring pattern in financial statements and shipping an automated data capture model that saved ~15 hours of manual entry weekly.',
      'Analyzed 24K+ company reports a year, normalizing for non-recurring items, with SQL rules-based checks guarding data quality post-deployment.',
      'Trained 7 junior analysts on Shenzhen market collection, cutting onboarding time 30% and reaching 99.2% average quality within 4 weeks.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'BingeInn',
    period: 'Sep 2022 - Feb 2023',
    location: 'Remote',
    type: 'internship',
    bullets: [
      'Managed and cleaned a 200K+ title database in MySQL, resolving duplicates, missing values, and inconsistencies to make content reporting and recommendations reliable.',
    ],
  },
  {
    role: 'Project Intern, Supply Chain',
    company: 'Kirloskar Pneumatic',
    period: 'Feb 2022 - Mar 2022',
    location: 'Pune, MH',
    type: 'internship',
    bullets: [
      'Achieved a 13% reduction in total cost of the gear mesh pipe by sourcing new suppliers and negotiating to break an existing supplier monopoly.',
    ],
  },
]

export const projects = [
  {
    title: 'RetailMate.ai',
    tools: ['LangGraph', 'LangChain', 'Next.js', 'PostgreSQL'],
    link: 'https://retailmateai.vercel.app',
    summary:
      'AI analytics platform that turns raw Excel/CSV business data into a conversational decision workspace. Specialized agents run over a semantic data layer with SQL-backed analysis, human approval workflows, and evidence trails behind every insight.',
    stat: { value: 'Live', label: 'Agentic full-stack build' },
  },
  {
    title: 'Bank Customer Churn Analysis',
    tools: ['Power BI', 'SQL'],
    link: 'https://saiftamboli.github.io/Bank-Customer-Churn-Analysis/',
    summary:
      'Analyzed 10K customer records in SQL and Power BI. Inactive members churned at 2x the rate of active ones, Germany was the highest-churn region at 40%, and a Customers at Risk KPI flagged 2,472 people for retention.',
    stat: { value: '2,472', label: 'At-risk flagged' },
  },
  {
    title: 'Sting Energy: Marketing Analytics',
    tools: ['Power BI', 'Excel'],
    link: 'https://saiftamboli.github.io/Marketing-Analytics-Dashboard-for-Sting-Energy-Drink/',
    summary:
      'Recommended shifting 80% of marketing spend to high-ROI digital channels after finding 70% of consumers were aged 15 to 30, plus reformulation and pricing changes from a 3.3/5 taste gap and 43% price sensitivity.',
    stat: { value: '80%', label: 'Spend reallocated' },
  },
  {
    title: 'Hotel Booking Demand Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/saiftamboli/Hotel_Booking_Analysis',
    summary:
      'EDA on 119K hotel bookings in Python and Pandas. City Hotels drew 61% higher demand, 27% of bookings cancelled on longer lead times, and demand peaked across July and August.',
    stat: { value: '119K', label: 'Bookings analyzed' },
  },
  {
    title: 'Hospital Analytics Dashboard',
    tools: ['Power BI', 'SQL'],
    link: 'https://saiftamboli.github.io/Hospital-Analytics-Dashboard/',
    summary:
      'Consolidated 15 raw data tables into 4 optimized relational tables using data modeling and ETL workflows, delivering insights on patient history, doctor performance, and hospital finances.',
    stat: { value: '15 → 4', label: 'Tables modeled' },
  },
]

export const capabilities = [
  {
    category: 'Languages & Databases',
    note: 'Pulling and shaping the raw material.',
    items: ['SQL', 'Python (Pandas, NumPy)', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Visualization & BI',
    note: 'Turning it into something people act on.',
    items: ['Power BI (DAX, Power Query)', 'Looker', 'Advanced Excel (Macros, Power Pivot)'],
  },
  {
    category: 'Product & Analytics',
    note: 'Defining what gets built, and why.',
    items: [
      'PRDs & Business Requirements',
      'Agile / Scrum',
      'Workflow Automation',
      'Funnel Analysis',
      'EDA & Reporting',
    ],
  },
  {
    category: 'Tools & Platforms',
    note: 'The day-to-day operating kit.',
    items: ['Jira', 'CRM', 'Figma', 'Tune', 'Google Sheets'],
  },
]

export const certifications = [
  {
    name: 'SQL Gold Badge & Advanced SQL (HackerRank)',
    href: 'https://www.hackerrank.com/profile/tambolisaif13',
  },
  {
    name: 'Google Data Analytics Foundation (Coursera)',
    href: 'https://www.coursera.org/account/accomplishments/verify/UKA6IMKJWV71',
  },
  {
    name: 'Full Stack Data Analytics 2.0 (iNeuron)',
    href: 'https://drive.google.com/file/d/1IWnuu2tKljT0FpGW4xuTeM9Pl969MvD3/view?usp=sharing',
  },
  {
    name: 'Advanced Excel (Udemy)',
    href: 'https://www.udemy.com/certificate/UC-2b6cefde-f440-4ee1-b16a-2599e1395634/',
  },
]

export const extracurricular = [
  {
    role: 'Executive Member, Student Core Committee',
    detail: "Organized Techtonic'20, a technical fest with 1,500+ participants. Team of 20+.",
  },
  {
    role: "Event Coordinator, Karandak'20",
    detail: 'Led a team of 14 for the Tabulating event at the college cultural fest.',
  },
  {
    role: 'Student Placement Coordinator',
    detail: 'Bridged students and recruiters, expanding the campus hiring list.',
  },
]

export const hobbies = ['Solving puzzles', 'Reading', 'Trekking', 'Pickleball']

export const archive = {
  title: 'The Dashboard Archive',
  detail:
    'Every Power BI dashboard I have built, live and interactive in one place. Filter it, drill into it, break it.',
  cta: 'Explore the Archive',
  href: links.oldPortfolio,
  metrics: [
    { value: '4', label: 'Live dashboards' },
    { value: 'Power BI', label: 'Built with' },
    { value: 'Real-time', label: 'Fully interactive' },
  ],
}

export const contact = {
  heading: 'Open to Full-Time Roles',
  intro:
    "Actively looking for a full-time role across data, product, and AI engineering. If you're hiring, I'd like to hear from you.",
}
