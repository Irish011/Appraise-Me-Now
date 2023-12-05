import React, { useEffect, useRef } from 'react';
import '../Styles/Piechart.css';

import Chart from 'chart.js/auto';

async function getData(){
  
}
const PieChart = () => {
  const chartRef = useRef(null);


  useEffect(() => {
    // Destroy the existing chart before rendering a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart
    const ctx = document.getElementById('myPieChart');
    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Task Assigned', 'Task Completed', 'Task Pending'],
        datasets: [
          {
            data: [30, 40, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
    });
  }, []);

  return (
    <div className='piechart'>
      <h2>Pie Chart</h2>
      <canvas id="myPieChart" width="100" height="100"></canvas>
    </div>
  );
};

export default PieChart;
