import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface Props {
  data: number[];
}

const LineChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: data.map((_, i) => i + 1),
    datasets: [
      {
        label: "Real-time Data",
        data,
        fill: true,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    animation: {
      duration: 500,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="w-full h-64">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
