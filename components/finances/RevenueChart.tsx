"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// 注册Chart.js组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// 模拟收入趋势数据
const revenueData = {
  labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  datasets: [
    {
      label: "2025年收入",
      data: [95000, 88000, 105000, 128500, null, null, null, null, null, null, null, null],
      borderColor: "rgba(34, 197, 94, 1)",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      fill: true,
      tension: 0.3,
    },
    {
      label: "2024年收入",
      data: [82000, 78000, 92000, 110000, 105000, 118000, 125000, 130000, 115000, 108000, 120000, 135000],
      borderColor: "rgba(59, 130, 246, 1)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      fill: true,
      tension: 0.3,
    },
  ],
};

// 图表配置
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("zh-CN", {
              style: "currency",
              currency: "CNY",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value: any) {
          return new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY",
            notation: "compact",
            compactDisplay: "short",
          }).format(value);
        },
      },
    },
  },
};

export function RevenueChart() {
  return (
    <div className="w-full h-full">
      <Line data={revenueData} options={options} />
    </div>
  );
}
