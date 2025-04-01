"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// 注册Chart.js组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// 模拟财务数据
const financialData = {
  labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
  datasets: [
    {
      label: "收入",
      data: [95000, 88000, 105000, 128500, 0, 0],
      backgroundColor: "rgba(34, 197, 94, 0.5)",
      borderColor: "rgba(34, 197, 94, 1)",
      borderWidth: 1,
    },
    {
      label: "支出",
      data: [68000, 72000, 80000, 86450, 0, 0],
      backgroundColor: "rgba(239, 68, 68, 0.5)",
      borderColor: "rgba(239, 68, 68, 1)",
      borderWidth: 1,
    },
    {
      label: "利润",
      data: [27000, 16000, 25000, 42050, 0, 0],
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 1,
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

export function FinancialSummaryChart() {
  return (
    <div className="w-full h-full">
      <Bar data={financialData} options={options} />
    </div>
  );
}
