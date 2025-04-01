"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// 注册Chart.js组件
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

// 模拟支出分类数据
const expenseData = {
  labels: ["采购支出", "工资薪酬", "租金物业", "水电费用", "运输物流", "市场营销", "设备维护", "办公用品", "差旅费用", "其他支出"],
  datasets: [
    {
      label: "支出金额",
      data: [42000, 25000, 8000, 2450, 3800, 1200, 5600, 1800, 900, 2700],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(199, 199, 199, 0.6)",
        "rgba(83, 102, 255, 0.6)",
        "rgba(78, 181, 104, 0.6)",
        "rgba(244, 144, 128, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(199, 199, 199, 1)",
        "rgba(83, 102, 255, 1)",
        "rgba(78, 181, 104, 1)",
        "rgba(244, 144, 128, 1)",
      ],
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
      position: "right" as const,
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          let label = context.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed !== null) {
            label += new Intl.NumberFormat("zh-CN", {
              style: "currency",
              currency: "CNY",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(context.parsed);
          }
          
          // 添加百分比
          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
          const percentage = Math.round((context.parsed * 100) / total);
          label += ` (${percentage}%)`;
          
          return label;
        },
      },
    },
  },
};

export function ExpenseCategoryChart() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-3/4 h-full">
        <Pie data={expenseData} options={options} />
      </div>
    </div>
  );
}
