// ============================================================
// PORTFOLIO DATA — Single source of truth
// ============================================================

export const profile = {
  name: 'Azariah Jerish',
  title: 'Full Stack Engineer',
  tagline: 'I build backend systems that handle real money.',
  subTagline:
    'Specialising in payment infrastructure, trading platforms, and enterprise financial SaaS — Java, Go, Spring Boot, Angular.',
  location: 'Thoothukudi, Tamil Nadu',
  email: 'j.azariahjerish@gmail.com',
  phone: '+91 9442739513',
  github: 'azariahjerish',
  linkedin: 'azariah-jerish-0b63a9242',
  available: true,
} as const;

export const capabilities = [
  {
    id: 'cap-1',
    title: 'Payment Gateway Engineering',
    description:
      'Integrated Yes Bank, HDFC, and IDFC banking APIs into live trading platforms. Handled fund deposits, transaction verification, concurrent high-volume processing with Go routines, and structured audit logging for compliance.',
    tag: 'Go · REST · Banking APIs',
  },
  {
    id: 'cap-2',
    title: 'Trading & Exchange Systems',
    description:
      'Built real-time fund allocation services against NSE and MCX exchange APIs. Designed API workflows to process exchange responses, update client allocation records, and sustain high-throughput trading operations.',
    tag: 'Go · NSE · MCX · Docker',
  },
  {
    id: 'cap-3',
    title: 'Enterprise SaaS & Compliance',
    description:
      'Designed E-Way Bill integration for invoice logistics — bulk processing, audit logging, and external API compliance workflows. Built Accounts Payable / Receivable modules for an accounting platform comparable to Zoho Books.',
    tag: 'Spring Boot · Angular · RxJS',
  },
  {
    id: 'cap-4',
    title: 'Microservices API Design',
    description:
      'Architected REST and gRPC APIs across multiple Java Spring Boot microservices. Defined contracts between frontend micro-frontends and backend services, ensuring clear boundaries, versioning, and predictable failure modes.',
    tag: 'Java · Spring Boot · gRPC · REST',
  },
] as const;

export const projects = [
  {
    id: 'proj-1',
    name: 'Enterprise SaaS Platform — Zube Books',
    period: 'May 2025 – Present',
    company: 'Zubera',
    stack: ['Angular', 'Spring Boot', 'Java', 'Microservices', 'RxJS'],
    summary:
      'Full-featured accounting and financial management platform (Zoho Books-scale). Accounts Payable and Receivable, vendor management, bill creation, approval flows, E-Way Bill compliance, and payment processing — all wired through Angular micro-frontends backed by Java Spring Boot microservices.',
    highlights: [
      'Designed the E-Way Bill integration end-to-end: bulk invoice processing, audit trail, and external API error handling',
      'Architected Angular micro-frontend modules with a shared design token library for consistent enterprise UI',
      'Defined REST API contracts between frontend modules and backend microservices, eliminating integration drift',
    ],
    type: 'Enterprise SaaS',
  },
  {
    id: 'proj-2',
    name: 'Payment Gateway Integration — Trading Platform',
    period: 'May 2024 – Nov 2024',
    company: 'Fortune Capitals',
    stack: ['Go', 'REST APIs', 'Yes Bank', 'HDFC', 'IDFC', 'Docker'],
    summary:
      'Production payment infrastructure for a live stock trading platform. Connected Yes Bank, HDFC, and IDFC APIs to handle fund deposits and withdrawals. Built for concurrency — Go routines processed high-volume transactions without blocking user flows.',
    highlights: [
      'Handled concurrent transaction processing with Go routines, sustaining peak trading-hour throughput',
      'Implemented structured logging for full transaction traceability and debugging under production load',
      'Containerised services with Docker for consistent deployments across environments',
    ],
    type: 'FinTech / Payments',
  },
  {
    id: 'proj-3',
    name: 'Fund Allocation System — NSE / MCX',
    period: 'Dec 2024 – Apr 2025',
    company: 'Fortune Capitals',
    stack: ['Go', 'NSE API', 'MCX API', 'Docker', 'MySQL'],
    summary:
      'Backend service integrating NSE and MCX exchange APIs for real-time client fund allocation. Processed exchange responses, updated allocation records, and optimised database interactions to sustain high-volume trading operations.',
    highlights: [
      'Integrated live NSE and MCX APIs to update client fund positions in near real-time',
      'Optimised database queries to handle concurrent allocation updates without data races',
      'Deployed in Docker containers on the trading infrastructure for zero-downtime operation',
    ],
    type: 'Trading Infrastructure',
  },
] as const;

export interface TechGroup {
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  { label: 'Backend', items: ['Java', 'Spring Boot', 'Go', 'REST APIs', 'gRPC', 'Microservices'] },
  { label: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'Vue.js', 'Micro-frontend'] },
  { label: 'Databases', items: ['MySQL', 'MariaDB', 'PostgreSQL', 'MSSQL'] },
  { label: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Git', 'OneDev CI/CD'] },
  { label: 'Domain', items: ['Payment Gateways', 'NSE / MCX APIs', 'E-Way Bill', 'KRA Validation'] },
];

export const systemsContent = {
  intro:
    'Financial systems fail in predictable ways: race conditions on concurrent writes, silent data drift between services, compliance gaps under edge-case load. I design with these failure modes visible from day one.',
  principles: [
    {
      id: 'sys-1',
      title: 'Define contracts before code',
      body: 'API contracts between micro-frontends and microservices are the hardest things to change later. At Zubera, I defined them up-front with backend teams — versioned, documented, and locked before a single component was built.',
    },
    {
      id: 'sys-2',
      title: 'Concurrency is not free',
      body: "Go routines make concurrency easy to write but hard to reason about at scale. On the trading platform's payment gateway, I designed transaction processors to be stateless under concurrency — no shared mutable state, race-free by design.",
    },
    {
      id: 'sys-3',
      title: 'Audit trails are a system requirement',
      body: "In payments and compliance, 'it worked' isn't enough. Every write to a financial record emits a structured log entry. The E-Way Bill integration I built at Zubera captured every API call, response, and retry for regulatory audit.",
    },
  ],
};
