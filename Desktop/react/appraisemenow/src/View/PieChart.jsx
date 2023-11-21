import React from "react";
import {pie} from "react-chartjs-2";

const PieChart = () => {
const data = {
    labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    datasets: [
      {
        data: [30, 40, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8EC5FC'],
      },
    ],
  };

};

export default PieChart;