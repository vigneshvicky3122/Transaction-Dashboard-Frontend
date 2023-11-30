import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function BarChart({ Data, isSearch, isMonth }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        min: 0,
        max: isMonth === "All" ? 20 : 5,
        ticks: {
          stepSize: isMonth === "All" ? 4 : 1,
        },
      },
    },
  };

  const labels = [
    "0-100",
    "101-200",
    "201-300",
    "301-400",
    "401-500",
    "501-600",
    "601-700",
    "701-800",
    "801-900",
    "901-above",
  ];
  function calculateRange() {
    let Range1 = 0;
    let Range2 = 0;
    let Range3 = 0;
    let Range4 = 0;
    let Range5 = 0;
    let Range6 = 0;
    let Range7 = 0;
    let Range8 = 0;
    let Range9 = 0;
    let Range10 = 0;
    for (let index = 0; index < Data.length; index++) {
      const element = Data[index].price;
      if (element <= 100 && element > 0) {
        Range1++;
      } else if (element >= 101 && element <= 200) {
        Range2++;
      } else if (element >= 201 && element <= 300) {
        Range3++;
      } else if (element >= 301 && element <= 400) {
        Range4++;
      } else if (element >= 401 && element <= 500) {
        Range5++;
      } else if (element >= 501 && element <= 600) {
        Range6++;
      } else if (element >= 601 && element <= 700) {
        Range7++;
      } else if (element >= 701 && element <= 800) {
        Range8++;
      } else if (element >= 801 && element <= 900) {
        Range9++;
      } else if (element >= 901) {
        Range10++;
      }
    }
    return [
      Range1,
      Range2,
      Range3,
      Range4,
      Range5,
      Range6,
      Range7,
      Range8,
      Range9,
      Range10,
    ];
  }
  const data = {
    labels,
    datasets: [
      {
        label: false,
        data: calculateRange(),
        backgroundColor: "rgba(0, 208, 255 ,0.5)",
        borderRadius: 5,
        borderSkipped: false,
        border: false,
      },
    ],
  };
  return (
    <div className="container my-5">
      <h2 className="mb-5">
        Bar Chart Stats - {isMonth}&nbsp;
        <sup className="fw-normal fs-6">(Select month name form dropdown)</sup>
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
