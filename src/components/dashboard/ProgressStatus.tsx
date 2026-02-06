import React from "react";
import styles from "./ProgressStatus.module.scss";

const PROJECT_DATA = [
  {
    title: "Strategy And Planning",
    percent: "97.78%",
    isActive: true,
    subSections: [
      {
        name: "Digital Transformation",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
        ],
      },
      {
        name: "Digital Governance",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "ip" },
        ],
      },
      {
        name: "Enterprise Architecture",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
          { v: 4, s: "c" },
        ],
      },
    ],
  },
  {
    title: "Organization And Culture",
    percent: "70.83%",
    isHighlighted: true,
    subSections: [
      {
        name: "Digital Culture And Environment",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ip" },
          { v: 3, s: "c" },
        ],
      },
      {
        name: "Leadership Development",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
          { v: 4, s: "c" },
        ],
      },
      {
        name: "Skills & Capacity Building",
        dots: [
          { v: 1, s: "ip" },
          { v: 2, s: "ip" },
          { v: 3, s: "ip" },
        ],
      },
    ],
  },
  {
    title: "Operations And Execution",
    percent: "80.00%",
    subSections: [
      {
        name: "Business Processes",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ip" },
          { v: 3, s: "ip" },
          { v: 4, s: "c" },
        ],
      },
    ],
  },
  {
    title: "Business Continuity",
    percent: "90.59%",
    subSections: [
      {
        name: "Risk Management",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
          { v: 4, s: "c" },
          { v: 5, s: "c" },
        ],
      },
      {
        name: "Business Continuity",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ns" },
          { v: 3, s: "ns" },
          { v: 4, s: "c" },
          { v: 5, s: "c" },
          { v: 6, s: "ns" },
          { v: 7, s: "c" },
        ],
      },
    ],
  },
  {
    title: "Information Technology",
    percent: "75.00%",
    subSections: [
      {
        name: "Support Systems",
        dots: [
          { v: 1, s: "fu" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
          { v: 4, s: "c" },
          { v: 5, s: "c" },
        ],
      },
      {
        name: "IT Infrastructure",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
          { v: 4, s: "c" },
          { v: 5, s: "fu" },
          { v: 6, s: "c" },
        ],
      },
      {
        name: "Cloud Infrastructure",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "fu" },
        ],
      },
    ],
  },
  {
    title: "Comprehensive Governance",
    percent: "64.44%",
    subSections: [
      {
        name: "Governance Platforms",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
          { v: 4, s: "ns" },
          { v: 5, s: "c" },
          { v: 6, s: "c" },
          { v: 7, s: "c" },
          { v: 8, s: "c" },
          { v: 9, s: "c" },
        ],
      },
    ],
  },
  {
    title: "Channels And Services",
    percent: "100%",
    subSections: [
      {
        name: "Service Quality",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
        ],
      },
      {
        name: "Digital Channels",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "c" },
          { v: 4, s: "c" },
        ],
      },
    ],
  },
  {
    title: "Beneficiary Centralization",
    percent: "60.00%",
    subSections: [
      {
        name: "User Engagement",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ip" },
          { v: 3, s: "ip" },
          { v: 4, s: "ip" },
        ],
      },
      {
        name: "User Relationship",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ip" },
          { v: 3, s: "ip" },
        ],
      },
      {
        name: "User Experience",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ip" },
          { v: 3, s: "c" },
          { v: 4, s: "ip" },
          { v: 5, s: "c" },
        ],
      },
    ],
  },
  {
    title: "Government Data",
    percent: "87.50%",
    subSections: [
      {
        name: "Data Governance",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ip" },
          { v: 3, s: "ip" },
        ],
      },
      {
        name: "Data Usage & Availability",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "ip" },
          { v: 3, s: "ip" },
        ],
      },
      {
        name: "Open Data",
        dots: [
          { v: 1, s: "c" },
          { v: 2, s: "c" },
          { v: 3, s: "ip" },
        ],
      },
    ],
  },
  {
    title: "Research And Innovation",
    percent: "17.65%",
    subSections: [
      {
        name: "Innovation",
        dots: [
          { v: 1, s: "d" },
          { v: 2, s: "d" },
          { v: 3, s: "d" },
          { v: 4, s: "d" },
        ],
      },
      {
        name: "Creative Solutions",
        dots: [
          { v: 1, s: "ip" },
          { v: 2, s: "d" },
        ],
      },
    ],
  },
];

export default function ProgressStatus() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Progress Status</h1>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.ns}></span> Not Started
          </div>
          <div className={styles.legendItem}>
            <span className={styles.ip}></span> In Progress
          </div>
          <div className={styles.legendItem}>
            <span className={styles.c}></span> Completed
          </div>
          <div className={styles.legendItem}>
            <span className={styles.pu}></span> Partially Uploaded
          </div>
          <div className={styles.legendItem}>
            <span className={styles.fu}></span> Fully Uploaded
          </div>
          <div className={styles.legendItem}>
            <span className={styles.d}></span> Delayed
          </div>
        </div>
      </header>

      <div className={styles.board}>
        {PROJECT_DATA.map((column, idx) => (
          <div key={idx} className={styles.column}>
            <div
              className={`${styles.mainCard} ${column.isActive ? styles.active : ""} ${column.isHighlighted ? styles.highlight : ""}`}
            >
              <span className={styles.cardTitle}>{column.title}</span>
              <div className={styles.percentageBadge}>{column.percent}</div>
            </div>
            <div className={styles.subCardsContainer}>
              {column.subSections.map((sub, sIdx) => (
                <div key={sIdx} className={styles.subCard}>
                  <span className={styles.subTitle}>{sub.name}</span>
                  <div className={styles.dotsContainer}>
                    {sub.dots.map((dot, dIdx) => (
                      <div
                        key={dIdx}
                        className={`${styles.dot} ${styles[dot.s]}`}
                      >
                        {dot.v}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
