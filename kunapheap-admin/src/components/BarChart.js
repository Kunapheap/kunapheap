
import React from 'react'
import { Chart as ChartJS, BarElement,CategoryScale,LinearScale,Tooltip,Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const data = {
    labels: [
        "Mon",
        "Thues",
        "Wed",
        "Thurs",
        "Fri",
        "Sat",
        "Sun"
    ],
    datasets: [{
      label: 'Sell Statistic in this Week',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgb(30,144,255)'

      ],
      borderColor: [
        'rgb(30,144,255)'
      ],
      borderWidth: 1
    }]
  };
const BarChart = () => {
  return (
    <Bar data={data} />
  )
}

export default BarChart