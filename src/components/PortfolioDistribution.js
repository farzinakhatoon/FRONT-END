import React, { useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement
);

function PortfolioDistribution({ distribution }) {
  const [chartType, setChartType] = useState("doughnut");

  if (!distribution) {
    return <div>Loading...</div>;
  }

  const data = {
    labels: Object.keys(distribution),
    datasets: [
      {
        label: "Portfolio Distribution",
        data: Object.values(distribution),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF5733",
          "#8E44AD",
          "#F39C12",
          "#16A085",
          "#E74C3C",
          "#3498DB",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF5733",
          "#8E44AD",
          "#F39C12",
          "#16A085",
          "#E74C3C",
          "#3498DB",
        ],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    cutout: "70%",
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            const total = tooltipItem.dataset.data.reduce(
              (acc, val) => acc + val,
              0
            );
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Stocks",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div className="portfolio-distribution">
      <h3>Portfolio Distribution</h3>
      <div>
        <button onClick={() => setChartType("doughnut")}>Doughnut Chart</button>
        <button onClick={() => setChartType("bar")}>Bar Chart</button>
      </div>
      {chartType === "doughnut" ? (
        <Doughnut data={data} options={doughnutOptions} />
      ) : (
        <Bar data={data} options={barOptions} />
      )}
    </div>
  );
}

export default PortfolioDistribution;
