import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'C++', level: 'expert', description: 'Primary CP language, 1000+ problems solved' },
      { name: 'Python', level: 'advanced', description: 'Backend services, AI/ML, tooling at Razorpay' },
      { name: 'JavaScript', level: 'advanced', description: 'Full-stack development, Node.js, React' },
      { name: 'TypeScript', level: 'intermediate', description: 'Type-safe frontend and backend development' },
      { name: 'C', level: 'advanced', description: 'Systems programming, CS fundamentals' },
      { name: 'SQL', level: 'advanced', description: 'Complex queries, PostgreSQL, database design' },
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'advanced', description: 'Production APIs, real-time systems' },
      { name: 'Express.js', level: 'advanced', description: 'REST APIs, middleware, auth systems' },
      { name: 'FastAPI', level: 'advanced', description: 'High-performance Python APIs at Razorpay' },
      { name: 'REST APIs', level: 'advanced', description: 'API design, versioning, documentation' },
      { name: 'Microservices', level: 'intermediate', description: 'Service decomposition, inter-service communication' },
      { name: 'GraphQL', level: 'intermediate', description: 'GitHub identity resolution at Razorpay' },
    ],
  },
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 'advanced', description: 'Component architecture, hooks, state management' },
      { name: 'Next.js', level: 'advanced', description: 'SSR/SSG, API routes, Pixxel project' },
      { name: 'Tailwind CSS', level: 'advanced', description: 'Utility-first styling, responsive design' },
      { name: 'HTML/CSS', level: 'advanced', description: 'Semantic HTML, CSS Grid, Flexbox' },
      { name: 'Framer Motion', level: 'intermediate', description: 'Animations, page transitions' },
    ],
  },
  {
    name: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', level: 'advanced', description: 'Document modeling, aggregation, Vaulta project' },
      { name: 'PostgreSQL', level: 'intermediate', description: 'Relational modeling, complex queries' },
      { name: 'Redis', level: 'advanced', description: 'Caching, session management, token storage at Razorpay' },
      { name: 'Convex', level: 'intermediate', description: 'Real-time serverless database, Pixxel project' },
    ],
  },
  {
    name: 'DevOps & Observability',
    icon: 'Container',
    skills: [
      { name: 'Git & GitHub', level: 'advanced', description: 'Version control, collaboration, PRs' },
      { name: 'Docker', level: 'intermediate', description: 'Containerized deployments' },
      { name: 'Prometheus', level: 'intermediate', description: 'Metrics instrumentation at Razorpay' },
      { name: 'Grafana', level: 'intermediate', description: 'Dashboard creation, alerting at Razorpay' },
      { name: 'Spinnaker', level: 'intermediate', description: 'CD pipeline, RBAC at Razorpay' },
      { name: 'Postman', level: 'advanced', description: 'API testing, documentation' },
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Generative AI', level: 'intermediate', description: 'AI image editing, LLM integration' },
      { name: 'LLM APIs', level: 'intermediate', description: 'Google Gemini, structured outputs' },
      { name: 'Prompt Engineering', level: 'intermediate', description: 'System prompts, few-shot, chain-of-thought' },
      { name: 'AI-Assisted Dev', level: 'advanced', description: 'AI code authorship tracking at Razorpay' },
      { name: 'AI Agents', level: 'intermediate', description: 'AI deployment agent security at Razorpay' },
    ],
  },
  {
    name: 'CS Fundamentals',
    icon: 'BookOpen',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'expert', description: '1000+ problems, national contest winner' },
      { name: 'Object-Oriented Programming', level: 'advanced', description: 'Design patterns, SOLID principles' },
      { name: 'System Design', level: 'intermediate', description: 'Distributed systems, scalability patterns' },
      { name: 'DBMS', level: 'advanced', description: 'Normalization, indexing, transactions' },
      { name: 'Operating Systems', level: 'intermediate', description: 'Process management, memory, concurrency' },
      { name: 'Computer Networks', level: 'intermediate', description: 'TCP/IP, HTTP, DNS, load balancing' },
    ],
  },
];
