import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'razorpay',
    company: 'Razorpay',
    role: 'Software Development Engineer Intern',
    duration: 'Jan 2026 – Jun 2026',
    location: 'Bangalore, India',
    startDate: '2026-01',
    endDate: '2026-06',
    techStack: ['Python', 'FastAPI', 'Redis', 'Prometheus', 'Grafana', 'GitHub OAuth', 'GraphQL', 'Spinnaker', 'Docker'],
    responsibilities: [
      {
        title: 'AI Deployment Agent Security (Slash)',
        description: 'Secured Slash, an internal agentic orchestration platform serving 1000+ developers, by architecting per-user authentication. Integrated GitHub OAuth with Fernet symmetric encryption at rest and built a 2-hop token exchange (GitHub → Spinnaker MCP). Resolved a critical privilege escalation flaw by injecting credentials exclusively at the Claude subprocess boundary, guaranteeing task-level token isolation across concurrent pods.',
        tech: ['FastAPI', 'GitHub OAuth', 'Spinnaker MCP', 'RBAC', 'Python', 'Subprocess Isolation'],
        impact: 'Neutralized privilege escalation vectors and restored non-repudiation audit trails for autonomous AI deployments.',
      },
      {
        title: 'Pulse AI-% Code Authorship Tracker',
        description: 'Engineered an org-wide attribution engine deployed on developer laptops (via JAMF installer) that uses native git pre/post-commit hooks to track AI vs. human code authorship. Built the per-line attribution engine that resolves human edits over AI suggestions, providing leadership first-ever ROI visibility into AI tooling spend and telemetry.',
        tech: ['Python', 'Git Hooks', 'Telemetry', 'Shell Scripting'],
        impact: 'Delivered first-ever org-wide ROI visibility into AI tooling spend through per-line code attribution.',
      },
      {
        title: 'Observability Pipeline Instrumentation',
        description: 'Instrumented Prometheus funnel metrics across 6 pipeline stages in a FastAPI service, exposing per-stage ticket drop-offs on Grafana dashboards for 2 business-critical flows (settlements, refunds).',
        tech: ['Prometheus', 'Grafana', 'FastAPI'],
        impact: 'Exposed drop-offs across 6 pipeline stages for settlements & refunds',
      },
      {
        title: 'Bot-PR Attribution System',
        description: 'Built bot-PR attribution mapping corporate email to GitHub identity via SAML SSO (GraphQL), backed by a 3-tier Redis→DB→API lookup, making every autonomous commit traceable to its triggering user.',
        tech: ['GraphQL', 'SAML SSO', 'Redis', 'PostgreSQL'],
        impact: 'Made every autonomous commit traceable to its triggering user',
      },
    ],
  },
];
