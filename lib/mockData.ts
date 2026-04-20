export type DeployStatus = "success" | "failed" | "building" | "queued";
export type IncidentSeverity = "low" | "medium" | "high" | "critical";
export type EnvName = "production" | "staging" | "preview" | "development";

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: "healthy" | "degraded" | "down";
  environments: EnvName[];
  owner: string;
  team: string;
  lastUpdated: string;
  deploymentsThisWeek: number;
  uptime: string;
  framework: string;
}

export interface Deployment {
  id: string;
  projectId: string;
  projectName: string;
  commit: string;
  message: string;
  author: string;
  status: DeployStatus;
  environment: EnvName;
  duration: string;
  timestamp: string;
  branch: string;
}

export interface Incident {
  id: string;
  title: string;
  severity: IncidentSeverity;
  status: "open" | "investigating" | "resolved";
  project: string;
  openedAt: string;
  assignee: string;
}

export interface LogLine {
  id: string;
  timestamp: string;
  level: "info" | "warn" | "error" | "debug";
  service: string;
  message: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarInitials: string;
  status: "active" | "away" | "offline";
}

export interface EnvVar {
  key: string;
  value: string;
  environment: EnvName;
  updatedAt: string;
}

export const projects: Project[] = [
  {
    id: "p_01",
    name: "Checkout Service",
    slug: "checkout-service",
    description: "Handles cart, payment orchestration, and receipts.",
    status: "healthy",
    environments: ["production", "staging", "preview"],
    owner: "Maya Patel",
    team: "Payments",
    lastUpdated: "4 min ago",
    deploymentsThisWeek: 23,
    uptime: "99.98%",
    framework: "Node.js",
  },
  {
    id: "p_02",
    name: "Marketing Site",
    slug: "marketing-site",
    description: "Public-facing marketing pages and blog.",
    status: "healthy",
    environments: ["production", "preview"],
    owner: "Jordan Reyes",
    team: "Growth",
    lastUpdated: "1 hr ago",
    deploymentsThisWeek: 11,
    uptime: "99.99%",
    framework: "Next.js",
  },
  {
    id: "p_03",
    name: "Ingest Pipeline",
    slug: "ingest-pipeline",
    description: "Streaming ingestion and ETL jobs for analytics.",
    status: "degraded",
    environments: ["production", "staging", "development"],
    owner: "Priya Shah",
    team: "Data Platform",
    lastUpdated: "12 min ago",
    deploymentsThisWeek: 8,
    uptime: "99.71%",
    framework: "Python",
  },
  {
    id: "p_04",
    name: "Admin Dashboard",
    slug: "admin-dashboard",
    description: "Internal back office for customer support and ops.",
    status: "healthy",
    environments: ["production", "staging"],
    owner: "Chris O'Donnell",
    team: "Internal Tools",
    lastUpdated: "3 hr ago",
    deploymentsThisWeek: 5,
    uptime: "99.95%",
    framework: "React",
  },
  {
    id: "p_05",
    name: "Auth Gateway",
    slug: "auth-gateway",
    description: "OIDC, session management, and SSO connectors.",
    status: "healthy",
    environments: ["production", "staging", "preview"],
    owner: "Sam Kaur",
    team: "Platform",
    lastUpdated: "22 min ago",
    deploymentsThisWeek: 14,
    uptime: "99.97%",
    framework: "Go",
  },
  {
    id: "p_06",
    name: "Notifications",
    slug: "notifications",
    description: "Email, SMS, and in-app notification fan-out.",
    status: "down",
    environments: ["production", "staging"],
    owner: "Alex Chen",
    team: "Platform",
    lastUpdated: "2 min ago",
    deploymentsThisWeek: 6,
    uptime: "98.42%",
    framework: "Node.js",
  },
  {
    id: "p_07",
    name: "Billing API",
    slug: "billing-api",
    description: "Subscriptions, invoices, and tax calculations.",
    status: "healthy",
    environments: ["production", "staging"],
    owner: "Dana Ibrahim",
    team: "Payments",
    lastUpdated: "6 hr ago",
    deploymentsThisWeek: 3,
    uptime: "99.99%",
    framework: "Ruby",
  },
  {
    id: "p_08",
    name: "Mobile BFF",
    slug: "mobile-bff",
    description: "Backend-for-frontend for iOS and Android apps.",
    status: "healthy",
    environments: ["production", "staging", "preview", "development"],
    owner: "Rina Tanaka",
    team: "Mobile",
    lastUpdated: "32 min ago",
    deploymentsThisWeek: 17,
    uptime: "99.94%",
    framework: "TypeScript",
  },
];

export const deployments: Deployment[] = [
  {
    id: "d_1001",
    projectId: "p_01",
    projectName: "Checkout Service",
    commit: "a93f2c1",
    message: "fix: retry logic for failed Stripe webhooks",
    author: "Maya Patel",
    status: "success",
    environment: "production",
    duration: "1m 42s",
    timestamp: "4 minutes ago",
    branch: "main",
  },
  {
    id: "d_1002",
    projectId: "p_08",
    projectName: "Mobile BFF",
    commit: "7c1aa0b",
    message: "feat: add paginated feed endpoint",
    author: "Rina Tanaka",
    status: "success",
    environment: "staging",
    duration: "2m 03s",
    timestamp: "22 minutes ago",
    branch: "feature/feed-pagination",
  },
  {
    id: "d_1003",
    projectId: "p_03",
    projectName: "Ingest Pipeline",
    commit: "b02ee41",
    message: "chore: bump kafka client to 3.6",
    author: "Priya Shah",
    status: "building",
    environment: "staging",
    duration: "—",
    timestamp: "just now",
    branch: "chore/kafka-upgrade",
  },
  {
    id: "d_1004",
    projectId: "p_06",
    projectName: "Notifications",
    commit: "5a2b8e9",
    message: "fix: SMS provider timeout handling",
    author: "Alex Chen",
    status: "failed",
    environment: "production",
    duration: "0m 34s",
    timestamp: "2 minutes ago",
    branch: "hotfix/sms-timeout",
  },
  {
    id: "d_1005",
    projectId: "p_02",
    projectName: "Marketing Site",
    commit: "ff11a22",
    message: "content: update Q2 pricing page",
    author: "Jordan Reyes",
    status: "success",
    environment: "production",
    duration: "48s",
    timestamp: "1 hour ago",
    branch: "main",
  },
  {
    id: "d_1006",
    projectId: "p_05",
    projectName: "Auth Gateway",
    commit: "2d8e440",
    message: "refactor: split session store into module",
    author: "Sam Kaur",
    status: "success",
    environment: "preview",
    duration: "1m 12s",
    timestamp: "1 hour ago",
    branch: "refactor/session-store",
  },
  {
    id: "d_1007",
    projectId: "p_04",
    projectName: "Admin Dashboard",
    commit: "9a20c30",
    message: "feat: export customer segments to CSV",
    author: "Chris O'Donnell",
    status: "queued",
    environment: "staging",
    duration: "—",
    timestamp: "just now",
    branch: "feature/csv-export",
  },
  {
    id: "d_1008",
    projectId: "p_07",
    projectName: "Billing API",
    commit: "41ab7c2",
    message: "fix: proration rounding edge case",
    author: "Dana Ibrahim",
    status: "success",
    environment: "production",
    duration: "2m 58s",
    timestamp: "6 hours ago",
    branch: "main",
  },
];

export const incidents: Incident[] = [
  {
    id: "inc_441",
    title: "Elevated 5xx rate on Notifications API",
    severity: "high",
    status: "investigating",
    project: "Notifications",
    openedAt: "12 min ago",
    assignee: "Alex Chen",
  },
  {
    id: "inc_440",
    title: "Ingest lag above 60s on kafka-consumer-02",
    severity: "medium",
    status: "open",
    project: "Ingest Pipeline",
    openedAt: "38 min ago",
    assignee: "Priya Shah",
  },
  {
    id: "inc_439",
    title: "Checkout latency spike in eu-west-1",
    severity: "low",
    status: "resolved",
    project: "Checkout Service",
    openedAt: "2 hr ago",
    assignee: "Maya Patel",
  },
  {
    id: "inc_438",
    title: "Intermittent 401s from Auth Gateway",
    severity: "critical",
    status: "resolved",
    project: "Auth Gateway",
    openedAt: "yesterday",
    assignee: "Sam Kaur",
  },
];

export const logs: LogLine[] = [
  {
    id: "l1",
    timestamp: "10:42:18",
    level: "info",
    service: "checkout-service",
    message: "POST /api/checkout 200 — 142ms",
  },
  {
    id: "l2",
    timestamp: "10:42:19",
    level: "info",
    service: "auth-gateway",
    message: "Issued session token for user_8831",
  },
  {
    id: "l3",
    timestamp: "10:42:22",
    level: "warn",
    service: "notifications",
    message: "SMS provider returned 504 — retrying (1/3)",
  },
  {
    id: "l4",
    timestamp: "10:42:24",
    level: "error",
    service: "notifications",
    message: "SMS provider exhausted retries — dropping message msg_0020",
  },
  {
    id: "l5",
    timestamp: "10:42:26",
    level: "info",
    service: "billing-api",
    message: "Created invoice inv_4410 for customer cus_223",
  },
  {
    id: "l6",
    timestamp: "10:42:28",
    level: "debug",
    service: "ingest-pipeline",
    message: "Batch flushed: 1024 events in 812ms",
  },
  {
    id: "l7",
    timestamp: "10:42:30",
    level: "info",
    service: "mobile-bff",
    message: "GET /v2/feed 200 — 88ms",
  },
  {
    id: "l8",
    timestamp: "10:42:33",
    level: "warn",
    service: "ingest-pipeline",
    message: "Consumer lag at 42s on topic events.orders",
  },
];

export const team: TeamMember[] = [
  {
    id: "u1",
    name: "Maya Patel",
    email: "maya@deployflow.io",
    role: "Engineering Lead",
    avatarInitials: "MP",
    status: "active",
  },
  {
    id: "u2",
    name: "Jordan Reyes",
    email: "jordan@deployflow.io",
    role: "Growth Engineer",
    avatarInitials: "JR",
    status: "active",
  },
  {
    id: "u3",
    name: "Priya Shah",
    email: "priya@deployflow.io",
    role: "Data Platform",
    avatarInitials: "PS",
    status: "away",
  },
  {
    id: "u4",
    name: "Chris O'Donnell",
    email: "chris@deployflow.io",
    role: "Internal Tools",
    avatarInitials: "CO",
    status: "offline",
  },
  {
    id: "u5",
    name: "Sam Kaur",
    email: "sam@deployflow.io",
    role: "Platform Engineer",
    avatarInitials: "SK",
    status: "active",
  },
  {
    id: "u6",
    name: "Alex Chen",
    email: "alex@deployflow.io",
    role: "Platform Engineer",
    avatarInitials: "AC",
    status: "active",
  },
];

export const envVars: EnvVar[] = [
  { key: "DATABASE_URL", value: "postgres://***@db/prod", environment: "production", updatedAt: "3d ago" },
  { key: "STRIPE_SECRET_KEY", value: "sk_live_••••••••••••3Kq", environment: "production", updatedAt: "1w ago" },
  { key: "REDIS_URL", value: "redis://***@cache:6379", environment: "production", updatedAt: "2w ago" },
  { key: "DATABASE_URL", value: "postgres://***@db/staging", environment: "staging", updatedAt: "5d ago" },
  { key: "FEATURE_FLAG_SERVICE", value: "flagsmith-api-token", environment: "staging", updatedAt: "4d ago" },
  { key: "LOG_LEVEL", value: "debug", environment: "development", updatedAt: "yesterday" },
];

export const kpis = [
  { label: "Deployments today", value: "27", delta: "+12%", positive: true },
  { label: "Avg deploy time", value: "1m 48s", delta: "-6%", positive: true },
  { label: "Open incidents", value: "2", delta: "+1", positive: false },
  { label: "Uptime (30d)", value: "99.96%", delta: "+0.02%", positive: true },
];

export const environmentsOverview = [
  { name: "production", projects: 8, lastDeploy: "4 min ago", health: "Healthy" },
  { name: "staging", projects: 8, lastDeploy: "just now", health: "Healthy" },
  { name: "preview", projects: 4, lastDeploy: "1 hr ago", health: "Healthy" },
  { name: "development", projects: 2, lastDeploy: "yesterday", health: "Degraded" },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id || p.slug === id);
}

export function getDeploymentsForProject(projectId: string): Deployment[] {
  return deployments.filter((d) => d.projectId === projectId);
}
