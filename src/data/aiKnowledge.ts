// ============================================================
// AI Knowledge Base — Structured data for Gemini grounding
// This prevents hallucination by providing ONLY factual data
// ============================================================

export const aiKnowledgeBase = {
  personal: {
    name: 'Abhishek Singh Negi',
    education: 'B.Tech in Computer Science & Engineering from IIIT Ranchi (2022–2026), CGPA 8.39',
    currentStatus: 'Fresh graduate, previously SDE Intern at Razorpay (Jan–Jun 2026)',
    location: 'India',
    email: 'negiabhi1809@gmail.com',
    github: 'https://github.com/nEgiAbhi1809',
    linkedin: 'https://linkedin.com/in/negi-abhi1809',
  },

  experience: {
    company: 'Razorpay',
    role: 'Software Development Engineer Intern',
    duration: 'January 2026 – June 2026',
    location: 'Bangalore, India',
    summary: 'Worked on AI deployment agents, developer tooling, observability pipelines, and identity systems at one of India\'s largest fintech companies.',
    responsibilities: [
      'Secured an internal AI deployment agent used across 1000+ developers by engineering per-user authentication using GitHub OAuth with server-to-server token exchange, isolating credentials across concurrent agents and caching tokens in Redis with 30-day TTL to enforce per-user Spinnaker RBAC.',
      'Shipped an org-wide Python tool deployed on every developer machine that tracks AI-vs-human code authorship and per-prompt telemetry (tokens, cost, model), giving leadership first-ever ROI visibility into AI tooling spend across the org.',
      'Instrumented Prometheus funnel metrics across 6 pipeline stages in a FastAPI service, exposing per-stage ticket drop-offs on Grafana dashboards for 2 business-critical flows (settlements, refunds).',
      'Built bot-PR attribution mapping corporate email to GitHub identity via SAML SSO (GraphQL), backed by a 3-tier Redis→DB→API lookup, making every autonomous commit traceable to its triggering user.',
    ],
    technologies: ['Python', 'FastAPI', 'Redis', 'Prometheus', 'Grafana', 'GitHub OAuth', 'GraphQL', 'SAML SSO', 'Spinnaker', 'Docker'],
  },

  projects: [
    {
      name: 'Pixxel',
      type: 'AI-Powered Image Editor',
      description: 'Built an AI-powered image editing platform supporting background removal, generative fill, upscaling, and retouching using external AI models, with checkpoint-based autosave for improved workflow continuity.',
      techStack: ['Next.js', 'Convex', 'Clerk', 'ImageKit.io'],
      keyFeatures: ['AI background removal', 'Generative fill', 'AI upscaling', 'Smart retouching', 'Checkpoint-based autosave', '2-tier feature system (free/premium)'],
      impact: 'Cut redundant AI reprocessing by ~40% through result caching and request dedupe',
      github: 'https://github.com/nEgiAbhi1809/PIXXEL-AI-PHOTO-EDITOR',
    },
    {
      name: 'Vaulta',
      type: 'Production-Grade Authentication System',
      description: 'Engineered a multi-layered authentication pipeline using bcrypt hashing, JWT rotation, and Redis-backed single-session enforcement with NoSQL injection protection and OTP-based MFA.',
      techStack: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Redis'],
      keyFeatures: ['JWT rotation', 'Single-session enforcement', 'NoSQL injection protection', 'OTP-based MFA', 'Anti-CSRF tokens', 'Rate limiting', 'Secure cookies'],
      impact: 'Production-grade auth mitigating OWASP Top 10 exploit vectors',
      github: 'https://github.com/nEgiAbhi1809/Vaulta',
    },
    {
      name: 'Portfolio AI Chat',
      type: 'AI-Integrated Portfolio Website',
      description: 'This portfolio itself features an intelligent AI chatbot powered by Google Gemini that answers questions using structured knowledge retrieval with zero hallucination.',
      techStack: ['React', 'TypeScript', 'Google Gemini API', 'Framer Motion', 'Tailwind CSS'],
      keyFeatures: ['AI chatbot', 'Project explainer', 'Skill explorer', 'Natural language search', 'Recruiter mode'],
      impact: 'Live deployed AI application demonstrating LLM integration',
    },
  ],

  skills: {
    languages: ['C++', 'C', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Microservices', 'GraphQL'],
    frontend: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion'],
    databases: ['MongoDB', 'PostgreSQL', 'Redis', 'Convex'],
    devops: ['Git', 'GitHub', 'Docker', 'Prometheus', 'Grafana', 'Spinnaker', 'Postman'],
    ai: ['Generative AI', 'LLM APIs (Gemini)', 'Prompt Engineering', 'AI-Assisted Development', 'AI Agents'],
    csFundamentals: ['Data Structures & Algorithms', 'OOP', 'System Design', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },

  competitiveProgramming: {
    totalProblemsSolved: '1000+',
    platforms: [
      { name: 'Codeforces', title: 'Specialist', rating: '~1400', rank: 'Top 2000 / 30000+', percentile: 'Top 6.7%' },
      { name: 'LeetCode', title: 'Knight', rating: '1850+', rank: 'Peak 928 / 28000+', percentile: 'Top 3.3%' },
      { name: 'CodeChef', title: '3-Star', rating: '~1600', rank: 'Global 196 / 18000+', percentile: 'Top 1.1%' },
    ],
    contestAchievements: [
      '2nd place in Codezilla (national-level, 100+ teams)',
      '5th place in Coderush (intra-college, 20+ teams)',
    ],
  },

  leadership: {
    role: 'Core Member — House of Geeks (College Coding Club)',
    contributions: [
      'Mentored 10+ juniors in Competitive Programming',
      'Organized coding contests with 100+ participants',
      'Contributed to technical initiatives and events',
    ],
  },

  aiExperience: {
    summary: `## Slash (AI SDLC Orchestrator) - Deep Dive
Abhishek engineered critical security infrastructure *for* "Slash", Razorpay's internal AI orchestration platform (based on swe-agent).
Slash translates Slack/DevRev requests into draft GitHub PRs by running Claude Code as a subprocess inside an isolated sandbox.
While the platform itself existed, his crowning achievement was engineering its **Per-User Authentication & Authorization layer for the Spinnaker MCP**.
- **The Problem:** Slash used a shared app identity to deploy via Spinnaker, causing a severe privilege escalation risk (bypassing RBAC) and destroying the non-repudiation audit trail (every deploy looked like "Slash did it").
- **The Solution:** Abhishek engineered a 3-part per-user authentication system.
  1. **GitHub OAuth:** Added OAuth to Slash, storing tokens encrypted at rest via Fernet symmetric encryption.
  2. **Token Isolation:** Injected the user's token strictly at the Claude subprocess boundary. This prevented concurrent AI agents running on the same Kubernetes pod from leaking credentials to one another.
  3. **2-Hop Auth:** Implemented a system that exchanges the user's GitHub token for a Spinnaker JWT, injecting it into the Spinnaker MCP.

**Slash Execution Flows (How it handles repos):**
Slash decides its execution flow based entirely on the number of repositories requested in the Slack message.
- **0 Repos (Clean-slate):** A throwaway sandbox with nothing cloned. Used for Q&A and tech-spec review. Workspace is deleted after the run.
- **1 Repo (Single-repo):** Resolves the security sandbox from the repo URL. It enforces private-repo only and blocks main/master. It preserves the workspace after execution so follow-up Slack messages can resume the session.
- **2-10 Repos (Multi-repo):** Explicitly clones every repo upfront. Crucially, it runs a *single Claude process* that sees all cloned repos at once to coordinate cross-repo changes, rather than a fan-out of sub-agents. Workspace is deleted after.

**GitHub Token Management:**
Slash relies on GitHub App Installation Tokens. A common question is "Why refresh tokens every hour?"
Abhishek knows that GitHub imposes a strict, unextendable 1-hour TTL on installation tokens for security (limited blast radius). To handle this, Slash uses a proactive daemon that ticks every 5 minutes and rotates any token under 15 minutes of remaining life, serialized across all pods by a 30-second Redis NX lock.

## Pulse AI-% Code Authorship Tracker
Abhishek engineered "Pulse", an org-wide attribution engine deployed on developer laptops via a JAMF installer.
It uses native git pre/post-commit hooks to track AI vs. human code authorship at the line level.
He built the per-line attribution engine that resolves human edits over AI suggestions, which gave Razorpay leadership their first-ever ROI visibility into AI tooling spend and telemetry.`,
    areas: [
      'AI deployment agent authentication and security (Razorpay)',
      'AI code authorship tracking with per-prompt telemetry (Razorpay)',
      'AI-powered image editing (Pixxel — background removal, generative fill, upscaling)',
      'LLM API integration (Google Gemini for portfolio chatbot)',
      'Prompt engineering for grounded generation',
      'Structured outputs and knowledge retrieval',
    ],
  },
};

export const systemPrompt = `You are an AI assistant for Abhishek Singh Negi's portfolio website. You answer questions about Abhishek's experience, projects, skills, achievements, and background.

CRITICAL RULES:
1. ONLY answer from the provided knowledge base. NEVER make up information.
2. If you don't know the answer from the knowledge base, say "I don't have that specific information about Abhishek, but you can reach out to him directly at negiabhi1809@gmail.com"
3. Be professional, concise, and helpful.
4. When discussing technical topics, be specific about what Abhishek has actually worked on.
5. Highlight relevant achievements and metrics when applicable.
6. Keep responses under 200 words unless asked for detail.

KNOWLEDGE BASE:
${JSON.stringify(aiKnowledgeBase, null, 2)}`;

export const suggestedQuestions = [
  'Tell me about Abhishek\'s experience at Razorpay',
  'What AI projects has he built?',
  'What backend technologies does he know?',
  'Explain his competitive programming achievements',
  'What makes him a good fit for an AI engineering role?',
  'What did he build at Razorpay?',
  'Tell me about his skills and tech stack',
  'What is Vaulta and how does it work?',
];
