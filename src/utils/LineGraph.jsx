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
} from "chart.js";
import { LINECHARTDATA } from "./constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
    const options = {
        scales: {
          y: {
            beginAtZero: false,
            min: 25, // Adjust this value to set the lower bound of the y-axis
            max: 30, // Adjust this value to set the upper bound of the y-axis
            ticks: {
              stepSize: 0.5, // Optional: define the interval between ticks
            },
          },
        },
        plugins: {
            legend: {
              display: false, // Disable the legend
            }
        }
      };
  return <Line className="w-full h-fit border border-gray-400 shadow-md rounded-lg bg-white py-2 px-5" options={options} data={LINECHARTDATA} />;
}

export default LineGraph;
