"use client";

import styles from "./CircularProgress.module.scss";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

const CircularProgress = ({
  value,
  size = 120,
  strokeWidth = 10,
  label,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const getColor = () => {
    if (value >= 80) return "#22c55e";
    if (value >= 60) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className={styles.container}>
      <svg width={size} height={size} className={styles.svg}>
        <circle
          className={styles.circleBackground}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={styles.circleProgress}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ stroke: getColor() }}
        />
        <text
          x="50%"
          y="50%"
          className={styles.text}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {value}%
        </text>
      </svg>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default CircularProgress;
