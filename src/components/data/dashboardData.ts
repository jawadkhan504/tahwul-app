export const dashboardData = {
  stats: {
    totalDocs: {
      value: "78.85%",
      change: "+3%",
      label: "Total Docs",
    },
    subCategory: {
      value: "9%",
      change: null,
      label: "Sub-Category",
    },
    policies: {
      value: "52",
      change: null,
      label: "Policies",
    },
    employees: {
      value: "386",
      change: null,
      label: "Employees",
    },
    compliance: {
      value: "832",
      change: null,
      label: "Compliance Score",
    },
    audits: {
      value: "258",
      change: null,
      label: "Audits",
    },
  },
  perspectives: [
    {
      id: 1,
      name: "Information Technology",
      progress: 85,
      status: "excellent",
    },
    { id: 2, name: "Security", progress: 78, status: "good" },
    { id: 3, name: "Operations", progress: 92, status: "excellent" },
    { id: 4, name: "Finance", progress: 65, status: "warning" },
    { id: 5, name: "Human Resources", progress: 88, status: "excellent" },
    { id: 6, name: "Legal & Compliance", progress: 71, status: "good" },
    { id: 7, name: "Risk Management", progress: 55, status: "warning" },
  ],
  timeline: {
    title: "Program Status",
    phases: [
      {
        name: "Preparation",
        startDate: "2023-01-01",
        endDate: "2023-03-31",
        status: "completed",
        milestones: [
          { name: "Requirements Analysis", status: "completed" },
          { name: "Team Formation", status: "completed" },
          { name: "Initial Assessment", status: "completed" },
        ],
      },
      {
        name: "Gap Analysis",
        startDate: "2023-04-01",
        endDate: "2023-06-30",
        status: "completed",
        milestones: [
          { name: "Current State Assessment", status: "completed" },
          { name: "Gap Identification", status: "completed" },
        ],
      },
      {
        name: "Implementation",
        startDate: "2023-07-01",
        endDate: "2024-12-31",
        status: "in-progress",
        milestones: [
          { name: "Phase 1 Rollout", status: "completed" },
          { name: "Phase 2 Rollout", status: "in-progress" },
          { name: "Phase 3 Planning", status: "pending" },
        ],
      },
      {
        name: "Audit & Review",
        startDate: "2025-01-01",
        endDate: "2025-06-30",
        status: "pending",
        milestones: [
          { name: "Internal Audit", status: "pending" },
          { name: "External Review", status: "pending" },
        ],
      },
    ],
  },
  upcomingDeadlines: [
    {
      id: 1,
      title: "Document 'Strong_financial' - Non Violation To Prov Element",
      user: "Metz Arnn",
      date: "98%",
      avatar: "/avatars/user1.jpg",
    },
    {
      id: 2,
      title: "Audit 'PLAN-Compliance-THK'",
      user: "Sarah M. Brown",
      date: "96%",
      avatar: "/avatars/user2.jpg",
    },
    {
      id: 3,
      title: "New 'Piecor Consultant THK' Was Assigned to Fresh Entries",
      user: "Blackwood & Mahmouf",
      date: "82%",
      avatar: "/avatars/user3.jpg",
    },
  ],
  auditReadiness: {
    score: 80,
    passed: 12,
    failed: 5,
  },
  performance: [
    { month: "Jan", value: 75 },
    { month: "Feb", value: 82 },
    { month: "Mar", value: 78 },
    { month: "Apr", value: 88 },
    { month: "May", value: 85 },
    { month: "Jun", value: 92 },
    { month: "Jul", value: 87 },
    { month: "Aug", value: 90 },
    { month: "Sep", value: 95 },
    { month: "Oct", value: 93 },
    { month: "Nov", value: 89 },
    { month: "Dec", value: 91 },
  ],
  overallCompliance: {
    score: 65,
    label: "Pass Threshold: 70%",
  },
};
