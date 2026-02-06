"use client";

import { useRef } from "react";
import styles from "./BarChart.module.scss";

interface ChartData {
  month: string;
  value: number;
}

interface BarChartProps {
  data: ChartData[];
  title: string;
}

const BarChart = ({ data, title }: BarChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chart} ref={chartRef}>
        {data.map((item, index) => (
          <div key={index} className={styles.bar}>
            <div
              className={styles.barFill}
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                animationDelay: `${index * 50}ms`,
              }}
            >
              <span className={styles.value}>{item.value}</span>
            </div>
            <span className={styles.label}>{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
