"use client";

import styles from "./ProjectTimeline.module.scss";

const stats = [
  { label: "Overall Progress", value: "78.65%", icon: "📈" },
  { label: "Total Criteria", value: "95", icon: "📂" },
  { label: "Completed Criteria", value: "52", icon: "📁" },
  { label: "Evidence Documents", value: "386", icon: "📄" },
  { label: "Evidence (Completed)", value: "302", icon: "📝" },
  { label: "Uploaded To DGA", value: "258", icon: "🔄" },
];

const timelineSteps = [
  { date: "Mar 17", label: "Kickoff Workshop", status: "complete" },
  { date: "March 18", label: "Data Collection", status: "complete" },
  { date: "May 8", label: "Initial Phase", status: "pending" },
  { date: "May 9-July 12", label: "Verification", status: "pending" },
  { date: "July 13", label: "Completion Reviews", status: "pending" },
  { date: "August 21", label: "Cycle Conclusion", status: "pending" },
];

export const ProjectTimeline = () => {
  return (
    <div className={styles.container}>
      <section className={styles.timelineCard}>
        <div className={styles.header}>
          <h2>Project Timeline</h2>
          <select className={styles.dropdown}>
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.progressLine}>
            <div className={styles.filledLine} style={{ width: "33%" }}></div>
          </div>
          <div className={styles.steps}>
            {timelineSteps.map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={`${styles.dot} ${styles[step.status]}`}></div>
                <span className={styles.date}>{step.date}</span>
                <span className={styles.label}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.statsGrid}>
        {stats.map((item, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statInfo}>
              <span className={styles.val}>{item.value}</span>
              <span className={styles.icon}>{item.icon}</span>
            </div>
            <span className={styles.lab}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
