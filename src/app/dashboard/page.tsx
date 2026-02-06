"use client";

// import BarChart from "@/components/dashboard/BarChart";
// import CircularProgress from "@/components/dashboard/CircularProgress";
// import { dashboardData } from "@/components/data/dashboardData";
import styles from "./page.module.scss";
import { ProjectTimeline } from "@/components/dashboard/ProjectTimeline";
import ProgressStatus from "@/components/dashboard/ProgressStatus";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.contentGrid}>
        <ProjectTimeline />

        <ProgressStatus />
      </div>

      {/* <div className={styles.bottomGrid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Overall Compliance Score</h2>
          <div className={styles.complianceContent}>
            <CircularProgress
              value={dashboardData.overallCompliance.score}
              size={140}
              label={dashboardData.overallCompliance.label}
            />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            Upcoming Deadlines & Notifications
          </h2>
          <div className={styles.deadlinesList}>
            {dashboardData.upcomingDeadlines.map((item) => (
              <div key={item.id} className={styles.deadlineItem}>
                <div className={styles.userAvatar}>{item.user.charAt(0)}</div>
                <div className={styles.deadlineInfo}>
                  <p className={styles.deadlineTitle}>{item.title}</p>
                  <span className={styles.deadlineUser}>{item.user}</span>
                </div>
                <span className={styles.deadlineValue}>{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.chartWrapper}>
          <BarChart
            data={dashboardData.performance}
            title="CE Model Performance"
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Audit Readiness</h2>
          <div className={styles.auditContent}>
            <CircularProgress
              value={dashboardData.auditReadiness.score}
              size={120}
            />
            <div className={styles.auditStats}>
              <div className={styles.auditStat}>
                <span className={styles.auditLabel}>Passed</span>
                <span className={styles.auditValue}>
                  {dashboardData.auditReadiness.passed}
                </span>
              </div>
              <div className={styles.auditStat}>
                <span className={styles.auditLabel}>Failed</span>
                <span className={styles.auditValue}>
                  {dashboardData.auditReadiness.failed}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
